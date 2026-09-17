import e from "react";
import { jsx as t } from "react/jsx-runtime";
var n = e.createContext({
	currentPath: "/",
	conversationId: null,
	isNavigating: !1,
	navigate: () => {}
});
function r({ value: e, children: r }) {
	return /* @__PURE__ */ t(n.Provider, {
		value: e,
		children: r
	});
}
function i() {
	return e.useContext(n);
}
//#endregion
export { r as NavigationProvider, i as useNavigation };

//# sourceMappingURL=navigation-context.js.map