import { useLocalStorage as e } from "../node_modules/@uidotdev/usehooks/index.js";
import { useCallback as t, useLayoutEffect as n, useRef as r, useState as i } from "react";
//#region src/hooks/use-resizable-panels.ts
var a = 200;
function o({ defaultLeftWidth: o = 50, minLeftWidth: s = 30, maxLeftWidth: c = 80, storageKey: l = "desktop-layout-panel-width" } = {}) {
	let [u, d] = e(l, o), f = t((e) => Math.max(s, Math.min(c, e)), [s, c]), [p, m] = i(() => f(u)), [h, g] = i(!1), _ = r(null), v = t((e) => {
		e.preventDefault(), g(!0);
	}, []), y = t((e) => {
		if (!h || !_.current) return;
		let t = _.current.getBoundingClientRect();
		m(f((e.clientX - t.left) / t.width * 100));
	}, [h, f]), b = t(() => {
		h && (g(!1), d(p));
	}, [
		h,
		p,
		d
	]);
	return n(() => {
		if (!h) return;
		let e = document.createElement("div");
		return e.setAttribute("aria-hidden", "true"), e.dataset.panelDragShield = "", Object.assign(e.style, {
			position: "fixed",
			inset: "0",
			zIndex: String(a),
			cursor: "ew-resize"
		}), document.body.appendChild(e), document.addEventListener("mousemove", y), document.addEventListener("mouseup", b), document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none", () => {
			document.removeEventListener("mousemove", y), document.removeEventListener("mouseup", b), document.body.style.cursor = "", document.body.style.userSelect = "", e.remove();
		};
	}, [
		h,
		y,
		b
	]), {
		leftWidth: p,
		rightWidth: 100 - p,
		isDragging: h,
		containerRef: _,
		handleMouseDown: v
	};
}
//#endregion
export { o as useResizablePanels };

//# sourceMappingURL=use-resizable-panels.js.map