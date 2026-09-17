import { useCallback as e, useRef as t, useState as n } from "react";
//#region src/hooks/use-scroll-to-bottom.ts
function r(r) {
	let [i, a] = n(!0), [o, s] = n(!0), c = t(0), l = e((e) => e.scrollTop + e.clientHeight >= e.scrollHeight - 20, []), u = e((e) => {
		let t = l(e);
		s(t);
		let n = e.scrollTop, r = n < c.current;
		c.current = n, r && a(!1), t && a(!0);
	}, [l]);
	return {
		scrollRef: r,
		autoScroll: i,
		setAutoScroll: a,
		scrollDomToBottom: e(() => {
			let e = r.current;
			e && requestAnimationFrame(() => {
				a(!0), s(!0), e.scrollTop = e.scrollHeight;
			});
		}, [r]),
		hitBottom: o,
		setHitBottom: s,
		onChatBodyScroll: u
	};
}
//#endregion
export { r as useScrollToBottom };

//# sourceMappingURL=use-scroll-to-bottom.js.map