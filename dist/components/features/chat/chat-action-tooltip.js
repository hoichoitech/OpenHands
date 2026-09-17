import { StyledTooltip as e } from "../../shared/buttons/styled-tooltip.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/chat/chat-action-tooltip.tsx
function n({ children: n, tooltip: r, ariaLabel: i }) {
	return /* @__PURE__ */ t(e, {
		content: r,
		placement: "bottom",
		tooltipClassName: "bg-white text-black text-xs font-medium leading-5",
		children: /* @__PURE__ */ t("span", {
			"data-aria-label": i,
			children: n
		})
	});
}
//#endregion
export { n as ChatActionTooltip };

//# sourceMappingURL=chat-action-tooltip.js.map