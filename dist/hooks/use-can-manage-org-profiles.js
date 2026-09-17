import { useQuery as e } from "../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../contexts/active-backend-context.js";
import { getCloudOrganizationMe as n } from "../api/cloud/organization-service.api.js";
//#region src/hooks/use-can-manage-org-profiles.ts
var r = "edit_org_settings";
function i() {
	let { backend: i, orgId: a } = t(), o = i.kind === "cloud", { data: s } = e({
		queryKey: [
			"cloud-current-user",
			i.id,
			a,
			i.connectionRevision ?? 0
		],
		queryFn: () => n(a, i),
		enabled: o && !!a,
		staleTime: 1e3 * 60 * 5,
		retry: !1,
		meta: { disableToast: !0 }
	});
	return o ? s?.permissions ? s.permissions.includes(r) : s?.role === "owner" || s?.role === "admin" : !0;
}
//#endregion
export { i as useCanManageOrgProfiles };

//# sourceMappingURL=use-can-manage-org-profiles.js.map