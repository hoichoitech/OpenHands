import { SETTINGS_QUERY_KEYS as e } from "../query/query-keys.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import r from "../../api/settings-service/settings-service.api.js";
import { useSettings as i } from "../query/use-settings.js";
import { useTracking as a } from "../use-tracking.js";
//#region src/hooks/mutation/use-save-settings.ts
var o = async (e) => {
	let t = { ...e };
	delete t.agent_settings_schema, delete t.conversation_settings_schema;
	let n = { ...t.conversation_settings_diff ?? {} };
	Object.keys(n).length > 0 ? t.conversation_settings_diff = n : delete t.conversation_settings_diff, delete t.conversation_settings;
	let i = t.agent_settings_diff, a = i?.llm;
	if (a && typeof a.api_key == "string") {
		let e = a.api_key.trim();
		a.api_key = e === "" ? "" : e;
	}
	i && Object.keys(i).length > 0 ? t.agent_settings_diff = i : delete t.agent_settings_diff, delete t.agent_settings, typeof t.search_api_key == "string" && (t.search_api_key = t.search_api_key.trim()), typeof t.git_user_name == "string" && (t.git_user_name = t.git_user_name.trim()), typeof t.git_user_email == "string" && (t.git_user_email = t.git_user_email.trim()), await r.saveSettings(t);
}, s = (r = "personal", { retry: s } = {}) => {
	let { trackMcpConfigUpdated: c } = a(), l = t(), { data: u } = i(r);
	return n({
		...s === void 0 ? {} : { retry: s },
		mutationFn: async (e) => {
			let t = e.mcp_config, n = u?.mcp_config;
			if (t && n !== t) {
				let e = Object.values(t);
				c({
					sseServersCount: e.filter((e) => e.transport === "sse").length,
					stdioServersCount: e.filter((e) => e.transport === "stdio").length
				});
			}
			await o(e);
		},
		onSuccess: async () => {
			await l.invalidateQueries({ queryKey: e.byScope(r) });
		},
		meta: { disableToast: !0 }
	});
};
//#endregion
export { s as useSaveSettings };

//# sourceMappingURL=use-save-settings.js.map