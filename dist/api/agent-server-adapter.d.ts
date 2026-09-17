import type { HookConfig } from "@openhands/typescript-client";
import { AgentKind, Settings, SettingsValue } from "#/types/settings";
import { GetHooksResponse, PluginSpec, AppConversation, AppConversationPage, RuntimeConversationStats } from "./conversation-service/agent-server-conversation-service.types";
import { type SkillEnablement } from "#/utils/skill-enablement";
import { type ClientToolSpec } from "./canvas-ui-client-tool";
export interface DirectConversationInfo {
    id: string;
    title?: string | null;
    created_at: string;
    updated_at: string;
    execution_status?: string | null;
    /** Cloud-only sandbox lifecycle state. Omitted / null for local agent-server conversations. */
    sandbox_status?: string | null;
    metrics?: {
        accumulated_cost?: number | null;
        max_budget_per_task?: number | null;
        accumulated_token_usage?: {
            prompt_tokens?: number;
            completion_tokens?: number;
            cache_read_tokens?: number;
            cache_write_tokens?: number;
            context_window?: number;
            per_turn_token?: number;
        } | null;
    } | null;
    /**
     * Raw per-usage-id LLM stats from the agent-server. Search/list responses
     * often carry real usage here even when `metrics` above comes back unset;
     * {@link toAppConversation} combines this as a fallback in that case.
     */
    stats?: RuntimeConversationStats | null;
    agent?: {
        /**
         * Pydantic discriminator from the SDK union: ``"ACPAgent"`` for ACP CLI
         * subprocesses (model lives on the subprocess via ``acp_model``),
         * ``"Agent"`` for direct litellm. Read by {@link toAppConversation}.
         */
        kind?: string | null;
        acp_model?: string | null;
        /**
         * ACP CLI identity (``claude-code`` / ``codex`` / ``gemini-cli``) from the
         * SDK's ``ACPAgent.acp_server`` (#3692). Preferred fallback when the
         * ``acpserver`` tag is absent — e.g. a profile launch doesn't stamp the tag
         * client-side and the server may not repopulate it. Read by {@link toAppConversation}.
         */
        acp_server?: string | null;
        llm?: {
            model?: string | null;
        } | null;
    } | null;
    current_model_id?: string | null;
    current_model_name?: string | null;
    workspace?: {
        working_dir?: string | null;
    } | null;
    /**
     * Arbitrary string-keyed conversation tags surfaced by the agent-server
     * (see ``ConversationInfo.tags``). Canvas only consumes one key today —
     * ``ACP_SERVER_TAG_KEY`` ("acpserver") — but the field is typed as a
     * generic record so future readers don't need another wire-shape change.
     * Keys are constrained to ``^[a-z0-9]+$`` by the agent-server validator;
     * values are opaque strings.
     */
    tags?: Record<string, string> | null;
    launched_agent_profile?: {
        agent_profile_id: string;
        revision: number;
    } | null;
    /**
     * Server-owned, derived from the catalog's ``parent_conversation_id`` link
     * (agent-server >= 1.37.1, SDK #4188) — a conversation started with a
     * parent is discoverable here on any browser, which is what makes the
     * local planner's relationship server state rather than a browser-local
     * hint. Absent on older agent-servers and on the cloud wire shape.
     */
    sub_conversation_ids?: string[] | null;
}
/**
 * Shape of the runtime services info served by Agent Canvas backends in
 * `/server_info.runtime_services`. All URLs are written from the agent's point of
 * view, not the browser's. The block is rendered into the agent's system prompt
 * via `AgentContext.system_message_suffix` so the agent knows what's reachable
 * from inside its sandbox without having to probe.
 */
export interface RuntimeServicesInfo {
    mode?: string;
    agent_host_alias?: string;
    services?: {
        agent_server?: {
            description?: string;
            url_from_agent?: string;
        };
        ingress?: {
            description?: string;
            url_from_agent?: string;
        };
        frontend?: {
            kind?: "vite" | "static";
            description?: string;
            url_from_agent?: string;
        };
        vite?: {
            description?: string;
            url_from_agent?: string;
        };
        automation?: {
            description?: string;
            url_from_agent?: string;
            api_prefix?: string;
            docs_url?: string;
            openapi_url?: string;
            auth_env_var?: string;
        };
    };
}
export declare function parseRuntimeServicesInfo(value: unknown): RuntimeServicesInfo | null;
export declare function fetchBackendRuntimeServicesInfo(): Promise<RuntimeServicesInfo | null>;
/**
 * Return the deployment mode from the runtime services info, e.g. "docker",
 * "dev:automation", etc. Returns `null` when no runtime info is supplied.
 */
