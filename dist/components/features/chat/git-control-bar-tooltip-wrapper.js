import { StyledTooltip as e } from "../../shared/buttons/styled-tooltip.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/chat/git-control-bar-tooltip-wrapper.tsx
function n({ children: n, tooltipMessage: r, testId: i, shouldShowTooltip: a }) {
	return a ? /* @__PURE__ */ t(e, {
		content: r,
		placement: "top",
		showArrow: !0,
		tooltipClassName: "bg-white text-black",
		children: /* @__PURE__ */ t("span", {
			"data-testid": i,
			className: "hover:opacity-100",
			children: n
		})
	}) : n;
}
//#endregion
export { n as GitControlBarTooltipWrapper };

//# sourceMappingURL=git-control-bar-tooltip-wrapper.js.map