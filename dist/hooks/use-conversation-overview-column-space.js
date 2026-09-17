import { hasEnoughOverviewLayoutSpace as e } from "../components/features/conversation/conversation-overview-panel.constants.js";
import { useEffect as t, useLayoutEffect as n, useState as r } from "react";
//#region src/hooks/use-conversation-overview-column-space.ts
var i = typeof window < "u" ? n : t;
function a(t, n) {
	let [a, o] = r(!1);
	return i(() => {
		if (!n) {
			o(!1);
			return;
		}
		let r = t.current;
		if (!r) return;
		let i = () => {
			o(e(r.clientWidth));
		};
		if (i(), typeof ResizeObserver > "u") return;
		let a = new ResizeObserver(i);
		return a.observe(r), () => a.disconnect();
	}, [t, n]), a;
}
//#endregion
export { a as useConversationOverviewColumnSpace };

//# sourceMappingURL=use-conversation-overview-column-space.js.map