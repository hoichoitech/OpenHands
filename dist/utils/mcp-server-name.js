//#region src/utils/mcp-server-name.ts
var e = /^[a-zA-Z0-9_-]+$/;
function t(t) {
	return e.test(t);
}
function n(e, t = "mcp") {
	return e.trim().replace(/[^a-zA-Z0-9_-]+/g, "_").replace(/_+/g, "_").replace(/^_+|_+$/g, "") || t;
}
//#endregion
export { e as MCP_SERVER_NAME_PATTERN, t as isValidMcpServerName, n as toMcpServerName };

//# sourceMappingURL=mcp-server-name.js.map