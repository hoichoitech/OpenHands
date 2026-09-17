import { LLM_SUBSCRIPTION_QUERY_KEYS as e } from "../query/query-keys.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import r from "../../api/llm-subscription-service.js";
//#region src/hooks/mutation/use-llm-subscription-auth.ts
function i() {
	return n({ mutationFn: r.startOpenAIDeviceLogin });
}
function a() {
	let i = t();
	return n({
		mutationFn: r.pollOpenAIDeviceLogin,
		onSuccess: () => {
			i.invalidateQueries({ queryKey: e.openaiStatus });
		}
	});
}
function o() {
	let i = t();
	return n({
		mutationFn: r.logoutOpenAI,
		onSuccess: () => {
			i.invalidateQueries({ queryKey: e.openaiStatus });
		}
	});
}
//#endregion
export { o as useLogoutOpenAISubscription, a as usePollOpenAISubscriptionLogin, i as useStartOpenAISubscriptionLogin };

//# sourceMappingURL=use-llm-subscription-auth.js.map