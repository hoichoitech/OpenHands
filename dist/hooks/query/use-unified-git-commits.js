import { useConversationId as e } from "../use-conversation-id.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveConversation as n } from "./use-active-conversation.js";
import { useRuntimeIsReady as r } from "../use-runtime-is-ready.js";
import { getGitPath as i } from "../../utils/get-git-path.js";
import a from "../../api/git-service/agent-server-git-service.api.js";
import o from "react";
var s = () => {
	let { conversationId: s } = e(), { data: c } = n(), l = r(), u = c?.conversation_url, d = c?.session_api_key, f = c?.selected_repository, p = c?.workspace?.working_dir?.trim(), m = o.useMemo(() => i(f, p), [f, p]), h = t({
		queryKey: [
			"git_commits",
			s,
			u,
			d,
			m
		],
		queryFn: async () => {
			if (!s) throw Error("No conversation ID");
			return a.getGitCommits(u, d, m, 50);
		},
		retry: !1,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15,
		refetchOnMount: "always",
		enabled: l && !!s,
		meta: { disableToast: !0 }
	});
	return {
		commits: h.data?.commits ?? [],
		hasMore: h.data?.hasMore ?? !1,
		isUnsupported: h.data === null,
		isLoading: h.isLoading,
		isFetching: h.isFetching,
		isSuccess: h.isSuccess,
		isError: h.isError
	};
};
//#endregion
export { s as useUnifiedGitCommits };

//# sourceMappingURL=use-unified-git-commits.js.map