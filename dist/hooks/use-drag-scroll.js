import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/hooks/use-drag-scroll.ts
var i = 2;
function a(a) {
	let [o, s] = r(!1), c = n(0), l = n(0), u = n(!1), d = e((e) => {
		let t = a.current;
		e.button !== 0 || !t || (u.current = !1, c.current = e.clientX, l.current = t.scrollLeft, s(!0));
	}, [a]), f = e((e) => {
		u.current && (u.current = !1, e.preventDefault(), e.stopPropagation());
	}, []), p = e((e) => {
		e.preventDefault();
	}, []);
	return t(() => {
		if (!o) return;
		let e = (e) => {
			let t = a.current;
			if (t) {
				if (!(e.buttons & 1)) {
					s(!1);
					return;
				}
				if (!u.current) {
					if (Math.abs(e.clientX - c.current) < i) return;
					u.current = !0;
				}
				e.preventDefault(), t.scrollLeft = l.current - (e.clientX - c.current);
			}
		}, t = () => s(!1);
		return document.addEventListener("mousemove", e), document.addEventListener("mouseup", t), () => {
			document.removeEventListener("mousemove", e), document.removeEventListener("mouseup", t);
		};
	}, [o, a]), {
		handleMouseDown: d,
		handleClickCapture: f,
		handleDragStart: p
	};
}
//#endregion
export { a as useDragScroll };

//# sourceMappingURL=use-drag-scroll.js.map