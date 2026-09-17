/**
 * Shown when the automation backend answers the git-sync endpoints with 404:
 * it predates the API. Without this the page settles on the generic "something
 * went wrong" panel, which reads as a broken install rather than an old
 * backend.
 */
export declare function GitSyncUnsupportedState(): import("react").JSX.Element;
