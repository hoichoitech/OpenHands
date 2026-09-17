import { ChevronDown as e } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as t } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { Typography as n } from "../../../ui/typography.js";
import { SkillTriggers as r } from "./skill-triggers.js";
import { SkillContent as i } from "./skill-content.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/skill-item.tsx
var s = {
	knowledge: "Knowledge",
	repo: "Repository",
	agentskills: "AgentSkills"
}, c = "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-medium leading-4 border border-[var(--oh-border)] bg-[var(--oh-surface)] text-tertiary-light";
function l({ skill: l, isExpanded: u, onToggle: d }) {
	return /* @__PURE__ */ o("div", { children: [/* @__PURE__ */ o("button", {
		type: "button",
		onClick: () => d(l.name),
		className: "w-full py-3 px-3 text-left flex items-center justify-between hover:bg-tertiary transition-colors",
		children: [/* @__PURE__ */ a("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ a(n.Text, {
				className: "font-bold text-content-2",
				children: l.name
			})
		}), /* @__PURE__ */ o("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ a("span", {
				className: c,
				children: s[l.type]
			}), /* @__PURE__ */ a(n.Text, {
				className: "text-[var(--oh-text-tertiary)]",
				children: a(u ? e : t, { size: 18 })
			})]
		})]
	}), u && /* @__PURE__ */ o("div", {
		className: "px-3 pb-3 pt-1 border-t border-[var(--oh-border)]",
		children: [/* @__PURE__ */ a(r, { triggers: l.triggers ?? [] }), /* @__PURE__ */ a(i, { content: l.content ?? "" })]
	})] });
}
//#endregion
export { l as SkillItem };

//# sourceMappingURL=skill-item.js.map