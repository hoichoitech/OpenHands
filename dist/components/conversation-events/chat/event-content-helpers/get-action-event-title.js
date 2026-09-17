import { CANVAS_UI_CLIENT_ACTION_KIND as e } from "../../../../constants/canvas-ui.js";
import { LAUNCH_CHILD_CONVERSATION_ACTION_KIND as t } from "../../../../constants/child-conversation.js";
//#region src/components/conversation-events/chat/event-content-helpers/get-action-event-title.ts
var n = (e, t) => e ? e.length > t ? `${e.substring(0, t)}...` : e : "", r = (e) => /^[a-z][a-z0-9_]*\s*:\s*[[{]/i.test(e), i = (e) => {
	let t = e.summary?.trim().replace(/\s+/g, " ") || "";
	return !t || r(t) ? null : t;
}, a = (r) => {
	let a = i(r);
	if (a) return {
		kind: "text",
		text: a
	};
	let o = r.action.kind;
	switch (o) {
		case "ExecuteBashAction":
		case "TerminalAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$RUN",
			values: { command: n(r.action.command, 80) }
		};
		case "FileEditorAction":
		case "StrReplaceEditorAction": return {
			kind: "translation",
			key: r.action.command === "view" ? "ACTION_MESSAGE$READ" : r.action.command === "create" ? "ACTION_MESSAGE$WRITE" : "ACTION_MESSAGE$EDIT",
			values: { path: r.action.path }
		};
		case "MCPToolAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$CALL_TOOL_MCP",
			values: { mcp_tool_name: r.tool_name }
		};
		case "InvokeSkillAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$INVOKE_SKILL",
			values: { name: r.action.name }
		};
		case "TaskAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$TASK",
			values: { name: r.action.subagent_type }
		};
		case "ThinkAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$THINK",
			values: {}
		};
		case "FinishAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$FINISH",
			values: {}
		};
		case "TaskTrackerAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$TASK_TRACKING",
			values: {}
		};
		case "GrepAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$GREP",
			values: { pattern: r.action.pattern ? n(r.action.pattern, 50) : "" }
		};
		case "GlobAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$GLOB",
			values: { pattern: r.action.pattern ? n(r.action.pattern, 50) : "" }
		};
		case "BrowserNavigateAction":
		case "BrowserClickAction":
		case "BrowserTypeAction":
		case "BrowserGetStateAction":
		case "BrowserGetContentAction":
		case "BrowserScrollAction":
		case "BrowserGoBackAction":
		case "BrowserListTabsAction":
		case "BrowserSwitchTabAction":
		case "BrowserCloseTabAction": return {
			kind: "translation",
			key: "ACTION_MESSAGE$BROWSE",
			values: {}
		};
		case "CanvasUIAction":
		case e: return {
			kind: "text",
			text: "CANVASUI"
		};
		case t: return {
			kind: "translation",
			key: "ACTION_MESSAGE$LAUNCH_CHILD_CONVERSATION",
			values: {}
		};
		default: return {
			kind: "text",
			text: String(o).replace("Action", "").toUpperCase()
		};
	}
};
//#endregion
export { a as getActionEventTitleDescriptor, i as getActionSummaryTitle, n as trimEventTitleText };

//# sourceMappingURL=get-action-event-title.js.map