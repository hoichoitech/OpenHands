import { AGENT_PROFILES_QUERY_KEYS as e, AGENT_PROFILES_RETRY_OPTIONS as t, LLM_PROFILES_QUERY_KEYS as n, PLUGINS_QUERY_KEYS as r } from "../query/query-keys.js";
import { useQueryClient as i } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as a } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { useActiveBackend as o } from "../../contexts/active-backend-context.js";
import { getStoredConversationMetadata as s, setStoredConversationMetadata as c, toPluginCoordinates as l } from "../../api/conversation-metadata-store.js";
import u from "../../api/profiles-service/profiles-service.api.js";
import d from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { useTracking as f } from "../use-tracking.js";
import { useLlmProfiles as p } from "../query/use-llm-profiles.js";
import m from "../../api/agent-profiles-service/agent-profiles-service.api.js";
import { useAgentProfiles as h } from "../query/use-agent-profiles.js";
import g from "../../api/plugins-management-service.js";
import { pluginReferenceKey as _ } from "../../utils/plugin-display.js";
//#region src/hooks/mutation/use-create-conversation.ts
var v = ["create-conversation"], y = () => {
	let y = i(), { trackConversationCreated: b } = f(), { data: x } = p(), { backend: S, orgId: C } = o();
	return h(), a({
		mutationKey: v,
		mutationFn: async (i) => {
			let { query: a, conversationInstructions: o, plugins: f, repository: p, workingDir: h, workspaceMode: v, parentConversationId: b, agentType: w, agentProfileId: T } = i, E = await y.ensureQueryData({
				queryKey: [
					...e.all,
					S.id,
					C
				],
				queryFn: m.listProfiles,
				...t
			}), D = T ?? E.active_agent_profile_id ?? void 0, O = D ? E?.profiles?.find((e) => e.id === D) : void 0, k = S.kind === "cloud", A = D, j = null;
			if (!k && O?.name === "default" && O?.agent_kind === "openhands") A = void 0;
			else if (O?.agent_kind === "openhands" && O.llm_profile_ref) {
				let e = !1;
				try {
					let t = await y.ensureQueryData({
						queryKey: [
							...n.all,
							S.id,
							C
						],
						queryFn: u.listProfiles,
						retry: !1
					});
					e = t.profiles.some((e) => e.name === O.llm_profile_ref), j = t.active_profile ?? null;
				} catch {}
				e ? !k && !T && j && j !== O.llm_profile_ref && (A = void 0) : (console.warn(`Agent profile "${O.name}" references missing LLM profile "${O.llm_profile_ref}"; launching from agent_settings instead.`), A = void 0);
			}
			let M = await d.createConversation({
				initialUserMsg: a,
				conversationInstructions: o,
				plugins: f,
				metadata: p ? {
					selected_repository: p.name,
					selected_branch: p.branch ?? null,
					git_provider: p.gitProvider
				} : null,
				workingDirOverride: h,
				workspaceMode: v,
				parentConversationId: b,
				agentType: w,
				...A ? {
					agentProfileId: A,
					agentProfileKind: O?.agent_kind
				} : {}
			}), N = M.app_conversation_id, P = f?.map(l) ?? [], F = P;
			if (N) {
				let e = [];
				try {
					e = await y.ensureQueryData({
						queryKey: [
							...r.installed,
							S.id,
							C
						],
						queryFn: () => g.listInstalledPlugins()
					});
				} catch {}
				let t = new Set(P.map(_)), n = e.filter((e) => e.enabled).map((e) => ({
					source: e.source,
					ref: e.resolved_ref ?? null,
					repo_path: e.repo_path ?? null,
					name: e.name
				})).filter((e) => !t.has(_(e)));
				F = [...P, ...n];
			}
			let I = A && O?.agent_kind === "openhands" ? O.llm_profile_ref : j ?? x?.active_profile ?? null;
			if (N && (I || F.length)) {
				let e = s(N);
				c(N, {
					selected_repository: e?.selected_repository ?? null,
					selected_branch: e?.selected_branch ?? null,
					git_provider: e?.git_provider ?? null,
					selected_workspace: e?.selected_workspace ?? null,
					workspace_mode: e?.workspace_mode ?? null,
					active_profile: I ?? e?.active_profile ?? null,
					plugins: F.length ? F : e?.plugins ?? null
				});
			}
			return {
				conversation_id: M.app_conversation_id ? M.app_conversation_id : `task-${M.id}`,
				session_api_key: null,
				url: M.agent_server_url,
				task_id: M.id
			};
		},
		onSuccess: async (e, t) => {
			b({
				conversationId: e.conversation_id,
				taskId: e.task_id,
				hasRepository: !!t.repository,
				gitProvider: t.repository?.gitProvider,
				hasWorkspace: !!t.workingDir,
				workspaceMode: t.workspaceMode,
				hasInitialQuery: !!t.query,
				agentType: t.agentType,
				hasParentConversation: !!t.parentConversationId,
				entryPoint: t.entryPoint
			}), y.invalidateQueries({ queryKey: ["user", "conversations"] }), y.invalidateQueries({ queryKey: ["start-tasks"] });
		}
	});
};
//#endregion
export { v as CREATE_CONVERSATION_MUTATION_KEY, y as useCreateConversation };

//# sourceMappingURL=use-create-conversation.js.map