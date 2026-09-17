import { ConversationLoading as e } from "../../conversation-loading.js";
import { useLayoutEffect as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-tabs/conversation-tab-content/suspense-pending-fallback.tsx
function r({ onPending: r }) {
	return t(() => {
		r();
	}, [r]), /* @__PURE__ */ n(e, {});
}
//#endregion
export { r as SuspensePendingFallback };

//# sourceMappingURL=suspense-pending-fallback.js.map