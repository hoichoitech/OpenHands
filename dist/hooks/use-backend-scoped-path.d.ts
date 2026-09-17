/**
 * Build in-app paths that carry the active backend identity.
 *
 * Use it for links a user can plausibly open in a *new* browsing context
 * (cmd/ctrl-click, middle click, "Open link in new tab"). Such a tab does not
 * reliably inherit the opener's `sessionStorage`, so without the pinned
 * identity it can boot on whichever backend `localStorage` last recorded and
 * fail to resolve the linked conversation.
 */
export declare function useBackendScopedPath(): (path: string) => string;
