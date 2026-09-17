import { isActionEvent as e, isObservationEvent as t } from "../../../types/agent-server/type-guards.js";
//#region src/components/conversation-events/chat/event-thought-helpers.ts
var n = (e) => e.thought.filter((e) => e.type === "text").map((e) => e.text).join("\n"), r = (e) => e.reasoning_content ? e.reasoning_content : e.thinking_blocks?.length ? e.thinking_blocks.filter((e) => e.type === "thinking").map((e) => e.thinking).join("\n\n") : "", i = (e) => n(e).trim().length > 0, a = (e, t) => {
	let n = e.replace(/^\s+/, "");
	if (!n.startsWith("<think>")) return {
		reasoning: "",
		message: e
	};
	let r = n.slice(7), i = r.indexOf("</think>");
	return i === -1 ? t?.streaming ? {
		reasoning: r.trim(),
		message: ""
	} : {
		reasoning: "",
		message: e
	} : {
		reasoning: r.slice(0, i).trim(),
		message: r.slice(i + 8).trim()
	};
}, o = (n, r) => {
	if (e(n)) return n.action.kind === "ThinkAction" ? null : i(n) ? n : null;
	if (t(n)) {
		let t = r.find((t) => e(t) && t.id === n.action_id);
		return !t || t.action.kind === "ThinkAction" ? null : i(t) ? t : null;
	}
	return null;
};
//#endregion
export { n as getActionThoughtText, r as getReasoningContent, o as getThoughtSourceAction, a as splitInlineThink };

//# sourceMappingURL=event-thought-helpers.js.map