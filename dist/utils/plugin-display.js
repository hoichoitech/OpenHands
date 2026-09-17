//#region src/utils/plugin-display.ts
function e(e) {
	if (e.name) return e.name;
	if (e.repo_path) {
		let t = e.repo_path.split("/").filter(Boolean);
		if (t.length > 0) return t[t.length - 1];
	}
	let { source: t } = e;
	return t.startsWith("github:") ? t.replace("github:", "") : t.includes("/") && t.split("/").pop()?.replace(/\.git$/, "") || t;
}
function t(e) {
	let { source: t } = e;
	return !(t.startsWith("github:") || /^[a-z][a-z0-9+.-]*:\/\//i.test(t));
}
function n(e) {
	let t = e.source.startsWith("github:") ? e.source.replace("github:", "") : e.source;
	return e.ref ? `${t} @ ${e.ref}` : t;
}
function r(e) {
	return [
		e.source,
		e.ref ?? "",
		e.repo_path ?? ""
	].join(" ");
}
//#endregion
export { e as getPluginDisplayName, n as getPluginSourceLabel, t as isLocalPluginSource, r as pluginReferenceKey };

//# sourceMappingURL=plugin-display.js.map