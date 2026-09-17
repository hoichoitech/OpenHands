import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { AgentState as n } from "../types/agent-state.js";
import { useQueryClient as r } from "../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { retrieveAxiosErrorMessage as i } from "../utils/retrieve-axios-error-message.js";
import { displayErrorToast as a, displaySuccessToast as o } from "../utils/custom-toast-handlers.js";
import { useEventStore as s } from "../stores/use-event-store.js";
import c from "../stores/metrics-store.js";
import { useActiveConversation as l } from "./query/use-active-conversation.js";
import { useAgentState as u } from "./use-agent-state.js";
import { useCondenseConversation as d } from "./mutation/use-condense-conversation.js";
import { useAwaitContextCompaction as f } from "./use-await-context-compaction.js";
import { formatCompactTokenCount as p } from "../utils/format-token-count.js";
import m from "react";
//#region src/hooks/use-compact-context-action.ts
function h(h = 0) {
	let { t: g } = e("openhands"), _ = r(), { data: v } = l(), { curAgentState: y } = u(), { mutate: b, isPending: x } = d(), [S, C] = m.useState(null), w = m.useRef(null), T = y === n.RUNNING || y === n.LOADING, E = x || S !== null, D = !v?.id || T || E, O = g(t.CONVERSATION$COMPACT_CONTEXT_DESCRIPTION), k = m.useEffectEvent((e) => {
		if (C(null), w.current = null, v?.id && _.invalidateQueries({ queryKey: ["conversation-metrics", v.id] }), e.outcome === "timeout") {
			a(g(t.CONVERSATION$COMPACT_CONTEXT_FAILED));
			return;
		}
		if (e.savedToken > 0) {
			o(g(t.CONVERSATION$COMPACT_CONTEXT_COMPLETE, {
				saved: p(e.savedToken),
				before: p(e.beforeToken),
				after: p(e.afterToken)
			}));
			return;
		}
		o(g(t.CONVERSATION$COMPACT_CONTEXT_COMPLETE_NO_CHANGE));
	});
	return f({
		beforeToken: S,
		baselineEventIds: S === null ? null : w.current,
		onComplete: k
	}), {
		handleCompact: () => {
			if (!v?.id || E) return;
			let e = c.getState().usage?.per_turn_token ?? h;
			w.current = new Set(s.getState().eventIds), b({
				conversationId: v.id,
				conversationUrl: v.conversation_url,
				sessionApiKey: v.session_api_key
			}, {
				onSuccess: () => {
					C(e), o(g(t.CONVERSATION$COMPACT_CONTEXT_STARTED));
				},
				onError: (e) => {
					C(null), w.current = null, a(i(e) || g(t.CONVERSATION$COMPACT_CONTEXT_FAILED));
				}
			});
		},
		isCompacting: E,
		isDisabled: D,
		description: O
	};
}
//#endregion
export { h as useCompactContextAction };

//# sourceMappingURL=use-compact-context-action.js.map