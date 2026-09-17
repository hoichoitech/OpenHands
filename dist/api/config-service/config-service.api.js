import { LLMMetadataClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/llm-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "../agent-server-client-options.js";
import { callCloudProxy as r } from "../cloud/proxy.js";
//#region src/api/config-service/config-service.api.ts
function i(e, t) {
	if (!t) return e;
	let n = t.toLowerCase();
	return e.filter((e) => e.name.toLowerCase().includes(n));
}
function a(e, t) {
	return t === void 0 ? e : e.filter((e) => e.verified === t);
}
function o(e, t) {
	return !t || t <= 0 ? e : e.slice(0, t);
}
function s(e) {
	let t = new URLSearchParams();
	for (let [n, r] of Object.entries(e)) r !== void 0 && t.set(n, String(r));
	let n = t.toString();
	return n ? `?${n}` : "";
}
var c = class {
	static async searchModels(c = {}, l) {
		let u = t();
		if (u.backend.kind === "cloud") {
			let e = s({
				page_id: c.page_id,
				limit: c.limit,
				query: c.query,
				verified__eq: c.verified__eq,
				provider__eq: c.provider__eq
			});
			return r({
				backend: u.backend,
				method: "GET",
				path: `/api/v1/config/models/search${e}`
			});
		}
		let d = new e(n()), f = l === void 0 ? d.getVerifiedModels() : Promise.resolve(l), [p, m] = await Promise.all([d.getModels(), f]), h = c.provider__eq ?? null, g = new Set(h ? m?.[h] ?? [] : []), _ = [...g].map((e) => ({
			provider: h,
			name: e,
			verified: !0,
			free: !1,
			default: !1
		})), v = h ? (p ?? []).filter((e) => e.startsWith(`${h}/`)).map((e) => e.slice(h.length + 1)).filter((e) => e.length > 0 && !g.has(e)).map((e) => ({
			provider: h,
			name: e,
			verified: !1,
			free: !1,
			default: !1
		})) : [];
		return {
			items: o(a(i([..._, ...v], c.query), c.verified__eq), c.limit),
			next_page_id: null
		};
	}
	static async searchProviders(c = {}, l) {
		let u = t();
		if (u.backend.kind === "cloud") {
			let e = s({
				page_id: c.page_id,
				limit: c.limit,
				query: c.query,
				verified__eq: c.verified__eq
			});
			return r({
				backend: u.backend,
				method: "GET",
				path: `/api/v1/config/providers/search${e}`
			});
		}
		let d = new e(n()), f = l === void 0 ? d.getVerifiedModels() : Promise.resolve(l), [p, m] = await Promise.all([d.getProviders(), f]), h = new Set(Object.keys(m ?? {}));
		return {
			items: o(a(i([...new Set([...h, ...p ?? []])].map((e) => ({
				name: e,
				verified: h.has(e)
			})), c.query), c.verified__eq), c.limit),
			next_page_id: null
		};
	}
};
//#endregion
export { c as default };

//# sourceMappingURL=config-service.api.js.map