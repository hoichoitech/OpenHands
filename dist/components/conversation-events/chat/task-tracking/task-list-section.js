import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Typography as n } from "../../../../ui/typography.js";
import r from "../../../../icons/lesson-plan.js";
import { TaskItem as i } from "./task-item.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/task-tracking/task-list-section.tsx
function s({ taskList: s }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ o("div", {
		className: "flex flex-col overflow-clip bg-[var(--oh-surface)] border border-[var(--oh-border)] rounded-[12px] w-full",
		children: [/* @__PURE__ */ o("div", {
			className: "flex gap-1 items-center border-b border-[var(--oh-border)] h-[41px] px-2 shrink-0",
			children: [/* @__PURE__ */ a(r, { className: "shrink-0 w-4.5 h-4.5 text-[var(--oh-muted)]" }), /* @__PURE__ */ a(n.Text, {
				className: "text-[11px] text-nowrap text-white tracking-[0.11px] font-medium leading-[16px] whitespace-pre",
				children: c(t.COMMON$TASKS)
			})]
		}), /* @__PURE__ */ a("div", { children: s.map((e, t) => /* @__PURE__ */ a(i, { task: e }, `task-${t}`)) })]
	});
}
//#endregion
export { s as TaskListSection };

//# sourceMappingURL=task-list-section.js.map