import { RUNTIME_INACTIVE_STATES as e, RUNTIME_STARTING_STATES as t } from "../types/agent-state.js";
import { isExecutionActive as n } from "../utils/status.js";
import { useActiveConversation as r } from "./query/use-active-conversation.js";
import { useAgentState as i } from "./use-agent-state.js";
//#region src/hooks/use-runtime-is-ready.ts
var a = ({ allowAgentError: a = !1 } = {}) => {
	let { data: o } = r(), { curAgentState: s } = i(), c = a ? t : e;
	return n(o?.execution_status) && !c.includes(s);
};
//#endregion
export { a as useRuntimeIsReady };

//# sourceMappingURL=use-runtime-is-ready.js.map