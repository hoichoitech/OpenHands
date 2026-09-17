//#region src/utils/mcp-installed-server-display.ts
function e(e) {
	return e.name?.trim() || void 0;
}
function t(t, n) {
	let r = e(t);
	return r && r !== n?.id ? r : n?.name ? n.name : t.type === "stdio" ? r ?? t.command ?? "" : t.url ?? "";
}
//#endregion
export { t as getInstalledServerTitle };

//# sourceMappingURL=mcp-installed-server-display.js.map