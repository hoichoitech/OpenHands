import { RUNTIME_INACTIVE_STATES as e } from "../types/agent-state.js";
import { useAgentState as t } from "./use-agent-state.js";
//#region src/hooks/use-handle-runtime-active.ts
var n = () => {
	let { curAgentState: n } = t();
	return { runtimeActive: !e.includes(n) };
};
//#endregion
export { n as useHandleRuntimeActive };

//# sourceMappingURL=use-handle-runtime-active.js.map