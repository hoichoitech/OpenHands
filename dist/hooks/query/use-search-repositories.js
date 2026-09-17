import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import t from "../../api/git-service/git-service.api.js";
//#region src/hooks/query/use-search-repositories.ts
function n(n, r, i, a = 100) {
	return e({
		queryKey: [
			"repositories",
			"search",
			n,
			r,
			a
		],
		queryFn: async () => r ? (await t.searchGitRepositories(n, r, a)).items : [],
		enabled: !!n && !!r && !i,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15
	});
}
//#endregion
export { n as useSearchRepositories };

//# sourceMappingURL=use-search-repositories.js.map