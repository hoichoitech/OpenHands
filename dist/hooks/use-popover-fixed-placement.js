import e from "react";
//#region src/hooks/use-popover-fixed-placement.ts
function t(t, n) {
	let { open: r, enabled: i, targetWidth: a = 256 } = n, [o, s] = e.useState(null), c = e.useCallback(() => {
		let e = t.current;
		if (!e) return;
		let n = e.getBoundingClientRect(), r = Math.min(a, window.innerWidth - 16), i = n.right - r;
		i < 8 && (i = 8), i + r > window.innerWidth - 8 && (i = Math.max(8, window.innerWidth - 8 - r)), s({
			top: n.bottom + 4,
			left: i,
			width: r
		});
	}, [t, a]);
	return e.useLayoutEffect(() => {
		if (!r || !i) {
			s(null);
			return;
		}
		return c(), window.addEventListener("resize", c), window.addEventListener("scroll", c, !0), () => {
			window.removeEventListener("resize", c), window.removeEventListener("scroll", c, !0);
		};
	}, [
		r,
		i,
		c
	]), o;
}
//#endregion
export { t as usePopoverFixedPlacement };

//# sourceMappingURL=use-popover-fixed-placement.js.map