import type { GitSyncStatus } from "#/types/git-sync";
import { type GitSyncActivityState } from "./git-sync-activity-row";
interface GitSyncOverviewSectionProps {
    status: GitSyncStatus;
    onSyncNow: () => void;
    isSyncing: boolean;
    syncActivity: GitSyncActivityState;
    syncStartedAt: string | null;
    canManage: boolean;
}
export declare function GitSyncOverviewSection({ status, onSyncNow, isSyncing, syncActivity, syncStartedAt, canManage, }: GitSyncOverviewSectionProps): import("react").JSX.Element;
export {};
