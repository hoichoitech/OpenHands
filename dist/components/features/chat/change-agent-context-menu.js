import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../icons/lesson-plan.js";
import i from "../../../icons/code-tag.js";
import { ContextMenu as a } from "../../../ui/context-menu.js";
import { ContextMenuListItem as o } from "../context-menu/context-menu-list-item.js";
import { ContextMenuIconTextWithDescription as s } from "../context-menu/context-menu-icon-text-with-description.js";
import { useClickOutsideElement as c } from "../../../hooks/use-click-outside-element.js";
import "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/chat/change-agent-context-menu.tsx
function d({ activeMode: d, onClose: f, onCodeClick: p, onPlanClick: m }) {
	let { t: h } = e("openhands");
	return /* @__PURE__ */ u(a, {
		ref: c(f),
		testId: "change-agent-context-menu",
		position: "top",
		alignment: "left",
		className: "min-h-fit mb-2 min-w-[195px] max-w-[195px]",
		children: [/* @__PURE__ */ l(o, {
			testId: "code-option",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), p?.(e), f();
			},
			className: n(d === "code" && "bg-[var(--oh-interactive-hover)]"),
			children: /* @__PURE__ */ l(s, {
				icon: i,
				title: h(t.COMMON$CODE),
				description: h(t.COMMON$CODE_AGENT_DESCRIPTION),
				isActive: d === "code"
			})
		}), /* @__PURE__ */ l(o, {
			testId: "plan-option",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), m?.(e), f();
			},
			className: n(d === "plan" && "bg-[var(--oh-interactive-hover)]"),
			children: /* @__PURE__ */ l(s, {
				icon: r,
				title: h(t.COMMON$PLAN),
				description: h(t.COMMON$PLAN_AGENT_DESCRIPTION),
				isActive: d === "plan"
			})
		})]
	});
}
//#endregion
export { d as ChangeAgentContextMenu };

//# sourceMappingURL=change-agent-context-menu.js.map