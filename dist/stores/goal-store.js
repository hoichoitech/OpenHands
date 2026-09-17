import { create as e } from "../node_modules/zustand/esm/react.js";
import { devtools as t } from "../node_modules/zustand/esm/middleware.js";
//#region src/stores/goal-store.ts
var n = { statusByConversation: {} }, r = e()(t((e) => ({
	...n,
	setStatus: (t, n) => e((e) => ({ statusByConversation: {
		...e.statusByConversation,
		[t]: n
	} }))
}), { name: "GoalStore" }));
//#endregion
export { r as useGoalStore };

//# sourceMappingURL=goal-store.js.map