import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/optimistic-user-message-store.ts
var t = 15e4, n = { pendingMessages: [] }, r = () => `pending-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`, i = e((e, i) => ({
	...n,
	enqueuePendingMessage: (n) => {
		let a = r(), o = {
			id: a,
			conversationId: n.conversationId,
			text: n.text,
			content: n.content ?? n.text,
			status: "sending",
			imageUrls: n.imageUrls ?? [],
			fileUrls: n.fileUrls ?? [],
			timestamp: n.timestamp ?? (/* @__PURE__ */ new Date()).toISOString()
		};
		return e((e) => ({ pendingMessages: [...e.pendingMessages, o] })), setTimeout(() => {
			i().pendingMessages.find((e) => e.id === a)?.status === "sending" && i().markPendingMessageError(a, "Send timed out");
		}, t), a;
	},
	markPendingMessageError: (t, n) => e((e) => ({ pendingMessages: e.pendingMessages.map((e) => e.id === t ? {
		...e,
		status: "error",
		errorMessage: n
	} : e) })),
	markPendingMessageSending: (t) => e((e) => ({ pendingMessages: e.pendingMessages.map((e) => e.id === t ? {
		...e,
		status: "sending",
		errorMessage: void 0
	} : e) })),
	removePendingMessage: (t) => e((e) => ({ pendingMessages: e.pendingMessages.filter((e) => e.id !== t) })),
	consumeMatchingPendingMessage: (t, n) => {
		let r = null;
		return e((e) => {
			let i = e.pendingMessages.map((e, t) => ({
				m: e,
				i: t
			})).filter(({ m: e }) => e.status === "sending" && e.conversationId === t);
			if (i.length === 0) return e;
			let a = i.find(({ m: e }) => e.content === n) ?? i[0];
			return r = a.m, { pendingMessages: [...e.pendingMessages.slice(0, a.i), ...e.pendingMessages.slice(a.i + 1)] };
		}), r;
	},
	clearPendingMessages: () => e(() => ({ ...n })),
	reassignPendingMessages: (t, n) => e((e) => ({ pendingMessages: e.pendingMessages.map((e) => e.conversationId === t ? {
		...e,
		conversationId: n
	} : e) }))
}));
//#endregion
export { i as useOptimisticUserMessageStore };

//# sourceMappingURL=optimistic-user-message-store.js.map