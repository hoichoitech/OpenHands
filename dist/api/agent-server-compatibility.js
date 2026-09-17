import { ServerClient as e } from "../node_modules/@openhands/typescript-client/dist/client/server-client.js";
import { SettingsClient as t } from "../node_modules/@openhands/typescript-client/dist/client/settings-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { isAuthRequired as n } from "./agent-server-config.js";
import { getActiveBackend as r, getEffectiveLocalBackend as i, isNoBackend as a } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as o } from "./agent-server-client-options.js";
import s from "../config/defaults.js";
//#region src/api/agent-server-compatibility.ts
var c = 5e3, l = "unknown", u = s.compatibility.minimumAgentServer, d = "AGENT_SERVER_UNSUPPORTED_VERSION", f = "AGENT_SERVER_UNKNOWN_VERSION", p = "Invalid API key", m = null, h = null, g = (e) => Array.isArray(e?.usable_tools) ? e.usable_tools : null, _ = class extends Error {
	details;
	noBackendConfigured;
	constructor(e, t) {
		let n = t?.noBackendConfigured ?? !1;
		super(n ? "No agent server backend is configured yet. Add a backend to get started." : "Could not connect to the configured agent server. Make sure it is running and reachable, then reload the page."), this.name = "AgentServerUnavailableError", this.details = e ?? null, this.noBackendConfigured = n;
	}
}, v = (e) => e instanceof _ || typeof e == "object" && !!e && "name" in e && (e.name === "AgentServerUnavailableError" || e.name === "AgentServerUnsupportedVersionError" || e.name === "AgentServerUnknownVersionError"), y = class extends _ {
	code = d;
	actualVersion;
	requiredVersion = u;
	constructor(e) {
		let t = `Agent Canvas requires agent-server ${u} or newer; this backend is running ${e}. Please upgrade the agent-server backend.`;
		super(t), this.name = "AgentServerUnsupportedVersionError", this.message = t, this.actualVersion = e;
	}
}, b = class extends _ {
	code = f;
	actualVersion;
	requiredVersion = u;
	constructor(e) {
		let t = `Could not determine this backend's agent-server version.${e ? ` It reported "${e}".` : ""} Agent Canvas requires agent-server ${u} or newer, but this backend did not return a valid version from /server_info. Restart or rebuild the agent-server backend, then try again.`;
		super(t), this.name = "AgentServerUnknownVersionError", this.message = t, this.actualVersion = e;
	}
}, x = (e) => n() && E(e, 401);
function S() {
	m = null, h = null;
}
function C(e) {
	return e?.host && e.host !== h ? null : m;
}
function w(e) {
	let t = g(m);
	return Array.isArray(t) ? t.includes(e) : !0;
}
function T(e) {
	return e instanceof Error && e.name === "HttpError" && "status" in e && typeof e.status == "number";
}
function E(e, t) {
	return T(e) && e.status === t;
}
function D(e) {
	return typeof e == "string" && e.trim() || null;
}
function O(e) {
	return D(e.sdk_version);
}
function k(e) {
	return D(e.version) ?? O(e);
}
function A(e) {
	let t = k(e);
	return !t || t.toLowerCase() === l ? null : t;
}
function j(e) {
	let t = A(e);
	return !t || !P(t) ? null : t;
}
function M(e) {
	return !m || e && i()?.host !== e ? null : j(m);
}
function N(e, t) {
	let n = P(e), r = P(t);
	if (!n || !r) return null;
	for (let e of [
		"major",
		"minor",
		"patch"
	]) {
		if (n[e] > r[e]) return 1;
		if (n[e] < r[e]) return -1;
	}
	return n.prerelease && !r.prerelease ? -1 : !n.prerelease && r.prerelease ? 1 : n.prerelease && r.prerelease ? n.prerelease.localeCompare(r.prerelease) : 0;
}
function P(e) {
	let [t] = e.trim().replace(/^v/, "").split("+"), [n, r] = t.split("-", 2), i = n.split(".");
	if (i.length !== 3) return null;
	let [a, o, s] = i.map((e) => Number(e));
	return [
		a,
		o,
		s
	].every((e) => Number.isInteger(e) && e >= 0) ? {
		major: a,
		minor: o,
		patch: s,
		prerelease: r
	} : null;
}
function F(e) {
	let t = A(e);
	if (!t) throw S(), new b(k(e));
	let n = N(t, u);
	if (n === null) throw S(), new b(t);
	if (n < 0) throw S(), new y(t);
}
async function I(n, r) {
	let i = o({
		host: n.host,
		sessionApiKey: n.apiKey || null,
		timeout: r
	});
	try {
		await new t(i).getSettings();
		let n = await new e(i).getServerInfo();
		return F(n), j(n);
	} catch (e) {
		throw E(e, 401) ? Error(p) : e;
	}
}
async function L() {
	let s = i();
	if (!s) {
		if (S(), a(r().backend)) throw new _("No backend configured", { noBackendConfigured: !0 });
		return null;
	}
	let l = o({
		host: s.host,
		sessionApiKey: s.apiKey || null,
		timeout: c
	}), u;
	try {
		u = await new e(l).getServerInfo();
	} catch (e) {
		throw S(), E(e, 401) ? e : new _(e instanceof Error ? e.message : null);
	}
	if (F(u), n()) try {
		await new t(l).getSettings();
	} catch (e) {
		if (E(e, 401)) throw e;
		console.warn("[agent-server] getSettings() probe failed (non-401):", e);
	}
	return m = u, h = l.host, u;
}
//#endregion
export { p as INVALID_BACKEND_API_KEY_ERROR, S as clearCachedAgentServerInfo, N as compareAgentServerVersions, C as getCachedAgentServerInfo, M as getCachedAgentServerVersion, j as getDisplayAgentServerVersion, x as isAgentServerAuthError, w as isAgentServerToolAvailable, v as isAgentServerUnavailableError, E as isSdkHttpStatusError, L as loadAgentServerInfo, I as validateLocalBackend };

//# sourceMappingURL=agent-server-compatibility.js.map