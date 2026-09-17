import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Typography as n } from "../../../ui/typography.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/skill-triggers.tsx
function a({ triggers: a }) {
	let { t: o } = e("openhands");
	return !a || a.length === 0 ? null : /* @__PURE__ */ i("div", {
		className: "mt-2 mb-3",
		children: [/* @__PURE__ */ r(n.Text, {
			className: "text-sm font-semibold text-[var(--oh-text-tertiary)] mb-2",
			children: o(t.COMMON$TRIGGERS)
		}), /* @__PURE__ */ r("div", {
			className: "mt-2 flex flex-wrap gap-1",
			children: a.map((e) => /* @__PURE__ */ r("span", {
				className: "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium leading-4 border border-[var(--oh-border)] bg-[var(--oh-surface)] text-tertiary-light",
				children: e
			}, e))
		})]
	});
}
//#endregion
export { a as SkillTriggers };

//# sourceMappingURL=skill-triggers.js.map