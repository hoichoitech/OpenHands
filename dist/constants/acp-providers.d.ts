import { I18nKey } from "#/i18n/declaration";
export type ACPProviderIcon = "claude-code" | "codex" | "gemini" | "cli-generic";
export declare const ACP_PROVIDER_FALLBACK_ICON: ACPProviderIcon;
export declare const ACP_MANAGED_SENTINEL = "acp-managed";
/**
 * Single source of truth for resolving the model string to surface for an
 * ACP conversation/settings context. Consumed by the conversation adapter
 * (chip text), the conversation-creation path (concrete ``acp_model``
 * payload), the Settings → Agent form (initial value), and the chat-input
 * model label.
 *
 * Precedence: SDK runtime fields → user-configured ``acp_model`` →
 * legacy ``agent.llm.model`` → provider default (when ``providerDefault``
 * is passed). Pass ``providerDefault`` only on surfaces that should
 * silently substitute the registry default; omit it for the conversation
 * chip, which must distinguish "no concrete model" from "default".
 */
export declare function resolveEffectiveAcpModel(inputs: {
    runtimeName?: string | null;
    runtimeId?: string | null;
    configured?: string | null;
    sdkLlm?: string | null;
    providerDefault?: string | null;
}): string | null;
/**
 * Shape of a built-in ACP (Agent Client Protocol) provider as Canvas consumes
 * it. The data fields (display name, launch command, model picker + default)
 * are sourced at module load from ``@openhands/typescript-client``'s ACP
 * registry — the generated mirror of the Python source of truth
 * ``openhands.sdk.settings.acp_providers``. This config only adds the
 * Canvas-specific UI fields ({@link ACPProviderConfig.icon} +
 * {@link ACPProviderConfig.description_key}); see {@link ACP_PROVIDER_UI}.
 */
export interface ACPProviderConfig {
    /** Stable registry key, also stored on conversations as ``tags.acpserver``. */
    key: string;
    /** Human-readable name shown in dropdowns and conversation chips. */
    display_name: string;
    /**
     * Tokens passed to the agent-server as ``acp_command`` when this preset
     * is picked. Each entry must be a real ACP-protocol stdio server — the
     * SDK validates this against the {@link ACPProviderConfig.key}.
     *
     * NB: ``npx -y @openai/codex acp`` looks plausible but is **not** an
     * ACP server — the codex CLI has no ``acp`` subcommand and exits with
     * ``Error: stdin is not a terminal`` when spawned without a TTY, which
     * silently deadlocks the agent-server's ACP handshake. Use
     * ``@agentclientprotocol/codex-acp`` (the codex ACP wrapper) instead.
     */
    default_command: string[];
    /**
     * Suggested ACP model IDs for the provider's picker, sourced from the
     * typescript-client registry. Not authoritative access checks; users can
     * still enter a custom override in Settings -> Agent.
     */
    available_models?: ACPModelOption[];
    /** Model ID preselected for built-in providers so Canvas never saves blank. */
    default_model?: string;
    /**
     * i18n key for the one-line provider description rendered under the
     * onboarding tile. Stored on the registry so adding a new ACP
     * provider only requires editing this file (not the onboarding tile
     * list separately).
     */
    description_key: I18nKey;
    /**
     * Serializable icon key used by UI surfaces that render provider
     * choices. Kept as a string so the SDK mirror check can continue to
     * parse this registry without importing React components.
     */
    icon?: ACPProviderIcon;
}
export interface ACPModelOption {
    /** Exact model ID sent as ``acp_model``. */
    id: string;
    /** Human-readable label shown in Settings -> Agent. */
    label: string;
}
/**
 * The ACP harnesses Canvas surfaces — its own declaration of what it offers,
 * independent of what the SDK registry happens to contain. Registering a
 * harness upstream is a no-op here: nothing in Canvas enumerates the registry,
 * so there is no list to keep in step with it.
 */
export declare const SURFACED_ACP_PROVIDERS: readonly string[];
export declare const ACP_PROVIDERS: ACPProviderConfig[];
export declare const ACP_CUSTOM_PRESET_KEY = "custom";
/**
 * A credential an ACP provider authenticates with, surfaced during onboarding
 * so the user can populate it without leaving the flow. The {@link name} is
 * both the global-secret name and the environment variable the agent-server
 * exports into the ACP subprocess — keeping them identical is what makes a
 * saved secret actually reach the provider CLI.
 */
