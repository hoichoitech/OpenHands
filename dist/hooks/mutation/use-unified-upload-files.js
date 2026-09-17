import { useMutation as e } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { uploadFilesToConversation as t } from "../../api/conversation-file-upload.api.js";
import { useActiveConversation as n } from "../query/use-active-conversation.js";
//#region src/hooks/mutation/use-unified-upload-files.ts
var r = () => {
	let { data: r } = n();
	return e({
		mutationKey: ["unified-upload-files"],
		mutationFn: async (e) => {
			let { conversationId: n, files: i } = e;
			return t(n, i, r);
		},
		meta: { disableToast: !0 }
	});
};
//#endregion
export { r as useUnifiedUploadFiles };

//# sourceMappingURL=use-unified-upload-files.js.map