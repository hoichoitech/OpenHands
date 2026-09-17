import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/budget-usage-text.tsx
function r({ currentCost: r, maxBudget: i }) {
	let { t: a } = e("openhands"), o = r / i * 100;
	return /* @__PURE__ */ n("div", {
		className: "flex justify-end",
		children: /* @__PURE__ */ n("span", {
			className: "text-xs text-[var(--oh-muted)]",
			children: a(t.CONVERSATION$BUDGET_USAGE_FORMAT, {
				currentCost: `$${r.toFixed(4)}`,
				maxBudget: `$${i.toFixed(4)}`,
				usagePercentage: o.toFixed(2),
				used: a(t.CONVERSATION$USED)
			})
		})
	});
}
//#endregion
export { r as BudgetUsageText };

//# sourceMappingURL=budget-usage-text.js.map