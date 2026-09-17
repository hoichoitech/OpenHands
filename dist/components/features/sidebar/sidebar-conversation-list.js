import { ConversationPanel as e } from "../conversation-panel/conversation-panel.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-conversation-list.tsx
function n({ collapsed: n }) {
	return n ? null : /* @__PURE__ */ t("div", {
		className: "flex flex-col flex-1 min-h-0",
		children: /* @__PURE__ */ t("div", {
			className: "flex min-h-0 w-full flex-1 flex-col",
			children: /* @__PURE__ */ t(e, {})
		})
	});
}
//#endregion
export { n as SidebarConversationList };

//# sourceMappingURL=sidebar-conversation-list.js.map