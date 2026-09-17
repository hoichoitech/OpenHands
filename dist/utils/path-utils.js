import { DEFAULT_WORKING_DIR as e } from "../api/agent-server-config.js";
//#region src/utils/path-utils.ts
var t = (e) => {
	let t = e.match(/^\/workspace\/[^/]+\/(.*)$/);
	return t ? t[1] : e;
};
function n(e) {
	let t = e.trim().replace(/\\/g, "/").replace(/\/+$/, "");
	return t ? t.startsWith("/") || /^[A-Za-z]:(\/|$)/.test(t) ? t : `/${t}` : "";
}
var r = (r, i) => {
	let a = r.trim().replace(/\\/g, "/");
	if (!a) return "";
	a = a.replace(/:(\d+)(-\d+)?$/, "");
	let o = [i, e].filter((e) => !!e?.trim());
	for (let e of o) {
		let t = n(e);
		if (t) {
			if (a === t) return "";
			if (a.startsWith(`${t}/`)) return a.slice(t.length + 1);
		}
	}
	return a.startsWith("/") ? t(a).replace(/^\.\//, "") : a.replace(/^\.\//, "");
}, i = /\.(md|txt|ts|tsx|js|jsx|mjs|cjs|py|json|html?|css|scss|ya?ml|toml|rs|go|java|kt|swift|c|cc|cpp|h|hpp|sh|bash|zsh|sql|xml|svg|pdf|env|rb|php|vue|svelte|lock|ini|cfg|docx?|xlsx?|pptx?|odt|rtf)$/i, a = (e) => {
	let t = e.trim();
	if (!t || /\s/.test(t) || /^https?:\/\//i.test(t)) return !1;
	let n = t.replace(/\\/g, "/").replace(/^\.\//, "");
	if (n = n.replace(/:(\d+)(-\d+)?$/, ""), /^(application|audio|image|text|video|font|multipart|message|model)\/[\w.+-]+$/i.test(n) || /^v?\d+(\.\d+){1,3}([-+][\w.]+)?$/i.test(n)) return !1;
	let r = n.includes("/") ? n.split("/").pop() ?? "" : n;
	return i.test(r);
}, o = (e) => {
	let t = e.trim();
	if (!t) return "";
	let n = t.replace(/[\\/]+$/, "");
	if (!n || /^[A-Za-z]:$/.test(n)) return "";
	let r = Math.max(n.lastIndexOf("/"), n.lastIndexOf("\\"));
	return r >= 0 ? n.slice(r + 1) : n;
};
//#endregion
export { o as getPathBasename, a as looksLikeWorkspaceFilePath, t as stripWorkspacePrefix, r as toFilesTabPath };

//# sourceMappingURL=path-utils.js.map