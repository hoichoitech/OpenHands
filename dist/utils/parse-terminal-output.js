//#region src/utils/parse-terminal-output.ts
var e = "[Python Interpreter: ", t = (t) => {
	let n = t.indexOf(e);
	if (n < 0) return t;
	let r = n + 21;
	return t.indexOf("]", r) <= r ? t : t.substring(0, n).trim();
};
//#endregion
export { t as parseTerminalOutput };

//# sourceMappingURL=parse-terminal-output.js.map