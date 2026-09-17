import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import { SecretsService as n } from "../../api/secrets-service.js";
import { useMemo as r } from "react";
//#region src/hooks/query/use-get-secrets.ts
var i = (i = {}) => {
	let { nameContains: a, enabled: o = !0 } = i, s = t(), c = e({
		queryKey: [
			"secrets",
			s.backend.id,
			s.orgId
		],
		queryFn: n.getSecrets,
		enabled: o,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15
	});
	return {
		data: r(() => {
			if (!c.data) return [];
			if (!a) return c.data;
			let e = a.toLowerCase();
			return c.data.filter((t) => t.name.toLowerCase().includes(e));
		}, [c.data, a]),
		isLoading: c.isLoading,
		isError: c.isError,
		hasNextPage: !1,
		isFetchingNextPage: !1,
		fetchNextPage: () => {},
		onLoadMore: () => {},
		refetch: c.refetch
	};
};
//#endregion
export { i as useSearchSecrets };

//# sourceMappingURL=use-get-secrets.js.map