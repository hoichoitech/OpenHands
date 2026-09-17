import { I18nKey as e } from "../../../i18n/declaration.js";
import { cn as t } from "../../../utils/utils.js";
import { extensionModuleCardInteractiveClassName as n, extensionModuleCardSurfaceClassName as r } from "../../../utils/extension-module-card-classes.js";
import { McpLogoBadge as i } from "../mcp-logo-badge.js";
import { getDefaultMcpTransport as a } from "../../../utils/mcp-marketplace-utils.js";
import { CirclePlusCheckToggle as o } from "../../shared/buttons/circle-plus-check-toggle.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/mcp-page/marketplace-card.tsx
function l({ entry: l, onClick: u, onAdd: d }) {
	let f = a(l), p = (() => {
		switch (f?.kind) {
			case "stdio": return "STDIO";
			case "shttp": return "HTTP";
			case "sse": return "SSE";
			default: return "";
		}
	})();
	return /* @__PURE__ */ s("div", {
		role: "button",
		tabIndex: 0,
		onClick: u,
		onKeyDown: (e) => {
			e.target === e.currentTarget && (e.key === "Enter" || e.key === " ") && (e.preventDefault(), u());
		},
		"data-testid": `mcp-marketplace-card-${l.id}`,
		className: t("flex min-h-[132px] flex-col overflow-hidden p-4 text-left", r, n),
		children: /* @__PURE__ */ c("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ s(i, { entry: l }), /* @__PURE__ */ c("div", {
				className: "flex min-w-0 flex-1 flex-col gap-3",
				children: [/* @__PURE__ */ c("header", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ c("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ s("h3", {
							className: "truncate text-sm font-semibold",
							children: l.name
						}), /* @__PURE__ */ s("p", {
							className: "mt-0.5 text-xs text-tertiary-alt",
							children: p
						})]
					}), /* @__PURE__ */ s(o, {
						testId: `mcp-marketplace-toggle-${l.id}`,
						isSelected: !1,
						onToggle: (e) => {
							e && d();
						},
						enableLabelKey: e.MCP$TOGGLE_ADD_SERVER,
						disableLabelKey: e.MCP$TOGGLE_ADD_SERVER
					})]
				}), /* @__PURE__ */ s("p", {
					className: "line-clamp-3 text-xs leading-relaxed text-tertiary-light",
					children: l.description
				})]
			})]
		})
	});
}
//#endregion
export { l as MarketplaceCard };

//# sourceMappingURL=marketplace-card.js.map