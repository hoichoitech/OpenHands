import { useGoalStore as e } from "../../../stores/goal-store.js";
import { GoalStatusContent as t } from "./goal-status-content.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/chat/goal-status-banner.tsx
function r({ conversationId: r }) {
	let i = e((e) => e.statusByConversation), a = r ? i[r] : void 0;
	return a?.active ? /* @__PURE__ */ n(t, { status: a }) : null;
}
//#endregion
export { r as GoalStatusBanner };

//# sourceMappingURL=goal-status-banner.js.map