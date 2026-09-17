import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import n from "../../api/config-service/config-service.api.js";
import { useFreeModelsStore as r } from "../../stores/free-models-store.js";
import { VERIFIED_MODELS_GC_TIME as i, VERIFIED_MODELS_QUERY_KEY as a, VERIFIED_MODELS_STALE_TIME as o, fetchVerifiedModelsByProvider as s } from "./use-verified-models.js";
import c from "react";
//#region src/hooks/query/use-free-models.ts
var l = "openhands", u = 100, d = 10;
async function f(e, t, r, i) {
	if (i >= d) throw Error(`Too many pagination requests while fetching OpenHands models (depth=${i})`);
	let a = await n.searchModels({
		provider__eq: l,
		limit: u,
		...t ? { page_id: t } : {}
	}, e);
	if (!a.next_page_id) return a.items;
	if (r.has(a.next_page_id)) throw Error(`Repeated page id while fetching OpenHands models: ${a.next_page_id}`);
	r.add(a.next_page_id);
	let o = await f(e, a.next_page_id, r, i + 1);
	return [...a.items, ...o];
}
var p = () => {
	let { backend: n, orgId: r } = t(), c = [
		n.id,
		n.connectionRevision ?? 0,
		r
	];
	return e({
		queryKey: [
			"config",
			"models",
			l,
			"flags",
			...c
		],
		queryFn: async ({ client: e }) => f(await e.fetchQuery({
			queryKey: [...a, ...c],
			queryFn: s,
			staleTime: o
		}), null, /* @__PURE__ */ new Set(), 0),
		staleTime: o,
		gcTime: i
	});
}, m = () => {
	let { backend: e, orgId: n } = t(), { data: i, isError: a } = p(), o = r((e) => e.setFlags), s = r((e) => e.markDefaultModelReady), u = r((e) => e.resetFlags);
	c.useEffect(() => {
		u();
	}, [
		e.id,
		e.connectionRevision,
		n,
		u
	]), c.useEffect(() => {
		if (!i) return;
		let e = new Set(i.filter((e) => e.free).map((e) => `${l}/${e.name}`)), t = i.find((e) => e.default);
		o({
			freeModels: e,
			defaultModel: t ? `${l}/${t.name}` : null
		});
	}, [i, o]), c.useEffect(() => {
		a && s();
	}, [a, s]);
}, h = () => r((e) => e.freeModels), g = () => r((e) => e.defaultModel);
//#endregion
export { g as useDefaultModel, h as useFreeModels, m as useHydrateFreeModels };

//# sourceMappingURL=use-free-models.js.map