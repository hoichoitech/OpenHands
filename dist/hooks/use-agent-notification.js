import { AgentState as e } from "../types/agent-state.js";
import { useSettings as t } from "./query/use-settings.js";
import n from "../assets/notification.js";
import { useEffect as r, useRef as i } from "react";
//#region src/hooks/use-agent-notification.ts
var a = [
	e.AWAITING_USER_INPUT,
	e.FINISHED,
	e.AWAITING_USER_CONFIRMATION
];
function o(e) {
	let { data: o } = t(), s = i(void 0), c = i(void 0);
	r(() => {
		typeof window < "u" && !s.current && (s.current = new Audio(n), s.current.volume = .5);
	}, []);
	let l = o?.enable_sound_notifications ?? !1;
	r(() => {
		c.current !== e && (c.current = e, a.includes(e) && l && s.current && (s.current.currentTime = 0, s.current.play().catch(() => {})));
	}, [e, l]);
}
//#endregion
export { o as useAgentNotification };

//# sourceMappingURL=use-agent-notification.js.map