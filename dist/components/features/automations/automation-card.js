import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useNavigation as r } from "../../../context/navigation-context.js";
import { resolveAutomationImpactStatement as i } from "../../../utils/automation-catalog.js";
import { tooltip_default as a } from "../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import { StyledTooltip as o } from "../../shared/buttons/styled-tooltip.js";
import { extensionModuleCardInteractiveClassName as s, extensionModuleCardSurfaceClassName as c } from "../../../utils/extension-module-card-classes.js";
import { getAutomationRunDisplay as ee } from "../../../utils/automation-run-display.js";
import { automationIconActionButtonClassName as te } from "./automation-action-button-classes.js";
import { KebabMenu as l } from "./kebab-menu.js";
import { useAutomationPermissions as u, useIsAutomationOwner as d } from "../../../hooks/use-automation-permissions.js";
import f from "../../../icons/play.js";
import { SkillCardPillRow as p } from "../skills/skill-card-pill-row.js";
import { formatRelativeTime as ne } from "../../../utils/format-relative-time.js";
import { getLastRunTimestamp as re, shortenAutomationRunSummary as m, shouldShowAutomationRunSummaryHovercard as h } from "../home/featured-automations/automation-run-health.js";
import { buildAutomationMetadataPills as g } from "./build-automation-pills.js";
import { buildAutomationMenuItems as _ } from "./build-automation-menu-items.js";
import { AutomationRunStats as v } from "./automation-run-insights.js";
import { automationCardStatusStripClassName as ie } from "./automation-view-mode.js";
import { toLatestRunState as ae } from "./to-latest-run-state.js";
import { RunPhase as oe, shouldShowRunPhase as y } from "./detail/run-phase.js";
import { RunStatusBadge as b } from "./detail/run-status-badge.js";
import { AutomationRunActivitySparkline as x } from "../home/featured-automations/automation-run-activity-sparkline.js";
import { useMemo as S } from "react";
import { Fragment as C, jsx as w, jsxs as T } from "react/jsx-runtime";
//#region src/components/features/automations/automation-card.tsx
function E({ automation: E, onToggle: D, onRunNow: O, isRunPending: k = !1, onDelete: A, onExport: j, onEdit: M, insights: N }) {
	let { navigate: se } = r(), { t: P, i18n: F } = e("openhands"), { canManage: I } = u(), L = d(E), R = I || L, z = E.enabled ? R : L, B = E.trigger.schedule_human || E.trigger.type, V = S(() => g(E, B), [E, B]), H = () => {
		se?.(`/automations/${E.id}`);
	}, U = _({
		automation: E,
		t: P,
		canManage: R,
		canToggle: z,
		onRunNow: O,
		isRunPending: k,
		onView: H,
		onExport: j,
		onEdit: M,
		onToggle: D,
		onDelete: A
	}), W = ae(N?.state), G = i(E, N?.state?.summary?.completedTotal ?? null), { latestRun: K, recentRuns: q, isLoading: J, isError: Y } = W, X = K ? re(K) : null, Z = K ? ee(K) : null, Q = Z?.summary ?? null, $ = Q ? m(Q) : null, ce = Q != null && $ != null && h(Q, $), le = y(K?.status);
	return /* @__PURE__ */ T("div", {
		role: "link",
		tabIndex: 0,
		"data-testid": `automation-card-${E.id}`,
		onClick: H,
		onKeyDown: (e) => {
			e.key === "Enter" && H();
		},
		className: n("group relative flex min-w-0 flex-col overflow-hidden p-4 text-left", c, s),
		children: [
			/* @__PURE__ */ T("header", {
				className: "flex flex-col gap-1.5",
				children: [/* @__PURE__ */ T("div", {
					className: "flex h-8 items-center justify-between gap-3",
					children: [/* @__PURE__ */ w("h3", {
						className: "min-w-0 flex-1 truncate text-sm font-semibold leading-none text-[var(--oh-foreground)]",
						children: E.name
					}), /* @__PURE__ */ T("div", {
						className: "flex shrink-0 items-center gap-0.5",
						children: [R ? /* @__PURE__ */ w(o, {
							content: P(t.AUTOMATIONS$RUN_NOW),
							placement: "top",
							children: /* @__PURE__ */ w("button", {
								type: "button",
								"data-testid": `automation-run-now-${E.id}`,
								"aria-label": P(t.AUTOMATIONS$RUN_NOW),
								"aria-busy": k,
								disabled: k || !E.enabled,
								onClick: (e) => {
									e.stopPropagation(), O(E.id);
								},
								className: te,
								children: /* @__PURE__ */ w(f, {
									className: "size-4 shrink-0",
									"aria-hidden": !0
								})
							})
						}) : null, /* @__PURE__ */ w(l, {
							items: U,
							triggerClassName: "opacity-70 group-hover:opacity-100"
						})]
					})]
				}), E.prompt ? /* @__PURE__ */ w("p", {
					className: "line-clamp-2 text-xs leading-relaxed text-[var(--oh-text-secondary)]",
					children: E.prompt
				}) : null]
			}),
			V.length > 0 || q.length > 0 ? /* @__PURE__ */ T("div", {
				className: n("mt-3 flex items-center gap-3", V.length > 0 ? "justify-between" : "justify-end"),
				children: [V.length > 0 ? /* @__PURE__ */ w("div", {
					className: "min-w-0 flex-1 overflow-hidden",
					children: /* @__PURE__ */ w(p, {
						pills: V,
						testId: `automation-pills-${E.id}`
					})
				}) : null, q.length > 0 ? /* @__PURE__ */ w(x, {
					automationId: E.id,
					runs: q,
					testId: `automation-activity-${E.id}`
				}) : null]
			}) : null,
			N ? /* @__PURE__ */ T("div", {
				className: ie,
				children: [/* @__PURE__ */ T("div", {
					className: "flex min-w-0 flex-1 items-center gap-2 overflow-hidden",
					children: [
						J ? /* @__PURE__ */ w("div", {
							className: "h-3.5 w-3/4 animate-pulse rounded bg-surface-raised motion-reduce:animate-none",
							"aria-hidden": "true"
						}) : null,
						!J && Y ? /* @__PURE__ */ w("p", {
							className: "truncate text-[var(--oh-text-secondary)]",
							children: P(t.FEATURED_AUTOMATIONS$STATUS_UNAVAILABLE)
						}) : null,
						!J && !Y && !K ? /* @__PURE__ */ w("p", {
							className: "truncate text-[var(--oh-text-secondary)]",
							children: P(t.AUTOMATIONS$DETAIL$NO_RUNS)
						}) : null,
						K ? /* @__PURE__ */ T(C, { children: [
							/* @__PURE__ */ w(b, {
								status: Z?.badgeStatus ?? K.status,
								iconOnly: !0,
								showLabel: !0
							}),
							le ? /* @__PURE__ */ w(oe, {
								status: K.status,
								code: K.phase_code,
								label: K.phase_label,
								updatedAt: K.phase_updated_at
							}) : null,
							$ ? ce && Q ? /* @__PURE__ */ w(a, {
								content: /* @__PURE__ */ w("p", {
									className: "max-w-xs whitespace-pre-wrap break-words p-2 text-xs",
									children: Q
								}),
								placement: "top",
								closeDelay: 100,
								disableAnimation: !1,
								className: "rounded-xl border border-[var(--oh-border)] bg-base-secondary p-0 text-white shadow-xl",
								children: /* @__PURE__ */ w("span", {
									className: "min-w-0 flex-1 cursor-default truncate text-[var(--oh-text-secondary)]",
									children: $
								})
							}) : /* @__PURE__ */ w("p", {
								className: "min-w-0 flex-1 truncate text-[var(--oh-text-secondary)]",
								children: $
							}) : null
						] }) : null
					]
				}), X ? /* @__PURE__ */ w("span", {
					"data-testid": `automation-last-run-${E.id}`,
					className: "shrink-0 text-[var(--oh-text-secondary)]",
					children: ne(X, F.language, P)
				}) : null]
			}) : null,
			G ? /* @__PURE__ */ w("p", {
				"data-testid": `automation-impact-${E.id}`,
				className: "mt-3 truncate text-xs text-[var(--oh-text-secondary)]",
				children: G
			}) : null,
			N ? /* @__PURE__ */ w("div", {
				className: "mt-3",
				children: /* @__PURE__ */ w(v, {
					state: N.state,
					copy: N.spec.stats
				})
			}) : null
		]
	});
}
//#endregion
export { E as AutomationCard };

//# sourceMappingURL=automation-card.js.map