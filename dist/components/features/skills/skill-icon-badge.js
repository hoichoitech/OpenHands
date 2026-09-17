import { cn as e } from "../../../utils/utils.js";
import t from "../../../icons/skills.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/skills/skill-icon-badge.tsx
function r({ skillName: r, className: i }) {
	return /* @__PURE__ */ n("span", {
		"aria-hidden": "true",
		title: r,
		"data-testid": `skill-icon-${r}`,
		className: e("inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden", "rounded-lg border border-white/10 bg-surface-raised text-white", "shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]", "[&>svg]:h-5 [&>svg]:w-5", i),
		children: /* @__PURE__ */ n(t, {})
	});
}
//#endregion
export { r as SkillIconBadge };

//# sourceMappingURL=skill-icon-badge.js.map