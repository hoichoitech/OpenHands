import { useConversationId as e } from "./use-conversation-id.js";
import { useQueries as t } from "../node_modules/@tanstack/react-query/build/modern/useQueries.js";
import { useActiveConversation as n } from "./query/use-active-conversation.js";
import { useRuntimeIsReady as r } from "./use-runtime-is-ready.js";
import { getGitPath as i } from "../utils/get-git-path.js";
import a from "../api/git-service/agent-server-git-service.api.js";
import { useUnifiedGetGitChanges as o } from "./query/use-unified-get-git-changes.js";
import { countGitChangeDiffStats as s, sumGitDiffLineStats as c } from "../utils/git-diff-stats.js";
import { useMemo as l } from "react";
//#region src/hooks/use-conversation-overview-git-diff-stats.ts
function u() {
	let { conversationId: u } = e(), { data: d } = n(), f = r(), { data: p, isLoading: m, isSuccess: h, isError: g } = o(), _ = d?.conversation_url, v = d?.session_api_key, y = l(() => i(d?.selected_repository, d?.workspace?.working_dir?.trim()), [d?.selected_repository, d?.workspace?.working_dir]), b = t({ queries: l(() => (p ?? []).filter((e) => e.status !== "D"), [p]).map((e) => ({
		queryKey: [
			"conversation_overview_file_diff",
			u,
			_,
			v,
			y,
			e.path
		],
		queryFn: async () => a.getGitChangeDiff(u, _, v, `${y}/${e.path}`),
		enabled: f && !!u && h && !!e.path,
		staleTime: 1e3 * 60 * 5,
		meta: { disableToast: !0 }
	})) }), x = b.some((e) => e.isLoading), S = c(b.flatMap((e) => e.data ? [s(e.data)] : []));
	return {
		additions: S.additions,
		deletions: S.deletions,
		changeCount: p?.length ?? 0,
		isLoading: m || x,
		isError: g
	};
}
//#endregion
export { u as useConversationOverviewGitDiffStats };

//# sourceMappingURL=use-conversation-overview-git-diff-stats.js.map