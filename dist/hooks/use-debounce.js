import { useEffect as e, useState as t } from "react";
//#region src/hooks/use-debounce.ts
function n(n, r) {
	let [i, a] = t(n);
	return e(() => {
		let e = setTimeout(() => a(n), r);
		return () => clearTimeout(e);
	}, [n, r]), i;
}
//#endregion
export { n as useDebounce };

//# sourceMappingURL=use-debounce.js.map