export interface WorkspaceFilesResult {
    data: string[] | undefined;
    isLoading: boolean;
}
/**
 * Lists the files shown in the Files tab for the active conversation.
 *
 * Both backends enumerate the full workspace tree. Local backends run bash
 * `find` directly against the agent-server; cloud backends call the cloud
 * API's first-class file-listing endpoint, which runs the same `find`
 * server-side on the conversation's runtime (see `useCloudWorkspaceFiles`).
 *
 * Cloud detection reads the backend-registry store (via `useSyncExternalStore`)
 * rather than the `ActiveBackendProvider` context. The transport layer that
 * actually issues the requests — `executeCommand`, `getGitChanges`, the cloud
 * file-read — all branch on the *store* (`getActiveBackend()`), so the Files
 * tab must use the same source. Reading the context here can disagree with the
 * store (its `useActiveBackend` fallback synthesizes a *local* backend when the
 * provider isn't in scope), which would run the local bash path against a cloud
 * backend: `executeCommand` then POSTs to the removed `/api/cloud-proxy` (405)
 * and the cloud `/files` call never fires.
 */
export declare function useWorkspaceFiles(): WorkspaceFilesResult;
