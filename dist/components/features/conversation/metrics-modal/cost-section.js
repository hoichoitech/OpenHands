import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { BudgetDisplay as n } from "../../conversation-panel/budget-display.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/conversation/metrics-modal/cost-section.tsx
function o({ cost: o, maxBudgetPerTask: s }) {
	let { t: c } = e("openhands");
	return o === null ? null : /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i(n, {
		cost: o,
		maxBudgetPerTask: s
	}), /* @__PURE__ */ a("div", {
		className: "flex justify-between items-center border-t border-[var(--oh-border-subtle)] pt-2",
		children: [/* @__PURE__ */ i("span", {
			className: "font-semibold",
			children: c(t.CONVERSATION$TOTAL_COST)
		}), /* @__PURE__ */ a("span", {
			className: "font-semibold",
			children: ["$", o.toFixed(4)]
		})]
	})] });
}
//#endregion
export { o as CostSection };

//# sourceMappingURL=cost-section.js.map