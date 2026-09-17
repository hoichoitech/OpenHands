import { SETTINGS_QUERY_KEYS as e } from "../query/query-keys.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { allocateMcpSettingsKey as r, parseMcpConfig as i, toCanonicalMcpServer as a } from "../../utils/mcp-config.js";
import o from "../../api/settings-service/settings-service.api.js";
import { useSettings as s } from "../query/use-settings.js";
//#region src/hooks/mutation/use-add-mcp-server.ts
function c() {
	let c = t(), { data: l } = s();
	return n({
		mutationFn: async (e) => {
			if (!l) throw Error("MCP settings are still loading. Please try again.");
			let t = r(l.mcp_config ?? i(l.agent_settings?.mcp_config), e.name, e.type);
			await o.createMcpServer(t, a(e));
		},
		onSuccess: () => {
			c.invalidateQueries({ queryKey: e.personal() });
		}
	});
}
//#endregion
export { c as useAddMcpServer };

//# sourceMappingURL=use-add-mcp-server.js.map