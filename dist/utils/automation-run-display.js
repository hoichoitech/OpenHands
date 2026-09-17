import { I18nKey as e } from "../i18n/declaration.js";
import { AutomationRunStatus as t } from "../types/automation.js";
//#region src/utils/automation-run-display.ts
var n = [
	"success",
	"partial_success",
	"blocked",
	"failed",
	"unknown"
];
function r(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function i(e) {
	return typeof e == "string" && n.includes(e);
}
function a(e) {
	return typeof e == "string" && e.trim() || null;
}
var o = new Set(["status", "outcome_summary"]);
function s(e) {
	return e.run_metadata?.finish_tool_response ?? null;
}
function c(e) {
	let t = a(e);
	if (t) return t;
	if (typeof e == "number" || typeof e == "boolean") return String(e);
	if (e == null) return null;
	try {
		return JSON.stringify(e, null, 2);
	} catch {
		return String(e);
	}
}
function l(e) {
	if (e == null) return null;
	if (!r(e)) return e;
	let t = Object.entries(e).filter(([e]) => !o.has(e));
	return t.length > 0 ? Object.fromEntries(t) : "status" in e && !i(e.status) ? { status: e.status } : null;
}
function u(e) {
	let t = s(e);
	if (!r(t)) return null;
	let n = a(t.outcome_summary);
	return typeof t.status != "string" && !n ? null : {
		status: i(t.status) ? t.status : "unknown",
		outcomeSummary: n
	};
}
function d(e) {
	let n = s(e), r = l(n), i = c(r), o = u(e), d = a(e.error_detail);
	return e.status === t.COMPLETED ? {
		badgeStatus: o?.status ?? (n === null ? "success" : "unknown"),
		summary: o?.outcomeSummary ?? null,
		taskOutcome: o,
		customTaskMetadata: r,
		customTaskMetadataText: i
	} : {
		badgeStatus: e.status,
		summary: d,
		taskOutcome: o,
		customTaskMetadata: r,
		customTaskMetadataText: i
	};
}
function f(n) {
	switch (n) {
		case t.COMPLETED:
		case "success": return e.AUTOMATIONS$DETAIL$SUCCESSFUL;
		case t.FAILED:
		case "failed": return e.AUTOMATIONS$DETAIL$FAILED;
		case t.PENDING: return e.AUTOMATIONS$DETAIL$PENDING;
		case t.RUNNING: return e.AUTOMATIONS$DETAIL$RUNNING;
		case t.CANCELLED: return e.AUTOMATIONS$DETAIL$CANCELLED;
		case t.SKIPPED: return e.AUTOMATIONS$DETAIL$SKIPPED;
		case "blocked": return e.AUTOMATIONS$DETAIL$BLOCKED;
		case "partial_success": return e.AUTOMATIONS$DETAIL$PARTIAL;
		case "unknown": return e.AUTOMATIONS$DETAIL$NEEDS_REVIEW;
		default: return e.FEATURED_AUTOMATIONS$STATUS_UNKNOWN;
	}
}
//#endregion
export { f as getAutomationRunBadgeLabelKey, d as getAutomationRunDisplay };

//# sourceMappingURL=automation-run-display.js.map