export declare const DEFAULT_WORKING_DIR = "workspace/project";
export type LockedCloudAuthMode = "api-key" | "cookie";
export interface AgentServerFormDefaults {
    baseUrl: string;
    sessionApiKey: string;
}
export declare function getCookieAuthCloudHost(): string | null;
/**
 * Return the session API key supplied by the deployment host.
 *
 * Two sources are consulted, in order:
 *   1. `VITE_SESSION_API_KEY` — baked into the bundle at build time (used by
 *      `npm run dev` so the dev server has the key without a round-trip).
 *   2. `window.__AGENT_CANVAS_SESSION_API_KEY__` — injected into `index.html`
 *      at serve time by `scripts/static-server.mjs --session-api-key <key>`.
 *      This is the path used by the published `agent-canvas` binary, where
 *      `VITE_SESSION_API_KEY` is empty in the prebuilt bundle and the
 *      runtime key is generated when the user launches the CLI.
 *
 * Without the window-global fallback, the published binary cannot construct a
 * default local backend (`makeDefaultLocalBackend()` returns null), the
 * registry is left empty, and the user sees the Manage Backends modal
 * instead of the onboarding flow.
 */
export declare function getBakedSessionApiKey(): string | null;
export declare function getAgentServerFormDefaults(): AgentServerFormDefaults;
export declare function getLockedCloudHost(): string | null;
/**
 * Compare a backend host against the locked Cloud host, normalizing
 * trailing slashes, protocol, and case so that e.g.
 * `https://app.all-hands.dev/` matches `https://app.all-hands.dev`.
 *
 * Used by the locked-to-Cloud gates (`root.tsx`,
 * `onboarding-modal.tsx`) to decide whether the active backend is the
 * configured locked Cloud host — a Cloud backend on a *different* host
 * (or a stale Local backend) must not be treated as the locked backend.
 */
export declare function isSameCloudHost(host: string | null | undefined, lockedHost: string | null | undefined): boolean;
export declare function getLockedCloudAuthMode(): LockedCloudAuthMode;
export declare function getAgentServerBaseUrl(): string | null;
export declare function getAgentServerSessionApiKey(): string | null;
export declare function getAgentServerWorkingDir(): string;
export declare function buildConversationWorkingDir(conversationId: string): string;
/**
 * Conversation working dir under the backend-relative default
 * (`workspace/project/<hex>`), deliberately ignoring any baked absolute
 * `VITE_WORKING_DIR`. `resolveAbsoluteAgentServerPath()` anchors this to the
 * active backend's own home via `GET /api/file/home`, so it resolves to a
 * writable path on whichever backend actually runs the conversation.
 */
export declare function buildRelativeConversationWorkingDir(conversationId: string): string;
/**
 * Whether `backendHost` is the same host that served this frontend.
 *
 * A launcher-baked `VITE_WORKING_DIR` is an absolute path on the serving
 * host's filesystem, so it is only valid on that exact backend. The seeded
 * `default-local` entry starts life pointing at the served origin, but its
 * `host` is mutable — the user can edit it to a remote backend while its id
 * stays `default-local`. Matching on the host (not the stable id) keeps the
 * real invariant: the baked path is only safe for the host it was baked for.
 */
export declare function isServedOriginHost(backendHost: string | null | undefined): boolean;
/**
 * Base working dir for a new conversation on the backend at `backendHost`.
 * The baked (possibly absolute) default is used only for the served-origin
 * backend; every other backend gets the relative default, anchored to its
 * own home by `resolveAbsoluteAgentServerPath()`.
 */
export declare function buildConversationWorkingDirForBackend(conversationId: string, backendHost: string | null | undefined): string;
/**
 * Workspace root for `backendHost` — the dir each conversation's `<root>/<hex>`
 * working dir is created under. Same per-backend rule as
 * `buildConversationWorkingDirForBackend()`.
 */
export declare function getWorkspaceRootForBackend(backendHost: string | null | undefined): string;
export declare function getAgentServerHeaders(): Record<string, string>;
export declare function isAuthRequired(): boolean;
export declare function isAuthRequiredAndMissing(): boolean;
