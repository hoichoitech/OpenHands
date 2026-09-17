import { I18nKey as e } from "../i18n/declaration.js";
import { displayErrorToast as t } from "./custom-toast-handlers.js";
import n from "../api/conversation-service/agent-server-conversation-service.api.js";
import { resolveConversationRuntime as r, uploadFilesToConversation as i } from "../api/conversation-file-upload.api.js";
import { convertImageToBase64 as a } from "./convert-image-to-base-64.js";
import { partitionImagesForUpload as o } from "../components/features/chat/utils/chat-input.utils.js";
import { validateFiles as s } from "./file-validation.js";
//#region src/utils/send-message-with-attachments.ts
async function c(c) {
	let { conversationId: l, content: u, images: d, files: f, imagesMarkedUploadAsFile: p, t: m } = c, { imagesToEmbed: h, imagesAsFiles: g } = o(d, p), _ = [...f, ...g], v = s([...h, ..._]);
	if (!v.isValid) throw Error(v.errorMessage ?? "Invalid attachments");
	let y = await Promise.all(h.map((e) => a(e))), b = await r(l), { skipped_files: x, uploaded_files: S } = _.length > 0 ? await i(l, _) : {
		skipped_files: [],
		uploaded_files: []
	};
	x.forEach((e) => t(e.reason));
	let C = `${m(e.CHAT_INTERFACE$AUGMENTED_PROMPT_FILES_TITLE)}: ${S.join("\n\n")}`, w = S.length > 0 ? `${u}\n\n${C}` : u, T = (/* @__PURE__ */ new Date()).toISOString(), E = {
		role: "user",
		content: [{
			type: "text",
			text: w
		}]
	};
	return y.length > 0 && E.content.push({
		type: "image",
		image_urls: y
	}), await n.sendMessage(l, E, b), {
		text: u,
		content: w,
		imageUrls: y,
		fileUrls: S,
		timestamp: T
	};
}
//#endregion
export { c as sendMessageWithAttachments };

//# sourceMappingURL=send-message-with-attachments.js.map