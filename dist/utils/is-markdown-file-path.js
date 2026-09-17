//#region src/utils/is-markdown-file-path.ts
var e = new Set([
	"md",
	"markdown",
	"mdx"
]);
function t(t) {
	let n = t.lastIndexOf(".");
	return n === -1 ? !1 : e.has(t.slice(n + 1).toLowerCase());
}
//#endregion
export { t as isMarkdownFilePath };

//# sourceMappingURL=is-markdown-file-path.js.map