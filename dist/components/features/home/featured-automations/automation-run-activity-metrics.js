import { AutomationRunStatus as e } from "../../../../types/automation.js";
import { getAutomationRunBadgeLabelKey as t } from "../../../../utils/automation-run-display.js";
var n = 1e3, r = 30 * 6e4;
function i(t, n = Date.now()) {
	let r = t.started_at ? new Date(t.started_at).getTime() : NaN;
	if (Number.isNaN(r) || r <= 0) return null;
	if (t.completed_at) {
		let e = new Date(t.completed_at).getTime();
		return Number.isNaN(e) || e < r ? null : e - r;
	}
	return t.status === e.PENDING || t.status === e.RUNNING ? Math.max(0, n - r) : null;
}
function a(e) {
	if (e == null || e <= 0) return 11;
	let t = Math.log(Math.min(r, Math.max(n, e)) / n) / Math.log(r / n);
	return Math.round(6 + t * 9);
}
function o(t) {
	switch (t) {
		case e.COMPLETED:
		case "success": return "bg-[var(--oh-status-success)]";
		case e.FAILED:
		case "failed": return "bg-[var(--oh-status-error)]";
		case "blocked":
		case "partial_success":
		case "unknown": return "bg-[var(--oh-warning)]";
		case e.RUNNING: return "bg-[var(--oh-status-success)] animate-pulse motion-reduce:animate-none";
		case e.PENDING: return "bg-[repeating-linear-gradient(-45deg,var(--oh-muted)_0_1.5px,var(--oh-border)_1.5px_3px)]";
		case e.CANCELLED: return "bg-[var(--oh-muted)]";
		default: return "bg-[var(--oh-border)]";
	}
}
function s(e) {
	return t(e);
}
function c(e) {
	return e == null || e <= 0 ? null : e < 6e4 ? `${Math.max(1, Math.round(e / 1e3))}s` : e < 36e5 ? `${Math.round(e / 6e4)}m` : `${(e / 36e5).toFixed(1)}h`;
}
//#endregion
export { o as barColorClassForStatus, a as durationMsToSparklineBarHeightPx, c as formatDurationForTitle, i as getAutomationRunDurationMs, s as getAutomationRunStatusLabelKey };

//# sourceMappingURL=automation-run-activity-metrics.js.map