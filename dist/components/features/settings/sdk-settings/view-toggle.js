import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { formControlTransitionClassName as r } from "../../../../utils/form-control-classes.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/settings/sdk-settings/view-toggle.tsx
var o = (e, t) => n("w-fit px-2 py-2 text-sm cursor-pointer rounded-none bg-transparent", r, "border-b-2 pb-2", e ? "text-white border-white" : "text-[var(--oh-muted)] border-transparent hover:text-white", t && "pointer-events-none opacity-30 cursor-not-allowed");
function s({ view: n, setView: r, showBasic: s = !0, showAdvanced: c, showAll: l, isDisabled: u = !1 }) {
	let { t: d } = e("openhands");
	return [
		s,
		c,
		l
	].filter(Boolean).length <= 1 ? null : /* @__PURE__ */ a("div", {
		role: "tablist",
		"aria-orientation": "horizontal",
		className: "mb-6 flex items-center gap-2",
		children: [
			s ? /* @__PURE__ */ i("button", {
				"data-testid": "sdk-section-basic-toggle",
				type: "button",
				role: "tab",
				"aria-selected": n === "basic",
				disabled: u,
				className: o(n === "basic", u),
				onClick: () => r("basic"),
				children: d(t.SETTINGS$BASIC)
			}) : null,
			c ? /* @__PURE__ */ i("button", {
				"data-testid": "sdk-section-advanced-toggle",
				type: "button",
				role: "tab",
				"aria-selected": n === "advanced",
				disabled: u,
				className: o(n === "advanced", u),
				onClick: () => r("advanced"),
				children: d(t.SETTINGS$ADVANCED)
			}) : null,
			l ? /* @__PURE__ */ i("button", {
				"data-testid": "sdk-section-all-toggle",
				type: "button",
				role: "tab",
				"aria-selected": n === "all",
				disabled: u,
				className: o(n === "all", u),
				onClick: () => r("all"),
				children: d(t.SETTINGS$ALL)
			}) : null
		]
	});
}
//#endregion
export { s as ViewToggle };

//# sourceMappingURL=view-toggle.js.map