import { SETTINGS_QUERY_KEYS as e } from "../query/query-keys.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { toMcpServerName as r } from "../../utils/mcp-server-name.js";
import { buildMcpServerPatch as i, buildRenameMcpConfigPatch as a, parseMcpConfig as o } from "../../utils/mcp-config.js";
import s from "../../api/settings-service/settings-service.api.js";
import { useSettings as c } from "../query/use-settings.js";
import { getMcpServerHealthKey as l } from "../../utils/mcp-server-health-key.js";
import { clearMcpServerHealth as u } from "../../api/mcp-health/mcp-health-store.js";
//#region src/hooks/mutation/use-update-mcp-server.ts
function d() {
	let d = t(), { data: f } = c();
	return n({
		mutationFn: async ({ serverId: e, server: t }) => {
			let n = f?.mcp_config ?? o(f?.agent_settings?.mcp_config), c = n[e];
			if (!c) throw Error(`MCP server "${e}" no longer exists.`);
			let u = l({
				id: e,
				type: c.transport === "stdio" ? "stdio" : c.transport === "sse" ? "sse" : "shttp",
				name: e,
				...c.transport === "stdio" ? {
					command: c.command,
					args: c.args ?? void 0,
					env: c.env ?? void 0
				} : {
					url: c.url,
					headers: c.headers ?? void 0,
					auth: c.auth ?? void 0
				}
			}), d = r(t.name || e);
			if (d !== e) {
				if (d in n) throw Error(`MCP server "${d}" already exists.`);
				return await s.patchMcpConfig(a(e, d, c, t)), u;
			}
			return await s.patchMcpServer(e, i(c, t)), u;
		},
		onSuccess: (t, n) => {
			u(t), u(l(n.server)), d.invalidateQueries({ queryKey: e.personal() });
		}
	});
}
//#endregion
export { d as useUpdateMcpServer };

//# sourceMappingURL=use-update-mcp-server.js.map