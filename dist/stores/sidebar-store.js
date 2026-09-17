import { create as e } from "../node_modules/zustand/esm/react.js";
import { createJSONStorage as t, persist as n } from "../node_modules/zustand/esm/middleware.js";
//#region src/stores/sidebar-store.ts
var r = "openhands-sidebar", i = "openhands-sidebar-collapsed", a = e()(n((e) => ({
	collapsed: !1,
	setCollapsed: (t) => e((e) => ({ collapsed: typeof t == "function" ? t(e.collapsed) : t })),
	toggleCollapsed: () => e((e) => ({ collapsed: !e.collapsed }))
}), {
	name: r,
	storage: t(() => localStorage),
	partialize: (e) => ({ collapsed: e.collapsed })
}));
if (typeof window < "u") try {
	let e = window.localStorage.getItem(i);
	window.localStorage.getItem(r) === null && (e === "true" || e === "false") && a.setState({ collapsed: e === "true" }), e !== null && window.localStorage.removeItem(i);
} catch {}
//#endregion
export { a as useSidebarStore };

//# sourceMappingURL=sidebar-store.js.map