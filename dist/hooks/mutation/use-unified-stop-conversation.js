import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { ExecutionStatus as n } from "../../types/agent-server/core/base/common.js";
import { useNavigation as r } from "../../context/navigation-context.js";
import { useQueryClient as i } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as a } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { zt as o } from "../../node_modules/react-hot-toast/dist/index.js";
import { TOAST_OPTIONS as s, displayErrorToast as c } from "../../utils/custom-toast-handlers.js";
import { patchConversationInCache as l, pauseConversation as u } from "./conversation-mutation-utils.js";
//#region src/hooks/mutation/use-unified-stop-conversation.ts
var d = () => {
	let { t: d } = e("openhands"), f = i(), { conversationId: p, navigate: m } = r();
	return a({
		mutationKey: ["stop-conversation"],
		mutationFn: async (e) => u(e.conversationId),
		onMutate: async () => {
			let e = o.loading(d(t.TOAST$STOPPING_CONVERSATION), s);
			return await f.cancelQueries({ queryKey: ["user", "conversations"] }), {
				previousConversations: f.getQueryData(["user", "conversations"]),
				toastId: e
			};
		},
		onError: (e, n, r) => {
			r?.toastId && o.dismiss(r.toastId), c(d(t.TOAST$FAILED_TO_STOP_CONVERSATION)), r?.previousConversations && f.setQueryData(["user", "conversations"], r.previousConversations);
		},
		onSuccess: (e, r, i) => {
			i?.toastId && o.dismiss(i.toastId), o.success(d(t.TOAST$CONVERSATION_STOPPED), s), l(f, r.conversationId, {
				execution_status: n.PAUSED,
				sandbox_status: "PAUSED"
			}), p === r.conversationId && m("/conversations");
		}
	});
};
//#endregion
export { d as useUnifiedPauseConversation };

//# sourceMappingURL=use-unified-stop-conversation.js.map