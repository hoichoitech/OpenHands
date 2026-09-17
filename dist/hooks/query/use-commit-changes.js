import { useConversationId as e } from "../use-conversation-id.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveConversation as n } from "./use-active-conversation.js";
import { useRuntimeIsReady as r } from "../use-runtime-is-ready.js";
import { getGitPath as i } from "../../utils/get-git-path.js";
import a from "../../api/git-service/agent-server-git-service.api.js";
import o from "react";
//#region src/hooks/query/use-commit-changes.ts
var s = (s, c) => {
	let { conversationId: l } = e(), { data: u } = n(), d = r(), f = u?.conversation_url, p = u?.session_api_key, m = u?.selected_repository, h = u?.workspace?.working_dir?.trim(), g = o.useMemo(() => i(m, h), [m, h]);
	return t({
		queryKey: [
			"commit_changes",
			l,
			f,
			p,
			g,
			s
		],
		queryFn: async () => {
			if (!l) throw Error("No conversation ID");
			return a.getCommitChanges(f, p, g, s);
		},
		staleTime: Infinity,
		gcTime: 1e3 * 60 * 15,
		retry: !1,
		enabled: c.enabled && d && !!l,
		meta: { disableToast: !0 }
	});
};
//#endregion
export { s as useCommitChanges };

//# sourceMappingURL=use-commit-changes.js.map