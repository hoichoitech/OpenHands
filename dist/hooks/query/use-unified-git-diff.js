import { useConversationId as e } from "../use-conversation-id.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveConversation as n } from "./use-active-conversation.js";
import { getGitPath as r } from "../../utils/get-git-path.js";
import i from "../../api/git-service/agent-server-git-service.api.js";
import a from "react";
//#region src/hooks/query/use-unified-git-diff.ts
var o = (o) => {
	let { conversationId: s } = e(), { data: c } = n(), l = c?.conversation_url, u = c?.session_api_key, d = c?.selected_repository, f = c?.workspace?.working_dir?.trim(), p = a.useMemo(() => `${r(d, f)}/${o.filePath}`, [
		d,
		o.filePath,
		f
	]), m = o.type === "D";
	return t({
		queryKey: o.commit ? [
			"commit_file_diff",
			s,
			l,
			u,
			o.commit,
			p
		] : [
			"file_diff",
			s,
			l,
			u,
			p
		],
		queryFn: async () => {
			if (!s) throw Error("No conversation ID");
			return i.getGitChangeDiff(s, l, u, p, o.commit);
		},
		enabled: o.enabled && (!m || !!o.commit),
		staleTime: o.commit ? Infinity : 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15
	});
};
//#endregion
export { o as useUnifiedGitDiff };

//# sourceMappingURL=use-unified-git-diff.js.map