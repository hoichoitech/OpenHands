import e, { OPENHANDS_I18N_NAMESPACE as t, waitForI18n as n } from "../i18n/index.js";
import { displayErrorToast as r } from "./custom-toast-handlers.js";
import { consumePendingTaskAttachments as i } from "../stores/pending-task-attachments-store.js";
import { sendMessageWithAttachments as a } from "./send-message-with-attachments.js";
//#region src/utils/flush-pending-task-attachments.ts
async function o(o, s) {
	let c = i(o);
	if (c) try {
		await n(), await a({
			conversationId: s,
			content: c.content,
			images: c.images,
			files: c.files,
			imagesMarkedUploadAsFile: c.imagesMarkedUploadAsFile,
			t: e.getFixedT(null, t)
		});
	} catch (e) {
		throw r(e instanceof Error ? e.message : null), e;
	}
}
//#endregion
export { o as flushPendingTaskAttachments };

//# sourceMappingURL=flush-pending-task-attachments.js.map