import { AgentState as e } from "../types/agent-state.js";
import { create as t } from "../node_modules/zustand/esm/react.js";
//#region src/stores/agent-store.ts
var n = { curAgentState: e.LOADING }, r = t((e) => ({
	...n,
	setCurrentAgentState: (t) => e({ curAgentState: t }),
	reset: () => e(n)
}));
//#endregion
export { r as useAgentStore };

//# sourceMappingURL=agent-store.js.map