import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { CircleAlert as t } from "../../../../node_modules/lucide-react/dist/esm/icons/circle-alert.js";
import { CircleQuestionMark as n } from "../../../../node_modules/lucide-react/dist/esm/icons/circle-question-mark.js";
import { LoaderCircle as r } from "../../../../node_modules/lucide-react/dist/esm/icons/loader-circle.js";
import { cn as i } from "../../../../utils/utils.js";
import { StyledTooltip as a } from "../../../shared/buttons/styled-tooltip.js";
import { AutomationRunStatus as o } from "../../../../types/automation.js";
import { getAutomationRunBadgeLabelKey as s } from "../../../../utils/automation-run-display.js";
import c from "../../../../icons/clock.js";
import l from "../../../../icons/check-circle.js";
import u from "../../../../icons/x-circle.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/automations/detail/run-status-badge.tsx
var p = {
	[o.COMPLETED]: {
		style: "bg-[var(--oh-success)]/10 text-[var(--oh-success)]",
		iconTone: "text-[var(--oh-success)]"
	},
	success: {
		style: "bg-[var(--oh-success)]/10 text-[var(--oh-success)]",
		iconTone: "text-[var(--oh-success)]"
	},
	[o.FAILED]: {
		style: "bg-[var(--oh-danger)]/10 text-danger",
		iconTone: "text-danger"
	},
	failed: {
		style: "bg-[var(--oh-danger)]/10 text-danger",
		iconTone: "text-danger"
	},
	blocked: {
		style: "bg-[var(--oh-warning)]/10 text-[var(--oh-warning)]",
		iconTone: "text-[var(--oh-warning)]"
	},
	partial_success: {
		style: "bg-[var(--oh-warning)]/10 text-[var(--oh-warning)]",
		iconTone: "text-[var(--oh-warning)]"
	},
	unknown: {
		style: "bg-[var(--oh-warning)]/10 text-[var(--oh-warning)]",
		iconTone: "text-[var(--oh-warning)]"
	},
	[o.PENDING]: {
		style: "bg-surface-raised text-muted",
		iconTone: "text-muted"
	},
	[o.RUNNING]: {
		style: "bg-surface-raised text-muted",
		iconTone: "text-muted"
	},
	[o.CANCELLED]: {
		style: "bg-surface-raised text-muted",
		iconTone: "text-muted"
	},
	[o.SKIPPED]: {
		style: "bg-surface-raised text-muted",
		iconTone: "text-muted"
	}
};
function m({ status: e, compact: a = !1 }) {
	let s = a ? "size-3" : "size-3.5";
	switch (e) {
		case o.COMPLETED:
		case "success": return /* @__PURE__ */ d(l, {
			"data-testid": "run-status-icon-completed",
			className: s
		});
		case o.FAILED:
		case "failed": return /* @__PURE__ */ d(u, {
			"data-testid": "run-status-icon-failed",
			className: s
		});
		case o.RUNNING: return /* @__PURE__ */ d(r, {
			"data-testid": "run-status-icon-running",
			className: i(s, "animate-spin motion-reduce:animate-none"),
			"aria-hidden": "true"
		});
		case "blocked":
		case "partial_success": return /* @__PURE__ */ d(t, {
			"data-testid": "run-status-icon-warning",
			className: s,
			"aria-hidden": "true"
		});
		case "unknown": return /* @__PURE__ */ d(n, {
			"data-testid": "run-status-icon-needs-review",
			className: s,
			"aria-hidden": "true"
		});
		default: return /* @__PURE__ */ d(c, {
			"data-testid": "run-status-icon-pending",
			className: s
		});
	}
}
function h({ status: t, iconOnly: n = !1, showLabel: r = !1, compact: c = !1 }) {
	let { t: l } = e("openhands"), u = p[t] ?? p[o.PENDING], h = l(s(t));
	return n ? r ? /* @__PURE__ */ f("span", {
		"data-testid": "run-status-badge-icon",
		className: i("inline-flex min-w-0 shrink-0 items-center gap-1.5 text-xs font-medium", u.iconTone),
		children: [/* @__PURE__ */ d(m, {
			status: t,
			compact: c
		}), /* @__PURE__ */ d("span", {
			className: "truncate",
			children: h
		})]
	}) : /* @__PURE__ */ d(a, {
		content: h,
		placement: "top",
		children: /* @__PURE__ */ d("span", {
			role: "img",
			"aria-label": h,
			"data-testid": "run-status-badge-icon",
			className: i("inline-flex shrink-0 cursor-default items-center justify-center", u.iconTone),
			children: /* @__PURE__ */ d(m, {
				status: t,
				compact: c
			})
		})
	}) : /* @__PURE__ */ f("span", {
		className: i("inline-flex items-center rounded-full font-medium", c ? "gap-1 pl-1 pr-1.5 py-0 text-[10px] leading-4" : "gap-1.5 pl-2 pr-2.5 py-1 text-xs", u.style),
		children: [/* @__PURE__ */ d(m, {
			status: t,
			compact: c
		}), h]
	});
}
//#endregion
export { h as RunStatusBadge };

//# sourceMappingURL=run-status-badge.js.map