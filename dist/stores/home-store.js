import { create as e } from "../node_modules/zustand/esm/react.js";
import { createJSONStorage as t, persist as n } from "../node_modules/zustand/esm/middleware.js";
//#region src/stores/home-store.ts
var r = {
	recentRepositories: [],
	lastSelectedProvider: null
}, i = e()(n((e, t) => ({
	...r,
	addRecentRepository: (t) => e((e) => ({ recentRepositories: [t, ...e.recentRepositories.filter((e) => e.id !== t.id)].slice(0, 3) })),
	clearRecentRepositories: () => e(() => ({ recentRepositories: [] })),
	getRecentRepositories: () => t().recentRepositories,
	setLastSelectedProvider: (t) => e(() => ({ lastSelectedProvider: t })),
	getLastSelectedProvider: () => t().lastSelectedProvider
}), {
	name: "home-store",
	storage: t(() => localStorage)
}));
//#endregion
export { i as useHomeStore };

//# sourceMappingURL=home-store.js.map