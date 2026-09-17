import { LocalWorkspace, LocalWorkspaceParent } from "#/types/workspace";
interface UseResolvedWorkspacesResult {
    workspaces: LocalWorkspace[];
    /**
     * The merged workspace parents that produced the dynamic children above:
     * the user's stored parents plus any implicit built-in parents (currently
     * `/projects` in dev). Consumers use this to label a child's group by its
     * parent's `name` — `parentPath` alone only yields a path. Includes the
     * implicit parents that `useLocalWorkspaces` does not expose on its own.
     */
    parents: LocalWorkspaceParent[];
    isLoading: boolean;
    isError: boolean;
    error: unknown;
}
/**
 * Returns the merged list of workspaces to display:
 *   - workspaces explicitly added by the user (from the persisted store),
 *   - the immediate subdirectories of every saved "workspace parent",
 *     fetched dynamically, and
 *   - the immediate subdirectories of any implicit, built-in parents
 *     (currently just `/projects`).
 *
 * Static workspaces always take precedence over a dynamic child with the
 * same path so that user-selected names/ids are preserved.
 */
export declare function useResolvedWorkspaces(): UseResolvedWorkspacesResult;
export {};
