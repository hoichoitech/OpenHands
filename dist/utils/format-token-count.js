//#region src/utils/format-token-count.ts
function e(e) {
	if (e >= 1e6) {
		let t = e / 1e6;
		return t >= 10 && Number.isInteger(t) ? `${t.toFixed(0)}M` : `${t.toFixed(1)}M`;
	}
	if (e >= 1e3) {
		let t = e / 1e3;
		return Number.isInteger(t) ? `${t.toFixed(0)}k` : `${t.toFixed(1)}k`;
	}
	return e.toLocaleString();
}
function t(e, t) {
	return t <= 0 ? 0 : Math.min(100, e / t * 100);
}
//#endregion
export { e as formatCompactTokenCount, t as getContextWindowUsagePercentage };

//# sourceMappingURL=format-token-count.js.map