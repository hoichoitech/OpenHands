/**
 * Resolve the current user's `user_id` per cloud backend with one
 * `/api/organizations/{orgId}/me` call per backend (NOT one per org).
 *
 * The cloud contract: `/me` returns `{ org_id, user_id, … }`. `user_id`
 * is identical regardless of which org you ask, so we make a single
 * call per backend.
 *
 * Path-param rule: when `backend.id === active.backend.id` and
 * `active.orgId` is set, the call uses **that** orgId — i.e. `/me`
 * always tracks the currently selected environment for the active
 * backend. For inactive backends (or when no org is selected yet), the
 * first org is used as a sentinel just to obtain `user_id`. This
 * matches the requirement that `/me` reflect the selected org for the
 * active environment, while still supporting the personal-workspace
 * label across non-active backends in the dropdown.
 *
 * The query key includes `active.orgId`, so picking a different org
 * via `setActive` re-keys this query and refetches `/me` with the new
 * active orgId.
 */
export declare function useCloudCurrentUserId(): Record<string, {
    isLoading: boolean;
    userId: string | null;
}>;
