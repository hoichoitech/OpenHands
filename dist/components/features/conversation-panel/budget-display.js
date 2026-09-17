import { BudgetProgressBar as e } from "./budget-progress-bar.js";
import { BudgetUsageText as t } from "./budget-usage-text.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/budget-display.tsx
function i({ cost: i, maxBudgetPerTask: a }) {
	return i === null || a === null || a <= 0 ? null : /* @__PURE__ */ r("div", { children: [/* @__PURE__ */ n(e, {
		currentCost: i,
		maxBudget: a
	}), /* @__PURE__ */ n(t, {
		currentCost: i,
		maxBudget: a
	})] });
}
//#endregion
export { i as BudgetDisplay };

//# sourceMappingURL=budget-display.js.map