import { REDACTED_MCP_SECRET_VALUE as e } from "./mcp-config.js";
//#region src/utils/redact-mcp-secrets.ts
var t = 4, n = /token|key|secret|auth/i, r = [
	/\bgh[pousr]_[A-Za-z0-9]{16,}\b/g,
	/\bgithub_pat_[A-Za-z0-9_]{20,}\b/g,
	/\bxox[a-z](?:-[A-Za-z0-9]+)+/g,
	/\blin_api_[A-Za-z0-9]{10,}\b/g,
	/\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\b/g
], i = /\bBearer\s+[A-Za-z0-9._~+/=-]{8,}/gi;
function a(e, n) {
	typeof n == "string" && (n.length < t || n !== "**********" && e.add(n));
}
function o(e, t) {
	for (let n of Object.values(t ?? {})) a(e, n);
}
function s(e, t) {
	if (t) try {
		let r = new URL(t);
		a(e, r.username), a(e, r.password), a(e, decodeURIComponent(r.username)), a(e, decodeURIComponent(r.password)), r.searchParams.forEach((t, r) => {
			n.test(r) && a(e, t);
		});
	} catch {}
}
function c(e, t) {
	if (t) switch (t.strategy) {
		case "api_key":
		case "bearer":
			a(e, t.value);
			break;
		case "basic":
			a(e, t.username), a(e, t.password);
			break;
		case "header":
			o(e, t.headers);
			break;
		case "oauth2":
			a(e, t.authentication?.client_secret), o(e, t.state?.tokens);
			break;
		default: break;
	}
}
function l(e) {
	let t = /* @__PURE__ */ new Set();
	return o(t, e.env), o(t, e.headers), c(t, e.auth), s(t, e.url), [...t].sort((e, t) => t.length - e.length);
}
function u(t, ...n) {
	if (!t) return t;
	let a = t;
	for (let t of n) if (t) for (let n of l(t)) a = a.split(n).join(e);
	a = a.replace(i, `Bearer ${e}`);
	for (let t of r) a = a.replace(t, e);
	return a;
}
//#endregion
export { u as redactMcpSecrets };

//# sourceMappingURL=redact-mcp-secrets.js.map