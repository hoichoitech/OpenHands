import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Zap as n } from "../../../../node_modules/lucide-react/dist/esm/icons/zap.js";
import { getAutomationRunBadgeLabelKey as r, getAutomationRunDisplay as i } from "../../../../utils/automation-run-display.js";
import { formatRelativeTime as a } from "../../../../utils/format-relative-time.js";
import o from "../../../../icons/clock.js";
import { deriveRunHealth as s, getLastRunTimestamp as c, getRunHealthLabelKey as l, getTriggerSummary as u } from "./automation-run-health.js";
import { shouldShowRunPhase as d, useRunPhase as f } from "../../automations/detail/run-phase.js";
import { AutomationHealthIndicator as p } from "./automation-health-indicator.js";
import { getDisablementReasonDisplay as m, hasDisablementReason as h } from "../../../../utils/automation-disabled-reason.js";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/features/home/featured-automations/home-automation-run-tooltip.tsx
function v(e) {
	return e.isError ? t.FEATURED_AUTOMATIONS$STATUS_UNAVAILABLE : e.latestRun ? r(i(e.latestRun).badgeStatus) : l(s(e));
}
function y({ label: e, children: t }) {
	return /* @__PURE__ */ _("div", {
		className: "flex items-start gap-2 text-xs",
		children: [/* @__PURE__ */ g("span", {
			className: "w-20 shrink-0 text-[var(--oh-muted)]",
			children: e
		}), /* @__PURE__ */ g("span", {
			className: "min-w-0 flex-1 break-words text-[var(--oh-foreground)]",
			children: t
		})]
	});
}
function b({ run: n }) {
	let { t: r } = e("openhands"), i = f({
		status: n?.status,
		code: n?.phase_code,
		label: n?.phase_label,
		updatedAt: n?.phase_updated_at
	});
	if (!n || !d(n.status) || !i) return null;
	let { text: a, age: o } = i;
	return /* @__PURE__ */ g(y, {
		label: r(t.AUTOMATIONS$DETAIL$PHASE),
		children: /* @__PURE__ */ _("span", {
			"data-testid": "run-phase-row",
			children: [a, o ? /* @__PURE__ */ _("span", {
				className: "text-muted",
				children: [" · ", o]
			}) : null]
		})
	});
}
function x({ automation: r, runState: l }) {
	let { t: d, i18n: f } = e("openhands"), { latestRun: x } = l, S = x ? c(x) : null, C = r.trigger.type === "event" ? n : o, w = s(l), T = x ? i(x) : null, E = h(r) ? m(r, d) : null;
	return /* @__PURE__ */ _("div", {
		className: "flex w-[280px] flex-col gap-3 p-3",
		children: [/* @__PURE__ */ g("span", {
			className: "break-words text-sm font-medium text-white",
			children: r.name
		}), /* @__PURE__ */ _("dl", {
			className: "flex flex-col gap-1.5",
			children: [
				/* @__PURE__ */ g(y, {
					label: d(t.AUTOMATIONS$DETAIL$TRIGGER),
					children: /* @__PURE__ */ _("span", {
						className: "inline-flex min-w-0 items-start gap-1.5",
						children: [/* @__PURE__ */ g(C, {
							className: "mt-0.5 size-3 shrink-0",
							"aria-hidden": "true"
						}), /* @__PURE__ */ g("span", {
							className: "break-all",
							children: u(r)
						})]
					})
				}),
				/* @__PURE__ */ g(y, {
					label: d(t.COMMON$STATUS),
					children: /* @__PURE__ */ _("span", {
						className: "inline-flex min-w-0 items-center gap-1.5",
						children: [/* @__PURE__ */ g(p, { health: w }), /* @__PURE__ */ g("span", { children: d(v(l)) })]
					})
				}),
				E ? /* @__PURE__ */ g(y, {
					label: d(t.AUTOMATIONS$DETAIL$DISABLED_REASON_HEADING),
					children: /* @__PURE__ */ g("span", {
						"data-testid": "automation-tooltip-disabled-reason",
						className: "line-clamp-3 text-[var(--oh-text-secondary)]",
						children: E.text
					})
				}) : null,
				/* @__PURE__ */ g(b, { run: x }),
				S ? /* @__PURE__ */ g(y, {
					label: d(t.AUTOMATIONS$DETAIL$LAST_RUN),
					children: a(S, f.language, d)
				}) : null,
				T?.summary ? /* @__PURE__ */ g(y, {
					label: d(t.AUTOMATIONS$DETAIL$TASK_LABEL),
					children: /* @__PURE__ */ g("span", {
						className: "line-clamp-3 text-[var(--oh-text-secondary)]",
						children: T.summary
					})
				}) : null
			]
		})]
	});
}
//#endregion
export { x as HomeAutomationRunTooltip, v as getRunStatusLabelKey };

//# sourceMappingURL=home-automation-run-tooltip.js.map