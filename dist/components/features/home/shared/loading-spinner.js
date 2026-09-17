import { cn as e } from "../../../../utils/utils.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/home/shared/loading-spinner.tsx
function n({ hasSelection: n, testId: r = "dropdown-loading" }) {
	return /* @__PURE__ */ t("div", {
		className: e("absolute top-1/2 transform -translate-y-1/2", n ? "right-11" : "right-6"),
		children: /* @__PURE__ */ t("div", {
			className: "animate-spin h-4 w-4 border-2 border-transparent border-t-white rounded-full",
			"data-testid": r
		})
	});
}
//#endregion
export { n as LoadingSpinner };

//# sourceMappingURL=loading-spinner.js.map