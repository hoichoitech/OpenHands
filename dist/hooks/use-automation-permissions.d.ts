import type { Automation } from "#/types/automation";
/**
 * Server-defined permission strings (mirror the automation service's
 * `view_automations` / `manage_automations` and the enterprise
 * `authorization.Permission` enum). The `/me` endpoint returns whichever
 * subset the caller's role grants.
 */
export declare const VIEW_AUTOMATIONS = "view_automations";
export declare const MANAGE_AUTOMATIONS = "manage_automations";
export interface AutomationPermissionsResult {
    /** Read-only access (list, get, list runs, capabilities, git-sync status). */
    canView: boolean;
    /** Full write access (create, update, delete, dispatch, git-sync config). */
    canManage: boolean;
    /**
     * `true` when permissions are still being resolved on cloud. Local always
     * resolves synchronously. Mutating controls should stay hidden while this is
     * `true` so a member never sees a flash of write controls before the
     * server-defined permission set arrives.
     */
    isLoading: boolean;
}
/**
 * Resolve the caller's automation-level permissions on the active backend.
 *
 * - Local agent-server (OSS): always `{ canView: true, canManage: true }`.
 * - Cloud: reads the server-defined `permissions` array from
 *   `GET /api/organizations/{orgId}/me` (same query `useCloudCurrentUserId`
 *   and `useCanManageOrgProfiles` use, so no extra request is issued) and
 *   falls back to a role check (`owner`/`admin` ⇒ both, `member` ⇒ view
 *   only) when an older app-server doesn't return `permissions`.
 */
export declare function useAutomationPermissions(): AutomationPermissionsResult;
/**
 * Resolve whether the current user is the creator of the given automation.
 *
 * - Local: always `true` (the local user owns every automation; and since
 *   local always has `manage_automations`, the distinction is moot).
 * - Cloud: compares `automation.user_id` with the caller's `user_id` from
 *   `GET /api/organizations/{orgId}/me`. Returns `false` while the id is
 *   still loading so the creator escape hatch never flashes open prematurely.
 */
export declare function useIsAutomationOwner(automation: Automation): boolean;
