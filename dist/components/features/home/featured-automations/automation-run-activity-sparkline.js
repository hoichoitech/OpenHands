import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { tooltip_default as r } from "../../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import { NavigationLink as i } from "../../../shared/navigation-link.js";
import { getAutomationRunDisplay as a } from "../../../../utils/automation-run-display.js";
import { formatRelativeTime as o } from "../../../../utils/format-relative-time.js";
import { getLastRunTimestamp as s } from "./automation-run-health.js";
import "../../../../hooks/query/use-latest-automation-runs.js";
import { isInFlightAutomationRun as c } from "../../../../hooks/use-home-automation-actions.js";
import { barColorClassForStatus as l, durationMsToSparklineBarHeightPx as u, formatDurationForTitle as d, getAutomationRunDurationMs as f, getAutomationRunStatusLabelKey as p } from "./automation-run-activity-metrics.js";
import { useEffect as m, useState as h } from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/features/home/featured-automations/automation-run-activity-sparkline.tsx
function v({ label: e, children: t }) {
	return /* @__PURE__ */ _("div", {
		className: "flex items-start gap-2 text-xs",
		children: [/* @__PURE__ */ g("span", {
			className: "w-16 shrink-0 text-[var(--oh-muted)]",
			children: e
		}), /* @__PURE__ */ g("span", {
			className: "min-w-0 flex-1 break-words text-white",
			children: t
		})]
	});
}
function y({ run: r, nowMs: i }) {
	let { t: c, i18n: u } = e("openhands"), m = s(r), h = m ? o(m, u.language, c) : null, y = d(f(r, i)), b = a(r), x = c(p(b.badgeStatus));
	return /* @__PURE__ */ _("div", {
		className: "flex w-[220px] flex-col gap-2 p-3",
		children: [
			/* @__PURE__ */ _("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ g("span", {
					"aria-hidden": "true",
					className: n("h-3 w-1.5 shrink-0 rounded-[1px]", l(b.badgeStatus))
				}), /* @__PURE__ */ g("span", {
					className: "text-sm font-medium text-white",
					children: x
				})]
			}),
			/* @__PURE__ */ _("div", {
				className: "flex flex-col gap-1",
				children: [h ? /* @__PURE__ */ g(v, {
					label: c(t.AUTOMATIONS$DETAIL$LAST_RUN),
					children: h
				}) : null, y ? /* @__PURE__ */ g(v, {
					label: c(t.FEATURED_AUTOMATIONS$RUN_DURATION),
					children: y
				}) : null]
			}),
			b.summary ? /* @__PURE__ */ g("p", {
				className: "line-clamp-3 text-xs text-[var(--oh-text-secondary)]",
				children: b.summary
			}) : null
		]
	});
}
function b({ automationId: t, run: o, nowMs: s }) {
	let { t: c } = e("openhands"), d = f(o, s), m = a(o), h = c(p(m.badgeStatus)), _ = `/automations/${encodeURIComponent(t)}?run=${encodeURIComponent(o.id)}`;
	return /* @__PURE__ */ g(r, {
		content: /* @__PURE__ */ g(y, {
			run: o,
			nowMs: s
		}),
		placement: "top",
		closeDelay: 80,
		delay: 200,
		disableAnimation: !1,
		className: "rounded-xl border border-[var(--oh-border)] bg-base-secondary p-0 text-white shadow-xl",
		children: /* @__PURE__ */ g(i, {
			to: _,
			"aria-label": h,
			className: "group/spark-bar inline-flex h-full cursor-pointer items-end px-[2px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--oh-focus)]",
			onMouseDown: (e) => e.stopPropagation(),
			onClick: (e) => e.stopPropagation(),
			children: /* @__PURE__ */ g("span", {
				className: n("w-1 shrink-0 origin-bottom rounded-[1px]", "transition-transform duration-100 ease-out motion-reduce:transition-none", "group-hover/spark-bar:scale-x-[1.4] group-hover/spark-bar:scale-y-[1.15]", "group-focus-visible/spark-bar:scale-x-[1.4] group-focus-visible/spark-bar:scale-y-[1.15]", l(m.badgeStatus)),
				style: { height: u(d) }
			})
		})
	});
}
function x({ automationId: n, runs: r, testId: i }) {
	let { t: a } = e("openhands"), o = r.some((e) => c(e)), [s, l] = h(() => Date.now());
	if (m(() => {
		if (!o) return;
		let e = window.setInterval(() => l(Date.now()), 1e3);
		return () => window.clearInterval(e);
	}, [o]), r.length === 0) return null;
	let u = [...r].reverse().slice(-12);
	return /* @__PURE__ */ g("span", {
		"data-testid": i,
		"aria-label": a(t.FEATURED_AUTOMATIONS$RUN_ACTIVITY_LABEL, { count: u.length }),
		className: "inline-flex shrink-0 items-end",
		style: { height: 18 },
		onMouseDown: (e) => e.preventDefault(),
		children: u.map((e, t) => /* @__PURE__ */ g(b, {
			automationId: n,
			run: e,
			nowMs: s
		}, `${e.id}-${t}`))
	});
}
//#endregion
export { x as AutomationRunActivitySparkline };

//# sourceMappingURL=automation-run-activity-sparkline.js.map