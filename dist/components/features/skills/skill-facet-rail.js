import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { cn as t } from "../../../utils/utils.js";
import { SKILL_CATEGORY_ICONS as n } from "../../../utils/skill-category.js";
import { SkillFacetRow as r } from "./skill-facet-row.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/skills/skill-facet-rail.tsx
function o(e, t) {
	if (e === "category") return n[t];
}
function s({ groups: n, onToggle: s, className: c }) {
	let { t: l } = e("openhands");
	return n.length === 0 ? null : /* @__PURE__ */ i("div", {
		"data-testid": "skill-facet-rail",
		className: t("flex min-w-0 flex-col gap-5", c),
		children: n.map((e) => {
			let t = `skill-facet-group-${e.id}-title`;
			return /* @__PURE__ */ a("div", {
				"data-testid": `skill-facet-group-${e.id}`,
				role: "group",
				"aria-labelledby": t,
				className: "flex flex-col gap-1.5",
				children: [/* @__PURE__ */ i("span", {
					id: t,
					className: "px-1 text-[11px] font-semibold uppercase tracking-wider text-tertiary-alt",
					children: l(e.labelKey)
				}), e.rows.map((t) => /* @__PURE__ */ i(r, {
					testId: `skill-facet-${e.id}-${t.value}`,
					labelKey: t.labelKey,
					count: t.count,
					checked: t.checked,
					disabled: t.disabled,
					icon: o(e.id, t.value),
					onToggle: () => s(e.id, t.value)
				}, t.value))]
			}, e.id);
		})
	});
}
//#endregion
export { s as SkillFacetRail };

//# sourceMappingURL=skill-facet-rail.js.map