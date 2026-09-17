import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Pencil as n } from "../../../node_modules/lucide-react/dist/esm/icons/pencil.js";
import { RefreshCw as r } from "../../../node_modules/lucide-react/dist/esm/icons/refresh-cw.js";
import { Trash2 as i } from "../../../node_modules/lucide-react/dist/esm/icons/trash-2.js";
import { cn as a } from "../../../utils/utils.js";
import { getLockedCloudHost as o } from "../../../api/agent-server-config.js";
import { isCloudBackendLoggedOutHealthError as s, isInvalidBackendApiKeyHealthError as c } from "../../../hooks/query/use-backends-health.js";
import { getBackendStatusLabel as l } from "./backend-status-label.js";
import { BackendStatusDot as u } from "./backend-status-dot.js";
import { DeviceFlowAuth as d } from "./device-flow-auth.js";
import { BackendVersion as f } from "./backend-version.js";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/backends/backend-row.tsx
var h = "inline-flex cursor-pointer items-center justify-center rounded-md p-1 text-muted transition-colors hover:bg-interactive-hover hover:text-white";
function g({ backend: g, health: _, orgLabel: v, onSelect: y, onEdit: b, onRemove: x, onLogin: S }) {
	let { t: C } = e("openhands"), w = c(_?.lastError), T = g.kind === "cloud" && s(_?.lastError), E = !w && !T && _?.isConnected === !1 && _.lastError ? _.lastError : null, D = T ? C(t.BACKEND$LOGGED_OUT) : l(C, g, _), O = _?.isConnected === !0 ? "text-green-300" : _?.isConnected === !1 ? "text-red-300" : "text-[var(--oh-muted)]", k = w ? !1 : _?.isConnected ?? null, A = _?.isConnected === !0 && !w, j = o();
	return /* @__PURE__ */ m("li", {
		className: "flex items-stretch",
		"data-testid": `manage-backends-row-${g.name}`,
		children: [/* @__PURE__ */ m("button", {
			type: "button",
			disabled: !A,
			onClick: y,
			className: a("flex min-w-0 flex-1 items-center gap-3 px-3 py-3 text-left", A ? "cursor-pointer transition-colors hover:bg-interactive-hover focus-visible:bg-interactive-hover focus-visible:outline-none" : "cursor-default"),
			children: [
				/* @__PURE__ */ p(u, { isConnected: k }),
				/* @__PURE__ */ m("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [
						/* @__PURE__ */ m("div", {
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ p("span", {
								className: "truncate text-sm text-white",
								children: g.name
							}), /* @__PURE__ */ p(f, { backend: g })]
						}),
						v ? /* @__PURE__ */ p("span", {
							"data-testid": `manage-backends-org-${g.name}`,
							className: "truncate text-xs text-[var(--oh-text-secondary)]",
							children: v
						}) : null,
						/* @__PURE__ */ p("span", {
							className: "truncate text-xs text-[var(--oh-muted)]",
							children: g.host
						}),
						/* @__PURE__ */ p("span", {
							"data-testid": `manage-backends-status-${g.name}`,
							className: a("truncate text-xs", O),
							children: D
						}),
						E ? /* @__PURE__ */ p("span", {
							"data-testid": `manage-backends-status-detail-${g.name}`,
							title: E,
							className: "text-xs text-red-300/80 whitespace-normal break-words",
							children: E
						}) : null
					]
				}),
				/* @__PURE__ */ p("span", {
					className: "px-2 py-1 rounded-full text-[11px] uppercase tracking-wide text-[var(--oh-text-tertiary)] bg-[var(--oh-surface)] border border-[var(--oh-border)]",
					children: g.kind === "cloud" ? C(t.BACKEND$KIND_CLOUD) : C(t.BACKEND$KIND_LOCAL)
				})
			]
		}), /* @__PURE__ */ m("div", {
			className: "flex shrink-0 items-center gap-2 px-3 py-3",
			children: [
				T && S ? /* @__PURE__ */ p(d, {
					host: g.host,
					onSuccess: S,
					testIdRoot: `manage-backends-login-${g.id}`,
					idleButtonLabel: C(t.BACKEND$LOG_BACK_IN),
					idleButtonContent: /* @__PURE__ */ p(r, {
						className: "size-4",
						strokeWidth: 2,
						"aria-hidden": !0
					}),
					className: "w-auto",
					buttonVariant: "unstyled",
					buttonClassName: h,
					statusDisplay: "modal",
					analyticsSource: "manage_backends_modal"
				}) : null,
				!j && /* @__PURE__ */ p("button", {
					type: "button",
					onClick: b,
					"aria-label": C(t.BACKEND$EDIT),
					"data-testid": `manage-backends-edit-${g.name}`,
					className: h,
					children: /* @__PURE__ */ p(n, {
						"aria-hidden": !0,
						className: "size-4",
						strokeWidth: 2
					})
				}),
				!j && /* @__PURE__ */ p("button", {
					type: "button",
					onClick: x,
					"aria-label": C(t.BACKEND$REMOVE),
					"data-testid": `manage-backends-remove-${g.name}`,
					className: h,
					children: /* @__PURE__ */ p(i, {
						"aria-hidden": !0,
						className: "size-4",
						strokeWidth: 2
					})
				})
			]
		})]
	});
}
//#endregion
export { g as BackendRow };

//# sourceMappingURL=backend-row.js.map