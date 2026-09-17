import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import n from "../../api/config-service/config-service.api.js";
import { VERIFIED_MODELS_GC_TIME as r, VERIFIED_MODELS_QUERY_KEY as i, VERIFIED_MODELS_STALE_TIME as a, fetchVerifiedModelsByProvider as o } from "./use-verified-models.js";
//#region src/hooks/query/use-search-providers.ts
var s = 10;
async function c(e, t, r, i) {
	if (i >= s) throw Error(`Too many pagination requests while fetching providers (depth=${i})`);
	let a = await n.searchProviders(t ? { page_id: t } : {}, e);
	if (!a.next_page_id) return a.items;
	if (r.has(a.next_page_id)) throw Error(`Repeated page id while fetching providers: ${a.next_page_id}`);
	r.add(a.next_page_id);
	let o = await c(e, a.next_page_id, r, i + 1);
	return [...a.items, ...o];
}
var l = () => {
	let { backend: n, orgId: s } = t(), l = [
		n.id,
		n.connectionRevision ?? 0,
		s
	];
	return e({
		queryKey: [
			"config",
			"providers",
			...l
		],
		queryFn: async ({ client: e }) => c(await e.fetchQuery({
			queryKey: [...i, ...l],
			queryFn: o,
			staleTime: a
		}), null, /* @__PURE__ */ new Set(), 0),
		staleTime: a,
		gcTime: r
	});
};
//#endregion
export { l as useSearchProviders };

//# sourceMappingURL=use-search-providers.js.map