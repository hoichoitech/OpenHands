import "../utils/constants.js";
import { getStyleHeightPx as e, setStyleHeightPx as t } from "../utils/utils.js";
import { focusContentEditableAtEnd as n } from "../components/features/chat/utils/chat-input.utils.js";
import { useDragResize as r } from "./use-drag-resize.js";
import { useCallback as i, useEffect as a, useRef as o } from "react";
//#region src/hooks/use-auto-resize.ts
var s = 20, c = 120, l = 20, u = 50, d = () => ({
	hasUserResizedRef: o(!1),
	manualHeightRef: o(null)
}), f = (e, t, n) => {
	let { minHeight: r, maxHeight: i } = n, a = Math.max(r, Math.min(t, i));
	return e.style.setProperty("height", `${a}px`), e.style.setProperty("overflow-y", a >= i ? "auto" : "hidden"), a;
}, p = (e, t, n = u) => e > t + n, m = (n, r) => {
	let i = e(n, r), a = i;
	n.style.setProperty("height", "auto");
	let o = n.scrollHeight;
	return t(n, i), {
		currentHeight: a,
		currentStyleHeight: i,
		contentHeight: o
	};
}, h = (e, t) => {
	let { finalHeight: n, overflowY: r } = t, i = e;
	i.style.height = `${n}px`, i.style.overflowY = r;
}, g = (e, t) => {
	t && t(e);
}, _ = (u, _ = {}) => {
	let v = o(null), { minHeight: y = s, maxHeight: b = c, enableManualResize: x = !1, value: S, onValueApplied: C, onGripDragStart: w, onGripDragEnd: T, onHeightChange: E } = _, D = {
		minHeight: y,
		maxHeight: b
	}, { hasUserResizedRef: O, manualHeightRef: k } = d(), A = () => {
		O.current = !1, k.current = null;
	}, j = i((e) => {
		E?.(e), O.current && (k.current = e);
	}, [E]), M = i(() => {
		O.current = !0, w?.();
	}, [w]), N = i(() => {
		let t = u.current;
		if (t) {
			let n = e(t, y);
			Math.abs(n - y) <= 1.5 && (O.current = !1, k.current = null);
		}
		T?.();
	}, [y, T]), { handleGripMouseDown: P, handleGripTouchStart: F } = r({
		elementRef: u,
		minHeight: y,
		maxHeight: b,
		onGripDragStart: x ? M : void 0,
		onGripDragEnd: x ? N : void 0,
		onHeightChange: j
	}), I = i((e, t, n) => {
		if (O.current && t > y) {
			h(e, {
				finalHeight: t,
				overflowY: "hidden"
			}), g(t, E);
			return;
		}
		let r = Math.max(n, y);
		h(e, {
			finalHeight: r,
			overflowY: "hidden"
		}), g(r, E);
	}, [y, E]), L = i((e, t, n) => {
		if (!p(t, n)) {
			let t = Math.max(n, y);
			h(e, {
				finalHeight: t,
				overflowY: "hidden"
			}), g(t, E);
			return;
		}
		h(e, {
			finalHeight: t,
			overflowY: "auto"
		}), g(t, E);
	}, [y, E]), R = i((e) => {
		h(e, {
			finalHeight: b,
			overflowY: "auto"
		}), g(b, E);
	}, [b, E]), z = i(() => {
		let e = u.current;
		if (!e) return;
		if ((e.textContent ?? "").trim().length === 0 && O.current && k.current && k.current > y + 1.5) {
			t(e, k.current), e.style.overflowY = "hidden", g(k.current, E);
			return;
		}
		let { currentHeight: n, contentHeight: r } = m(e, y);
		if (r <= n) {
			I(e, n, r);
			return;
		}
		if (r <= b) {
			L(e, n, r);
			return;
		}
		R(e);
	}, [
		u,
		y,
		b,
		E,
		I,
		L,
		R
	]), B = i(() => {
		v.current && cancelAnimationFrame(v.current), v.current = requestAnimationFrame(() => {
			v.current = null, z();
		});
	}, [z]);
	return a(() => {
		if (S === void 0) return;
		let e = 0, t = () => {
			let e = u.current;
			return e ? (e.textContent = S.text, B(), n(e), C?.(), !0) : !1;
		};
		return t() || (e = requestAnimationFrame(() => {
			t();
		})), () => {
			e && cancelAnimationFrame(e);
		};
	}, [
		S,
		B,
		C
	]), a(() => {
		B();
	}, [B]), {
		smartResize: B,
		handleGripMouseDown: P,
		handleGripTouchStart: F,
		increaseHeightForEmptyContent: () => {
			let t = u.current;
			if (!t) return;
			let n = e(t, y), r = Math.min(n + l, b);
			if (r > n) {
				let e = f(t, r, D);
				g(e, E), O.current = !0, k.current = e;
			}
		},
		resetManualResize: A
	};
};
//#endregion
export { _ as useAutoResize };

//# sourceMappingURL=use-auto-resize.js.map