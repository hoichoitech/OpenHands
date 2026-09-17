import e from "../../../icons/arrow-send.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/shared/buttons/scroll-to-bottom-button.tsx
function n({ onClick: n }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		onClick: n,
		"data-testid": "scroll-to-bottom",
		className: "flex items-center justify-center size-8 rounded-full bg-[var(--oh-surface)] text-[var(--oh-muted)] hover:bg-tertiary hover:text-white rotate-180 cursor-pointer transition-colors",
		children: /* @__PURE__ */ t(e, {
			width: 15,
			height: 15
		})
	});
}
//#endregion
export { n as ScrollToBottomButton };

//# sourceMappingURL=scroll-to-bottom-button.js.map