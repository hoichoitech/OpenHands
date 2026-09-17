import { isMcpAuthCredential as e } from "../types/mcp-auth.js";
import { toMcpServerName as t } from "./mcp-server-name.js";
//#region src/utils/mcp-config.ts
var n = "**********", r = (e) => !!e && typeof e == "object" && !Array.isArray(e);
function i(e) {
	if (!r(e)) return null;
	let t = e.mcpServers;
	return r(t) && !("url" in t) && !("command" in t) ? t : e;
}
function a(e) {
	if (!r(e)) return;
	let t = Object.entries(e).filter((e) => typeof e[1] == "string");
	return t.length > 0 ? Object.fromEntries(t) : void 0;
}
function o(e) {
	return e === "**********" ? !0 : Array.isArray(e) ? e.some(o) : r(e) ? Object.values(e).some(o) : !1;
}
var s = (e) => e.enabled === !1 ? !1 : void 0, c = (e) => {
	if (e === "stdio" || e === "sse" || e === "streamable-http") return e;
	if (e === "http" || e === "shttp" || e === void 0) return "http";
};
function l(t) {
	let n = i(t);
	if (!n) return {};
	let o = {};
	for (let [t, i] of Object.entries(n)) {
		if (!r(i)) continue;
		if (typeof i.command == "string") {
			o[t] = {
				transport: "stdio",
				command: i.command,
				...Array.isArray(i.args) && i.args.every((e) => typeof e == "string") && { args: i.args },
				...a(i.env) && { env: a(i.env) },
				...typeof i.cwd == "string" && { cwd: i.cwd },
				...typeof i.description == "string" && { description: i.description },
				...typeof i.icon == "string" && { icon: i.icon },
				...typeof i.timeout == "number" && { timeout: i.timeout },
				...i.enabled === !1 && { enabled: !1 }
			};
			continue;
		}
		if (typeof i.url != "string") continue;
		let n = c(i.transport);
		!n || n === "stdio" || (o[t] = {
			transport: n,
			url: i.url,
			...a(i.headers) && { headers: a(i.headers) },
			...e(i.auth) && { auth: i.auth },
			...typeof i.description == "string" && { description: i.description },
			...typeof i.icon == "string" && { icon: i.icon },
			...typeof i.timeout == "number" && { timeout: i.timeout },
			...typeof i.sse_read_timeout == "number" && { sse_read_timeout: i.sse_read_timeout },
			...typeof i.keep_alive == "boolean" && { keep_alive: i.keep_alive },
			...i.enabled === !1 && { enabled: !1 }
		});
	}
	return o;
}
function u(e) {
	return e.type === "stdio" ? {
		transport: "stdio",
		command: e.command,
		...e.args?.length ? { args: e.args } : {},
		...e.env && Object.keys(e.env).length > 0 ? { env: e.env } : {},
		...e.enabled === !1 && { enabled: !1 }
	} : {
		transport: e.type === "sse" ? "sse" : "http",
		url: e.url,
		...e.headers && Object.keys(e.headers).length > 0 ? { headers: e.headers } : {},
		...e.auth ? { auth: e.auth } : {},
		...e.type === "shttp" && e.timeout !== void 0 ? { timeout: e.timeout } : {},
		...e.enabled === !1 && { enabled: !1 }
	};
}
var d = (e, t) => t.enabled === !1 ? { enabled: !1 } : s(e) === !1 ? { enabled: !0 } : {}, f = (e, t) => {
	if (!t) return e ? null : void 0;
	let n = {};
	for (let [e, r] of Object.entries(t)) r !== "**********" && (n[e] = r);
	for (let r of Object.keys(e ?? {})) r in t || (n[r] = null);
	return Object.keys(n).length > 0 ? n : void 0;
}, p = [
	"client_auth_method",
	"scopes",
	"client_id",
	"client_secret"
], m = (e, t) => {
	if (t === "**********" || t === void 0) return;
	if (t === null) return null;
	if (Array.isArray(t)) return o(t) || JSON.stringify(e) === JSON.stringify(t) ? void 0 : t;
	if (!r(t)) return Object.is(e, t) ? void 0 : t;
	let n = r(e) ? e : {}, i = {};
	for (let [e, r] of Object.entries(t)) {
		let t = m(n[e], r);
		t !== void 0 && (i[e] = t);
	}
	return Object.keys(i).length > 0 ? i : void 0;
}, h = (e, t) => {
	if (t === void 0) return;
	if (t === null) return null;
	let n = m(e, t), i = r(n) ? { ...n } : {}, a = r(e) ? e : {};
	for (let e of p) e in a && !(e in t) && (i[e] = null);
	if (Object.keys(i).length !== 0) return {
		type: "oauth",
		...i
	};
}, g = (e, t) => {
	if (!e || e.strategy === t.strategy) return t;
	let n = { ...t };
	for (let t of Object.keys(e)) t !== "strategy" && !(t in n) && (n[t] = null);
	return n;
}, _ = "Removing an individual header from header authentication is not supported yet. Replace the credential or clear authentication, then re-enter the headers you want to keep.", v = (e, t) => {
	let n = f(e?.strategy === "header" ? e.headers : void 0, t.headers);
	if (n) {
		if (Object.values(n).some((e) => e === null)) throw Error(_);
		return {
			strategy: "header",
			headers: n
		};
	}
}, y = (e, t) => {
	let n = e?.strategy === "oauth2" ? e : void 0, r = h(n?.authentication, t.authentication), i = m(n?.state, t.state);
	if (!(n && r === void 0 && i === void 0)) return g(e, {
		strategy: "oauth2",
		...r !== void 0 && { authentication: r },
		...i !== void 0 && { state: i }
	});
};
function b(e, t) {
	let n = d(e, t);
	if (t.type === "stdio") {
		let r = f(e.transport === "stdio" ? e.env : void 0, t.env);
		return {
			transport: "stdio",
			command: t.command,
			...t.args?.length ? { args: t.args } : e.transport === "stdio" && e.args ? { args: null } : {},
			...r === void 0 ? {} : { env: r },
			...n
		};
	}
	let r = e.transport === "stdio" ? void 0 : e, i = {
		transport: t.type === "sse" ? "sse" : "http",
		url: t.url,
		...n
	};
	if (t.type === "shttp" && (t.timeout === void 0 ? r?.timeout !== void 0 && (i.timeout = null) : i.timeout = t.timeout), t.auth) if (t.auth.strategy === "oauth2") {
		let e = y(r?.auth, t.auth);
		e !== void 0 && (i.auth = e);
	} else if (t.auth.strategy === "header" && r?.auth?.strategy === "header") {
		let e = v(r.auth, t.auth);
		e !== void 0 && (i.auth = e);
	} else o(t.auth) || (i.auth = g(r?.auth, t.auth));
	else r?.auth && (i.auth = null);
	return i;
}
var x = (e, t) => {
	let n = (e, t) => {
		let i = r(e) ? { ...e } : {};
		if (!r(t)) return i;
		for (let [e, a] of Object.entries(t)) a === null ? delete i[e] : r(a) ? i[e] = n(i[e], a) : i[e] = a;
		return i;
	};
	return n(e, t);
}, S = "Replace or clear the stored credential before renaming this MCP server.";
function C(e, t, n, r) {
	if (o(n.transport === "stdio" ? n.env : {
		auth: n.auth,
		headers: n.headers
	})) throw Error(S);
	let i = x(n, b(n, r));
	return {
		[e]: null,
		[t]: i
	};
}
function w(e, n, r) {
	let i = t(n || r);
	if (!(i in e)) return i;
	let a = 1;
	for (; `${i}_${a}` in e;) a += 1;
	return `${i}_${a}`;
}
//#endregion
export { S as MCP_RENAME_CREDENTIAL_ERROR, n as REDACTED_MCP_SECRET_VALUE, w as allocateMcpSettingsKey, b as buildMcpServerPatch, C as buildRenameMcpConfigPatch, s as getMcpServerEnabled, o as hasRedactedMcpSecretLeaf, l as parseMcpConfig, a as stringRecord, u as toCanonicalMcpServer };

//# sourceMappingURL=mcp-config.js.map