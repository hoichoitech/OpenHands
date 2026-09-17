//#region src/api/backend-registry/last-conversation-store.ts
var e = "openhands-last-conversation-by-backend";
function t(e, t) {
	return t ? `${e}::${t}` : e;
}
function n() {
	if (typeof window > "u") return {};
	try {
		let t = window.localStorage.getItem(e);
		if (!t) return {};
		let n = JSON.parse(t);
		if (typeof n != "object" || !n) return {};
		let r = {};
		for (let [e, t] of Object.entries(n)) typeof t == "string" && t.length > 0 && (r[e] = t);
		return r;
	} catch {
		return {};
	}
}
function r(t) {
	if (!(typeof window > "u")) try {
		window.localStorage.setItem(e, JSON.stringify(t));
	} catch {}
}
function i(e, i, a) {
	if (!a) return;
	let o = n();
	o[t(e, i)] = a, r(o);
}
function a(e, i) {
	let a = n(), o = t(e, i);
	o in a && (delete a[o], r(a));
}
//#endregion
export { a as clearLastConversationId, i as setLastConversationId };

//# sourceMappingURL=last-conversation-store.js.map