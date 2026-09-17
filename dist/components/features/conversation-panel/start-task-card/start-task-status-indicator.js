import { cn as e } from "../../../../utils/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/start-task-card/start-task-status-indicator.tsx
function n({ taskStatus: n }) {
	return /* @__PURE__ */ t("div", {
		className: e("w-2 h-2 rounded-full flex-shrink-0", (() => {
			switch (n) {
				case "READY": return "bg-green-500";
				case "ERROR": return "bg-red-500";
				case "WORKING":
				case "WAITING_FOR_SANDBOX":
				case "PREPARING_REPOSITORY":
				case "RUNNING_SETUP_SCRIPT":
				case "SETTING_UP_GIT_HOOKS":
				case "SETTING_UP_SKILLS":
				case "STARTING_CONVERSATION": return "bg-yellow-500 animate-pulse";
				default: return "bg-[var(--oh-interactive-selected)]";
			}
		})()),
		"aria-label": `Task status: ${n}`
	});
}
//#endregion
export { n as StartTaskStatusIndicator };

//# sourceMappingURL=start-task-status-indicator.js.map