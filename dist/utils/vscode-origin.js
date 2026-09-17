//#region src/utils/vscode-origin.ts
var e = "__AGENT_CANVAS_VSCODE_BASE_PATH__";
function t() {
	if (typeof window < "u") {
		let t = window[e];
		if (typeof t == "string" && t.trim()) return n(t.trim());
	}
	return null;
}
function n(e) {
	let t = e.startsWith("/") ? e : `/${e}`;
	return t.length > 1 ? t.replace(/\/+$/, "") : t;
}
function r(e, t) {
	if (!e || !t) return !1;
	let n;
	try {
		n = new URL(e, typeof window < "u" ? window.location.href : void 0);
	} catch {
		return !1;
	}
	return typeof window < "u" && n.origin !== window.location.origin ? !1 : n.pathname === t || n.pathname.startsWith(`${t}/`);
}
//#endregion
export { t as getOriginVSCodeBasePath, r as isVSCodeUrlServedByOrigin };

//# sourceMappingURL=vscode-origin.js.map