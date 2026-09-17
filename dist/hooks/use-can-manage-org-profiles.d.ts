/**
 * Whether the current user may MUTATE org-scoped profiles — LLM profiles and
 * agent profiles alike — on the active backend: create, edit, rename, delete,
 * duplicate, or activate/switch.
 *
 * - Local agent-server (OSS): always `true`; the user owns their own profiles.
 * - Cloud: profiles are org-scoped. The app-server grants every mutating
 *   profile action (save/delete/rename/activate) only to the `owner`/`admin`
 *   roles via the `edit_org_settings` permission; a `member` is view-only. We
 *   read the caller's server-defined permissions from
 *   `GET /api/organizations/{orgId}/me` — the same call `useCloudCurrentUserId`
 *   makes, reusing its query key so no extra request is issued — and fall back
 *   to a role check when an older app-server doesn't return `permissions`.
 *
 * Returns `false` while the role/permissions are still loading or unknown on
 * cloud, so mutating controls never flash for a member before they resolve.
 */
export declare function useCanManageOrgProfiles(): boolean;
