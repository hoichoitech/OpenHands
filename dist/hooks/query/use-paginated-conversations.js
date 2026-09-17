import { useNavigation as e } from "../../context/navigation-context.js";
import { isNoBackend as t } from "../../api/backend-registry/active-store.js";
import { useInfiniteQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useInfiniteQuery.js";
import { useActiveBackend as r } from "../../contexts/active-backend-context.js";
import i from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { useIsAuthed as a } from "./use-is-authed.js";
import { isAutomationsRoute as o } from "../../manifests/automation-interface.js";
//#region src/hooks/query/use-paginated-conversations.ts
var s = (s = 20) => {
	let { data: c } = a(), l = r(), { currentPath: u } = e(), d = !t(l.backend);
	return n({
		queryKey: [
			"user",
			"conversations",
			"paginated",
			s,
			l.backend.id,
			l.orgId
		],
		queryFn: async ({ pageParam: e }) => await i.searchConversations(s, e),
		enabled: !!c && d,
		getNextPageParam: (e) => e.next_page_id,
		initialPageParam: void 0,
		refetchInterval: o(u) ? !1 : 3e4,
		refetchIntervalInBackground: !1,
		meta: { backendId: l.backend.id }
	});
};
//#endregion
export { s as usePaginatedConversations };

//# sourceMappingURL=use-paginated-conversations.js.map