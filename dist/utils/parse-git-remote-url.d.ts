import { Provider } from "#/types/settings";
export interface ParsedGitRemoteUrl {
    /** Original URL, trimmed. */
    url: string;
    /**
     * Browsable hostname of the remote (e.g. `github.com`, `git.example.com`).
     * Hosts that only serve SSH are mapped to their web equivalent, so callers
     * can build links from this directly. `url` keeps the original remote.
     */
    host: string | null;
    /** Path-style identifier, normalized to `owner/repo` (no leading slash, no `.git` suffix). */
    repository: string | null;
    /** Best-effort provider detection from the host. `null` for unrecognized/self-hosted hosts. */
    provider: Provider | null;
}
/**
 * Parse a git remote URL (HTTPS, SSH, or `git@host:path` shorthand) into its
 * host, repository (`owner/repo`), and best-effort provider.
 *
 * Returns `null` if the URL is empty or unparseable. Unknown hosts still
 * resolve `host` and `repository`; only `provider` is left `null`.
 */
export declare function parseGitRemoteUrl(remoteUrl: string | null | undefined): ParsedGitRemoteUrl | null;
