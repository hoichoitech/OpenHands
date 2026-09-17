import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Check as n } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { ChevronDown as r } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { cn as i } from "../../../utils/utils.js";
import { dropdownFilterTriggerClassName as a, dropdownMenuListClassName as o, dropdownMenuRowClassName as s } from "../../../utils/dropdown-classes.js";
import { useClickOutsideElement as c } from "../../../hooks/use-click-outside-element.js";
import l from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/shared/filters/enum-filter-dropdown.tsx
function f({ testId: f, value: p, onChange: m, options: h, labelKeyByValue: g, labelByValue: _, ariaLabel: v, className: y, triggerClassName: b, fullWidth: x = !1, emphasizeNonDefault: S = !0 }) {
	let { t: C } = e("openhands"), [w, T] = l.useState(!1), E = c(() => T(!1)), D = (e) => _?.[e] ?? (g ? C(g[e]) : e), O = v ?? C(t.CONVERSATION_PANEL$FILTER_LABEL), k = h[0], A = D(p);
	return /* @__PURE__ */ d("div", {
		ref: E,
		className: i("relative shrink-0", x ? "w-full" : "w-auto", y),
		"data-testid": f,
		children: [/* @__PURE__ */ d("button", {
			type: "button",
			"data-testid": "dropdown-trigger",
			"aria-haspopup": "menu",
			"aria-expanded": w,
			"aria-label": O,
			onClick: () => T((e) => !e),
			className: i(a, x && "w-full justify-between", S && k && p !== k && "border-white/60 bg-white/10", b),
			children: [/* @__PURE__ */ u("span", {
				className: "whitespace-nowrap",
				children: A
			}), /* @__PURE__ */ u(r, {
				className: i("h-4 w-4 shrink-0 text-tertiary-alt transition-transform", w && "rotate-180"),
				"aria-hidden": !0
			})]
		}), w ? /* @__PURE__ */ u("div", {
			role: "menu",
			"data-testid": `${f}-menu`,
			"aria-label": O,
			className: i("absolute right-0 top-full z-50 mt-1 min-w-full w-max", "max-h-60 overflow-auto rounded-[6px] bg-tertiary p-1 context-menu-box-shadow", o),
			children: h.map((e) => {
				let t = e === p;
				return /* @__PURE__ */ d("button", {
					type: "button",
					role: "menuitemradio",
					"aria-checked": t,
					"data-testid": `${f}-${e}`,
					onClick: () => {
						m(e), T(!1);
					},
					className: i(s, t && "bg-[var(--oh-interactive-selected)]"),
					children: [/* @__PURE__ */ u("span", {
						className: "min-w-0 flex-1 truncate",
						children: D(e)
					}), t ? /* @__PURE__ */ u(n, {
						className: "h-4 w-4 shrink-0",
						"aria-hidden": !0
					}) : null]
				}, e);
			})
		}) : null]
	});
}
//#endregion
export { f as EnumFilterDropdown };

//# sourceMappingURL=enum-filter-dropdown.js.map