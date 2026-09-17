import { TaskListSection as e } from "./task-list-section.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/task-tracking/task-tracking-observation-content.tsx
function n({ event: n }) {
	let { observation: r } = n, { command: i, task_list: a } = r;
	return /* @__PURE__ */ t("div", {
		className: "flex flex-col gap-4",
		children: i === "plan" && a.length > 0 && /* @__PURE__ */ t(e, { taskList: a })
	});
}
//#endregion
export { n as TaskTrackingObservationContent };

//# sourceMappingURL=task-tracking-observation-content.js.map