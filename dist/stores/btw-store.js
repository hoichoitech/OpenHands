import { create as e } from "../node_modules/zustand/esm/react.js";
import { devtools as t } from "../node_modules/zustand/esm/middleware.js";
import n from "../node_modules/uuid/dist/v4.js";
//#region src/stores/btw-store.ts
var r = { entriesByConversation: {} }, i = (e, t, n) => ({ entriesByConversation: {
	...e.entriesByConversation,
	[t]: n(e.entriesByConversation[t] ?? [])
} }), a = e()(t((e) => ({
	...r,
	addPending: (t, r) => {
		let a = n();
		return e((e) => i(e, t, (e) => [...e, {
			id: a,
			question: r,
			status: "pending"
		}])), a;
	},
	resolve: (t, n, r) => e((e) => i(e, t, (e) => e.map((e) => e.id === n ? {
		...e,
		response: r,
		status: "done"
	} : e))),
	fail: (t, n, r) => e((e) => i(e, t, (e) => e.map((e) => e.id === n ? {
		...e,
		response: r,
		status: "error"
	} : e))),
	dismiss: (t, n) => e((e) => i(e, t, (e) => e.filter((e) => e.id !== n)))
}), { name: "BtwStore" }));
//#endregion
export { a as useBtwStore };

//# sourceMappingURL=btw-store.js.map