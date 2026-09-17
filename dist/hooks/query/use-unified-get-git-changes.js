import { useConversationId as e } from "../use-conversation-id.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveConversation as n } from "./use-active-conversation.js";
import { useRuntimeIsReady as r } from "../use-runtime-is-ready.js";
import { getGitPath as i } from "../../utils/get-git-path.js";
import a from "../../api/git-service/agent-server-git-service.api.js";
import o from "react";
//#region src/hooks/query/use-unified-get-git-changes.ts
var s = () => {
	let { conversationId: s } = e(), { data: c } = n(), [l, u] = o.useState([]), d = o.useRef(null), f = r(), p = c?.conversation_url, m = c?.session_api_key, h = c?.selected_repository, g = c?.workspace?.working_dir?.trim(), _ = o.useMemo(() => i(h, g), [h, g]), v = t({
		queryKey: [
			"file_changes",
			s,
			p,
			m,
			_
		],
		queryFn: async () => {
			if (!s) throw Error("No conversation ID");
			return a.getGitChanges(s, p, m, _);
		},
		retry: !1,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15,
		refetchOnMount: "always",
		enabled: f && !!s,
		meta: { disableToast: !0 }
	});
	return o.useEffect(() => {
		if (!v.isFetching && v.isSuccess && v.data) {
			let e = v.data;
			if (e !== d.current) if (d.current = e, Array.isArray(e)) {
				let t = new Set(e.map((e) => e.path)), n = new Set(l.map((e) => e.path)), r = e.filter((e) => !n.has(e.path)), i = l.filter((e) => t.has(e.path));
				u([...r, ...i]);
			} else u([e]);
		}
	}, [
		v.isFetching,
		v.isSuccess,
		v.data
	]), {
		data: l,
		isLoading: v.isLoading,
		isFetching: v.isFetching,
		isSuccess: v.isSuccess,
		isError: v.isError,
		error: v.error,
		refetch: v.refetch
	};
};
//#endregion
export { s as useUnifiedGetGitChanges };

//# sourceMappingURL=use-unified-get-git-changes.js.map