import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/pending-task-attachments-store.ts
var t = e()((e, t) => ({
	byTaskId: {},
	setPendingTaskAttachments: (t, n) => e((e) => ({ byTaskId: {
		...e.byTaskId,
		[t]: n
	} })),
	consumePendingTaskAttachments: (n) => {
		let r = t().byTaskId[n];
		return r ? (e((e) => {
			let { [n]: t, ...r } = e.byTaskId;
			return { byTaskId: r };
		}), r) : null;
	}
}));
function n(e) {
	return t.getState().consumePendingTaskAttachments(e);
}
//#endregion
export { n as consumePendingTaskAttachments };

//# sourceMappingURL=pending-task-attachments-store.js.map