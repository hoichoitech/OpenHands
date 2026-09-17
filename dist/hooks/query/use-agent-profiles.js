import { AGENT_PROFILES_QUERY_KEYS as e, AGENT_PROFILES_RETRY_OPTIONS as t, CONFIG_CACHE_OPTIONS as n } from "./query-keys.js";
import { useQuery as r } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as i } from "../../contexts/active-backend-context.js";
import a from "../../api/agent-profiles-service/agent-profiles-service.api.js";
//#region src/hooks/query/use-agent-profiles.ts
function o(o = {}) {
	let { backend: s, orgId: c } = i();
	return r({
		queryKey: [
			...e.all,
			s.id,
			c
		],
		queryFn: a.listProfiles,
		...n,
		...t,
		enabled: o.enabled ?? !0,
		meta: { disableToast: !0 }
	});
}
//#endregion
export { o as useAgentProfiles };

//# sourceMappingURL=use-agent-profiles.js.map