//#region src/utils/base-path.ts
var e = "__AGENT_CANVAS_BASE_PATH__";
function t(e) {
	let t = e?.trim();
	return !t || t === "/" ? "" : (t.startsWith("/") ? t : `/${t}`).replace(/\/+$/, "");
}
function n() {
	let n = t(void 0);
	if (n) return n;
	if (typeof window < "u") {
		let n = window[e];
		if (typeof n == "string") return t(n);
	}
	return "";
}
function r(e) {
	let t = n();
	return t ? `${t}${e.startsWith("/") ? e : `/${e}`}` : e.startsWith("/") ? e : `/${e}`;
}
//#endregion
export { r as buildAgentCanvasPath };

//# sourceMappingURL=base-path.js.map