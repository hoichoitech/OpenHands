import e from "react";
import "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-mobile-nav-context.tsx
var t = e.createContext(null);
function n() {
	let n = e.useContext(t);
	if (!n) throw Error("useSidebarMobileNav must be used within SidebarMobileNavProvider");
	return n;
}
//#endregion
export { n as useSidebarMobileNav };

//# sourceMappingURL=sidebar-mobile-nav-context.js.map