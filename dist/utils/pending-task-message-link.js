//#region src/utils/pending-task-message-link.ts
var e = /* @__PURE__ */ new Map(), t = null;
function n(t, n) {
	e.set(t, n);
}
function r(t) {
	e.delete(t);
}
function i(e, n) {
	t = {
		fromConversationId: e,
		toConversationId: n
	};
}
function a(e) {
	if (t?.toConversationId !== e) return null;
	let n = t;
	return t = null, n;
}
function o(t, n) {
	return n === t ? !0 : e.get(t) === n;
}
//#endregion
export { r as clearPendingTaskMessageLink, a as consumeScheduledPendingTaskMessageReassign, n as linkPendingTaskMessages, o as matchesPendingConversationId, i as schedulePendingTaskMessageReassign };

//# sourceMappingURL=pending-task-message-link.js.map