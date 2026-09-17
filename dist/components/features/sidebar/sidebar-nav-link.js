import { Pin as e } from "../../../node_modules/lucide-react/dist/esm/icons/pin.js";
import { cn as t } from "../../../utils/utils.js";
import { useNavigation as n } from "../../../context/navigation-context.js";
import { StyledTooltip as r } from "../../shared/buttons/styled-tooltip.js";
import { NavigationLink as i } from "../../shared/navigation-link.js";
import { hoverRevealActionClassName as a } from "../../../utils/hover-reveal-classes.js";
import { SIDEBAR_ICON_SLOT_CLASS as o, SIDEBAR_ROW_INTERACTIVE_CLASS as s, sidebarNavLabelClassName as c, sidebarNavRowClassName as l } from "./sidebar-layout.js";
import { SidebarCollapsedIconSlot as u } from "./sidebar-collapsed-icon-slot.js";
import "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-nav-link.tsx
function p(e, t, n) {
	return t === "/" || n ? e === t : e === t || e.startsWith(`${t}/`);
}
function m({ to: m, label: h, end: g = !1, indent: _ = !1, testId: v, disabled: y = !1, icon: b, collapsed: x = !1, hoverContent: S, forceActive: C = !1, pinAction: w }) {
	let { currentPath: T } = n(), E = C || p(T, m, g), D = !x && w != null, O = /* @__PURE__ */ f(i, {
		to: m,
		end: g,
		"data-testid": v,
		tabIndex: y ? -1 : 0,
		"aria-label": x ? h : void 0,
		"aria-disabled": y || void 0,
		onClick: (e) => {
			y && e.preventDefault();
		},
		className: t(l({
			indent: _,
			collapsed: x
		}), !x && (E ? s.active : s.idle), y && "opacity-50", y && "pointer-events-none", D && "pr-9"),
		children: [b ? x ? /* @__PURE__ */ d(u, {
			active: E,
			children: b
		}) : /* @__PURE__ */ d("span", {
			className: o,
			children: b
		}) : null, /* @__PURE__ */ d("span", {
			className: c(x),
			children: h
		})]
	});
	return x ? /* @__PURE__ */ d(r, {
		content: S ?? h,
		placement: "right",
		tooltipClassName: S ? "p-0 bg-tertiary text-white" : void 0,
		children: O
	}) : w ? /* @__PURE__ */ f("div", {
		className: "group relative",
		children: [O, /* @__PURE__ */ d("button", {
			type: "button",
			"data-testid": w.testId,
			"aria-pressed": w.pinned,
			"aria-label": w.label,
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), w.onToggle();
			},
			className: t("absolute right-1.5 top-1/2 -translate-y-1/2", "flex shrink-0 cursor-pointer items-center justify-center rounded-md p-1", "text-[var(--oh-muted)] hover:bg-white/10 hover:text-white", a(w.pinned)),
			children: /* @__PURE__ */ d(e, {
				className: t("h-3.5 w-3.5", w.pinned && "fill-current"),
				"aria-hidden": !0
			})
		})]
	}) : O;
}
//#endregion
export { m as SidebarNavLink };

//# sourceMappingURL=sidebar-nav-link.js.map