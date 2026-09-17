import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import t from "../../api/git-service/git-service.api.js";
//#region src/hooks/query/use-search-branches.ts
function n(n, r, i = 30, a) {
	return e({
		queryKey: [
			"repository",
			n,
			"branches",
			"search",
			r,
			i,
			a
		],
		queryFn: async () => !n || !r || !a ? [] : (await t.searchRepositoryBranches(n, a, r, void 0, i)).items,
		enabled: !!n && !!r && !!a,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15
	});
}
//#endregion
export { n as useSearchBranches };

//# sourceMappingURL=use-search-branches.js.map