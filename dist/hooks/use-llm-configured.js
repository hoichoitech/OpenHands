import { CONFIG_CACHE_OPTIONS as e, LLM_PROFILES_QUERY_KEYS as t } from "./query/query-keys.js";
import { useQuery as n } from "../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as r } from "../contexts/active-backend-context.js";
import i from "../api/profiles-service/profiles-service.api.js";
import { isSubscriptionLlmConfig as a } from "../constants/llm-subscription.js";
import { useSettings as o } from "./query/use-settings.js";
import { useLlmProfiles as s } from "./query/use-llm-profiles.js";
import "../api/agent-profiles-service/agent-profiles-service.api.js";
import { useActiveAgentProfile as c } from "./use-active-agent-profile.js";
import { useConfig as l } from "./query/use-config.js";
import { isSettingsPageHidden as u } from "../utils/settings-utils.js";
//#region src/hooks/use-llm-configured.ts
function d() {
	let { data: d, isLoading: f, isError: p } = o(), { data: m, isLoading: h, isError: g } = l(), { data: _, isLoading: v, isError: y } = s(), { backend: b, orgId: x } = r(), S = b.kind === "local", { activeProfile: C, isLoading: w } = c(), T = (C?.agent_kind ?? d?.agent_settings?.agent_kind) === "acp", E = d?.llm_api_key_set === !0, D = C?.agent_kind === "openhands" && !(S && C.name === "default") ? C.llm_profile_ref : void 0, O = (D ? _?.profiles.find((e) => e.name === D) : void 0) ?? _?.profiles.find((e) => e.name === _?.active_profile), k = O?.api_key_set === !0, A = S && !!O && !k, { data: j, isLoading: M, isError: N } = n({
		queryKey: [
			...t.all,
			b.id,
			x,
			"detail",
			O?.name
		],
		queryFn: () => i.getProfile(O.name),
		...e,
		enabled: A,
		meta: { disableToast: !0 }
	}), P = A && a(j?.config), F = u("/settings/llm", m?.feature_flags);
	return {
		isConfigured: T || F || (S ? k || P : E),
		isLoading: f || p && !d || h || g && !m || v || y && !_ || w || A && (M || N && !j)
	};
}
//#endregion
export { d as useLlmConfigured };

//# sourceMappingURL=use-llm-configured.js.map