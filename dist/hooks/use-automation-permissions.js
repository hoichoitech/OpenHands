import { useQuery as e } from "../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../contexts/active-backend-context.js";
import { getCloudOrganizationMe as n } from "../api/cloud/organization-service.api.js";
import { useCloudCurrentUserId as r } from "./query/use-cloud-current-user-id.js";
//#region src/hooks/use-automation-permissions.ts
var i = "view_automations", a = "manage_automations";
function o() {
	let { backend: r, orgId: o } = t(), s = r.kind === "cloud", { data: c, isLoading: l } = e({
		queryKey: [
			"cloud-current-user",
			r.id,
			o,
			r.connectionRevision ?? 0
		],
		queryFn: () => n(o, r),
		enabled: s && !!o,
		staleTime: 1e3 * 60 * 5,
		retry: !1,
		meta: { disableToast: !0 }
	});
	if (!s) return {
		canView: !0,
		canManage: !0,
		isLoading: !1
	};
	if (l || !c) return {
		canView: !1,
		canManage: !1,
		isLoading: l
	};
	if (c.permissions) return {
		canView: c.permissions.includes(i),
		canManage: c.permissions.includes(a),
		isLoading: !1
	};
	let u = c.role === "owner" || c.role === "admin";
	return {
		canView: u || c.role === "member",
		canManage: u,
		isLoading: !1
	};
}
function s(e) {
	let { backend: n } = t(), i = r();
	if (n.kind !== "cloud") return !0;
	let a = i[n.id];
	return !a || a.isLoading || !a.userId ? !1 : e.user_id === a.userId;
}
//#endregion
export { o as useAutomationPermissions, s as useIsAutomationOwner };

//# sourceMappingURL=use-automation-permissions.js.map