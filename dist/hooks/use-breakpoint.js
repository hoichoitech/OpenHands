import { useEffect as e, useRef as t, useState as n } from "react";
//#region src/hooks/use-breakpoint.ts
var r = 1024;
function i(i = r) {
	let [a, o] = n(() => window.innerWidth <= i), s = t(a);
	return e(() => {
		function e() {
			let e = window.innerWidth <= i;
			e !== s.current && (s.current = e, o(e));
		}
		return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, [i]), a;
}
//#endregion
export { i as useBreakpoint };

//# sourceMappingURL=use-breakpoint.js.map