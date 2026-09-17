import { useOptionalConversationId as e } from "../use-conversation-id.js";
import { AGENT_PROFILES_QUERY_KEYS as t, AGENT_PROFILES_RETRY_OPTIONS as n, CONFIG_CACHE_OPTIONS as r } from "./query-keys.js";
import { useQuery as i } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as a } from "../../contexts/active-backend-context.js";
import o from "../../api/agent-profiles-service/agent-profiles-service.api.js";
import { useActiveAgentProfile as s } from "../use-active-agent-profile.js";
//#region src/hooks/query/use-active-acp-profile-detail.ts
function c(e, n, r) {
	return [
		...t.all,
		e,
		n,
		"detail",
		r
	];
}
function l() {
	let { backend: t, orgId: l } = a(), { conversationId: u } = e(), { activeProfile: d } = s(), f = d?.agent_kind === "acp" ? d.name : null, { data: p } = i({
		queryKey: c(t.id, l, f ?? ""),
		queryFn: () => o.getProfile(f),
		enabled: !u && f != null,
		...r,
		...n,
		meta: { disableToast: !0 }
	}), m = p?.profile;
	return m?.agent_kind === "acp" ? m : null;
}
//#endregion
export { c as agentProfileDetailQueryKey, l as useActiveAcpProfileDetail };

//# sourceMappingURL=use-active-acp-profile-detail.js.map