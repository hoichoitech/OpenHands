import type { GitSyncStatus } from "#/types/git-sync";
interface GitSyncConfigFormProps {
    status: GitSyncStatus;
    canManage: boolean;
    /**
     * Runs a sync cycle. The same handler the overview's Sync now button uses,
     * so a save-and-sync is followed by the one activity row rather than
     * starting a cycle nothing on the page is watching.
     */
    onSyncNow: () => void;
}
export declare function GitSyncConfigForm({ status, canManage, onSyncNow, }: GitSyncConfigFormProps): import("react").JSX.Element;
export {};
