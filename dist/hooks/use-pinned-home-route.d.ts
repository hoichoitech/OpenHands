export declare const PINNED_HOME_ROUTE_KEY = "oh:pinned-home-route";
/** Sidebar Customize entry; also the pin target, so the two cannot drift. */
export declare const CUSTOMIZE_PATH = "/customize";
/**
 * The pin is stored per backend + org: it may reference a surface that only
 * exists on the backend that set it (e.g. /automations requires that
 * deployment's interface manifest) — a shared key would let one backend
 * redirect `/` on another.
 */
export declare function getPinnedHomeRouteKey(backendId: string, orgId: string | null): string;
/**
 * Whether `path` may serve as the home route right now. Shared by the
 * sidebar pin affordance and the `/` loader, so a stored pin that stops
 * resolving (backend switch, manifest absent) is ignored rather than an
 * error. `/` is never pinnable, which makes a redirect loop impossible.
 * Canvas Extensions pages can later add an `/extensions/…` branch here
 * without any storage or loader change.
 */
export declare function isPinnableRoute(path: string): boolean;
/**
 * Synchronous pin read for route loaders (no React context). Reads the key
 * `usePinnedHomeRoute` writes; `useLocalStorage` JSON-serializes values, so
 * parse defensively and treat anything unreadable as "no pin". An invalid
 * pin is ignored, not cleared — it may become valid again (e.g. the
 * automations interface returning after a backend switch back).
 */
export declare function readPinnedHomeRoute(): string | null;
/** Pin state for the home route: `/` redirects to the pinned sidebar page. */
export declare function usePinnedHomeRoute(): {
    pinnedRoute: string | null;
    isPinnedRoute: (path: string) => boolean;
    togglePinnedRoute: (path: string) => void;
};