export declare function getDeploymentMode(runtimeServicesInfo?: RuntimeServicesInfo | null): string | null;
/**
 * Render the runtime services info into a markdown block suitable for
 * appending to the system prompt via `AgentContext.system_message_suffix`.
 *
 * Returns `undefined` when no runtime info is available, so callers can safely
 * omit the field when the selected backend does not advertise runtime services.
 */
export declare function buildRuntimeServicesSystemSuffix(runtimeServicesInfo?: RuntimeServicesInfo | null): string | undefined;
export declare function toConversationUrl(conversationId: string): string;
export declare function getDefaultConversationTitle(conversationId: string): string;
export declare function toAppConversation(info: DirectConversationInfo): AppConversation;
export declare function toConversationPage(data: {
    items: DirectConversationInfo[];
    next_page_id?: string | null;
}): AppConversationPage;
type SettingsRecord = Record<string, unknown>;
interface AgentToolSpec {
    name: string;
    params: SettingsRecord;
}
type AgentSettingsPayload = SettingsRecord & {
    llm?: SettingsRecord;
    agent_context: SettingsRecord;
    tools?: AgentToolSpec[];
};
interface LocalWorkspacePayload {
    kind: "LocalWorkspace";
    working_dir: string;
}
interface InitialMessagePayload {
    role: "user";
    content: Array<{
        type: "text";
        text: string;
    }>;
    run: true;
}
export declare const ACP_SERVER_TAG_KEY = "acpserver";
export declare const CLIENT_SOURCE_TAG_KEY = "clientsource";
export declare const AGENT_CANVAS_SOURCE = "agentcanvas";
export declare const AUTOMATION_TRIGGER_TAG_KEY = "automationtrigger";
export declare const AUTOMATION_ID_TAG_KEY = "automationid";
export declare const AUTOMATION_NAME_TAG_KEY = "automationname";
export declare const AUTOMATION_RUN_ID_TAG_KEY = "automationrunid";
/**
 * Tag keys stamped on conversations created by automation runs (see the SDK's
 * `RemoteWorkspace.default_conversation_tags`). The presence of any of these
 * marks a conversation as automation-born.
 */
export declare const AUTOMATION_TAG_KEYS: readonly string[];
/**
 * Conversation tag keys that must not appear as generic chips / hovercard
 * rows. Each is either already surfaced by a first-class UI source or is
 * internal routing data:
 * - ``acpserver`` → ACP provider chip
 * - ``clientsource`` → telemetry attribution
 * - ``title`` → conversation card heading
 * - git / repo / branch / workspace stamps → repo-branch metadata + directory
 *   footer / hovercard rows (``selected_repository``, ``selected_branch``,
 *   ``git_provider``, ``workspace.working_dir``)
 * - the automation family (``automationtrigger`` / ``automationid`` /
 *   ``automationname`` / ``automationrunid``) → provenance the SDK stamps at
 *   creation; the conversation panel's automation filter is its first-class
 *   UI source. The tag surface is user organization data, so machine stamps
 *   stay out of it — and users can't edit or spoof automation classification.
 * - ``localplannerparent`` → internal routing for the local planner; already
 *   surfaced by the hidden-from-list planner filter
 */
export declare const RESERVED_CONVERSATION_TAG_KEYS: ReadonlySet<string>;
/**
 * High-signal tag keys shown first in the chip row (before A–Z). Automations
 * often stamp ``origin``; remaining free-form tags sort alphabetically.
 */
export declare const PRIORITY_CONVERSATION_TAG_KEYS: readonly string[];
/**
 * User-facing subset of a conversation's server-side tags: everything except
 * {@link RESERVED_CONVERSATION_TAG_KEYS}, as stable ``[key, value]`` entries.
 * Priority keys come first (in {@link PRIORITY_CONVERSATION_TAG_KEYS} order);
 * the rest sort A–Z so chip order doesn't shuffle between refetches.
 */
