import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { RefreshCw as n } from "../../../../node_modules/lucide-react/dist/esm/icons/refresh-cw.js";
import { cn as r } from "../../../../utils/utils.js";
import { useActiveConversation as i } from "../../../../hooks/query/use-active-conversation.js";
import { MetricRow as a } from "../metrics-modal/metric-row.js";
import { useLLMBalance as o } from "../../../../hooks/query/use-llm-balance.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/conversation/usage-panel/provider-balance-card.tsx
function l(e) {
	return `$${e.toFixed(2)}`;
}
function u() {
	let { t: u } = e("openhands"), { data: d } = i(), { data: f, isError: p, isFetching: m, refetch: h } = o(d?.id);
	if (!f || p) return null;
	let g = f.limit !== null && f.limitRemaining !== null;
	return /* @__PURE__ */ c("div", {
		"data-testid": "provider-balance-card",
		className: "rounded-md border border-[var(--oh-border)] bg-surface-raised p-3",
		children: [/* @__PURE__ */ c("div", {
			className: "flex items-center justify-between pb-2",
			children: [/* @__PURE__ */ s("span", {
				className: "font-semibold",
				children: u(t.CONVERSATION$PROVIDER_BALANCE)
			}), /* @__PURE__ */ c("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ c("span", {
					className: "text-xs text-[var(--oh-muted)]",
					children: [f.provider, f.isFreeTier ? ` · ${u(t.CONVERSATION$FREE_TIER)}` : null]
				}), /* @__PURE__ */ s("button", {
					type: "button",
					"data-testid": "provider-balance-refresh",
					"aria-label": u(t.BUTTON$REFRESH),
					disabled: m,
					onClick: () => h(),
					className: "cursor-pointer text-[var(--oh-muted)] hover:text-[var(--oh-foreground)] disabled:cursor-default",
					children: /* @__PURE__ */ s(n, { className: r("h-3.5 w-3.5", m && "animate-spin") })
				})]
			})]
		}), /* @__PURE__ */ c("div", {
			className: "grid gap-3",
			children: [g ? /* @__PURE__ */ s(a, {
				label: u(t.CONVERSATION$CREDITS_REMAINING),
				value: l(f.limitRemaining ?? 0)
			}) : null, /* @__PURE__ */ s(a, {
				label: u(t.CONVERSATION$CREDITS_USED),
				value: l(f.usage),
				valueClassName: g ? "" : "font-semibold",
				labelClassName: g ? "text-[var(--oh-muted)]" : ""
			})]
		})]
	});
}
//#endregion
export { u as ProviderBalanceCard };

//# sourceMappingURL=provider-balance-card.js.map