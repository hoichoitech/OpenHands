import { CODE_COMMAND as e, PLAN_COMMAND as t } from "../../utils/constants.js";
import { AgentState as n } from "../../types/agent-state.js";
import { useConversationStore as r } from "../../stores/conversation-store.js";
import { usePlanningAgentState as i } from "../use-agent-state.js";
import { useMainWebSocketStatus as a, useUnifiedWebSocketStatus as o } from "../use-unified-websocket-status.js";
import { useHandlePlanClick as s } from "../use-handle-plan-click.js";
import { useCallback as c } from "react";
//#region src/hooks/chat/use-plan-mode-interceptor.ts
var l = `${t} `, u = `${e} `, d = (d, f, p) => {
	let m = r((e) => e.setConversationMode), { handlePlanClick: h, hasPlanner: g, isCreatingConversation: _ } = s(), v = a() === "OPEN", y = o() === "OPEN", { isPlanningAgentRunning: b } = i();
	return c((r) => {
		let i = r.trim(), a = i === "/plan" || i.startsWith(l), o = i === "/code" || i.startsWith(u);
		if (!d || !a && !o) {
			p(r);
			return;
		}
		if (!(f === n.RUNNING || _)) if (a) {
			if (b || !y) return;
			let e = i.slice(t.length).trim();
			e && g ? (m("plan"), p(e)) : h(void 0, e || void 0);
		} else {
			if (!v) return;
			m("code");
			let t = i.slice(e.length).trim();
			t && p(t);
		}
	}, [
		d,
		f,
		g,
		_,
		v,
		b,
		y,
		p,
		h,
		m
	]);
};
//#endregion
export { d as usePlanModeInterceptor };

//# sourceMappingURL=use-plan-mode-interceptor.js.map