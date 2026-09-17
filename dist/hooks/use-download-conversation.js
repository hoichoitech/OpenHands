import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { downloadBlob as n } from "../utils/utils.js";
import { useMutation as r } from "../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { displayErrorToast as i } from "../utils/custom-toast-handlers.js";
import a from "../api/conversation-service/agent-server-conversation-service.api.js";
import { useTracking as o } from "./use-tracking.js";
//#region src/hooks/use-download-conversation.ts
var s = () => {
	let { trackDownloadTrajectoryButtonClicked: s } = o(), { t: c } = e("openhands");
	return r({
		mutationKey: ["conversations", "download"],
		mutationFn: async (e) => {
			s(), n(await a.downloadConversation(e), `conversation_${e}.zip`);
		},
		onError: () => {
			i(c(t.CONVERSATION$DOWNLOAD_ERROR));
		}
	});
};
//#endregion
export { s as useDownloadConversation };

//# sourceMappingURL=use-download-conversation.js.map