import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import t from "../../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/hooks/query/use-sub-conversation-task-polling.ts
var n = (n, r) => {
	let i = e({
		queryKey: ["sub-conversation-task", n],
		queryFn: async () => n ? t.getStartTask(n) : null,
		enabled: !!n && !!r,
		refetchInterval: (e) => {
			let t = e.state.data;
			return !t || t.status === "READY" || t.status === "ERROR" ? !1 : 3e3;
		},
		retry: !1
	});
	return {
		task: i.data,
		taskStatus: i.data?.status,
		taskDetail: i.data?.detail,
		taskError: i.error,
		isLoadingTask: i.isLoading,
		subConversationId: i.data?.app_conversation_id
	};
};
//#endregion
export { n as useSubConversationTaskPolling };

//# sourceMappingURL=use-sub-conversation-task-polling.js.map