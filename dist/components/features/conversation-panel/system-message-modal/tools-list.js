import { ToolItem as e } from "./tool-item.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/tools-list.tsx
function n({ tools: n, expandedTools: r, onToggleTool: i }) {
	return /* @__PURE__ */ t("div", {
		className: "divide-y divide-[var(--oh-border)]",
		children: n.map((n, a) => /* @__PURE__ */ t(e, {
			tool: n,
			index: a,
			isExpanded: r[a] || !1,
			onToggle: i
		}, a))
	});
}
//#endregion
export { n as ToolsList };

//# sourceMappingURL=tools-list.js.map