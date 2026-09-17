import { I18nKey as e } from "../i18n/declaration.js";
//#region src/utils/mcp-test-error-message.ts
function t(t, n, r) {
	switch (n) {
		case "timeout": return t(e.MCP$TEST_ERROR_TIMEOUT);
		case "connection": return t(e.MCP$TEST_ERROR_CONNECTION);
		case "credentials": return t(e.MCP$TEST_ERROR_CREDENTIALS, { error: r });
		default: return t(e.MCP$TEST_ERROR_UNKNOWN, { error: r });
	}
}
//#endregion
export { t as makeMcpTestErrorMessage };

//# sourceMappingURL=mcp-test-error-message.js.map