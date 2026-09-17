//#region src/utils/scroll-fade-state.ts
var e = 1;
function t(t) {
	let { scrollLeft: n, scrollWidth: r, clientWidth: i } = t, a = r - i, o = a > e;
	return {
		left: o && n > e,
		right: o && n < a - e
	};
}
function n(t) {
	let { scrollTop: n, scrollHeight: r, clientHeight: i } = t, a = r - i, o = a > e;
	return {
		top: o && n > e,
		bottom: o && n < a - e
	};
}
//#endregion
export { t as readScrollFadeState, n as readVerticalScrollEdgeState };

//# sourceMappingURL=scroll-fade-state.js.map