export interface ACPProviderSecretField {
    /** Secret name and env var (e.g. ``"ANTHROPIC_API_KEY"``). Must satisfy the
     * secret-name pattern ``^[a-zA-Z][a-zA-Z0-9_]{0,63}$``. */
    name: string;
    /** Render as a masked password input (API keys, OAuth tokens, credential
     * blobs) rather than a plain-text input (base URLs, project IDs). Doubles as
     * "this is an actual credential": when the onboarding step is required, only
     * a ``secret`` field satisfies it — a base URL or GCP scalar alone can't
     * authenticate anything. */
    secret?: boolean;
    /** Render as a multi-line textarea rather than a single-line input. Set for
     * file-content credentials the user pastes verbatim (Codex ``auth.json``,
     * Gemini Vertex service-account / ADC JSON) — the ones the SDK materialises
     * to disk, which a cloud backend can't consume yet (agent-canvas#1016). */
    multiline?: boolean;
    /** i18n key for the one-line helper text under the field. */
    hint_key: I18nKey;
    /**
     * Interpolation values for {@link hint_key} (e.g. ``{ file: "~/.codex/auth.json" }``
     * for the shared "paste the file contents" hint). Omitted for hints that
     * take no parameters.
     */
    hint_values?: Record<string, string>;
}
/**
 * The ``[credential, conflicting]`` pairs the user currently has set for
 * ``providerKey``. ``hasValue`` should cover both typed and already-saved
 * values, since a previously saved secret conflicts just the same.
 */
export declare function getAcpCredentialConflicts(key: string | null | undefined, hasValue: (name: string) => boolean): Array<[string, string]>;
/**
 * Vertex AI-safe ``acp_model`` for Gemini.
 *
 * Left unset, gemini-cli falls back to its own internal default — a preview
 * flash model that 404s on Google Cloud projects without preview access. And a
 * ``*-flash`` id is no safer to pin: gemini-cli re-resolves flash ids at
 * generation time to its *current default* flash (software-agent-sdk#3532), so
 * a pinned ``gemini-2.5-flash`` still ran ``gemini-3-flash``. Only a non-flash
 * id sticks; ``gemini-2.5-pro`` is broadly available on Vertex and the
 * API-key / Google-login paths, so canvas preselects it. Kept as a named
 * constant so every model-default consumer agrees.
 */
export declare const ACP_VERTEX_SAFE_MODEL = "gemini-2.5-pro";
/**
 * The default ``acp_model`` canvas substitutes for ``providerKey`` wherever no
 * concrete model is configured — settings seeding (onboarding, Settings →
 * Agent), the {@link buildAcpAgentSettingsDiff} fallback, and the start-request
 * fallback for a saved ``null``. Overrides only Gemini (→
 * {@link ACP_VERTEX_SAFE_MODEL}, see why above); every other provider keeps its
 * registry {@link ACPProviderConfig.default_model}. Returns ``null`` when
 * there's no override and no registry default, letting the ACP server pick its
 * own.
 *
 * Distinct from {@link ACPProviderConfig.default_model} (which mirrors the SDK
 * registry verbatim, closing agent-canvas#740): this is the *preferred* default,
 * deliberately diverging for Gemini where the registry value isn't safe on
 * every backend — so every default-model surface must route through this, not
 * read ``default_model`` directly.
 */
export declare function getAcpPreferredDefaultModel(key: string | null | undefined): string | null;
/**
 * List the credentials Canvas should prompt for when onboarding the given ACP
 * provider. The API-key and base-URL field *names* track the SDK registry's
 * ``api_key_env_var`` / ``base_url_env_var`` (mirrored via
 * ``@openhands/typescript-client``) so they can't drift as providers are added
 * or renamed; the per-provider container credentials (subscription / Vertex
 * blobs) come from {@link ACP_RESERVED_CREDENTIALS}, since those are a
 * containerized-deployment concern with no model-registry entry. Each field
 * name equals the env var the agent-server exports into the provider subprocess
 * (which is what makes a saved secret reach the CLI). On the wire none of this
 * is special — every saved credential travels uniformly as a ``LookupSecret``.
 *
 * Field order is: container subscription/Vertex credentials → API key →
 * optional base URL. Every field is optional at the UI level — the step is
 * skippable, and a subscription / OAuth login on the backend takes precedence
 * over a key at runtime. (Whether the *step* is required is a
 * backend-capability decision the onboarding modal makes; see
 * ``backendRequiresAcpCredentials``.)
 *
 * NB: the base URL is rendered plain-text (not ``secret``), so it never counts
 * toward a required credential step — setting ``ANTHROPIC_BASE_URL`` alongside
 * a ``CLAUDE_CODE_OAUTH_TOKEN`` breaks the token's bearer auth, which the forms
 * surface via {@link getAcpCredentialConflicts}.
 *
 * Returns ``[]`` for OpenHands, the ``"custom"`` preset, any unknown key, and a
 * future OAuth-only provider whose registry entry has no ``api_key_env_var`` —
 * callers treat an empty list as "no credentials step for this provider".
 */
