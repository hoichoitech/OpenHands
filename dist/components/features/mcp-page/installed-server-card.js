import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Puzzle as n } from "../../../node_modules/lucide-react/dist/esm/icons/puzzle.js";
import { cn as r } from "../../../utils/utils.js";
import { extensionModuleCardInteractiveClassName as i, extensionModuleCardSurfaceClassName as a } from "../../../utils/extension-module-card-classes.js";
import o from "../../../node_modules/@openhands/extensions/integrations/index.js";
import { McpLogoBadge as s } from "../mcp-logo-badge.js";
import { findCatalogEntryForServer as c, getMcpMarketplaceCatalog as l } from "../../../utils/mcp-marketplace-utils.js";
import { CirclePlusCheckToggle as u } from "../../shared/buttons/circle-plus-check-toggle.js";
import { getInstalledServerTitle as d } from "../../../utils/mcp-installed-server-display.js";
import { McpServerHealthSection as f } from "./mcp-server-health.js";
import "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/mcp-page/installed-server-card.tsx
function h(e) {
	switch (e) {
		case "sse": return "SSE";
		case "shttp": return "HTTP";
		case "stdio": return "STDIO";
		default: return e;
	}
}
function g(e) {
	if (e.type === "stdio") {
		let t = e.args && e.args.length > 0 ? ` ${e.args.join(" ")}` : "";
		return `${e.command ?? ""}${t}`.trim();
	}
	return e.url ?? "";
}
function _({ server: _, onEdit: v, onToggleEnabled: y }) {
	let { t: b } = e("openhands"), x = c(_, l(o)), S = d(_, x), C = g(_), w = h(_.type);
	return /* @__PURE__ */ p("div", {
		"data-testid": "mcp-server-item",
		"data-server-id": _.id,
		role: "button",
		tabIndex: 0,
		onClick: v,
		onKeyDown: (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), v());
		},
		"aria-label": b(t.MCP$EDIT_SERVER_ARIA, { name: S }),
		className: r("flex min-h-[132px] flex-col overflow-hidden p-4 text-left", a, i),
		children: /* @__PURE__ */ m("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ p(s, {
				entry: x,
				fallback: /* @__PURE__ */ p(n, { strokeWidth: 2.25 })
			}), /* @__PURE__ */ m("div", {
				className: "flex min-w-0 flex-1 flex-col gap-3",
				children: [
					/* @__PURE__ */ m("header", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ m("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ p("h3", {
								className: "truncate text-sm font-semibold",
								title: S,
								children: S
							}), /* @__PURE__ */ p("p", {
								className: "mt-0.5 text-xs text-tertiary-alt",
								children: w
							})]
						}), /* @__PURE__ */ p(u, {
							testId: `mcp-installed-toggle-${_.id}`,
							isSelected: _.enabled !== !1,
							onToggle: y,
							enableLabelKey: t.MCP$TOGGLE_ENABLE_SERVER,
							disableLabelKey: t.MCP$TOGGLE_DISABLE_SERVER,
							disableTooltipKey: t.COMMON$DISABLE
						})]
					}),
					x?.description ? /* @__PURE__ */ p("p", {
						"data-testid": `mcp-server-description-${_.id}`,
						className: "line-clamp-2 break-words text-xs leading-relaxed text-tertiary-light",
						children: x.description
					}) : null,
					C ? /* @__PURE__ */ p("p", {
						"data-testid": `mcp-server-detail-${_.id}`,
						className: "truncate text-xs text-tertiary-alt",
						title: C,
						children: C
					}) : null,
					/* @__PURE__ */ p(f, {
						server: _,
						catalog: x,
						onEdit: v
					})
				]
			})]
		})
	});
}
//#endregion
export { _ as InstalledServerCard };

//# sourceMappingURL=installed-server-card.js.map