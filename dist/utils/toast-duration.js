//#region src/utils/toast-duration.ts
var e = (e, t = 5e3, n = 1e4) => {
	if (!e) return t;
	let r = e.length / (1e3 / 60) * 1e3 * 1.5;
	return Math.min(Math.max(r, t), n);
};
//#endregion
export { e as calculateToastDuration };

//# sourceMappingURL=toast-duration.js.map