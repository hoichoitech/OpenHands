import { isNoBackend as e } from "../../api/backend-registry/active-store.js";
import { SETTINGS_QUERY_KEYS as t } from "./query-keys.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import r from "../../node_modules/axios/lib/axios.js";
import { useActiveBackend as i } from "../../contexts/active-backend-context.js";
import { DEFAULT_SETTINGS as a } from "../../services/settings.js";
import { parseMcpConfig as o } from "../../utils/mcp-config.js";
import s from "../../api/settings-service/settings-service.api.js";
import { pickFirstBoolean as c, pickFirstNumber as l, pickNullableString as u } from "../../utils/settings-value-pickers.js";
//#region src/hooks/query/use-settings.ts
var d = (e) => {
	if (typeof e == "object" && e && "status" in e) {
		let { status: t } = e;
		if (typeof t == "number") return t;
	}
	if (r.isAxiosError(e)) return e.response?.status;
}, f = (e, t) => {
	let n = t.split("."), r = e;
	for (let e of n) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}, p = (e, t, n, r = !1) => {
	let i = f(e, t);
	return typeof i == "string" && (i.length > 0 || r) ? i : n;
}, m = (e) => {
	let t = e.agent_settings ?? {}, n = {
		...a.conversation_settings ?? {},
		...e.conversation_settings ?? {}
	}, r = t.mcp_config === void 0 ? e.mcp_config ?? a.mcp_config : o(t.mcp_config);
	return {
		...a,
		...e,
		llm_model: p(t, "llm.model", a.llm_model),
		llm_base_url: p(t, "llm.base_url", a.llm_base_url, !0),
		agent: p(t, "agent", a.agent),
		llm_api_key: e.llm_api_key ?? null,
		llm_api_key_set: e.llm_api_key_set ?? !1,
		confirmation_mode: c(n.confirmation_mode) ?? a.confirmation_mode,
		security_analyzer: u(n.security_analyzer) ?? a.security_analyzer,
		max_iterations: l(n.max_iterations) ?? a.max_iterations,
		enable_default_condenser: c(f(t, "condenser.enabled")) ?? a.enable_default_condenser,
		condenser_max_size: l(f(t, "condenser.max_size")) ?? a.condenser_max_size,
		mcp_config: r,
		search_api_key: e.search_api_key || "",
		email: e.email || "",
		git_user_name: e.git_user_name || a.git_user_name,
		git_user_email: e.git_user_email || a.git_user_email,
		is_new_user: !1,
		disabled_skills: e.disabled_skills ?? a.disabled_skills,
		agent_settings_schema: e.agent_settings_schema ?? null,
		agent_settings: e.agent_settings ?? a.agent_settings,
		conversation_settings_schema: e.conversation_settings_schema ?? a.conversation_settings_schema,
		conversation_settings: n
	};
}, h = async (e = "personal") => {
	if (e !== "personal") throw Error(`Unsupported settings scope: ${e}`);
	return m(await s.getSettings());
}, g = (r = "personal") => {
	let o = i(), s = !e(o.backend), c = n({
		queryKey: [
			...t.byScope(r),
			o.backend.id,
			o.orgId
		],
		queryFn: () => h(r),
		retry: (e, t) => d(t) !== 404,
		enabled: s,
		refetchOnWindowFocus: !1,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15,
		meta: { disableToast: !0 }
	});
	return s ? d(c.error) === 404 ? {
		data: a,
		error: c.error,
		isError: c.isError,
		isLoading: c.isLoading,
		isFetching: c.isFetching,
		isFetched: c.isFetched,
		isSuccess: c.isSuccess,
		status: c.status,
		fetchStatus: c.fetchStatus,
		refetch: c.refetch
	} : c : {
		data: a,
		error: null,
		isError: !1,
		isLoading: !1,
		isFetching: !1,
		isFetched: !1,
		isSuccess: !0,
		status: "success",
		fetchStatus: "idle",
		refetch: c.refetch
	};
};
//#endregion
export { d as getErrorStatus, g as useSettings };

//# sourceMappingURL=use-settings.js.map