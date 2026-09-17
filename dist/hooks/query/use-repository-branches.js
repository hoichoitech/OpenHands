import { useInfiniteQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js";
import t from "../../api/git-service/git-service.api.js";
//#region src/hooks/query/use-repository-branches.ts
var n = (n, r = 30, i) => e({
	queryKey: [
		"repository",
		n,
		"branches",
		"paginated",
		r,
		i
	],
	queryFn: async ({ pageParam: e }) => !n || !i ? {
		items: [],
		next_page_id: null
	} : t.getRepositoryBranches(n, i, "", e ?? void 0, r),
	enabled: !!n && !!i,
	staleTime: 1e3 * 60 * 5,
	getNextPageParam: (e) => e.next_page_id ? e.next_page_id : void 0,
	initialPageParam: null
});
//#endregion
export { n as useRepositoryBranchesPaginated };

//# sourceMappingURL=use-repository-branches.js.map