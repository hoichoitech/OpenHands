import { create as e } from "../node_modules/zustand/esm/react.js";
import { setConversationState as t } from "../utils/conversation-local-storage.js";
//#region src/stores/files-tab-store.ts
function n(e, t, n) {
	return n ? e.includes(t) ? e : [...e, t] : [t];
}
function r(e, t, n) {
	if (n !== t) return n;
	let r = e.indexOf(t), i = e.filter((e) => e !== t);
	return i.length === 0 ? null : i[Math.min(r, i.length - 1)] ?? null;
}
function i(e, t) {
	return t && e.includes(t) ? t : null;
}
function a(e, n, r) {
	e && t(e, {
		filesTabOpenPaths: n,
		filesTabSelectedPath: r
	});
}
var o = e((e) => ({
	selectedPath: null,
	selectedConversationId: null,
	openPaths: [],
	setSelectedPath: (t, r = null) => e((e) => {
		if (t === null) {
			let t = {
				selectedPath: null,
				selectedConversationId: r,
				openPaths: r === e.selectedConversationId ? e.openPaths : []
			};
			return a(r, t.openPaths, t.selectedPath), t;
		}
		let i = e.selectedConversationId === r, o = {
			selectedPath: t,
			selectedConversationId: r,
			openPaths: n(e.openPaths, t, i)
		};
		return a(r, o.openPaths, o.selectedPath), o;
	}),
	closeOpenPath: (t) => e((e) => {
		if (!e.openPaths.includes(t)) return e;
		let n = r(e.openPaths, t, e.selectedPath), i = {
			openPaths: e.openPaths.filter((e) => e !== t),
			selectedPath: n
		};
		return a(e.selectedConversationId, i.openPaths, i.selectedPath), i;
	}),
	hydrateForConversation: (t, n, r) => e({
		selectedConversationId: t,
		openPaths: n,
		selectedPath: i(n, r)
	})
}));
//#endregion
export { o as useFilesTabStore };

//# sourceMappingURL=files-tab-store.js.map