import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { useQueryClient as n } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as r } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { displayErrorToast as i, displaySuccessToast as a } from "../../utils/custom-toast-handlers.js";
import o from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/mutation/use-update-conversation-repository.ts
var s = () => {
	let s = n(), { t: c } = e("openhands");
	return r({
		mutationFn: (e) => o.updateConversationRepository(e.conversationId, e.repository, e.branch, e.gitProvider),
		onMutate: async (e) => {
			let t = [
				"user",
				"conversation",
				e.conversationId
			];
			await s.cancelQueries({ queryKey: t });
			let n = s.getQueriesData({ queryKey: t });
			return s.setQueriesData({ queryKey: t }, (t) => t && {
				...t,
				selected_repository: e.repository,
				selected_branch: e.branch ?? null,
				git_provider: e.gitProvider ?? null
			}), { previousEntries: n };
		},
		onError: (e, n, r) => {
			r?.previousEntries.forEach(([e, t]) => {
				s.setQueryData(e, t);
			}), i(c(t.CONVERSATION$FAILED_TO_UPDATE_REPOSITORY));
		},
		onSuccess: () => {
			a(c(t.CONVERSATION$REPOSITORY_UPDATED));
		},
		onSettled: (e, t, n) => {
			s.invalidateQueries({ queryKey: [
				"user",
				"conversation",
				n.conversationId
			] }), s.invalidateQueries({ queryKey: ["user", "conversations"] }), s.invalidateQueries({ queryKey: ["local-git-info", n.conversationId] });
		}
	});
};
//#endregion
export { s as useUpdateConversationRepository };

//# sourceMappingURL=use-update-conversation-repository.js.map