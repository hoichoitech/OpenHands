import { I18nKey as e } from "../../../../i18n/declaration.js";
import t from "../../../../i18n/index.js";
import { MAX_CONTENT_LENGTH as n } from "./shared.js";
//#region src/components/conversation-events/chat/event-content-helpers/get-acp-tool-call-content.ts
var r = (e) => {
	switch (e.tool_kind) {
		case "execute": return "ACTION_MESSAGE$ACP_RUN";
		case "edit": return "ACTION_MESSAGE$ACP_EDIT";
		case "read": return "ACTION_MESSAGE$ACP_READ";
		case "fetch": return "ACTION_MESSAGE$ACP_FETCH";
		default: return "ACTION_MESSAGE$ACP_TOOL";
	}
}, i = {
	read: ["Read"],
	edit: ["Edit", "Write"],
	execute: ["Bash", "Run"],
	fetch: ["Fetch", "WebFetch"]
}, a = (e) => {
	let t = e.title, n = e.tool_kind;
	if (!t || !n) return t;
	let r = i[n];
	if (!r) return t;
	for (let e of r) if (t.length > e.length && t.startsWith(e) && /\s/.test(t.charAt(e.length))) return t.slice(e.length).trimStart();
	return t;
}, o = (e) => {
	if (e == null) return "";
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e, null, 2);
	} catch {
		return String(e);
	}
}, s = (e) => e.length > 1e3 ? `${e.slice(0, n)}...` : e, c = (n) => {
	let r = n.tool_kind, i = n.raw_input, a = n.raw_output, c = n.is_error, l = "";
	if (r === "execute" && i && typeof i == "object" && "command" in i && typeof i.command == "string") {
		let { command: e } = i;
		l += `Command: \`${e}\`\n\n`;
	} else if (i != null && i !== "") {
		let e = o(i);
		e.trim() && (l += `Input:\n\`\`\`json\n${e}\n\`\`\`\n\n`);
	}
	let u = s(o(a).trim()), d = c ? "**Error:**" : "Output:", f = u || t.t(e.OBSERVATION$COMMAND_NO_OUTPUT);
	return l += `${d}\n\`\`\`\n${f}\n\`\`\``, l;
};
//#endregion
export { c as getACPToolCallContent, r as getACPToolCallTitleKey, a as stripRedundantTitlePrefix };

//# sourceMappingURL=get-acp-tool-call-content.js.map