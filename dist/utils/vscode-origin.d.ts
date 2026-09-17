/**
 * Whether *this browser origin* can serve the editor, and whether a given
 * editor URL is one it will actually route.
 *
 * Editor availability is not a property of the agent-server process alone. The
 * agent-server answers `/api/vscode/status` for whatever conversation you ask
 * about, and builds `/api/vscode/url` from the `base_url` the caller sends —
 * which is always `window.location.origin`. So a server can truthfully report
 * an editor that the page's own origin has no route to. Two supported layouts
 * hit that:
 *
 *   - **Public mode** (`docker/entrypoint.sh`, `--auth-required`): a second
 *     static server on its own port, sharing the same agent-server but
 *     deliberately without the editor route, because the editor's connection
 *     token is the session API key (OpenHands/software-agent-sdk#4317) and that
 *     origin exists to test the *unauthenticated* case.
 *   - **Extra backends** (`scripts/dev-extra-backend.mjs`): a second
 *     agent-server registered from a browser whose origin belongs to another
 *     stack. That origin's editor route, if any, points at the *bundled*
 *     stack's editor — a different container's workspace.
 *
 * In both cases a control gated only on the server probe renders and then
 * resolves to the canvas SPA or, worse, someone else's workspace. So the
 * frontend has to intersect the server's capability with the origin's route
 * table, and this module is the origin half of that.
 */
/**
 * The path prefix this origin serves the editor under, or `null` if it serves
 * no editor at all.
 *
 * Two sources, in order — mirroring `getRawRuntimeServicesInfo` in
 * `agent-server-adapter.ts`:
 *   1. `VITE_VSCODE_BASE_PATH` — baked in at build time by the dev launchers
 *      that proxy the editor (`npm run dev`, dev:static).
 *   2. `window.__AGENT_CANVAS_VSCODE_BASE_PATH__` — injected into index.html at
 *      serve time by `scripts/static-server.mjs --vscode-base-path <path>`,
 *      which refuses to start unless a matching `--route` exists. That is the
 *      path used by static builds (the Docker image, the published binary),
 *      where the env var is empty in the prebuilt bundle.
 *
 * Absent from both means "this origin does not serve the editor" and the
 * control is hidden. That is the pre-existing behavior for every local backend,
 * so a deployment this cannot detect is no worse off than before.
 */
export declare function getOriginVSCodeBasePath(): string | null;
/**
 * Whether `url` is an editor URL this origin will actually route.
 *
 * The agent-server appends its own `vscode_base_path` to the origin we send it,
 * so the returned URL carries the prefix of the server that answered — not
 * necessarily the prefix this origin routes. An extra backend that configures
 * no prefix yields `<origin>/?tkn=…`, which is the canvas root: same origin,
 * wrong destination. Comparing paths is what separates the two.
 */
export declare function isVSCodeUrlServedByOrigin(url: string | null | undefined, basePath: string | null): boolean;
