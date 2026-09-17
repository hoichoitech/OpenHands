import { useMutation as e } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { retrieveAxiosErrorMessage as t } from "../../utils/retrieve-axios-error-message.js";
import { displayErrorToast as n } from "../../utils/custom-toast-handlers.js";
import r from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { getErrorStatus as i } from "../query/use-settings.js";
//#region src/hooks/mutation/use-read-conversation-file.ts
var a = () => e({
	mutationKey: ["read-conversation-file"],
	meta: { disableToast: !0 },
	mutationFn: async ({ conversationId: e, filePath: t }) => r.readConversationFile(e, t),
	onError: (e) => {
		i(e) !== 404 && n(t(e));
	}
});
//#endregion
export { a as useReadConversationFile };

//# sourceMappingURL=use-read-conversation-file.js.map