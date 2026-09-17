//#region src/api/backend-registry/url-selection.ts
var e = "backend";
function t(t, n) {
	let { backend: r, orgId: i } = n;
	if (!r.id) return t;
	let a = t.indexOf("#"), o = a === -1 ? "" : t.slice(a), s = a === -1 ? t : t.slice(0, a), c = s.indexOf("?"), l = c === -1 ? s : s.slice(0, c), u = c === -1 ? "" : s.slice(c + 1), d = new URLSearchParams(u);
	return d.set(e, r.id), i && d.set("org", i), `${l}?${d.toString()}${o}`;
}
function n(t, n) {
	if (!n) return null;
	let r;
	try {
		r = new URLSearchParams(n);
	} catch {
		return null;
	}
	let i = r.get(e);
	return !i || !t.some((e) => e.id === i) ? null : {
		backendId: i,
		orgId: r.get("org") || null
	};
}
function r() {
	return typeof window > "u" ? "" : window.location.search;
}
//#endregion
export { r as currentLocationSearch, n as readBackendSelectionFromUrl, t as withBackendSelectionParams };

//# sourceMappingURL=url-selection.js.map