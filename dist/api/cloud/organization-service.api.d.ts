import type { Backend } from "../backend-registry/types";
import type { CloudOrganization, CloudOrganizationMember } from "./types";
interface OrganizationsResult {
    items: CloudOrganization[];
    currentOrgId: string | null;
}
/**
 * Fetch the org list for a cloud backend. With no argument, uses the active
 * cloud backend; pass `backend` explicitly to fetch for an inactive cloud
 * (used by the selector to flatten all cloud rows).
 *
 * Calls the cloud API directly with the backend's bearer token.
 */
export declare function getCloudOrganizations(backend?: Backend): Promise<OrganizationsResult>;
/**
 * Fetch metadata for the API key used to authenticate this cloud backend.
 * The returned `orgId` is the single org the key is authorized to act on
 * (the cloud contract: one key → one org).
 *
 * Legacy keys minted before per-key org binding existed cause the upstream
 * to return HTTP 400 — we surface that as `isLegacyKey: true` with a null
 * `orgId` so the caller can fall back to the unfiltered behavior. Other
 * statuses (401 revoked, 5xx outage) propagate so React Query can mark
 * the query as failed and the selector can render the no-org-known row.
 */
export declare function getCurrentCloudApiKey(backend?: Backend): Promise<{
    orgId: string | null;
    isLegacyKey: boolean;
}>;
/**
 * Fetch `GET /api/organizations/{orgId}/me`. Identifies the calling user as
 * a member of `orgId`. The GUI uses `me.org_id === me.user_id` to decide
 * whether `orgId` is the user's personal workspace — that's the cloud
 * contract (the auto-generated personal-workspace org has the same id as
 * the user).
 *
 * `role` is the caller's role in the org (`owner` | `admin` | `member`, or
 * `null` if the upstream omits it). `permissions` is the server-defined
 * permission set for that role (e.g. `edit_org_settings`); it is `null` on
 * older app-servers that don't return it, so callers fall back to the role.
 * See `useCanManageOrgProfiles`.
 */
export declare function getCloudOrganizationMe(orgId: string, backend?: Backend): Promise<{
    orgId: string;
    userId: string;
    role: string | null;
    permissions?: string[] | null;
}>;
/**
 * Fetch `GET /api/organizations/{orgId}/members/{userId}`: one member of
 * `orgId` by user id. Any org member may read it (same permission as the
 * members list). The upstream responds 404 when `userId` is not (or no
 * longer) a member of the org, and older app-servers that predate the route
 * 404 as well, so callers should treat a failure as "identity unresolved".
 */
export declare function getCloudOrganizationMember(orgId: string, userId: string, backend?: Backend): Promise<CloudOrganizationMember>;
export {};
