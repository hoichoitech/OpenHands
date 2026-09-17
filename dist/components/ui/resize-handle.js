import { cn as e } from "../../utils/utils.js";
import { useState as t } from "react";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/ui/resize-handle.tsx
function i({ onMouseDown: i, className: a, isDragging: o = !1, testId: s }) {
	let [c, l] = t(!1), u = o || c;
	return /* @__PURE__ */ r("div", {
		"data-testid": s,
		className: e("relative z-10 w-0 shrink-0 self-stretch", a),
		"aria-hidden": !0,
		children: [/* @__PURE__ */ n("div", {
			className: "absolute inset-y-0 left-1/2 w-3 min-w-[12px] -translate-x-1/2 cursor-ew-resize",
			onMouseDown: i,
			onMouseEnter: () => l(!0),
			onMouseLeave: () => l(!1)
		}), /* @__PURE__ */ n("div", {
			className: e("pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 transition-colors", u ? "bg-white" : "bg-transparent"),
			"aria-hidden": !0
		})]
	});
}
//#endregion
export { i as ResizeHandle };

//# sourceMappingURL=resize-handle.js.map