import { getActiveBackend as e } from "../../api/backend-registry/active-store.js";
import { getAgentServerClientOptions as t } from "../../api/agent-server-client-options.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { RemoteWorkspace as r } from "../../node_modules/@openhands/typescript-client/dist/workspace/remote-workspace.js";
import { useActiveConversation as i } from "./use-active-conversation.js";
import { useRuntimeIsReady as a } from "../use-runtime-is-ready.js";
//#region src/hooks/query/use-workspace-session.ts
function o() {
	let { data: o } = i(), s = a(), c = o?.id, l = o?.conversation_url, u = o?.session_api_key, d = e().backend.kind === "local", f = n({
		queryKey: [
			"workspace-session",
			c,
			l,
			u
		],
		queryFn: async () => ({ baseUrl: await new r(t({
			conversationUrl: l,
			sessionApiKey: u
		})).startWorkspaceSession(c) }),
		enabled: s && !!c && d,
		staleTime: Infinity,
		gcTime: Infinity,
		retry: !1
	});
	return {
		data: f.data ?? null,
		isLoading: f.isLoading,
		isError: f.isError,
		error: f.error ?? null
	};
}
function s(e, t) {
	let n = (t ?? "").replace(/^\/+/, "");
	return n ? `${e}${n.split("/").map((e) => encodeURIComponent(e)).join("/")}` : e;
}
//#endregion
export { s as joinWorkspaceUrl, o as useWorkspaceSession };

//# sourceMappingURL=use-workspace-session.js.map