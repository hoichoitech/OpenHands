import { useLocalStorage as e } from "../node_modules/@uidotdev/usehooks/index.js";
import { useCallback as t, useLayoutEffect as n, useRef as r, useState as i } from "react";
//#region src/hooks/use-resizable-drawer-width.ts
var a = 200;
function o({ containerRef: o, defaultWidth: s, minWidth: c, maxWidth: l, storageKey: u, enabled: d = !0, edge: f = "right" }) {
	let [p, m] = e(u, s), h = t((e) => Math.max(c, Math.min(l, e)), [c, l]), [g, _] = i(() => h(p)), [v, y] = i(!1), b = r(g);
	b.current = g;
	let x = t((e) => {
		d && (e.preventDefault(), y(!0));
	}, [d]), S = t((e) => {
		if (!v || !o.current) return;
		let t = o.current.getBoundingClientRect();
		_(h(f === "left" ? e.clientX - t.left : t.right - e.clientX));
	}, [
		h,
		o,
		f,
		v
	]), C = t(() => {
		v && (y(!1), m(b.current));
	}, [v, m]);
	return n(() => {
		if (!v) return;
		let e = document.createElement("div");
		return e.setAttribute("aria-hidden", "true"), e.dataset.panelDragShield = "", Object.assign(e.style, {
			position: "fixed",
			inset: "0",
			zIndex: String(a),
			cursor: "ew-resize"
		}), document.body.appendChild(e), document.addEventListener("mousemove", S), document.addEventListener("mouseup", C), document.body.style.cursor = "ew-resize", document.body.style.userSelect = "none", () => {
			document.removeEventListener("mousemove", S), document.removeEventListener("mouseup", C), document.body.style.cursor = "", document.body.style.userSelect = "", e.remove();
		};
	}, [
		S,
		C,
		v
	]), {
		drawerWidth: g,
		isDragging: v,
		handleMouseDown: x
	};
}
//#endregion
export { o as useResizableDrawerWidth };

//# sourceMappingURL=use-resizable-drawer-width.js.map