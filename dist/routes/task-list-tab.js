import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { cn as n } from "../utils/utils.js";
import { ConversationTabEmptyState as r } from "../components/features/conversation/conversation-tab-empty-state.js";
import i from "../icons/u-check-circle.js";
import { useTaskList as a } from "../hooks/use-task-list.js";
import { TaskItem as o } from "../components/features/chat/task-tracking/task-item.js";
import { jsx as s } from "react/jsx-runtime";
//#region src/routes/task-list-tab.tsx
function c() {
	let { t: c } = e("openhands"), { taskList: l } = a();
	return l.length === 0 ? /* @__PURE__ */ s(r, {
		icon: /* @__PURE__ */ s(i, {}),
		children: c(t.COMMON$NO_TASKS)
	}) : /* @__PURE__ */ s("main", {
		className: "h-full overflow-y-auto flex flex-col custom-scrollbar-always",
		children: l.map((e) => /* @__PURE__ */ s("div", {
			"data-active": e.status === "in_progress" ? "true" : "false",
			className: n("px-4 py-2", e.status === "in_progress" && "bg-[var(--oh-surface-raised)]"),
			children: /* @__PURE__ */ s(o, { task: e })
		}, e.id))
	});
}
//#endregion
export { c as default };

//# sourceMappingURL=task-list-tab.js.map