export declare function getDisplayConversationTags(tags: Record<string, string> | null | undefined): Array<[string, string]>;
interface LookupSecret {
    kind: "LookupSecret";
    url: string;
    headers?: Record<string, string>;
    description?: string;
}
/** A custom secret's public identity — name + optional description, no value. */
type CustomSecretInput = {
    name: string;
    description?: string;
};
type StartConversationPayloadBase = Record<string, unknown> & {
    workspace: LocalWorkspacePayload;
    confirmation_policy: SettingsRecord;
    security_analyzer?: SettingsRecord;
    initial_message?: InitialMessagePayload;
    max_iterations: number;
    stuck_detection: true;
    autotitle: boolean;
    title_llm_profile?: string;
    worktree: boolean;
    secrets_encrypted?: true;
    conversation_id?: string;
    parent_conversation_id?: string;
    secrets?: Record<string, LookupSecret>;
    tags?: Record<string, string>;
    client_tools: ClientToolSpec[];
    tool_module_qualnames?: Record<string, string>;
};
type AgentSettingsStartConversationPayload = StartConversationPayloadBase & {
    agent_settings?: AgentSettingsPayload;
    agent_profile_id?: string;
    agent?: never;
};
type RawAgentStartConversationPayload = StartConversationPayloadBase & {
    agent: SettingsRecord;
    agent_settings?: never;
    agent_profile_id?: never;
    parent_conversation_id?: string;
};
export interface StartConversationOptions {
    settings: Settings;
    query?: string;
    conversationInstructions?: string;
    plugins?: PluginSpec[];
    conversationId?: string;
    parentConversationId?: string;
    workingDir?: string;
    worktree?: boolean;
    encryptedAgentSettings?: Record<string, SettingsValue>;
    encryptedConversationSettings?: Record<string, SettingsValue>;
    secretsEncrypted?: boolean;
    customSecrets?: CustomSecretInput[];
    agentProfileId?: string;
    agentProfileKind?: AgentKind;
    titleLlmProfile?: string;
    runtimeServicesInfo?: RuntimeServicesInfo | null;
    workspaceHookConfig?: HookConfig | null;
}
export declare function buildStartConversationRequest(options: StartConversationOptions): AgentSettingsStartConversationPayload;
export declare function buildStartPlanningConversationRequest(options: {
    encryptedAgentSettings: Record<string, SettingsValue>;
    workingDir: string;
    parentConversationId: string;
    initialMessage?: string;
    secretsEncrypted?: boolean;
    customSecrets?: CustomSecretInput[];
    /** Mirrors the parent's configured `conversation_settings.max_iterations` — see DEFAULT_MAX_ITERATIONS. */
    maxIterations?: number;
    /** Mirrors the code agent's skill filtering — see buildConfiguredOpenHandsAgentSettings. */
    skillEnablement?: SkillEnablement;
}): RawAgentStartConversationPayload;
export declare function buildStartPlanningConversationRequestWithEncryptedSettings(options: {
    workingDir: string;
    parentConversationId: string;
    /**
     * The parent conversation's current LLM profile (`AppConversation.active_profile`,
     * tracking `/model` and `SwitchLLMTool`). Takes priority over
     * `parentAgentProfileId` so a model switch on the parent carries over to a
     * planner created afterward, without a *different* conversation's global
     * profile activation repointing it.
     */
    parentActiveProfileName?: string | null;
    /**
     * `launched_agent_profile.agent_profile_id` of the parent, when started
     * from an AgentProfile. Fallback for when `parentActiveProfileName` can't
     * be resolved (e.g. an ACP parent, whose `active_profile` is a stale
     * launch-time snapshot rather than anything the ACP agent itself runs).
     */
    parentAgentProfileId?: string | null;
    initialMessage?: string;
}): Promise<RawAgentStartConversationPayload>;
export declare const SUBSCRIPTION_LOGIN_REQUIRED_ERROR = "Connect your ChatGPT subscription before starting a conversation with this LLM profile.";
/**
 * Throws if a ChatGPT subscription LLM profile is not connected.
 * Called before conversation creation and LLM profile switch only — not on
 * subsequent message sends or conversation resume. The agent-server must handle
 * mid-conversation token expiry gracefully.
 */
export declare function assertSubscriptionAuthReady(agentSettings: Record<string, unknown>): Promise<void>;
export declare function buildStartConversationRequestWithEncryptedSettings(options: {
    settings: Settings;
    query?: string;
    conversationInstructions?: string;
    plugins?: PluginSpec[];
    conversationId?: string;
    parentConversationId?: string;
    workingDir?: string;
    /** Workspace root for the hooks lookup, not the per-conversation `workingDir` (#16907). */
    hooksProjectDir?: string;
    worktree?: boolean;
    agentProfileId?: string;
    agentProfileKind?: AgentKind;
    titleLlmProfile?: string;
}): Promise<Record<string, unknown>>;
export declare function emptyHooksResponse(): GetHooksResponse;
export {};
