import { useQueries as e } from "../../node_modules/@tanstack/react-query/build/modern/useQueries.js";
import { useActiveBackendContext as t } from "../../contexts/active-backend-context.js";
import { getCloudOrganizations as n, getCurrentCloudApiKey as r } from "../../api/cloud/organization-service.api.js";
//#region src/hooks/query/use-cloud-organizations.ts
function i() {
	let { backends: i } = t(), a = i.filter((e) => e.kind === "cloud"), o = e({ queries: a.map((e) => ({
		queryKey: [
			"cloud-organizations",
			e.id,
			e.connectionRevision ?? 0
		],
		queryFn: async () => {
			let t = await n(e);
			if (e.authMode === "cookie") return t;
			let i = await r(e);
			return i.isLegacyKey || i.orgId === null ? t : {
				...t,
				items: t.items.filter((e) => e.id === i.orgId)
			};
		},
		staleTime: 1e3 * 60 * 5,
		retry: !1,
		meta: { disableToast: !0 }
	})) }), s = {};
	return a.forEach((e, t) => {
		let n = o[t];
		s[e.id] = {
			backend: e,
			isLoading: n.isLoading,
			orgs: n.data?.items ?? [],
			currentOrgId: n.data?.currentOrgId ?? null
		};
	}), s;
}
//#endregion
export { i as useAllCloudOrganizations };

//# sourceMappingURL=use-cloud-organizations.js.map