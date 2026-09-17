import { SystemMessageContent as e } from "./system-message-content.js";
import { ToolsList as t } from "./tools-list.js";
import { EmptyToolsState as n } from "./empty-tools-state.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/tab-content.tsx
function i({ activeTab: i, systemMessage: a, expandedTools: o, onToggleTool: s }) {
	return i === "system" ? /* @__PURE__ */ r(e, { content: a.content }) : i === "tools" ? a.tools && a.tools.length > 0 ? /* @__PURE__ */ r(t, {
		tools: a.tools,
		expandedTools: o,
		onToggleTool: s
	}) : /* @__PURE__ */ r(n, {}) : null;
}
//#endregion
export { i as TabContent };

//# sourceMappingURL=tab-content.js.map