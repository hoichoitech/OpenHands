import { Typography as e } from "../../../ui/typography.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/skills-modal-section.tsx
function r({ title: r, count: i, children: a }) {
	return /* @__PURE__ */ n("section", {
		className: "w-full",
		children: [/* @__PURE__ */ t("div", {
			className: "sticky top-0 z-10 border-b border-[var(--oh-border)] bg-surface-raised px-3 py-2",
			children: /* @__PURE__ */ n("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ t(e.Text, {
					className: "text-xs font-medium tracking-[0.01em] text-tertiary-light",
					children: r
				}), /* @__PURE__ */ t("span", {
					className: "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-medium leading-4 border border-[var(--oh-border)] bg-[var(--oh-surface)] text-tertiary-light",
					children: i
				})]
			})
		}), /* @__PURE__ */ t("div", {
			className: "divide-y divide-[var(--oh-border)]",
			children: a
		})]
	});
}
//#endregion
export { r as SkillsModalSection };

//# sourceMappingURL=skills-modal-section.js.map