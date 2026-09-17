import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { GitProviderItemsService as t } from "../../api/git-provider-items-service.js";
//#region src/hooks/query/use-repository-git-items.ts
function n(n, r) {
	return e({
		queryKey: [
			"repository-pull-requests",
			r,
			n
		],
		queryFn: () => t.listPullRequests(n, r),
		enabled: !!(n && r),
		staleTime: 6e4,
		meta: { disableToast: !0 }
	});
}
function r(n, r) {
	return e({
		queryKey: [
			"repository-issues",
			r,
			n
		],
		queryFn: () => t.listIssues(n, r),
		enabled: !!(n && r),
		staleTime: 6e4,
		meta: { disableToast: !0 }
	});
}
//#endregion
export { r as useRepositoryIssues, n as useRepositoryPullRequests };

//# sourceMappingURL=use-repository-git-items.js.map