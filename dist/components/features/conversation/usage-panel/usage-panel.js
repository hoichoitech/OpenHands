import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Gauge as n } from "../../../../node_modules/lucide-react/dist/esm/icons/gauge.js";
import { ConversationTabEmptyState as r } from "../conversation-tab-empty-state.js";
import { useActiveConversation as i } from "../../../../hooks/query/use-active-conversation.js";
import { getContextWindowUsagePercentage as a } from "../../../../utils/format-token-count.js";
import { ContextMeter as o } from "./context-meter.js";
import { useLiveConversationMetrics as s } from "../../../../hooks/use-live-conversation-metrics.js";
import { CostSection as c } from "../metrics-modal/cost-section.js";
import { UsageSection as l } from "../metrics-modal/usage-section.js";
import { CompactContextButton as u } from "./compact-context-button.js";
import { ProviderBalanceCard as d } from "./provider-balance-card.js";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/features/conversation/usage-panel/usage-panel.tsx
function m() {
	let { t: m } = e("openhands"), h = s(), { data: g } = i(), _ = g?.agent_kind === "acp", { usage: v } = h;
	return h.cost !== null || v !== null ? /* @__PURE__ */ p("main", {
		"data-testid": "usage-panel",
		className: "h-full overflow-y-auto custom-scrollbar-always flex flex-col gap-3 p-3",
		children: [
			v !== null && /* @__PURE__ */ f("div", {
				className: "rounded-md border border-[var(--oh-border)] bg-surface-raised p-3",
				children: /* @__PURE__ */ p("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ f(o, {
						perTurnToken: v.per_turn_token,
						contextWindow: v.context_window
					}), /* @__PURE__ */ f(u, {
						fillPercent: a(v.per_turn_token, v.context_window),
						perTurnToken: v.per_turn_token
					})]
				})
			}),
			/* @__PURE__ */ f("div", {
				className: "rounded-md border border-[var(--oh-border)] bg-surface-raised p-3",
				children: /* @__PURE__ */ p("div", {
					className: "grid gap-3",
					children: [
						/* @__PURE__ */ f("div", {
							className: "flex justify-between items-center pb-2",
							children: /* @__PURE__ */ f("span", {
								className: "text-lg font-semibold",
								children: m(t.CONVERSATION$TOKEN_USAGE)
							})
						}),
						_ && /* @__PURE__ */ f("span", {
							className: "text-xs text-[var(--oh-muted)]",
							children: m(t.CONVERSATION$PLAN_USAGE_NOTE)
						}),
						v !== null && /* @__PURE__ */ f(l, { usage: v }),
						/* @__PURE__ */ f(c, {
							cost: h.cost,
							maxBudgetPerTask: h.max_budget_per_task
						})
					]
				})
			}),
			/* @__PURE__ */ f(d, {})
		]
	}) : /* @__PURE__ */ f(r, {
		icon: /* @__PURE__ */ f(n, {}),
		children: m(t.CONVERSATION$NO_METRICS)
	});
}
//#endregion
export { m as UsagePanel };

//# sourceMappingURL=usage-panel.js.map