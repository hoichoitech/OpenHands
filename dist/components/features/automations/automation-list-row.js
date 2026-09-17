import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Zap as n } from "../../../node_modules/lucide-react/dist/esm/icons/zap.js";
import { cn as r } from "../../../utils/utils.js";
import { useNavigation as i } from "../../../context/navigation-context.js";
import { resolveAutomationImpactStatement as a } from "../../../utils/automation-catalog.js";
import { tooltip_default as o } from "../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import { StyledTooltip as s } from "../../shared/buttons/styled-tooltip.js";
import { NavigationLink as c } from "../../shared/navigation-link.js";
import { extensionModuleCardPillClassName as l } from "../../../utils/extension-module-card-classes.js";
import { getAutomationRunDisplay as u } from "../../../utils/automation-run-display.js";
import { automationIconActionButtonClassName as d } from "./automation-action-button-classes.js";
import { KebabMenu as f } from "./kebab-menu.js";
import { useAutomationPermissions as p, useIsAutomationOwner as m } from "../../../hooks/use-automation-permissions.js";
import h from "../../../icons/play.js";
import { formatRelativeTime as g } from "../../../utils/format-relative-time.js";
import ee from "../../../icons/clock.js";
import { deriveRunHealth as te, formatTriggerSourceLabel as ne, getLastRunTimestamp as re, getTriggerEventLabel as ie, getTriggerScheduleLabel as ae, getTriggerSource as _ } from "../home/featured-automations/automation-run-health.js";
import { buildAutomationMenuItems as v } from "./build-automation-menu-items.js";
import { automationActivityRowClassName as y } from "./automation-view-mode.js";
import { toLatestRunState as b } from "./to-latest-run-state.js";
import { RunStatusBadge as x } from "./detail/run-status-badge.js";
import { AutomationRunActivitySparkline as S } from "../home/featured-automations/automation-run-activity-sparkline.js";
import { AutomationHealthIndicator as C } from "../home/featured-automations/automation-health-indicator.js";
import { HomeAutomationRunTooltip as w, getRunStatusLabelKey as T } from "../home/featured-automations/home-automation-run-tooltip.js";
import { Fragment as E, jsx as D, jsxs as O } from "react/jsx-runtime";
//#region src/components/features/automations/automation-list-row.tsx
function k({ automation: k, onToggle: A, onRunNow: j, isRunPending: M = !1, onDelete: N, onExport: P, onEdit: F, insights: I }) {
	let { navigate: oe } = i(), { t: L, i18n: R } = e("openhands"), { canManage: z } = p(), B = m(k), V = z || B, H = v({
		automation: k,
		t: L,
		canManage: V,
		canToggle: k.enabled ? V : B,
		onRunNow: j,
		isRunPending: M,
		onView: () => {
			oe?.(`/automations/${k.id}`);
		},
		onExport: P,
		onEdit: F,
		onToggle: A,
		onDelete: N
	}), U = k.trigger.type === "event" ? n : ee, W = ie(k), G = ae(k), K = _(k), q = !!(W || G || K), J = b(I?.state), se = te(J), Y = a(k, I?.state?.summary?.completedTotal ?? null), X = J.latestRun, ce = X ? u(X) : null, Z = X ? re(X) : k.last_triggered_at, Q = Z ? g(Z, R.language, L) : null, le = q || !!Q || !!X?.status, ue = `/automations/${encodeURIComponent(k.id)}`, $ = T(J);
	return /* @__PURE__ */ O("li", {
		"data-testid": `automation-list-row-${k.id}`,
		className: y,
		children: [/* @__PURE__ */ D(o, {
			content: /* @__PURE__ */ D(w, {
				automation: k,
				runState: J
			}),
			placement: "top-start",
			closeDelay: 100,
			disableAnimation: !1,
			className: "rounded-xl border border-[var(--oh-border)] bg-base-secondary p-0 text-white shadow-xl",
			children: /* @__PURE__ */ D(c, {
				to: ue,
				"aria-label": `${k.name} ${L($)}`,
				className: "flex min-w-0 flex-1 items-center justify-between gap-3 px-3 py-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--oh-focus)]",
				children: /* @__PURE__ */ O("div", {
					className: "grid min-w-0 flex-1 grid-cols-[auto_minmax(0,1fr)] gap-x-2",
					children: [
						/* @__PURE__ */ D("span", {
							"data-testid": `automation-health-${k.id}`,
							className: "inline-flex h-5 w-2.5 shrink-0 items-center justify-center",
							children: /* @__PURE__ */ D(C, { health: se })
						}),
						/* @__PURE__ */ D("span", {
							className: "truncate text-sm font-medium leading-5 text-[var(--oh-foreground)]",
							children: k.name
						}),
						le ? /* @__PURE__ */ O("span", {
							className: "col-start-2 mt-0.5 flex min-w-0 items-center gap-1.5 text-xs leading-4 text-[var(--oh-text-secondary)]",
							children: [
								/* @__PURE__ */ D(U, {
									className: "size-3 shrink-0",
									"aria-hidden": "true"
								}),
								W ? /* @__PURE__ */ D("span", {
									className: "truncate",
									children: W
								}) : null,
								G ? /* @__PURE__ */ D("span", {
									className: "truncate",
									children: G
								}) : null,
								K ? /* @__PURE__ */ D("span", {
									className: r(l, "shrink-0 px-1.5 py-0 text-[var(--oh-text-secondary)]"),
									children: ne(K)
								}) : null,
								Q ? /* @__PURE__ */ O(E, { children: [q ? /* @__PURE__ */ D("span", {
									className: "shrink-0",
									"aria-hidden": "true",
									children: "·"
								}) : null, /* @__PURE__ */ D("span", {
									"data-testid": `automation-last-run-${k.id}`,
									className: "truncate",
									children: Q
								})] }) : null,
								X ? /* @__PURE__ */ O(E, { children: [q || Q ? /* @__PURE__ */ D("span", {
									className: "shrink-0",
									"aria-hidden": "true",
									children: "·"
								}) : null, /* @__PURE__ */ D(x, {
									status: ce?.badgeStatus ?? X.status,
									compact: !0
								})] }) : null,
								Y ? /* @__PURE__ */ O(E, { children: [q || Q || X ? /* @__PURE__ */ D("span", {
									className: "shrink-0",
									"aria-hidden": "true",
									children: "·"
								}) : null, /* @__PURE__ */ D("span", {
									"data-testid": `automation-impact-${k.id}`,
									className: "truncate",
									children: Y
								})] }) : null
							]
						}) : null,
						/* @__PURE__ */ D("span", {
							className: "sr-only",
							children: L($)
						})
					]
				})
			})
		}), /* @__PURE__ */ O("div", {
			className: "flex shrink-0 items-center gap-1.5 pr-1.5",
			children: [
				I ? /* @__PURE__ */ D(S, {
					automationId: k.id,
					runs: J.recentRuns,
					testId: `automation-activity-${k.id}`
				}) : null,
				V ? /* @__PURE__ */ D(s, {
					content: L(t.AUTOMATIONS$RUN_NOW),
					placement: "top",
					children: /* @__PURE__ */ D("button", {
						type: "button",
						"data-testid": `automation-run-now-${k.id}`,
						"aria-label": L(t.AUTOMATIONS$RUN_NOW),
						"aria-busy": M,
						disabled: M || !k.enabled,
						onClick: (e) => {
							e.stopPropagation(), j(k.id);
						},
						className: d,
						children: /* @__PURE__ */ D(h, {
							className: "size-4 shrink-0",
							"aria-hidden": !0
						})
					})
				}) : null,
				/* @__PURE__ */ D(f, {
					items: H,
					triggerClassName: "opacity-70 group-hover:opacity-100"
				})
			]
		})]
	});
}
//#endregion
export { k as AutomationListRow };

//# sourceMappingURL=automation-list-row.js.map