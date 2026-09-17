import "../utils/constants.js";
import { isMobileDevice as e } from "../utils/utils.js";
//#region src/hooks/use-drag-resize.ts
var t = 2, n = 120, r = () => {
	let e = document.getElementById("resize-grip")?.parentElement ?? null;
	return e ? e.getBoundingClientRect().bottom >= window.innerHeight - n : !0;
}, i = ({ elementRef: n, minHeight: i, maxHeight: a, onGripDragStart: o, onGripDragEnd: s, onHeightChange: c, onReachedMinHeight: l }) => {
	let u = (e) => "touches" in e && e.touches.length > 0 ? e.touches[0].clientY : e.clientY, d = (e, t) => {
		let n = document.getElementById("resize-grip");
		n && (n.addEventListener("touchmove", e, {
			passive: !1,
			capture: !0
		}), n.addEventListener("touchend", t, { capture: !0 }));
	}, f = (e, t) => {
		document.addEventListener("mousemove", e), document.addEventListener("mouseup", t);
	}, p = (r) => {
		let p = e(), m = n.current?.offsetHeight || i, h = !1, g = (e) => {
			if (e.preventDefault(), !h) {
				let n = u(e);
				if (Math.abs(n - r) < t) return;
				h = !0, o?.();
			}
			let s = u(e) - r, d = Math.max(i, Math.min(a, m - s)), f = n.current;
			if (!f) return;
			f.style.height = `${d}px`;
			let p = f.scrollHeight > d || d >= a;
			f.style.overflowY = p ? "auto" : "hidden", c && c(d), l && Math.abs(d - i) <= 1.5 && l();
		}, _ = () => {
			if (h && s?.(), p) {
				let e = document.getElementById("resize-grip");
				if (!e) return;
				e.removeEventListener("mousemove", g), e.removeEventListener("mouseup", _), e.removeEventListener("touchmove", g), e.removeEventListener("touchend", _);
			} else document.removeEventListener("mousemove", g), document.removeEventListener("mouseup", _), document.removeEventListener("touchmove", g), document.removeEventListener("touchend", _);
		};
		p ? d(g, _) : f(g, _);
	};
	return {
		handleGripMouseDown: (e) => {
			e.preventDefault(), r() && p(e.clientY);
		},
		handleGripTouchStart: (e) => {
			e.preventDefault(), r() && p(e.touches[0].clientY);
		}
	};
};
//#endregion
export { r as isBottomAnchored, i as useDragResize };

//# sourceMappingURL=use-drag-resize.js.map