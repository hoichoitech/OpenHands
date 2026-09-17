import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { ChevronDown as n } from "../../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as r } from "../../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { Typography as i } from "../../../../ui/typography.js";
import { SkillItemExpanded as a } from "./skill-item-expanded.js";
import o from "react";
import { Fragment as s, jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/skill-ready-content-list.tsx
function u({ items: u, titleKey: d = t.SKILLS$TRIGGERED_SKILL_KNOWLEDGE }) {
	let { t: f } = e("openhands"), [p, m] = o.useState({}), h = (e) => {
		m((t) => ({
			...t,
			[e]: !t[e]
		}));
	};
	return /* @__PURE__ */ l("div", {
		className: "flex flex-col gap-1 mt-1",
		children: [/* @__PURE__ */ c(i.Text, {
			className: "font-bold text-[var(--oh-foreground)] text-sm px-2 py-1",
			children: f(d)
		}), u.map((e) => {
			let t = p[e.name] || !1;
			return /* @__PURE__ */ l("div", {
				className: "border border-[var(--oh-border-subtle)] rounded-md overflow-hidden",
				children: [/* @__PURE__ */ l("button", {
					type: "button",
					onClick: () => h(e.name),
					className: "w-full py-1.5 px-2 text-left flex items-center gap-2 hover:bg-tertiary transition-colors cursor-pointer",
					children: [/* @__PURE__ */ c(i.Text, {
						className: "text-[var(--oh-text-tertiary)]",
						children: c(t ? n : r, { size: 14 })
					}), /* @__PURE__ */ c(i.Text, {
						className: "font-normal text-[var(--oh-foreground)] text-sm",
						children: e.name
					})]
				}), t && e.content && /* @__PURE__ */ l(s, { children: [/* @__PURE__ */ c("hr", { className: "border-[var(--oh-border-subtle)]" }), /* @__PURE__ */ c(a, { content: e.content })] })]
			}, e.name);
		})]
	});
}
//#endregion
export { u as SkillReadyContentList };

//# sourceMappingURL=skill-ready-content-list.js.map