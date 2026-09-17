import { I18nKey as e } from "../../../../i18n/declaration.js";
import t from "../../../../i18n/index.js";
import "../../../../constants/canvas-ui.js";
import { MAX_CONTENT_LENGTH as n, getDefaultEventContent as r } from "./shared.js";
import { getObservationResult as i } from "./get-observation-result.js";
//#region src/components/conversation-events/chat/event-content-helpers/get-observation-content.ts
var a = (e) => {
	let { observation: t } = e;
	if (t.error) return `**Error:**\n${t.error}`;
	let n = "content" in t && Array.isArray(t.content) ? t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n") : null;
	return i(e) === "success" && "old_content" in t && "new_content" in t && t.old_content && t.new_content || t.command === "view" ? `\`\`\`\n${n || t.output}\n\`\`\`` : n || t.output;
}, o = (r) => {
	let { observation: i } = r, a = i.content.filter((e) => e.type === "text").map((e) => e.text).join("\n") || "";
	a.length > 1e3 && (a = `${a.slice(0, n)}...`);
	let o = "";
	return i.command && (o += `Command: \`${i.command}\`\n\n`), o += `Output:\n\`\`\`sh\n${a.trim() || t.t(e.OBSERVATION$COMMAND_NO_OUTPUT)}\n\`\`\``, o;
}, s = (e) => {
	let { observation: t } = e, r = "content" in t && Array.isArray(t.content) ? t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n") : t.output || "", i = "";
	return t.error ? i += `**Error:**\n${t.error}` : r ? i += `**Output:**\n${r}` : i += "Browser action completed successfully.", i.length > 1e3 && (i = `${i.slice(0, n)}...(truncated)`), i;
}, c = (e) => {
	let { observation: t } = e, r = t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n"), i = `**Tool:** ${t.tool_name}\n\n`;
	return t.is_error ? i += `**Error:**\n${r}` : i += `**Result:**\n${r}`, i.length > 1e3 && (i = `${i.slice(0, n)}...`), i;
}, l = (e) => {
	let { observation: t } = e, r = t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n"), i = `${t.skill_name ? `**Skill:** \`${t.skill_name}\`\n\n` : ""}${t.is_error ? `**Error:**\n${r}` : r}`;
	return i.length > 1e3 && (i = `${i.slice(0, n)}...(truncated)`), i;
}, u = (e) => e.observation.content.filter((e) => e.type === "text").map((e) => e.text).join("\n"), d = (e) => {
	let { observation: t } = e, n = t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n");
	if (t.is_error) return n ? `**Error:**\n${n}` : `**Error:**\nFailed to switch LLM profile \`${t.profile_name}\`.`;
	let r = [`**Profile:** \`${t.profile_name}\``];
	return t.active_model && r.push(`**Active model:** \`${t.active_model}\``), t.reason && r.push(`**Reason:** ${t.reason}`), r.join("\n");
}, f = (e) => {
	let { observation: t } = e, { command: n, task_list: r } = t, i = `**Command:** \`${n}\``;
	return n === "plan" && r.length > 0 ? (i += `\n\n**Task List (${r.length} ${r.length === 1 ? "item" : "items"}):**\n`, r.forEach((e, t) => {
		let n = {
			todo: "⏳",
			in_progress: "🔄",
			done: "✅"
		}[e.status] || "❓";
		i += `\n${t + 1}. ${n} **[${e.status.toUpperCase().replace("_", " ")}]** ${e.title}`, e.notes && (i += `\n   *Notes: ${e.notes}*`);
	})) : n === "plan" && (i += "\n\n**Task List:** Empty"), "content" in t && t.content && typeof t.content == "string" && t.content.trim() && (i += `\n\n**Result:** ${t.content.trim()}`), i;
}, p = (e) => {
	let { observation: t } = e;
	return t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n") || "";
}, m = (e) => {
	let { observation: t } = e, n = t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n"), r = "";
	return t.is_error ? r += `**Error:**\n${n}` : r += n, r;
}, h = (e) => {
	let { observation: t } = e, r = t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n"), i = `**Pattern:** \`${t.pattern}\`\n`;
	return i += `**Search Path:** \`${t.search_path}\`\n\n`, t.is_error ? i += `**Error:**\n${r}` : t.files.length === 0 ? i += "**Result:** No files found." : (i += `**Files Found (${t.files.length}${t.truncated ? "+, truncated" : ""}):**\n`, i += t.files.map((e) => `- \`${e}\``).join("\n")), i.length > 1e3 && (i = `${i.slice(0, n)}...(truncated)`), i;
}, g = (e) => {
	let { observation: t } = e, r = t.content.filter((e) => e.type === "text").map((e) => e.text).join("\n"), i = `**Pattern:** \`${t.pattern}\`\n`;
	return i += `**Search Path:** \`${t.search_path}\`\n`, t.include_pattern && (i += `**Include:** \`${t.include_pattern}\`\n`), i += "\n", t.is_error ? i += `**Error:**\n${r}` : t.matches.length === 0 ? i += "**Result:** No matches found." : (i += `**Matches (${t.matches.length}${t.truncated ? "+, truncated" : ""}):**\n`, i += t.matches.map((e) => `- \`${e}\``).join("\n")), i.length > 1e3 && (i = `${i.slice(0, n)}...(truncated)`), i;
}, _ = (e) => {
	switch (e.observation.kind) {
		case "FileEditorObservation":
		case "StrReplaceEditorObservation": return a(e);
		case "ExecuteBashObservation":
		case "TerminalObservation": return o(e);
		case "BrowserObservation": return s(e);
		case "MCPToolObservation": return c(e);
		case "TaskTrackerObservation": return f(e);
		case "ThinkObservation": return p(e);
		case "FinishObservation": return m(e);
		case "GlobObservation": return h(e);
		case "GrepObservation": return g(e);
		case "InvokeSkillObservation": return l(e);
		case "CanvasUIObservation": return u(e);
		case "ClientToolObservation": return e.tool_name === "canvas_ui_control" ? u(e) : r(e);
		case "SwitchLLMObservation": return d(e);
		default: return r(e);
	}
};
//#endregion
export { _ as getObservationContent };

//# sourceMappingURL=get-observation-content.js.map