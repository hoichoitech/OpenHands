import { I18nKey as e } from "../../../../i18n/declaration.js";
import { AutomationRunStatus as t } from "../../../../types/automation.js";
import { getAutomationRunDisplay as n } from "../../../../utils/automation-run-display.js";
import { formatEventOn as r } from "../../../../utils/automation-schedule.js";
//#region src/components/features/home/featured-automations/automation-run-health.ts
function i(e) {
	if (e.isLoading || e.isError) return "unknown";
	if (!e.latestRun) return "none";
	switch (n(e.latestRun).badgeStatus) {
		case t.COMPLETED:
		case "success": return "success";
		case t.FAILED:
		case "failed": return "failed";
		case "blocked":
		case "partial_success":
		case "unknown": return "warning";
		case t.PENDING:
		case t.RUNNING: return "in_progress";
		default: return "unknown";
	}
}
function a(t) {
	switch (t) {
		case "success": return e.FEATURED_AUTOMATIONS$LAST_RUN_SUCCEEDED;
		case "failed": return e.FEATURED_AUTOMATIONS$LAST_RUN_FAILED;
		case "warning": return e.AUTOMATIONS$DETAIL$NEEDS_REVIEW;
		case "in_progress": return e.FEATURED_AUTOMATIONS$RUN_IN_PROGRESS;
		case "none": return e.AUTOMATIONS$DETAIL$NO_RUNS;
		default: return e.FEATURED_AUTOMATIONS$STATUS_UNKNOWN;
	}
}
var o = {
	github: "GitHub",
	gitlab: "GitLab",
	slack: "Slack",
	linear: "Linear",
	jira: "Jira"
};
function s(e) {
	let t = e.trim().toLowerCase();
	return t ? o[t] ?? t.replace(/\b\w/g, (e) => e.toUpperCase()) : e;
}
function c(e) {
	let { trigger: t } = e;
	return t.type === "event" && t.on ? r(t.on) : null;
}
function l(e) {
	let { trigger: t } = e;
	return t.type === "event" && t.source?.trim() || null;
}
function u(e) {
	let { trigger: t } = e;
	return t.type === "event" ? null : t.schedule_human || t.schedule || t.type || null;
}
function d(e) {
	let { trigger: t } = e;
	if (t.type === "event") {
		let t = l(e);
		return [c(e) ?? "", t ? `(${s(t)})` : ""].filter(Boolean).join(" ");
	}
	return u(e) ?? t.type;
}
var f = 48;
function p(e) {
	let t = e.trim().replace(/\s+/g, " ");
	if (!t) return t;
	let n = t.match(/^.*?[.!?](?=\s|$)/)?.[0] ?? t;
	return n.length <= f ? n : `${n.slice(0, f - 1).trimEnd()}…`;
}
function m(e, t = p(e)) {
	return e.trim().replace(/\s+/g, " ") !== t;
}
function h(e) {
	let t = e.completed_at ?? e.started_at;
	if (!t) return null;
	let n = new Date(t).getTime();
	return Number.isNaN(n) || n === 0 ? null : t;
}
//#endregion
export { i as deriveRunHealth, s as formatTriggerSourceLabel, h as getLastRunTimestamp, a as getRunHealthLabelKey, c as getTriggerEventLabel, u as getTriggerScheduleLabel, l as getTriggerSource, d as getTriggerSummary, p as shortenAutomationRunSummary, m as shouldShowAutomationRunSummaryHovercard };

//# sourceMappingURL=automation-run-health.js.map