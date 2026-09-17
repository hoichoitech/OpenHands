//#region src/manifests/manifest-template.ts
var e = /\{\{([A-Za-z0-9_]+(?:\.[A-Za-z0-9_]+)*)\}\}/g;
function t(e) {
	return typeof e == "string" ? e : typeof e == "number" || typeof e == "boolean" ? String(e) : Array.isArray(e) ? e.map(t).filter(Boolean).join(", ") : "";
}
function n(n, r) {
	return n.replace(e, (e, n) => t(r[n]));
}
//#endregion
export { n as interpolateValues };

//# sourceMappingURL=manifest-template.js.map