import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/skills/skill-type-badge.tsx
var r = "inline-flex shrink-0 items-center whitespace-nowrap rounded-full border border-text-secondary/35 bg-text-secondary/12 px-2 py-0.5 text-[11px] font-medium leading-4 text-tertiary-light", i = {
	agentskills: { labelKey: t.SETTINGS$SKILLS_TYPE_AGENTSKILLS },
	knowledge: { labelKey: t.SETTINGS$SKILLS_TYPE_KNOWLEDGE },
	repo: { labelKey: t.SETTINGS$SKILLS_TYPE_REPO }
};
function a({ type: t }) {
	let { t: a } = e("openhands"), o = i[t];
	return /* @__PURE__ */ n("span", {
		"data-testid": `skill-type-badge-${t}`,
		className: r,
		children: a(o.labelKey)
	});
}
//#endregion
export { a as SkillTypeBadge };

//# sourceMappingURL=skill-type-badge.js.map