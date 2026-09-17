import { useQueries as e } from "../../node_modules/@tanstack/react-query/build/modern/useQueries.js";
import { useActiveBackend as t, useActiveBackendContext as n } from "../../contexts/active-backend-context.js";
import { getCloudOrganizationMe as r } from "../../api/cloud/organization-service.api.js";
import { useAllCloudOrganizations as i } from "./use-cloud-organizations.js";
//#region src/hooks/query/use-cloud-current-user-id.ts
function a() {
	let { backends: a } = n(), o = t(), s = i(), c = [];
	for (let e of a) if (e.kind === "cloud") {
		let t = s[e.id], n = e.id === o.backend.id && o.orgId ? o.orgId : t?.orgs[0]?.id ?? null;
		n && c.push({
			backendId: e.id,
			connectionRevision: e.connectionRevision ?? 0,
			orgIdForMe: n
		});
	}
	let l = e({ queries: c.map(({ backendId: e, connectionRevision: t, orgIdForMe: n }) => {
		let i = a.find((t) => t.id === e);
		return {
			queryKey: [
				"cloud-current-user",
				e,
				n,
				t
			],
			queryFn: async () => i ? r(n, i) : {
				orgId: n,
				userId: ""
			},
			enabled: !!i,
			staleTime: 1e3 * 60 * 5,
			retry: !1,
			meta: { disableToast: !0 }
		};
	}) }), u = {};
	return c.forEach((e, t) => {
		let n = l[t];
		u[e.backendId] = {
			isLoading: n.isLoading,
			userId: n.data?.userId ?? null
		};
	}), u;
}
//#endregion
export { a as useCloudCurrentUserId };

//# sourceMappingURL=use-cloud-current-user-id.js.map