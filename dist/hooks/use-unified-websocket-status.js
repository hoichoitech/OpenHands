import { useConversationWebSocket as e } from "../contexts/conversation-websocket-context.js";
//#region src/hooks/use-unified-websocket-status.ts
function t() {
	let t = e();
	return t ? t.connectionState : "CLOSED";
}
function n() {
	let t = e();
	return t ? t.mainConnectionState : "CLOSED";
}
//#endregion
export { n as useMainWebSocketStatus, t as useUnifiedWebSocketStatus };

//# sourceMappingURL=use-unified-websocket-status.js.map