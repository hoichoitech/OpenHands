//#region src/utils/websocket-auth.ts
var e = "auth", t = "session_api_key";
function n(n, r) {
	r && n.send(JSON.stringify({
		type: e,
		[t]: r
	}));
}
//#endregion
export { n as sendWebSocketAuth };

//# sourceMappingURL=websocket-auth.js.map