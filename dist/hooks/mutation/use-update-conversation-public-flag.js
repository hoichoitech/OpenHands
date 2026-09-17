import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { useQueryClient as n } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as r } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { displayErrorToast as i } from "../../utils/custom-toast-handlers.js";
import a from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/use-update-conversation-public-flag.ts
var o = () => {
	let o = n(), { t: s } = e();
	return r({
		mutationFn: (e) => a.updateConversationPublicFlag(e.conversationId, e.isPublic),
		onMutate: async (e) => {
			let t = [
				"user",
				"conversation",
				e.conversationId
			];
			await o.cancelQueries({ queryKey: t });
			let n = o.getQueriesData({ queryKey: t });
			return o.setQueriesData({ queryKey: t }, (t) => t && typeof t == "object" ? {
				...t,
				public: e.isPublic
			} : t), { previousEntries: n };
		},
		onError: (e, n, r) => {
			r?.previousEntries?.forEach(([e, t]) => {
				o.setQueryData(e, t);
			}), i(s(t.CONVERSATION$FAILED_TO_UPDATE_PUBLIC_SHARING));
		},
		onSettled: (e, t, n) => {
			o.invalidateQueries({ queryKey: [
				"user",
				"conversation",
				n.conversationId
			] }), o.invalidateQueries({ queryKey: ["user", "conversations"] });
		}
	});
};
//#endregion
export { o as useUpdateConversationPublicFlag };

//# sourceMappingURL=use-update-conversation-public-flag.js.map