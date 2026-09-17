/**
 * The Files tab's "Commits" view: the workspace's recent commit history
 * (newest first), each commit expandable into its per-file diffs. Sits
 * behind the third segment of the Diff/Files toggle, which is only
 * offered when the agent server supports the commits API.
 */
declare function GitCommits(): import("react").JSX.Element;
export default GitCommits;
