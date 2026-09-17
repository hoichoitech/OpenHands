//#region src/utils/websocket-handshake.ts
var e = 1e4;
function t(t) {
	let n = setTimeout(() => {
		t.readyState === WebSocket.CONNECTING && t.close();
	}, e);
	return () => clearTimeout(n);
}
//#endregion
export { t as startHandshakeWatchdog };

//# sourceMappingURL=websocket-handshake.js.map