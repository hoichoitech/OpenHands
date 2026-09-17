//#region src/utils/mcp-server-health-key.ts
var e = (e) => Object.keys(e ?? {}).sort();
function t(t) {
	return t.type === "stdio" ? JSON.stringify({
		type: t.type,
		name: t.name ?? "",
		command: t.command ?? "",
		args: t.args ?? [],
		envKeys: e(t.env)
	}) : JSON.stringify({
		type: t.type,
		name: t.name ?? "",
		url: t.url ?? "",
		headerKeys: e(t.headers),
		authStrategy: t.auth?.strategy ?? "",
		authHeaderName: t.auth?.strategy === "api_key" ? t.auth.header_name ?? "" : "",
		authHeaderKeys: t.auth?.strategy === "header" ? e(t.auth.headers) : []
	});
}
//#endregion
export { t as getMcpServerHealthKey };

//# sourceMappingURL=mcp-server-health-key.js.map