export declare function getAcpProviderSecrets(key: string | null | undefined): ACPProviderSecretField[];
/**
 * Look up a built-in ACP provider config by its registry key.
 *
 * Returns ``undefined`` for an empty / null key, for the ``"custom"`` preset
 * (which has no registry entry), and for any forward-compatible key Canvas's
 * registry doesn't know about yet. Centralizes the ``ACP_PROVIDERS.find(...)``
 * lookup shared by the resolvers below and by the adapter / settings surfaces
 * so the key-comparison shape lives in one place.
 */
export declare function getAcpProvider(key: string | null | undefined): ACPProviderConfig | undefined;
/**
 * Resolve an ACP provider registry key (the value stored under
 * ``tags.acpserver`` on a conversation) to a human display name for the
 * sidebar chip.
 *
 * Returns ``null`` for an empty / null key and for keys not in
 * {@link ACP_PROVIDERS} — most notably ``"custom"`` (the user-supplied
 * command preset has no canonical brand name) and any forward-compatible
 * value Canvas's registry doesn't know about yet. Callers should fall
 * back to a generic ``"ACP"`` label in that case so the chip still
 * communicates "this is an ACP conversation".
 *
 * Kept separate from {@link buildAcpAgentSettingsDiff}'s lookup so the
 * conversation-card render path can resolve display names without
 * importing the settings-payload builder.
 */
export declare function getAcpProviderDisplayName(key: string | null | undefined): string | null;
/**
 * Resolve an ACP provider registry key to the icon discriminator the
 * conversation chip should render alongside the model text.
 *
 * Falls back to {@link ACP_PROVIDER_FALLBACK_ICON} for ``"custom"``,
 * unknown keys, or a missing key — the chip then shows a neutral
 * terminal glyph that still communicates "this is an ACP conversation"
 * without claiming a brand identity we don't know.
 */
export declare function resolveAcpProviderIcon(key: string | null | undefined): ACPProviderIcon;
/**
 * Resolve a raw ``acp_model`` ID to the human-readable label the provider's
 * picker shows for it (e.g. ``"claude-opus-4-7"`` → ``"Claude Opus 4.7"``).
 *
 * Falls back to the raw ID when the provider is unknown or the ID isn't one
 * of its registered {@link ACPModelOption}s — so a user's custom override
 * still renders something meaningful rather than nothing. Returns ``null``
 * only when there is no model to show, letting the conversation chip decide
 * to display the provider name instead.
 */
export declare function labelForAcpModel(serverKey: string | null | undefined, modelId: string | null | undefined): string | null;
/**
 * Build the ``agent_settings_diff`` payload PATCH /api/settings expects
 * for the agent-kind/provider choice the user just made.
 *
 * Used by both the Settings → Agent page and the onboarding "choose
 * agent" step — keeping the shape in one helper means a future change
 * (e.g. always seeding ``acp_command`` from the registry instead of
 * sending ``[]``, or adding new ``acp_*`` reset fields) lands in both
 * surfaces atomically.
 *
 * Returns ``null`` for an unknown ACP provider key by default — the
 * caller can skip the save (the UI shouldn't surface unknown options,
 * but the defensive path keeps a buggy preset list from corrupting
 * settings).
 *
 * Pass ``allowUnknownServer: true`` to opt into pass-through for keys
 * that aren't in {@link ACP_PROVIDERS} or ``ACP_CUSTOM_PRESET_KEY``.
 * The Settings → Agent page uses this when the user opens settings
 * that already carry an ``acp_server`` value canvas's registry
 * doesn't know about (e.g. set out-of-band via the API for a provider
 * we haven't mirrored yet) and saves without changing the command —
 * otherwise the original key would be silently demoted to ``"custom"``.
 */
export declare function buildAcpAgentSettingsDiff(providerKey: string, options?: {
    command?: string[];
    model?: string | null;
    allowUnknownServer?: boolean;
}): Record<string, unknown> | null;
