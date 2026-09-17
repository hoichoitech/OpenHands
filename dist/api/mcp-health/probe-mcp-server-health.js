import { getCredentialValidationForServer as e } from "../../utils/mcp-credential-validation.js";
import { redactMcpSecrets as t } from "../../utils/redact-mcp-secrets.js";
import n from "../mcp-service/mcp-service.api.js";
import { getMcpServerHealthKey as r } from "../../utils/mcp-server-health-key.js";
import { beginMcpHealthCheck as i, resolveMcpHealthCheck as a, setMcpServerHealth as o } from "./mcp-health-store.js";
//#region src/api/mcp-health/probe-mcp-server-health.ts
var s = /\b(401|403)\b|unauthorized|forbidden|invalid[ _-]?(token|credentials?|api[ _-]?key)/i;
function c(e, n) {
	return {
		status: "failed",
		kind: "unknown",
		error: t(n instanceof Error ? n.message : String(n), e),
		checkedAt: Date.now()
	};
}
function l(t, n) {
	let r = Date.now();
	if (!n.ok) return {
		status: "failed",
		kind: (n.error_kind === "connection" || n.error_kind === "unknown") && s.test(n.error) ? "credentials" : n.error_kind,
		error: n.error,
		checkedAt: r
	};
	let i = e(t);
	return {
		status: "healthy",
		verification: i && n.tools.includes(i.toolCall.name) && n.tool_result && !n.tool_result.is_error ? "verified" : "connectivity-only",
		toolCount: n.tools.length,
		checkedAt: r
	};
}
async function u(e) {
	let t = r(e), o = i(t), s;
	try {
		s = l(e, await n.testServer(e));
	} catch (t) {
		s = c(e, t);
	}
	a(t, o, s);
}
async function d(e) {
	let t = r(e), o = i(t);
	try {
		let r = await n.authorizeOAuth(e);
		return a(t, o, l(e, r)), r;
	} catch (n) {
		return a(t, o, c(e, n)), null;
	}
}
function f(e, t, n) {
	let i = r(e);
	n.some((e) => r(e) === i) || o(i, l(e, t));
}
//#endregion
export { u as probeMcpServerHealth, d as reauthorizeMcpServerHealth, f as seedMcpServerHealth };

//# sourceMappingURL=probe-mcp-server-health.js.map