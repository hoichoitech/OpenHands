import { useConversationStore as e } from "../stores/conversation-store.js";
import t from "../api/conversation-service/conversation-service.api.js";
import { useFilesTabStore as n } from "../stores/files-tab-store.js";
import { toFilesTabPath as r } from "../utils/path-utils.js";
//#region src/services/canvas-ui.ts
var i = new Set([
	"files",
	"browser",
	"terminal",
	"planner",
	"tasklist"
]);
function a(t) {
	let n = e.getState();
	n.setSelectedTab(t), n.isRightPanelShown || (n.setHasRightPanelToggled(!0), n.setIsRightPanelShown(!0));
}
function o(e) {
	return i.has(e);
}
function s(e, n) {
	let r = t.getCurrentConversation();
	c({
		kind: "CanvasUIAction",
		command: "navigate_to_file",
		path: e
	}, n ?? r?.id ?? null);
}
function c(e, i = null) {
	switch (e.command) {
		case "navigate_to_file":
		case "show_preview": {
			if (a("files"), !e.path) return;
			let o = t.getCurrentConversation()?.workspace?.working_dir, s = r(e.path, o);
			if (!s) return;
			n.getState().setSelectedPath(s, i);
			return;
		}
		case "open_tab":
			e.tab === "vscode" ? a("files") : e.tab && o(e.tab) ? a(e.tab) : e.tab && console.warn(`[canvas_ui] Ignoring open_tab with unknown tab: ${e.tab}`);
			return;
	}
}
//#endregion
export { c as handleCanvasUIAction, s as openWorkspaceFile };

//# sourceMappingURL=canvas-ui.js.map