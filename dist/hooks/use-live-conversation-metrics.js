import e from "../stores/metrics-store.js";
import { useActiveConversation as t } from "./query/use-active-conversation.js";
import { useConversationMetrics as n } from "./query/use-conversation-metrics.js";
import { useMemo as r } from "react";
//#region src/hooks/use-live-conversation-metrics.ts
function i(i = !0) {
	let a = e((e) => e.cost), o = e((e) => e.max_budget_per_task), s = e((e) => e.usage), { data: c } = t(), { data: l } = n(c?.id, c?.conversation_url, c?.session_api_key, i);
	return r(() => a !== null || s !== null ? {
		cost: a,
		max_budget_per_task: o,
		usage: s
	} : l ? {
		cost: l.accumulated_cost,
		max_budget_per_task: l.max_budget_per_task,
		usage: l.accumulated_token_usage ? {
			prompt_tokens: l.accumulated_token_usage.prompt_tokens ?? 0,
			completion_tokens: l.accumulated_token_usage.completion_tokens ?? 0,
			cache_read_tokens: l.accumulated_token_usage.cache_read_tokens ?? 0,
			cache_write_tokens: l.accumulated_token_usage.cache_write_tokens ?? 0,
			context_window: l.accumulated_token_usage.context_window ?? 0,
			per_turn_token: l.accumulated_token_usage.per_turn_token ?? 0
		} : null
	} : {
		cost: null,
		max_budget_per_task: null,
		usage: null
	}, [
		l,
		a,
		o,
		s
	]);
}
//#endregion
export { i as useLiveConversationMetrics };

//# sourceMappingURL=use-live-conversation-metrics.js.map