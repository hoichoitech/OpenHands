import { getMcpServerEnabled as e } from "./mcp-config.js";
//#region src/utils/mcp-installed-servers.ts
function t(t) {
	return Object.entries(t).map(([t, n]) => n.transport === "stdio" ? {
		id: t,
		type: "stdio",
		name: t,
		command: n.command,
		args: n.args ?? void 0,
		env: n.env ?? void 0,
		enabled: e(n)
	} : {
		id: t,
		type: n.transport === "sse" ? "sse" : "shttp",
		name: t,
		url: n.url,
		headers: n.headers ?? void 0,
		timeout: n.timeout ?? void 0,
		auth: n.auth ?? void 0,
		enabled: e(n)
	});
}
//#endregion
export { t as flattenMcpConfig };

//# sourceMappingURL=mcp-installed-servers.js.map