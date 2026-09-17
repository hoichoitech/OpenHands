import { shouldUseInstallationRepos as e } from "../../utils/utils.js";
import { useInfiniteQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js";
import { useActiveBackend as n } from "../../contexts/active-backend-context.js";
import { useUserProviders as r } from "../use-user-providers.js";
import i from "../../api/git-service/git-service.api.js";
import { useAppInstallations as a } from "./use-app-installations.js";
//#region src/hooks/query/use-git-repositories.ts
function o(o) {
	let { provider: s, pageSize: c = 30, enabled: l = !0 } = o, { providers: u } = r(), { data: d } = a(s), f = d?.items, p = n(), m = s ? e(s, p.backend.kind) : !1, h = t({
		queryKey: [
			"repositories",
			s,
			m,
			c,
			p.backend.id,
			p.orgId,
			...m ? [f || []] : []
		],
		queryFn: async ({ pageParam: e }) => {
			if (!s) throw Error("Provider is required");
			if (m) {
				if (!f) throw Error("Missing installation list");
				let t = e;
				return await i.retrieveInstallationRepositories(s, t.installationIndex, f, t.pageId ?? void 0, c);
			}
			let t = e;
			return await i.retrieveUserGitRepositories(s, t ?? void 0, c);
		},
		getNextPageParam: (e, t, n) => {
			if (m && f) {
				let t = n;
				if (e.next_page_id) return {
					installationIndex: t.installationIndex,
					pageId: e.next_page_id
				};
				let r = t.installationIndex + 1;
				return r < f.length ? {
					installationIndex: r,
					pageId: null
				} : void 0;
			}
			return e.next_page_id;
		},
		initialPageParam: m ? {
			installationIndex: 0,
			pageId: null
		} : null,
		enabled: l && (u || []).length > 0 && !!s && (!m || Array.isArray(f) && f.length > 0),
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15,
		refetchOnWindowFocus: !1
	});
	return {
		data: h.data,
		isLoading: h.isLoading,
		isError: h.isError,
		hasNextPage: h.hasNextPage,
		isFetchingNextPage: h.isFetchingNextPage,
		fetchNextPage: h.fetchNextPage,
		onLoadMore: () => {
			h.hasNextPage && !h.isFetchingNextPage && h.fetchNextPage();
		}
	};
}
//#endregion
export { o as useGitRepositories };

//# sourceMappingURL=use-git-repositories.js.map