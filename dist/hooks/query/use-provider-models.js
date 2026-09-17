import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import n from "../../api/config-service/config-service.api.js";
import { VERIFIED_MODELS_GC_TIME as r, VERIFIED_MODELS_QUERY_KEY as i, VERIFIED_MODELS_STALE_TIME as a, fetchVerifiedModelsByProvider as o } from "./use-verified-models.js";
//#region src/hooks/query/use-provider-models.ts
var s = 10;
async function c(e, t, r, i = 0) {
	if (i >= s) throw Error(`Too many pagination requests for provider ${e}`);
	let a = await n.searchModels({
		provider__eq: e,
		limit: 100,
		page_id: r
	}, t);
	if (a.next_page_id) {
		let n = await c(e, t, a.next_page_id, i + 1);
		return [...a.items, ...n];
	}
	return a.items;
}
var l = (n) => {
	let { backend: s, orgId: l } = t(), u = [
		s.id,
		s.connectionRevision ?? 0,
		l
	];
	return e({
		queryKey: [
			"config",
			"models",
			n,
			...u
		],
		queryFn: async ({ client: e }) => c(n, await e.fetchQuery({
			queryKey: [...i, ...u],
			queryFn: o,
			staleTime: a
		})),
		enabled: !!n,
		staleTime: a,
		gcTime: r
	});
};
//#endregion
export { l as useProviderModels };

//# sourceMappingURL=use-provider-models.js.map