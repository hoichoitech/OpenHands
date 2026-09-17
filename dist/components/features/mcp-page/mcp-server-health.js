import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { retrieveAxiosErrorMessage as r } from "../../../utils/retrieve-axios-error-message.js";
import { displayErrorToast as i } from "../../../utils/custom-toast-handlers.js";
import { useActiveBackend as a } from "../../../contexts/active-backend-context.js";
import { seedMcpServerHealth as o } from "../../../api/mcp-health/probe-mcp-server-health.js";
import { makeMcpTestErrorMessage as s } from "../../../utils/mcp-test-error-message.js";
import { useUpdateMcpServer as c } from "../../../hooks/mutation/use-update-mcp-server.js";
import { useMcpServerHealth as l } from "../../../hooks/use-mcp-server-health.js";
import "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/mcp-page/mcp-server-health.tsx
var f = {
	unchecked: "bg-[var(--oh-text-tertiary)]",
	checking: "bg-[var(--oh-interactive-selected)] animate-pulse",
	healthy: "bg-[var(--oh-status-success)]",
	failed: "bg-red-500"
}, p = "text-xs text-[var(--oh-muted)] underline transition-colors hover:text-white disabled:cursor-not-allowed disabled:opacity-60";
function m(e) {
	return e.status === "healthy" ? e.verification === "verified" ? "healthy" : "healthy-connectivity" : e.status;
}
function h(e, n) {
	switch (n.status) {
		case "checking": return e(t.MCP$HEALTH_STATUS_CHECKING);
		case "healthy": return n.verification === "verified" ? e(t.MCP$HEALTH_STATUS_VERIFIED, { count: n.toolCount }) : e(t.MCP$HEALTH_STATUS_CONNECTIVITY_ONLY);
		case "failed": return s(e, n.kind, n.error);
		default: return e(t.MCP$HEALTH_STATUS_UNCHECKED);
	}
}
function g({ server: s, catalog: g, onEdit: _ }) {
	let { t: v } = e("openhands"), { backend: y } = a(), { health: b, probe: x, reauthorize: S } = l(s), { mutate: C } = c();
	if (y.kind === "cloud") return null;
	let w = b.status === "checking", T = b.status === "failed", E = h(v, b), D = async () => {
		let e = await S();
		if (!e?.ok || !e.oauth_state || s.auth?.strategy !== "oauth2") return;
		let n = {
			...s,
			auth: {
				...s.auth,
				state: e.oauth_state
			}
		};
		C({
			serverId: s.id,
			server: n
		}, {
			onSuccess: () => o(n, e, []),
			onError: (e) => i(r(e) || v(t.ERROR$GENERIC))
		});
	};
	return /* @__PURE__ */ d("div", {
		"data-testid": `mcp-server-health-${s.id}`,
		role: "presentation",
		className: "flex flex-col gap-1.5",
		onClick: (e) => e.stopPropagation(),
		onKeyDown: (e) => e.stopPropagation(),
		children: [
			/* @__PURE__ */ d("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ u("span", {
					"data-testid": "mcp-health-dot",
					"data-status": m(b),
					"aria-hidden": "true",
					className: n("inline-block h-2 w-2 shrink-0 rounded-full", f[b.status])
				}), /* @__PURE__ */ u("p", {
					"data-testid": `mcp-health-label-${s.id}`,
					className: n("line-clamp-2 break-words text-xs", T ? "text-red-500" : "text-tertiary-alt"),
					title: E,
					children: E
				})]
			}),
			b.status === "healthy" && b.verification === "connectivity-only" ? /* @__PURE__ */ u("p", {
				className: "text-xs text-tertiary-light",
				children: v(t.MCP$HEALTH_CONNECTIVITY_ONLY_HINT)
			}) : null,
			/* @__PURE__ */ d("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [
					/* @__PURE__ */ u("button", {
						type: "button",
						"data-testid": `mcp-health-probe-${s.id}`,
						className: p,
						onClick: () => void x(),
						disabled: w,
						children: v(T ? t.MCP$HEALTH_RETRY : t.MCP$TEST_BUTTON)
					}),
					T && b.kind === "credentials" ? /* @__PURE__ */ u("button", {
						type: "button",
						"data-testid": `mcp-health-update-credentials-${s.id}`,
						className: p,
						onClick: _,
						children: v(t.MCP$HEALTH_UPDATE_CREDENTIALS)
					}) : null,
					T && s.auth?.strategy === "oauth2" ? /* @__PURE__ */ u("button", {
						type: "button",
						"data-testid": `mcp-health-reauthorize-${s.id}`,
						className: p,
						onClick: () => void D(),
						children: v(t.MCP$HEALTH_REAUTHORIZE)
					}) : null,
					T && g?.docsUrl ? /* @__PURE__ */ u("a", {
						href: g.docsUrl,
						target: "_blank",
						rel: "noreferrer",
						className: p,
						children: v(t.MCP$VIEW_DOCS)
					}) : null
				]
			})
		]
	});
}
//#endregion
export { g as McpServerHealthSection };

//# sourceMappingURL=mcp-server-health.js.map