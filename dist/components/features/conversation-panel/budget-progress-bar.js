import { cn as e } from "../../../utils/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/budget-progress-bar.tsx
function n({ currentCost: n, maxBudget: r }) {
	let i = n / r * 100;
	return /* @__PURE__ */ t("div", {
		className: "relative mt-1 h-1.5 w-full rounded-full bg-tertiary",
		children: /* @__PURE__ */ t("div", {
			className: e("absolute inset-y-0 left-0 rounded-full transition-all duration-300", i > 80 ? "bg-red-500" : "bg-blue-500"),
			style: { width: `${Math.min(100, i)}%` }
		})
	});
}
//#endregion
export { n as BudgetProgressBar };

//# sourceMappingURL=budget-progress-bar.js.map