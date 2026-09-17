import { LLM_SUBSCRIPTION_QUERY_KEYS as e } from "./query-keys.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import n from "../../api/llm-subscription-service.js";
//#region src/hooks/query/use-llm-subscription-status.ts
function r({ enabled: r = !0 } = {}) {
	return t({
		queryKey: e.openaiStatus,
		queryFn: n.getOpenAIStatus,
		enabled: r,
		retry: !1,
		refetchOnWindowFocus: !1,
		staleTime: 1e3 * 60 * 5,
		meta: { disableToast: !0 }
	});
}
//#endregion
export { r as useOpenAISubscriptionStatus };

//# sourceMappingURL=use-llm-subscription-status.js.map