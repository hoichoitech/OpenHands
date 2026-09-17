import { CONFIG_CACHE_OPTIONS as e, LLM_PROFILES_QUERY_KEYS as t } from "./query-keys.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as r } from "../../contexts/active-backend-context.js";
import i from "../../api/profiles-service/profiles-service.api.js";
//#region src/hooks/query/use-llm-profiles.ts
function a(a = {}) {
	let { backend: o, orgId: s } = r();
	return n({
		queryKey: [
			...t.all,
			o.id,
			s
		],
		queryFn: i.listProfiles,
		...e,
		enabled: a.enabled ?? !0,
		meta: { disableToast: !0 }
	});
}
//#endregion
export { a as useLlmProfiles };

//# sourceMappingURL=use-llm-profiles.js.map