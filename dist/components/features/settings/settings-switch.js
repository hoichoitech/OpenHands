import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { ToggleSwitchVisual as r } from "../../../ui/toggle-switch.js";
import i from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/settings/settings-switch.tsx
function c({ children: c, testId: l, name: u, onToggle: d, defaultIsToggled: f, isToggled: p, isBeta: m, isDisabled: h, togglePosition: g = "left" }) {
	let { t: _ } = e("openhands"), [v, y] = i.useState(f ?? !1), b = (e) => {
		h || (y(e), d?.(e));
	}, x = /* @__PURE__ */ o("input", {
		hidden: !0,
		"data-testid": l,
		name: u,
		type: "checkbox",
		onChange: (e) => b(e.target.checked),
		checked: p ?? v,
		disabled: h
	}), S = /* @__PURE__ */ o(r, { enabled: p ?? v }), C = c || m ? /* @__PURE__ */ s("div", {
		className: "flex items-center gap-1",
		children: [/* @__PURE__ */ o("span", {
			className: "text-sm",
			children: c
		}), m && /* @__PURE__ */ o("span", {
			className: "text-[11px] leading-4 text-base font-[500] tracking-tighter bg-primary px-1 rounded-full",
			children: _(t.BADGE$BETA)
		})]
	}) : null;
	return /* @__PURE__ */ s("label", {
		className: n("flex items-center gap-2", g === "right" ? "w-full justify-between" : "w-fit", h ? "cursor-not-allowed opacity-50" : "cursor-pointer"),
		children: [x, g === "right" ? /* @__PURE__ */ s(a, { children: [C, S] }) : /* @__PURE__ */ s(a, { children: [S, C] })]
	});
}
//#endregion
export { c as SettingsSwitch };

//# sourceMappingURL=settings-switch.js.map