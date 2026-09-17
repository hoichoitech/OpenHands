import { useNavigation as e } from "../../context/navigation-context.js";
import { useOptionalConversationId as t } from "../use-conversation-id.js";
import { consumePendingTaskDraft as n, setConversationState as r } from "../../utils/conversation-local-storage.js";
import { useQuery as i } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useOptimisticUserMessageStore as a } from "../../stores/optimistic-user-message-store.js";
import { getStoredConversationMetadata as o, setStoredConversationMetadata as s, toPluginCoordinates as c } from "../../api/conversation-metadata-store.js";
import l from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { trackCloudConversationReady as u } from "../../services/cloud-funnel-analytics.js";
import { flushPendingTaskAttachments as d } from "../../utils/flush-pending-task-attachments.js";
import { clearPendingTaskMessageLink as f, consumeScheduledPendingTaskMessageReassign as p, linkPendingTaskMessages as m, schedulePendingTaskMessageReassign as h } from "../../utils/pending-task-message-link.js";
import { useBackendScopedPath as g } from "../use-backend-scoped-path.js";
import { useEffect as _, useLayoutEffect as v, useRef as y } from "react";
//#region src/hooks/query/use-task-polling.ts
var b = (e, t) => {
	let n = e.request.plugins?.map(c);
	if (!n?.length) return;
	let r = o(t);
	s(t, {
		...r,
		selected_repository: r?.selected_repository ?? e.request.selected_repository ?? null,
		selected_branch: r?.selected_branch ?? e.request.selected_branch ?? null,
		git_provider: r?.git_provider ?? e.request.git_provider ?? null,
		plugins: n
	});
}, x = () => {
	let { conversationId: e } = t(), n = !!e && e.startsWith("task-"), r = n ? e.replace("task-", "") : null, a = i({
		queryKey: ["start-task", r],
		queryFn: async () => r ? l.getStartTask(r) : null,
		enabled: !!r,
		refetchInterval: (e) => {
			let t = e.state.data;
			return !t || t.status === "READY" || t.status === "ERROR" ? !1 : 3e3;
		},
		retry: !1
	});
	return {
		isTask: n,
		taskId: r,
		conversationId: n ? null : e ?? null,
		task: a.data,
		taskStatus: a.data?.status,
		taskDetail: a.data?.detail,
		taskError: a.error,
		isLoadingTask: a.isLoading,
		repositoryInfo: {
			selectedRepository: a.data?.request?.selected_repository,
			selectedBranch: a.data?.request?.selected_branch,
			gitProvider: a.data?.request?.git_provider
		}
	};
}, S = () => {
	let i = x(), { task: o, taskId: s } = i, { conversationId: c } = t(), { navigate: l } = e(), S = g(), C = y(null);
	return v(() => {
		if (!c) return;
		let e = p(c);
		e && (a.getState().reassignPendingMessages(e.fromConversationId, e.toConversationId), f(e.toConversationId));
	}, [c]), _(() => {
		let e = o?.app_conversation_id;
		!s || o?.status !== "READY" || !e || C.current === s || (C.current = s, u(s, e), b(o, e), (async () => {
			await d(s, e);
			let t = `task-${s}`;
			m(e, t), h(t, e);
			let i = n(s);
			i && r(e, { draftMessage: i }), l(S(`/conversations/${e}`), { replace: !0 });
		})());
	}, [
		S,
		o,
		s,
		l
	]), i;
};
//#endregion
export { x as useTaskPolling, S as useTaskPollingController };

//# sourceMappingURL=use-task-polling.js.map