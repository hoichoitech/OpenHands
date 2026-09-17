import { CHAT_INPUT as e } from "../../utils/constants.js";
import { useConversationStore as t } from "../../stores/conversation-store.js";
import { isBottomAnchored as n } from "../use-drag-resize.js";
import { useAutoResize as r } from "../use-auto-resize.js";
import { useCallback as i, useEffect as a, useRef as o, useState as s } from "react";
//#region src/hooks/chat/use-grip-resize.ts
var c = (c, l) => {
	let [u, d] = s(!1), [f, p] = s(!1), [m, h] = s(!0), { setShouldHideSuggestions: g, clearMessageToSend: _ } = t(), v = o(null), y = o(!1);
	a(() => {
		let e = () => h(n());
		return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
	}, []);
	let b = i(() => {
		p(!0);
	}, []), x = i(() => {
		p(!1), y.current = !0;
	}, []), S = i((e) => {
		if (m) {
			if (y.current) {
				y.current = !1, e.preventDefault(), e.stopPropagation();
				return;
			}
			e.stopPropagation(), d((e) => !e);
		}
	}, [m]), { smartResize: C, handleGripMouseDown: w, handleGripTouchStart: T, increaseHeightForEmptyContent: E, resetManualResize: D } = r(c, {
		minHeight: 20,
		maxHeight: 400,
		onHeightChange: i((t) => {
			g(t > e.HEIGHT_THRESHOLD);
		}, [g]),
		onGripDragStart: b,
		onGripDragEnd: x,
		value: l ?? void 0,
		onValueApplied: _,
		enableManualResize: !0
	});
	return {
		gripRef: v,
		isGripVisible: u,
		isGripDragging: f,
		canResize: m,
		handleTopEdgeClick: S,
		smartResize: C,
		handleGripMouseDown: w,
		handleGripTouchStart: T,
		increaseHeightForEmptyContent: E,
		resetManualResize: D
	};
};
//#endregion
export { c as useGripResize };

//# sourceMappingURL=use-grip-resize.js.map