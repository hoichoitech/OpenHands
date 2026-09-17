import { type VSCodeStatusResponse } from "@openhands/typescript-client";
import { AgentKind } from "#/types/settings";
import type { ConversationRuntimeContext } from "#/api/conversation-file-upload.api";
import { DirectConversationInfo } from "../agent-server-adapter";
import { GetVSCodeUrlResponse } from "../open-hands.types";
import { ConversationMetadata, type WorkspaceMode } from "../conversation-metadata-store";
import type { GetHooksResponse, PluginSpec, AppConversation, AppConversationPage, AppConversationStartTask, RuntimeConversationInfo, SendMessageRequest, SendMessageResponse } from "./agent-server-conversation-service.types";
/**
 * Options for {@link AgentServerConversationService.createConversation}.
 */
export interface CreateConversationOptions {
    initialUserMsg?: string;
    conversationInstructions?: string;
    plugins?: PluginSpec[];
    metadata?: ConversationMetadata | null;
    workingDirOverride?: string;
    workspaceMode?: WorkspaceMode;
    parentConversationId?: string;
    agentType?: "default" | "plan";
    sandboxId?: string;
    agentProfileId?: string;
    agentProfileKind?: AgentKind;
}
declare class AgentServerConversationService {
    static sendMessage(conversationId: string, message: SendMessageRequest, runtime?: ConversationRuntimeContext | null): Promise<SendMessageResponse>;
    static createConversation(options?: CreateConversationOptions): Promise<AppConversationStartTask>;
    static createLocalPlanningConversation(parentConversationId: string, initialMessage?: string): Promise<AppConversation>;
    /**
     * Ids of the conversations owned by `parentConversationId` on a local
     * backend — today that means its planner helper, the only child Canvas
     * creates locally.
     *
     * `sub_conversation_ids` is the generic server-derived child list, so each
     * child is kept only if it's tagged `plannerparent` for this parent —
     * otherwise deleting the parent would also delete an unrelated non-planner
     * child (e.g. a delegated sub-agent). The stored metadata hint is merged in
     * for agent-servers older than 1.37.1, which report no children at all.
     */
    static getLocalPlanningConversationIds(parentConversationId: string): Promise<string[]>;
    static getStartTask(taskId: string): Promise<AppConversationStartTask | null>;
    static getVSCodeUrl(conversationId: string, conversationUrl: string | null | undefined, sessionApiKey?: string | null): Promise<GetVSCodeUrlResponse>;
    /**
     * Read the editor's capability state from the agent-server.
     *
     * `/api/vscode/status` answers 200 with `enabled: false` when the
     * deployment set `enable_vscode: false`, which distinguishes "this
     * deployment offers no editor" from a transport, auth, or server
     * failure — `/api/vscode/url` answers 503 for the former and so
     * cannot be told apart from the latter.
     */
    static getVSCodeStatus(conversationUrl: string | null | undefined, sessionApiKey?: string | null): Promise<VSCodeStatusResponse>;
    static resolveConversationWorkingDir(conversationId: string): Promise<string>;
    static batchGetAppConversations(ids: string[]): Promise<(AppConversation | null)[]>;
    static updateConversationPublicFlag(conversationId: string, isPublic: boolean): Promise<AppConversation>;
    static updateConversationRepository(conversationId: string, repository: string | null, branch?: string | null, gitProvider?: string | null): Promise<AppConversation>;
    static readConversationFile(conversationId: string, filePath?: string): Promise<string>;
    static downloadConversation(conversationId: string): Promise<Blob>;
    static getHooks(conversationId: string): Promise<GetHooksResponse>;
    static getRuntimeConversation(conversationId: string, conversationUrl: string | null | undefined, sessionApiKey?: string | null): Promise<RuntimeConversationInfo>;
    /**
     * Force condensation ("compact") of the conversation history via
     * `POST /api/conversations/{id}/condense`. Routed the same way as
     * {@link sendMessage}: through the cloud proxy at the conversation's own
     * runtime host for cloud backends, directly against that runtime otherwise.
     */
    static condenseConversation(conversationId: string, conversationUrl: string | null | undefined, sessionApiKey?: string | null): Promise<void>;
    static searchConversations(limit?: number, pageId?: string): Promise<AppConversationPage>;
    static deleteConversation(conversationId: string): Promise<void>;
    static updateConversationTitle(conversationId: string, title: string): Promise<AppConversation>;
    /**
     * Replaces the conversation's complete server-side tag map (the PATCH is
     * replace-all, so callers must merge user edits with any reserved/internal
     * keys before calling). Mirrors `updateConversationTitle`; local
     * agent-server conversations only — Cloud conversations don't carry tags.
     */
    static updateConversationTags(conversationId: string, tags: Record<string, string>): Promise<AppConversation>;
    /**
     * Forks a conversation, copying event history up to and including
     * `fromEventId`. Local agent-server only; needs agent-server >= 1.31.0 for
     * `from_event_id` (older backends copy the whole conversation).
     */
    static forkConversation(sourceConversationId: string, fromEventId: string, title?: string): Promise<DirectConversationInfo>;
    /**
     * Returns an event's `parent_id` (the fork point for branching *before* it),
     * or undefined at the root. Uses the single-event endpoint because the events
     * *search* API omits `parent_id`.
     */
    static getEventParentId(conversationId: string, eventId: string): Promise<string | undefined>;
    /**
     * Switches the LLM profile for the running conversation when one is open
     * (POST /switch_profile — per-conversation swap, doesn't change the user's
     * default profile). When called without a conversationId (home page),
     * falls back to POST /activate so the next conversation created picks up
     * the chosen profile.
     *
     * The per-conversation endpoint accepts only the profile name, so the UI does
     * not need to fetch or forward profile secrets. That keeps switching working
     * even when the agent server has no OH_SECRET_KEY for encrypted secret export.
     *
     * Cloud backends route to the app-server's per-conversation
     * `/switch_profile`, which owns the profiles and resolves the swap
     * server-side (base_url/api_key fixups, usage_id derivation, then the
     * agent-server's switch_llm) — so the client only forwards the profile name,
     * mirroring {@link switchAcpModel}.
     */
    static switchProfile(conversationId: string | null, profileName: string): Promise<void>;
    /**
     * Switches the model of a running ACP conversation in place (POST
     * /switch_acp_model — the ACP analog of {@link switchProfile}'s /switch_profile).
     * The agent-server calls the ACP wrapper's ``session/set_model`` on the live
     * session, preserving context. Mirrors {@link switchProfile}'s
     * local-backend-only guard and per-conversation ConversationClient call.
     *
     * Works on a created-but-not-yet-run conversation too: the agent-server
     * treats a pre-first-run switch as a persist-only deferral (the model is
     * mirrored into the conversation's stored agent and applied when the session
     * starts). The home/no-conversation default is persisted via the active ACP
     * profile / Settings instead (see ``use-switch-acp-model``).
     */
    static switchAcpModel(conversationId: string, model: string): Promise<void>;
}
export default AgentServerConversationService;
