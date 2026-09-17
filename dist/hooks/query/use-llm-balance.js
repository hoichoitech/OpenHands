import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import n from "../../api/llm-balance-service.js";
//#region src/hooks/query/use-llm-balance.ts
var r = (r) => {
	let { backend: i } = t();
	return e({
		queryKey: [
			"llm-balance",
			i.id,
			r
		],
		queryFn: () => n.getBalance(),
		enabled: i.kind !== "cloud" && !!r,
		staleTime: Infinity,
		gcTime: 1e3 * 60 * 5,
		retry: !1,
		refetchOnWindowFocus: !1
	});
};
//#endregion
export { r as useLLMBalance };

//# sourceMappingURL=use-llm-balance.js.map