import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Search as n } from "../../../node_modules/lucide-react/dist/esm/icons/search.js";
import { cn as r } from "../../../utils/utils.js";
import { StyledTooltip as i } from "../../shared/buttons/styled-tooltip.js";
import { SIDEBAR_ICON_SLOT_CLASS as a, sidebarNavLabelClassName as o, sidebarNavRowClassName as s } from "../sidebar/sidebar-layout.js";
import { SidebarCollapsedIconSlot as c } from "../sidebar/sidebar-collapsed-icon-slot.js";
import { useCommandMenuStore as l } from "../../../stores/command-menu-store.js";
import "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/command-menu/command-menu-trigger.tsx
var f = "command-menu-trigger", p = 18;
function m({ collapsed: m }) {
	let { t: h } = e("openhands"), g = l((e) => e.open), _ = h(t.COMMAND_MENU$OPEN_LABEL), v = /* @__PURE__ */ d("button", {
		type: "button",
		"data-testid": f,
		"aria-label": _,
		onClick: g,
		className: r(s({ collapsed: m }), m ? "cursor-pointer" : "group justify-between border border-[var(--oh-border-subtle)] bg-[var(--oh-surface)]/50 hover:border-[var(--oh-border)] hover:bg-[var(--oh-surface-raised)]"),
		children: [/* @__PURE__ */ d("span", {
			className: "flex min-w-0 items-center gap-2",
			children: [m ? /* @__PURE__ */ u(c, {
				active: !1,
				children: /* @__PURE__ */ u(n, {
					width: p,
					height: p
				})
			}) : /* @__PURE__ */ u("span", {
				className: r(a, "text-[var(--oh-muted)] group-hover:text-white"),
				"aria-hidden": "true",
				children: /* @__PURE__ */ u(n, {
					width: p,
					height: p
				})
			}), /* @__PURE__ */ u("span", {
				className: o(m),
				children: _
			})]
		}), m ? null : /* @__PURE__ */ u("kbd", {
			className: "rounded-md border border-[var(--oh-border)] bg-black/20 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--oh-text-dim)]",
			children: h(t.COMMAND_MENU$SHORTCUT)
		})]
	});
	return m ? /* @__PURE__ */ u(i, {
		content: _,
		placement: "right",
		children: v
	}) : v;
}
//#endregion
export { m as CommandMenuTrigger };

//# sourceMappingURL=command-menu-trigger.js.map