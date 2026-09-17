import "../../../contexts/active-backend-context.js";
import "../../../api/canvas-extensions-service.js";
import "../../../hooks/query/use-canvas-extensions.js";
import e from "react";
import "react/jsx-runtime";
import "react-router";
//#region src/components/features/canvas-extensions/canvas-extensions-runtime.tsx
var t = {
	pages: [],
	activating: !1,
	errors: /* @__PURE__ */ new Map()
}, n = e.createContext(t);
function r() {
	return e.useContext(n);
}
//#endregion
export { r as useCanvasExtensionsRuntime };

//# sourceMappingURL=canvas-extensions-runtime.js.map