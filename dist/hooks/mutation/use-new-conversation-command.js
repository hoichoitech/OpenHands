import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { useNavigation as n } from "../../context/navigation-context.js";
import { useQueryClient as r } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as i } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { zt as a } from "../../node_modules/react-hot-toast/dist/index.js";
import { TOAST_OPTIONS as o, displayErrorToast as s, displaySuccessToast as c } from "../../utils/custom-toast-handlers.js";
import l from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { useActiveConversation as u } from "../query/use-active-conversation.js";
import { useTracking as d } from "../use-tracking.js";
//#region src/hooks/mutation/use-new-conversation-command.ts
var f = () => {
	let f = r(), { navigate: p } = n(), { t: m } = e("openhands"), { data: h } = u(), { trackConversationCreated: g } = d();
	return i({
		mutationFn: async () => {
			if (!h?.id) throw Error("No active conversation");
			let e = await l.createConversation({ sandboxId: h.sandbox_id ?? void 0 });
			if (e.status === "ERROR") throw Error(e.detail || "Failed to create new conversation");
			return {
				newConversationId: e.app_conversation_id ? e.app_conversation_id : `task-${e.id}`,
				oldConversationId: h.id,
				taskId: e.id
			};
		},
		onMutate: () => {
			a.loading(m(t.CONVERSATION$CLEARING), {
				...o,
				id: "clear-conversation"
			});
		},
		onSuccess: (e) => {
			g({
				conversationId: e.newConversationId,
				taskId: e.taskId,
				hasRepository: !1,
				hasWorkspace: !1,
				hasInitialQuery: !1,
				hasParentConversation: !1,
				entryPoint: "new_command"
			}), a.dismiss("clear-conversation"), c(m(t.CONVERSATION$CLEAR_SUCCESS)), p(`/conversations/${e.newConversationId}`), f.invalidateQueries({ queryKey: ["user", "conversations"] }), f.invalidateQueries({ queryKey: ["v1-batch-get-app-conversations"] });
		},
		onError: (e) => {
			a.dismiss("clear-conversation");
			let n = m(t.CONVERSATION$CLEAR_UNKNOWN_ERROR);
			e instanceof Error ? n = e.message : typeof e == "string" && (n = e), s(m(t.CONVERSATION$CLEAR_FAILED, { error: n }));
		}
	});
};
//#endregion
export { f as useNewConversationCommand };

//# sourceMappingURL=use-new-conversation-command.js.map