import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { getConversationState as n, setConversationState as r } from "../utils/conversation-local-storage.js";
import { useConversationStore as i } from "../stores/conversation-store.js";
import { CONVERSATION_QUERY_KEYS as a, LOCAL_PLANNER_MUTATION_KEYS as o } from "./query/query-keys.js";
import { useQueryClient as s } from "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as c } from "../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { displayErrorToast as l, displaySuccessToast as u } from "../utils/custom-toast-handlers.js";
import { useActiveBackend as d } from "../contexts/active-backend-context.js";
import { getStoredConversationMetadata as f } from "../api/conversation-metadata-store.js";
import { findPlannerConversationId as p } from "../utils/plan-file.js";
import m from "../api/conversation-service/agent-server-conversation-service.api.js";
import { invalidateConversationQueries as h } from "./mutation/conversation-mutation-utils.js";
import { useActiveConversation as g } from "./query/use-active-conversation.js";
import { useCreateConversation as _ } from "./mutation/use-create-conversation.js";
import { useSubConversations as v } from "./query/use-sub-conversations.js";
import { useCallback as y, useEffect as b } from "react";
//#region src/hooks/use-handle-plan-click.ts
function x(e) {
	let t = s();
	return c({
		mutationKey: o.create,
		mutationFn: (e) => m.createLocalPlanningConversation(e.parentConversationId, e.initialMessage),
		onSuccess: (n, r) => {
			e.onCreated(n.id), h(t, r.parentConversationId), t.invalidateQueries({ queryKey: a.subConversations }), e.onInitialized();
		},
		onError: e.onFailed
	});
}
function S(e) {
	let t = n(e.conversationId);
	t.subConversationTaskId && !e.subConversationTaskId && e.setSubConversationTaskId(t.subConversationTaskId);
	let r = e.serverPlanningConversationId ?? f(e.conversationId)?.local_planning_conversation_id ?? null;
	r && r !== e.localPlanningConversationId && e.setLocalPlanningConversationId(r);
}
var C = () => {
	let { t: n } = e("openhands"), { backend: a } = d(), { setConversationMode: o, setSubConversationTaskId: s, subConversationTaskId: c, setLocalPlanningConversationId: f, localPlanningConversationId: m } = i(), { data: h } = g(), { mutate: C, isPending: w } = _(), { mutate: T, isPending: E } = x({
		onCreated: f,
		onInitialized: () => {
			u(n(t.PLANNING_AGENTT$PLANNING_AGENT_INITIALIZED));
		},
		onFailed: () => {
			o("code"), l(n(t.CONVERSATION$ERROR_STARTING_CONVERSATION));
		}
	}), D = a.kind !== "cloud", { data: O } = v(D ? h?.sub_conversation_ids : void 0), k = D ? p(O, h?.id) : null;
	b(() => {
		h?.id && S({
			conversationId: h.id,
			serverPlanningConversationId: k,
			subConversationTaskId: c,
			localPlanningConversationId: m,
			setSubConversationTaskId: s,
			setLocalPlanningConversationId: f
		});
	}, [
		h?.id,
		k,
		m,
		f,
		c,
		s
	]);
	let A = !!(h?.sub_conversation_ids && h.sub_conversation_ids.length > 0 || c), j = D ? !!(m || k) : A;
	return {
		handlePlanClick: y((e, i) => {
			if (e?.preventDefault(), e?.stopPropagation(), o("plan"), a.kind !== "cloud") {
				if (!h?.id || m || k || E) return;
				T({
					parentConversationId: h.id,
					initialMessage: i
				});
				return;
			}
			A || !h?.id || C({
				parentConversationId: h.id,
				agentType: "plan",
				entryPoint: "plan_sub_conversation",
				...i ? { query: i } : {}
			}, { onSuccess: (e) => {
				u(n(t.PLANNING_AGENTT$PLANNING_AGENT_INITIALIZED)), e.task_id && (s(e.task_id), r(h.id, { subConversationTaskId: e.task_id }));
			} });
		}, [
			a.kind,
			h,
			C,
			T,
			A,
			E,
			m,
			k,
			o,
			s,
			n
		]),
		hasPlanner: j,
		isCreatingConversation: w || E
	};
};
//#endregion
export { C as useHandlePlanClick };

//# sourceMappingURL=use-handle-plan-click.js.map