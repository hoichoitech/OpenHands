import { MCPClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/mcp-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t, getRegisteredBackends as n } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as r } from "../agent-server-client-options.js";
import { getCredentialValidationForServer as i } from "../../utils/mcp-credential-validation.js";
import { redactMcpSecrets as a } from "../../utils/redact-mcp-secrets.js";
import { substituteRedactedMcpCredentials as o } from "./mcp-redacted-credentials.js";
//#region src/api/mcp-service/mcp-service.api.ts
var s = 120;
function c(e) {
	return e.type === "stdio" ? {
		type: "stdio",
		command: e.command,
		...e.args?.length && { args: e.args },
		...e.env && Object.keys(e.env).length > 0 && { env: e.env }
	} : {
		type: e.type === "sse" ? "sse" : "http",
		url: e.url,
		...e.headers && Object.keys(e.headers).length > 0 && { headers: e.headers },
		...e.auth ? { auth: e.auth } : {}
	};
}
function l(e) {
	return e.auth?.strategy === "oauth2" ? s : e.timeout;
}
async function u(e) {
	let t = i(e), n = await o(e), r = c(n), a = l(e);
	return {
		request: {
			server: r,
			...e.name ? { name: e.name } : {},
			...a === void 0 ? {} : { timeout: a },
			...t ? { tool_call: t.toolCall } : {}
		},
		substituted: n
	};
}
function d(e, t) {
	return e.ok ? e.tool_result ? {
		...e,
		tool_result: {
			...e.tool_result,
			text: a(e.tool_result.text, ...t)
		}
	} : e : {
		...e,
		error: a(e.error, ...t)
	};
}
function f(e, t, n) {
	let r = d(e, n);
	if (r.ok && t && r.tool_result && r.tools.includes(t.toolCall.name)) {
		let e = t.interpret(r.tool_result);
		if (e) return {
			ok: !1,
			error: e,
			error_kind: "credentials"
		};
	}
	return r;
}
function p() {
	if (t().backend.kind === "local") {
		let { host: e, apiKey: t } = r();
		return {
			host: e,
			...t ? { apiKey: t } : {}
		};
	}
	let e = n().find((e) => e.kind === "local" && e.host);
	if (e) return {
		host: e.host.replace(/\/+$/, ""),
		...e.apiKey ? { apiKey: e.apiKey } : {}
	};
	throw Error("OAuth authorization requires a reachable local backend.");
}
function m() {
	let { host: t, apiKey: n } = p();
	return new e({
		host: t,
		...n ? { apiKey: n } : {},
		timeout: 125e3
	});
}
function h(e) {
	return e.status === "succeeded" ? {
		ok: !0,
		tools: e.tools ?? [],
		...e.tool_result !== void 0 && { tool_result: e.tool_result },
		...e.oauth_state !== void 0 && { oauth_state: e.oauth_state }
	} : {
		ok: !1,
		error: e.error || "OAuth authorization did not complete",
		error_kind: e.error_kind || "unknown"
	};
}
var g = (e) => new Promise((t) => {
	window.setTimeout(t, e);
}), _ = class n {
	static async testServer(n) {
		if (t().backend.kind === "cloud") return {
			ok: !0,
			tools: []
		};
		let a = i(n), { host: o, apiKey: s } = r(), c = new e({
			host: o,
			...s ? { apiKey: s } : {}
		});
		try {
			let { request: e, substituted: t } = await u(n);
			return f(await c.testServer(e), a, [t, n]);
		} finally {
			c.close();
		}
	}
	static async startOAuth(e) {
		let t = m();
		try {
			return await n.startOAuthWithClient(t, e);
		} finally {
			t.close();
		}
	}
	static async getOAuthStatus(e) {
		let t = m();
		try {
			return await n.getOAuthStatusWithClient(t, e);
		} finally {
			t.close();
		}
	}
	static async submitOAuthCallback(e, t) {
		let r = m();
		try {
			return await n.submitOAuthCallbackWithClient(r, e, t);
		} finally {
			r.close();
		}
	}
	static async authorizeOAuth(e) {
		let t = i(e), r = (n) => f(n, t, [e]), a = window.open("about:blank", "_blank"), o = m();
		try {
			let t = await n.startOAuthWithClient(o, e);
			if (!t.ok || !t.job_id || !t.authorization_url) return a?.close(), r({
				ok: !1,
				error: t.error || "Could not start OAuth authorization",
				error_kind: t.error_kind || "unknown"
			});
			let i = await n.getOAuthStatusWithClient(o, t.job_id);
			for (let e = 0; e < 20; e += 1) {
				if (i.status === "succeeded" || i.status === "failed") return a?.close(), r(h(i));
				if (i.callback_ready) break;
				await g(250), i = await n.getOAuthStatusWithClient(o, t.job_id);
			}
			a && (a.location.href = t.authorization_url);
			for (let e = 0; e < s; e += 1) if (await g(1e3), i = await n.getOAuthStatusWithClient(o, t.job_id), i.status === "succeeded" || i.status === "failed") return a?.close(), r(h(i));
			return {
				ok: !1,
				error: "OAuth authorization timed out",
				error_kind: "timeout"
			};
		} finally {
			o.close();
		}
	}
	static async startOAuthWithClient(e, t) {
		let { request: n } = await u(t);
		return e.startOAuth(n);
	}
	static async getOAuthStatusWithClient(e, t) {
		return await e.getOAuthStatus(t);
	}
	static async submitOAuthCallbackWithClient(e, t, n) {
		return await e.submitOAuthCallback(t, { callback_url: n });
	}
};
//#endregion
export { _ as default };

//# sourceMappingURL=mcp-service.api.js.map