import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/metrics-store.ts
var t = {
	cost: null,
	max_budget_per_task: null,
	usage: null
}, n = e((e) => ({
	...t,
	setMetrics: (t) => e(t),
	resetMetrics: () => e(t)
}));
//#endregion
export { n as default };

//# sourceMappingURL=metrics-store.js.map