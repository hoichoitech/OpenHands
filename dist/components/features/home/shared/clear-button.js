import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/home/shared/clear-button.tsx
function i({ disabled: i, onClear: a, testId: o = "dropdown-clear" }) {
	let { t: s } = e("openhands");
	return /* @__PURE__ */ r("button", {
		onClick: (e) => {
			e.stopPropagation(), a();
		},
		disabled: i,
		className: n("p-1 text-[#fff]", "cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"),
		type: "button",
		"aria-label": s(t.COMMON$CLEAR_SELECTION),
		"data-testid": o,
		children: /* @__PURE__ */ r("svg", {
			className: "w-4 h-4",
			fill: "none",
			stroke: "currentColor",
			viewBox: "0 0 24 24",
			children: /* @__PURE__ */ r("path", {
				strokeLinecap: "round",
				strokeLinejoin: "round",
				strokeWidth: 2,
				d: "M6 18L18 6M6 6l12 12"
			})
		})
	});
}
//#endregion
export { i as ClearButton };

//# sourceMappingURL=clear-button.js.map