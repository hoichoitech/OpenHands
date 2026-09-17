import { cn as e } from "../../../utils/utils.js";
import { tooltip_default as t } from "../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import n from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/shared/buttons/styled-tooltip.tsx
function i(e) {
	return n.Children.count(e) === 1 && n.isValidElement(e) ? e : /* @__PURE__ */ r("span", {
		className: "inline-flex",
		children: e
	});
}
function a({ children: n, content: a, tooltipClassName: o, placement: s = "right", showArrow: c = !1, closeDelay: l = 100, shouldFlip: u, offset: d = 7, isOpen: f }) {
	return /* @__PURE__ */ r(t, {
		content: a,
		closeDelay: l,
		placement: s,
		offset: d,
		shouldFlip: u,
		isOpen: f,
		className: e("bg-white text-black", o),
		showArrow: c,
		disableAnimation: !1,
		classNames: { content: e("z-[9999] rounded-md px-2 py-1 text-xs font-medium shadow-md", "!bg-white !text-black", o) },
		children: i(n)
	});
}
//#endregion
export { a as StyledTooltip };

//# sourceMappingURL=styled-tooltip.js.map