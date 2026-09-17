import { AGENT_PROFILES_QUERY_KEYS as e, SETTINGS_QUERY_KEYS as t } from "../query/query-keys.js";
import { useQueryClient as n } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as r } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import i from "../../api/settings-service/settings-service.api.js";
import a from "../../api/agent-profiles-service/agent-profiles-service.api.js";
//#region src/hooks/mutation/use-activate-agent-profile.ts
var o = ["activate-agent-profile"];
function s() {
	let s = n();
	return r({
		mutationKey: o,
		mutationFn: (e) => a.activateProfile(e),
		onMutate: async (t) => {
			await s.cancelQueries({ queryKey: e.all });
			let n = s.getQueriesData({ queryKey: e.all });
			return s.setQueriesData({ queryKey: e.all }, (e) => e && {
				...e,
				active_agent_profile_id: t
			}), { snapshots: n };
		},
		onError: (e, t, n) => {
			n?.snapshots?.forEach(([e, t]) => {
				s.setQueryData(e, t);
			});
		},
		onSuccess: async () => {
			i.invalidateCache(), await s.invalidateQueries({ queryKey: e.all }), await s.invalidateQueries({ queryKey: t.personal() });
		}
	});
}
//#endregion
export { o as ACTIVATE_AGENT_PROFILE_MUTATION_KEY, s as useActivateAgentProfile };

//# sourceMappingURL=use-activate-agent-profile.js.map