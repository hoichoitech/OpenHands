import { AgentState as e } from "../types/agent-state.js";
import { displayErrorToast as t } from "../utils/custom-toast-handlers.js";
import { generateAgentStateChangeEvent as n } from "../services/agent-state-service.js";
import { isAgentErrorEvent as r, isAgentServerEvent as i } from "../types/agent-server/type-guards.js";
import { useEventStore as a } from "../stores/use-event-store.js";
import { useSendMessage as o } from "./use-send-message.js";
import s from "react";
//#region src/hooks/use-handle-ws-events.ts
var c = (e) => "error" in e, l = (e) => "type" in e && e.type === "error", u = () => {
	let { send: u } = o(), d = a((e) => e.events);
	s.useEffect(() => {
		if (!d.length) return;
		let a = d[d.length - 1];
		if (!(i(a) && r(a))) {
			if (c(a)) {
				if (a.error_code === 401) {
					t("Session expired.");
					return;
				}
				typeof a.error == "string" ? t(a.error) : t(a.message);
				return;
			}
			l(a) && `${a.message ?? ""}`.startsWith("Agent reached maximum") && u(n(e.PAUSED));
		}
	}, [d.length]);
};
//#endregion
export { u as useHandleWSEvents };

//# sourceMappingURL=use-handle-ws-events.js.map