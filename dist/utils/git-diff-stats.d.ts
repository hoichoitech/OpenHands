import type { GitChangeDiff } from "#/api/open-hands.types";
export interface GitDiffLineStats {
    additions: number;
    deletions: number;
}
export declare function countUnifiedDiffStats(diff: string): {
    additions: number;
    deletions: number;
};
export declare function countGitChangeDiffStats(diff: GitChangeDiff & {
    diff?: string;
}): GitDiffLineStats;
export declare function sumGitDiffLineStats(stats: GitDiffLineStats[]): GitDiffLineStats;
