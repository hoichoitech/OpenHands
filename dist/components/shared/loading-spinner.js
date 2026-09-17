import { cn as e } from "../../utils/utils.js";
import t from "../../icons/loading-outer.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/shared/loading-spinner.tsx
function r({ size: r, className: i, outerClassName: a }) {
	let o = r === "small" ? "w-[25px] h-[25px]" : "w-[50px] h-[50px]";
	return /* @__PURE__ */ n("div", {
		"data-testid": "loading-spinner",
		className: e("relative", o, i),
		children: /* @__PURE__ */ n(t, { className: e("absolute animate-spin", o, a) })
	});
}
//#endregion
export { r as LoadingSpinner };

//# sourceMappingURL=loading-spinner.js.map