import { I18nKey as e } from "../../../../i18n/declaration.js";
import { SecurityRisk as t } from "../../../../types/agent-server/core/base/common.js";
import n from "../../../../i18n/index.js";
import { MAX_CONTENT_LENGTH as r, getDefaultEventContent as i } from "./shared.js";
//#region src/components/conversation-events/chat/event-content-helpers/get-action-content.ts
var a = (r) => {
	switch (r) {
		case t.LOW: return n.t(e.SECURITY$LOW_RISK);
		case t.MEDIUM: return n.t(e.SECURITY$MEDIUM_RISK);
		case t.HIGH: return n.t(e.SECURITY$HIGH_RISK);
		case t.UNKNOWN:
		default: return n.t(e.SECURITY$UNKNOWN_RISK);
	}
}, o = () => "", s = (e) => e.name ? `**Skill:** \`${e.name}\`` : o(), c = (e) => {
	let { action: t } = e, n = [];
	return t.pattern && n.push(`**Pattern:** \`${t.pattern}\``), t.path && n.push(`**Path:** \`${t.path}\``), "include" in t && t.include && n.push(`**Include:** \`${t.include}\``), n.length > 0 ? n.join("\n") : o();
}, l = (e) => {
	if (e.command !== "create" || !e.file_text) return o();
	let t = e.file_text;
	return t.length > 1e3 && (t = `${t.slice(0, r)}...`), `${e.path}\n${t}`;
}, u = (e) => {
	let n = `Command:\n\`${e.action.command}\``;
	return (e.security_risk === t.HIGH || e.security_risk === t.MEDIUM) && (n += `\n\n${a(e.security_risk)}`), n;
}, d = (e) => {
	let t = "**MCP Tool Call**\n\n";
	return t += `**Arguments:**\n\`\`\`json\n${JSON.stringify(e.data, null, 2)}\n\`\`\``, t;
}, f = (e) => e.thought, p = (e) => e.message.trim(), m = (e) => {
	let t = `**Command:** \`${e.command}\``;
	return e.command === "plan" && (e.task_list && e.task_list.length > 0 ? (t += `\n\n**Task List (${e.task_list.length} ${e.task_list.length === 1 ? "item" : "items"}):**\n`, e.task_list.forEach((e, n) => {
		let r = {
			todo: "⏳",
			in_progress: "🔄",
			done: "✅"
		}[e.status] || "❓";
		t += `\n${n + 1}. ${r} **[${e.status.toUpperCase().replace("_", " ")}]** ${e.title}`, e.notes && (t += `\n   *Notes: ${e.notes}*`);
	})) : t += "\n\n**Task List:** Empty"), t;
}, h = (e) => {
	switch (e.kind) {
		case "BrowserNavigateAction": {
			let t = `Browsing ${e.url}`;
			return e.new_tab && (t += "\n**New Tab:** Yes"), t;
		}
		case "BrowserClickAction": {
			let t = `**Element Index:** ${e.index}`;
			return e.new_tab && (t += "\n**New Tab:** Yes"), t;
		}
		case "BrowserTypeAction": {
			let t = e.text.length > 50 ? `${e.text.slice(0, 50)}...` : e.text;
			return `**Element Index:** ${e.index}\n**Text:** ${t}`;
		}
		case "BrowserGetStateAction": return e.include_screenshot ? "**Include Screenshot:** Yes" : o();
		case "BrowserGetContentAction": {
			let t = [];
			return e.extract_links && t.push("**Extract Links:** Yes"), e.start_from_char > 0 && t.push(`**Start From Character:** ${e.start_from_char}`), t.length > 0 ? t.join("\n") : o();
		}
		case "BrowserScrollAction": return `**Direction:** ${e.direction}`;
		case "BrowserGoBackAction": return o();
		case "BrowserListTabsAction": return o();
		case "BrowserSwitchTabAction": return `**Tab ID:** ${e.tab_id}`;
		case "BrowserCloseTabAction": return `**Tab ID:** ${e.tab_id}`;
		default: return o();
	}
}, g = (e) => {
	let { action: t } = e;
	switch (t.kind) {
		case "FileEditorAction":
		case "StrReplaceEditorAction": return l(t);
		case "ExecuteBashAction":
		case "TerminalAction": return u(e);
		case "MCPToolAction": return d(t);
		case "ThinkAction": return f(t);
		case "FinishAction": return p(t);
		case "TaskTrackerAction": return m(t);
		case "BrowserNavigateAction":
		case "BrowserClickAction":
		case "BrowserTypeAction":
		case "BrowserGetStateAction":
		case "BrowserGetContentAction":
		case "BrowserScrollAction":
		case "BrowserGoBackAction":
		case "BrowserListTabsAction":
		case "BrowserSwitchTabAction":
		case "BrowserCloseTabAction": return h(t);
		case "GrepAction":
		case "GlobAction": return c(e);
		case "InvokeSkillAction": return s(t);
		default: return i(e);
	}
};
//#endregion
export { g as getActionContent };

//# sourceMappingURL=get-action-content.js.map