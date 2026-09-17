import { useMutation as e } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import t from "../../api/mcp-service/mcp-service.api.js";
//#region src/hooks/mutation/use-test-mcp-server.ts
function n() {
	return e({ mutationFn: (e) => t.testServer(e) });
}
//#endregion
export { n as useTestMcpServer };

//# sourceMappingURL=use-test-mcp-server.js.map