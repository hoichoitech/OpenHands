import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Typography as n } from "../../../ui/typography.js";
import { Pre as r } from "../../../ui/pre.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/skill-content.tsx
function o({ content: o }) {
	let { t: s } = e("openhands");
	return /* @__PURE__ */ a("div", {
		className: "mt-2",
		children: [/* @__PURE__ */ i(n.Text, {
			className: "text-sm font-semibold text-[var(--oh-text-tertiary)] mb-2",
			children: s(t.COMMON$CONTENT)
		}), /* @__PURE__ */ i(r, {
			size: "small",
			font: "mono",
			lineHeight: "relaxed",
			padding: "medium",
			borderRadius: "medium",
			maxHeight: "small",
			overflow: "auto",
			className: "mt-2 border border-[var(--oh-border)] bg-base text-[var(--oh-text-tertiary)]",
			children: o || s(t.SKILLS_MODAL$NO_CONTENT)
		})]
	});
}
//#endregion
export { o as SkillContent };

//# sourceMappingURL=skill-content.js.map