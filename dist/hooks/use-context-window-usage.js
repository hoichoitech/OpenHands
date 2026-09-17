import e from "../stores/metrics-store.js";
import { useActiveConversation as t } from "./query/use-active-conversation.js";
import { useConversationMetrics as n } from "./query/use-conversation-metrics.js";
import { useMemo as r } from "react";
//#region src/hooks/use-context-window-usage.ts
function i(e) {
	let t = e?.context_window ?? 0;
	return t <= 0 ? null : {
		perTurnToken: e?.per_turn_token ?? 0,
		contextWindow: t
	};
}
function a() {
	let a = e((e) => e.usage), { data: o } = t(), { data: s } = n(o?.id, o?.conversation_url, o?.session_api_key, !!o?.id);
	return r(() => i(a) || i(s?.accumulated_token_usage ?? null), [a, s]);
}
//#endregion
export { a as useContextWindowUsage };

//# sourceMappingURL=use-context-window-usage.js.map