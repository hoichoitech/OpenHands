import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/features/home/shared/error-message.tsx
function t({ isError: t, message: n = "Failed to load data", testId: r = "dropdown-error" }) {
	return t ? /* @__PURE__ */ e("div", {
		className: "text-red-500 text-sm mt-1",
		"data-testid": r,
		children: n
	}) : null;
}
//#endregion
export { t as ErrorMessage };

//# sourceMappingURL=error-message.js.map