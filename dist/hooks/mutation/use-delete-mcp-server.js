import { SETTINGS_QUERY_KEYS as e } from "../query/query-keys.js";
import { useQueryClient as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as n } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import r from "../../api/settings-service/settings-service.api.js";
import { getMcpServerHealthKey as i } from "../../utils/mcp-server-health-key.js";
import { clearMcpServerHealth as a } from "../../api/mcp-health/mcp-health-store.js";
//#region src/hooks/mutation/use-delete-mcp-server.ts
function o() {
	let o = t();
	return n({
		mutationFn: async (e) => {
			await r.deleteMcpServer(e.id);
		},
		onSuccess: (t, n) => {
			a(i(n)), o.invalidateQueries({ queryKey: e.personal() });
		}
	});
}
//#endregion
export { o as useDeleteMcpServer };

//# sourceMappingURL=use-delete-mcp-server.js.map