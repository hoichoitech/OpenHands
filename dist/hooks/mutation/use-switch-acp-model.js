import { AGENT_PROFILES_QUERY_KEYS as e, AGENT_PROFILES_RETRY_OPTIONS as t, SETTINGS_QUERY_KEYS as n } from "../query/query-keys.js";
import { useQueryClient as r } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as i } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { useActiveBackend as a } from "../../contexts/active-backend-context.js";
import o from "../../api/settings-service/settings-service.api.js";
import s from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { invalidateConversationQueries as c } from "./conversation-mutation-utils.js";
import l from "../../api/agent-profiles-service/agent-profiles-service.api.js";
import { agentProfileDetailQueryKey as u } from "../query/use-active-acp-profile-detail.js";
import { mergeAgentProfileSaveInput as d } from "../../components/features/settings/agent-profiles/merge-agent-profile-save-input.js";
//#region src/hooks/mutation/use-switch-acp-model.ts
var f = () => {
	let f = r(), { backend: p, orgId: m } = a();
	return i({
		mutationFn: async ({ conversationId: n, model: r }) => {
			if (n) {
				await s.switchAcpModel(n, r);
				return;
			}
			let i = await f.ensureQueryData({
				queryKey: [
					...e.all,
					p.id,
					m
				],
				queryFn: l.listProfiles,
				...t
			}), a = i.profiles?.find((e) => e.id != null && e.id === i.active_agent_profile_id);
			if (a?.agent_kind === "acp") {
				let e = await f.ensureQueryData({
					queryKey: u(p.id, m, a.name),
					queryFn: () => l.getProfile(a.name),
					...t
				});
				await l.saveProfile(a.name, d(e.profile, {
					agent_kind: "acp",
					acp_model: r
				}));
				return;
			}
			await o.saveSettings({ agent_settings_diff: { acp_model: r } });
		},
		onSuccess: (t, { conversationId: r }) => {
			r ? c(f, r) : (o.invalidateCache(), f.invalidateQueries({ queryKey: n.personal() }), f.invalidateQueries({ queryKey: e.all }));
		}
	});
};
//#endregion
export { f as useSwitchAcpModel };

//# sourceMappingURL=use-switch-acp-model.js.map