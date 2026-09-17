import { useConversationStore as e } from "../../stores/conversation-store.js";
import { displayErrorToast as t } from "../../utils/custom-toast-handlers.js";
import { validateFiles as n } from "../../utils/file-validation.js";
import { isFileImage as r } from "../../utils/is-file-image.js";
import { processFiles as i, processImages as a } from "../../utils/file-processing.js";
import { useCallback as o } from "react";
//#region src/hooks/chat/use-chat-attachment-upload.ts
function s() {
	let { images: s, files: c, addImages: l, addFiles: u, addFileLoading: d, removeFileLoading: f, addImageLoading: p, removeImageLoading: m, markImagesAsPasted: h } = e();
	return { handleUpload: o(async (e, o) => {
		let g = n(e, [...s, ...c]);
		if (!g.isValid) {
			t(`Error: ${g.errorMessage}`);
			return;
		}
		let _ = e.filter((e) => !r(e)), v = e.filter((e) => r(e));
		v.length > 0 && h(v.map((e) => e.name)), _.forEach((e) => d(e.name)), v.forEach((e) => p(e.name));
		try {
			let [e, n] = await Promise.all([i(_), a(v)]);
			e.successful.length > 0 && (u(e.successful), e.successful.forEach((e) => f(e.name))), n.successful.length > 0 && (l(n.successful), n.successful.forEach((e) => m(e.name))), e.failed.forEach(({ file: e, error: n }) => {
				f(e.name), t(`Failed to process file ${e.name}: ${n.message}`);
			}), n.failed.forEach(({ file: e, error: n }) => {
				m(e.name), t(`Failed to process image ${e.name}: ${n.message}`);
			});
		} catch {
			_.forEach((e) => f(e.name)), v.forEach((e) => m(e.name)), t("An unexpected error occurred while processing files");
		}
	}, [
		s,
		c,
		l,
		u,
		d,
		f,
		p,
		m,
		h
	]) };
}
//#endregion
export { s as useChatAttachmentUpload };

//# sourceMappingURL=use-chat-attachment-upload.js.map