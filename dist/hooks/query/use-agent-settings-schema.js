import { isNoBackend as e } from "../../api/backend-registry/active-store.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as n } from "../../contexts/active-backend-context.js";
import r from "../../api/settings-service/settings-service.api.js";
import { useIsAuthed as i } from "./use-is-authed.js";
import { withLlmSubscriptionSchemaFields as a } from "../../utils/llm-subscription-schema.js";
import { useMemo as o } from "react";
//#region src/hooks/query/use-agent-settings-schema.ts
var s = (s, c) => {
	let { data: l } = i(), { backend: u, orgId: d } = n(), f = !e(u), { data: p, error: m, isLoading: h, isFetching: g } = t({
		queryKey: [
			"settings-schema",
			s,
			u.id,
			d,
			u.kind,
			u.host,
			u.apiKey
		],
		queryFn: s === "conversation" ? r.getConversationSettingsSchema : r.getSettingsSchema,
		retry: !1,
		refetchOnWindowFocus: !1,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15,
		enabled: !c && !!l && f,
		meta: { disableToast: !0 }
	}), _ = o(() => s === "agent" ? a(c) : c, [c, s]), v = o(() => s === "agent" ? a(p) : p, [p, s]);
	return c ? {
		data: _,
		error: null,
		isLoading: !1,
		isFetching: !1
	} : {
		data: v,
		error: m,
		isLoading: h,
		isFetching: g
	};
}, c = (e) => s("agent", e), l = (e) => s("conversation", e);
//#endregion
export { c as useAgentSettingsSchema, l as useConversationSettingsSchema };

//# sourceMappingURL=use-agent-settings-schema.js.map