//#region src/utils/vscode-url-helper.ts
function e(e) {
	if (!e) return null;
	try {
		let t = new URL(e);
		return t.hostname === "localhost" && window.location.hostname !== "localhost" ? (t.hostname = window.location.hostname, t.toString()) : e;
	} catch {
		return e;
	}
}
//#endregion
export { e as transformVSCodeUrl };

//# sourceMappingURL=vscode-url-helper.js.map