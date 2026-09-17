import { create as e } from "../node_modules/zustand/esm/react.js";
//#region src/stores/command-menu-store.ts
var t = e((e) => ({
	isOpen: !1,
	open: () => e({ isOpen: !0 }),
	close: () => e({ isOpen: !1 }),
	toggle: () => e((e) => ({ isOpen: !e.isOpen }))
}));
//#endregion
export { t as useCommandMenuStore };

//# sourceMappingURL=command-menu-store.js.map