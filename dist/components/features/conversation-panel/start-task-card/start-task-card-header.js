import { StartTaskStatusIndicator as e } from "./start-task-status-indicator.js";
import { StartTaskStatusBadge as t } from "./start-task-status-badge.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/start-task-card/start-task-card-header.tsx
function i({ title: i, taskStatus: a }) {
	return /* @__PURE__ */ r("div", {
		className: "flex items-center gap-2 flex-1 min-w-0 overflow-hidden mr-2",
		children: [
			/* @__PURE__ */ n("div", {
				className: "flex items-center",
				children: /* @__PURE__ */ n(e, { taskStatus: a })
			}),
			/* @__PURE__ */ n("h3", {
				className: "text-sm font-medium text-content-2 truncate flex-1",
				children: i
			}),
			/* @__PURE__ */ n(t, { taskStatus: a })
		]
	});
}
//#endregion
export { i as StartTaskCardHeader };

//# sourceMappingURL=start-task-card-header.js.map