import { I18nKey as e } from "../../../../i18n/declaration.js";
import t from "../../../../i18n/index.js";
//#region src/components/conversation-events/chat/event-content-helpers/parse-message-from-event.ts
var n = (n) => {
	let r = n.llm_message;
	if (!r?.content) return "";
	let i = "";
	if (r.content && (Array.isArray(r.content) ? i = r.content.filter((e) => e.type === "text").map((e) => e.text).join("\n") : typeof r.content == "string" && (i = r.content)), !(Array.isArray(r.content) && r.content.some((e) => e.type === "image"))) return i;
	let a = t.t(e.CHAT_INTERFACE$AUGMENTED_PROMPT_FILES_TITLE);
	return i.split(a)[0];
};
//#endregion
export { n as parseMessageFromEvent };

//# sourceMappingURL=parse-message-from-event.js.map