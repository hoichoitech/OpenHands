import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { StyledTooltip as n } from "../../shared/buttons/styled-tooltip.js";
import "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/context-menu/archived-disabled-tooltip.tsx
function i({ isDisabled: i, children: a, placement: o = "right" }) {
	let { t: s } = e("openhands");
	return i ? /* @__PURE__ */ r(n, {
		content: s(t.CONVERSATION$UNAVAILABLE_FOR_ARCHIVES),
		placement: o,
		tooltipClassName: "bg-white text-black text-xs font-medium leading-5",
		children: /* @__PURE__ */ r("span", {
			className: "block w-full",
			children: a
		})
	}) : a;
}
//#endregion
export { i as ArchivedDisabledTooltip };

//# sourceMappingURL=archived-disabled-tooltip.js.map