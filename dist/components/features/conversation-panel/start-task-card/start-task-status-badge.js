import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { getTaskStatusI18nKey as t } from "../../../../utils/status.js";
import { cn as n } from "../../../../utils/utils.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/start-task-card/start-task-status-badge.tsx
function i({ taskStatus: i }) {
	let { t: a } = e("openhands");
	return i === "WORKING" ? null : /* @__PURE__ */ r("span", {
		className: n("text-xs font-medium px-2 py-0.5 rounded border flex-shrink-0", (() => {
			switch (i) {
				case "READY": return "bg-green-500/10 text-green-400 border-green-500/20";
				case "ERROR": return "bg-red-500/10 text-red-400 border-red-500/20";
				default: return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
			}
		})()),
		children: a(t(i))
	});
}
//#endregion
export { i as StartTaskStatusBadge };

//# sourceMappingURL=start-task-status-badge.js.map