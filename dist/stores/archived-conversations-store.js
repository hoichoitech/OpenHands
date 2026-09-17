import { create as e } from "../node_modules/zustand/esm/react.js";
import { createJSONStorage as t, persist as n } from "../node_modules/zustand/esm/middleware.js";
//#region src/stores/archived-conversations-store.ts
var r = "archived-conversations", i = { archivesByBackendId: {} };
function a(e, t) {
	return e[t] ?? [];
}
var o = e()(n((e, t) => ({
	...i,
	archiveConversation: (n, r) => {
		let i = a(t().archivesByBackendId, n);
		i.includes(r) || e((e) => ({ archivesByBackendId: {
			...e.archivesByBackendId,
			[n]: [r, ...i]
		} }));
	},
	removeArchivedConversation: (n, r) => {
		let i = a(t().archivesByBackendId, n);
		i.includes(r) && e((e) => ({ archivesByBackendId: {
			...e.archivesByBackendId,
			[n]: i.filter((e) => e !== r)
		} }));
	},
	isArchived: (e, n) => a(t().archivesByBackendId, e).includes(n)
}), {
	name: r,
	storage: t(() => localStorage),
	partialize: (e) => ({ archivesByBackendId: e.archivesByBackendId })
}));
//#endregion
export { o as useArchivedConversationsStore };

//# sourceMappingURL=archived-conversations-store.js.map