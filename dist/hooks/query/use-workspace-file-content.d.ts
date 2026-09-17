export type WorkspaceFileKind = "text" | "image" | "pdf" | "binary";
export interface WorkspaceFileContent {
    path: string;
    kind: WorkspaceFileKind;
    /** Decoded text contents — only populated when kind === "text". */
    text: string | null;
    /**
     * URL pointing at the file on the agent server's static workspace
     * fileserver (the `/api/conversations/{id}/workspace/...` route minted
     * by `RemoteWorkspace.startWorkspaceSession`). Suitable to use as an
     * `<iframe src>` or `<img src>` — the workspace-session cookie
     * authenticates the browser request, and relative asset references
     * inside an HTML preview resolve naturally against this URL.
     */
    staticUrl: string;
    /** MIME type guessed from the file extension. */
    mimeType: string;
}
/**
 * Reads a single file out of the active conversation's workspace via the
 * agent server's static workspace fileserver and classifies it as
 * text/image/pdf/binary so the UI can pick a renderer.
 *
 * Image and PDF kinds are rendered directly from `staticUrl` (no fetch
 * here). Text/binary classification still requires reading the body so
 * we can run a NUL-byte sniff and decode UTF-8 for the plain/markdown
 * renderers.
 *
 * Pass a falsy `relativePath` to disable the query (e.g. when no file is
 * selected yet).
 */
export declare function useWorkspaceFileContent(relativePath: string | null): import("@tanstack/react-query").UseQueryResult<NoInfer<WorkspaceFileContent>, import("axios").AxiosError<unknown, any>>;
