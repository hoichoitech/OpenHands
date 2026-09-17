import { useScrollToBottom as e } from "../hooks/use-scroll-to-bottom.js";
import t, { createContext as n, useContext as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/context/scroll-context.tsx
var a = n(void 0);
function o({ children: n, value: r }) {
	let o = e(t.useRef(null)), s = r || o;
	return /* @__PURE__ */ i(a.Provider, {
		value: s,
		children: n
	});
}
function s() {
	let e = r(a);
	if (e === void 0) throw Error("useScrollContext must be used within a ScrollProvider");
	return e;
}
function c() {
	return r(a);
}
//#endregion
export { o as ScrollProvider, c as useOptionalScrollContext, s as useScrollContext };

//# sourceMappingURL=scroll-context.js.map