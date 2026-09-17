import { create as e } from "../node_modules/zustand/esm/react.js";
import { createJSONStorage as t, persist as n } from "../node_modules/zustand/esm/middleware.js";
//#region src/stores/pinned-conversations-store.ts
var r = { pinsByBackendId: {} };
function i(e, t) {
	return e[t] ?? [];
}
var a = e()(n((e, t) => ({
	...r,
	pinConversation: (n, r) => {
		let a = i(t().pinsByBackendId, n);
		a.includes(r) || e((e) => ({ pinsByBackendId: {
			...e.pinsByBackendId,
			[n]: [r, ...a]
		} }));
	},
	unpinConversation: (n, r) => {
		let a = i(t().pinsByBackendId, n);
		a.includes(r) && e((e) => ({ pinsByBackendId: {
			...e.pinsByBackendId,
			[n]: a.filter((e) => e !== r)
		} }));
	},
	togglePin: (e, n) => {
		i(t().pinsByBackendId, e).includes(n) ? t().unpinConversation(e, n) : t().pinConversation(e, n);
	},
	pruneMissingConversations: (n, r) => {
		let a = new Set(r), o = i(t().pinsByBackendId, n), s = o.filter((e) => a.has(e));
		s.length !== o.length && e((e) => ({ pinsByBackendId: {
			...e.pinsByBackendId,
			[n]: s
		} }));
	}
}), {
	name: "pinned-conversations",
	storage: t(() => localStorage),
	partialize: (e) => ({ pinsByBackendId: e.pinsByBackendId })
}));
//#endregion
export { a as usePinnedConversationsStore };

//# sourceMappingURL=pinned-conversations-store.js.map