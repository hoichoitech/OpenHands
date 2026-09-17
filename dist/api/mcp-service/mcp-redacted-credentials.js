import { isMcpAuthCredential as e } from "../../types/mcp-auth.js";
import { hasRedactedMcpSecretLeaf as t } from "../../utils/mcp-config.js";
import n from "../settings-service/settings-service.api.js";
//#region src/api/mcp-service/mcp-redacted-credentials.ts
var r = (e) => !!e && typeof e == "object" && !Array.isArray(e), i = (e) => {
	if (!r(e)) return;
	let t = Object.entries(e).filter((e) => typeof e[1] == "string");
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}, a = (e) => !!e && Object.values(e).some((e) => e === "**********");
function o(e, t) {
	if (!r(e)) return e;
	let n = r(t) ? t : {}, i = { ...e };
	for (let [t, a] of Object.entries(e)) if (a === "**********") {
		let e = n[t];
		typeof e == "string" && e !== "**********" && (i[t] = e);
	} else r(a) && (i[t] = o(a, n[t]));
	return i;
}
var s = (e, t) => t[e.id];
async function c(e) {
	let t = (await n.fetchSettingsFromApi("encrypted")).agent_settings?.mcp_config;
	if (r(t)) return s(e, t);
}
async function l(n) {
	let r = n.type === "stdio" && a(n.env), s = (n.type === "sse" || n.type === "shttp") && t(n.auth), l = (n.type === "sse" || n.type === "shttp") && a(n.headers);
	if (!r && !s && !l) return n;
	try {
		let t = await c(n);
		if (!t) return n;
		if (r) {
			let e = i(t.env) ?? {}, r = Object.fromEntries(Object.entries(n.env ?? {}).map(([t, n]) => [t, n === "**********" && typeof e[t] == "string" ? e[t] : n]));
			return {
				...n,
				env: r
			};
		}
		let a = { ...n };
		if (s && e(t.auth) && (a.auth = o(n.auth, t.auth)), l) {
			let e = i(t.headers) ?? {};
			a.headers = Object.fromEntries(Object.entries(n.headers ?? {}).map(([t, n]) => [t, n === "**********" && typeof e[t] == "string" ? e[t] : n]));
		}
		return a;
	} catch {
		return n;
	}
}
//#endregion
export { l as substituteRedactedMcpCredentials };

//# sourceMappingURL=mcp-redacted-credentials.js.map