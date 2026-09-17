//#region src/types/mcp-auth.ts
var e = [
	"none",
	"api_key",
	"bearer",
	"basic",
	"header",
	"oauth2"
], t = (e) => !!e && typeof e == "object" && !Array.isArray(e), n = (n) => t(n) && typeof n.strategy == "string" && e.includes(n.strategy);
//#endregion
export { n as isMcpAuthCredential };

//# sourceMappingURL=mcp-auth.js.map