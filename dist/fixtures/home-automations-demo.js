import { AutomationRunStatus as e } from "../types/automation.js";
import "../hooks/query/use-latest-automation-runs.js";
//#region src/fixtures/home-automations-demo.ts
var t = 20, n = [
	e.COMPLETED,
	e.COMPLETED,
	e.FAILED,
	e.COMPLETED,
	e.CANCELLED,
	e.COMPLETED,
	e.COMPLETED,
	e.FAILED,
	e.COMPLETED,
	e.SKIPPED,
	e.COMPLETED
];
function r(e) {
	return (/* @__PURE__ */ new Date(Date.now() - e * 36e5)).toISOString();
}
function i(e, t, n) {
	return {
		id: e,
		name: t,
		trigger: n,
		enabled: !0,
		created_at: r(720),
		updated_at: r(24),
		prompt: "demo"
	};
}
function a(e, t, n = {}) {
	let i = n.startedHoursAgo ?? 2, a = n.completedHoursAgo === void 0 ? 1 : n.completedHoursAgo;
	return {
		id: e,
		status: t,
		conversation_id: n.conversationId === void 0 ? null : n.conversationId,
		bash_command_id: null,
		error_detail: n.errorDetail === void 0 ? null : n.errorDetail,
		started_at: r(i),
		completed_at: a === null ? null : r(a)
	};
}
function o(t) {
	if (!t) return [];
	let r = [
		2,
		8,
		45,
		3,
		15,
		1,
		25,
		90,
		5,
		12,
		6
	];
	return [t, ...n.slice(0, 11).map((n, i) => {
		let o = 24 + i * 6, s = (r[i] ?? 5) / 60;
		return a(`${t.id}-hist-${i}`, n, {
			startedHoursAgo: o,
			completedHoursAgo: o - s,
			conversationId: null,
			errorDetail: n === e.FAILED ? "Prior failure" : null
		});
	})];
}
function s(e) {
	return {
		...e,
		recentRuns: e.recentRuns ?? o(e.latestRun)
	};
}
var c = [
	{
		pin: !0,
		automation: i("demo-pin-loading", "Card: loading skeleton", {
			type: "cron",
			schedule: "0 * * * *",
			schedule_human: "Every hour"
		}),
		runState: {
			latestRun: null,
			isLoading: !0,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-error", "Card: status unavailable", {
			type: "cron",
			schedule: "0 9 * * *",
			schedule_human: "Daily at 9am"
		}),
		runState: {
			latestRun: null,
			isLoading: !1,
			isError: !0
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-no-runs", "Card: no runs yet", {
			type: "event",
			source: "github",
			on: "pull_request.opened"
		}),
		runState: {
			latestRun: null,
			isLoading: !1,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-failed-detail", "Card: failed with error detail", {
			type: "cron",
			schedule: "*/15 * * * *",
			schedule_human: "Every 15 min"
		}),
		runState: {
			latestRun: a("run-failed-detail", e.FAILED, {
				errorDetail: "Sandbox provisioning timed out after 120s while waiting for the runtime to become ready.",
				startedHoursAgo: 3,
				completedHoursAgo: 2.5
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-completed-title", "Card: completed + conversation title", {
			type: "event",
			source: "github",
			on: "push"
		}),
		runState: {
			latestRun: a("run-completed-title", e.COMPLETED, {
				conversationId: "demo-conv-titled",
				startedHoursAgo: 5,
				completedHoursAgo: 4
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-completed-untitled", "Card: completed + conversation title", {
			type: "cron",
			schedule: "0 0 * * 1",
			schedule_human: "Mondays at midnight"
		}),
		runState: {
			latestRun: a("run-completed-untitled", e.COMPLETED, {
				conversationId: "demo-conv-untitled",
				startedHoursAgo: 8,
				completedHoursAgo: 7
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-completed-no-conv", "Card: completed, no conversation", {
			type: "cron",
			schedule: "0 12 * * *",
			schedule_human: "Daily at noon"
		}),
		runState: {
			latestRun: a("run-completed-no-conv", e.COMPLETED, {
				conversationId: null,
				startedHoursAgo: 10,
				completedHoursAgo: 9
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-failed-no-conv", "Card: failed, no conversation", {
			type: "event",
			source: "slack",
			on: "message"
		}),
		runState: {
			latestRun: a("run-failed-no-conv", e.FAILED, {
				conversationId: null,
				errorDetail: null,
				startedHoursAgo: 12,
				completedHoursAgo: 11
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-pending", "Card: pending (empty result panel)", {
			type: "cron",
			schedule: "0 */6 * * *",
			schedule_human: "Every 6 hours"
		}),
		runState: {
			latestRun: a("run-pending", e.PENDING, {
				conversationId: null,
				startedHoursAgo: .1,
				completedHoursAgo: null
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		pin: !0,
		automation: i("demo-pin-running", "Card: running (empty result panel)", {
			type: "event",
			source: "github",
			on: "issues.opened"
		}),
		runState: {
			latestRun: a("run-running", e.RUNNING, {
				conversationId: null,
				startedHoursAgo: .25,
				completedHoursAgo: null
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-cancelled", "List: cancelled run", {
			type: "cron",
			schedule: "30 2 * * *",
			schedule_human: "Daily at 2:30am"
		}),
		runState: {
			latestRun: a("run-cancelled", e.CANCELLED, {
				startedHoursAgo: 14,
				completedHoursAgo: 13
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-skipped", "List: skipped run", {
			type: "event",
			source: "github",
			on: "pull_request.synchronize"
		}),
		runState: {
			latestRun: a("run-skipped", e.SKIPPED, {
				startedHoursAgo: 16,
				completedHoursAgo: 16
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-running-2", "List: second in-flight run", {
			type: "cron",
			schedule: "*/5 * * * *",
			schedule_human: "Every 5 min"
		}),
		runState: {
			latestRun: a("run-running-2", e.RUNNING, {
				conversationId: null,
				startedHoursAgo: .5,
				completedHoursAgo: null
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-success-old", "List: older success", {
			type: "cron",
			schedule: "0 8 * * 1-5",
			schedule_human: "Weekdays at 8am"
		}),
		runState: {
			latestRun: a("run-success-old", e.COMPLETED, {
				conversationId: "demo-conv-titled",
				startedHoursAgo: 48,
				completedHoursAgo: 47
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-failed-old", "List: older failure", {
			type: "event",
			source: "github",
			on: "release.published"
		}),
		runState: {
			latestRun: a("run-failed-old", e.FAILED, {
				errorDetail: "Model returned an empty completion.",
				startedHoursAgo: 72,
				completedHoursAgo: 71
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-no-runs-2", "List: never ran", {
			type: "cron",
			schedule: "0 0 1 * *",
			schedule_human: "Monthly on the 1st"
		}),
		runState: {
			latestRun: null,
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-loading-2", "List: loading status", {
			type: "event",
			source: "linear",
			on: "Issue.create"
		}),
		runState: {
			latestRun: null,
			isLoading: !0,
			isError: !1
		}
	},
	{
		automation: i("demo-list-error-2", "List: fetch error", {
			type: "cron",
			schedule: "15 * * * *",
			schedule_human: "Hourly at :15"
		}),
		runState: {
			latestRun: null,
			isLoading: !1,
			isError: !0
		}
	},
	{
		automation: i("demo-list-pending-2", "List: pending, long name that should truncate in the activity row when the viewport is narrow", {
			type: "cron",
			schedule: "0 3 * * 0",
			schedule_human: "Sundays at 3am"
		}),
		runState: {
			latestRun: a("run-pending-2", e.PENDING, {
				startedHoursAgo: .05,
				completedHoursAgo: null
			}),
			isLoading: !1,
			isError: !1
		}
	},
	{
		automation: i("demo-list-completed-fallback", "List: completed with conversation", {
			type: "event",
			source: "github",
			on: "workflow_run.completed"
		}),
		runState: {
			latestRun: a("run-completed-fallback", e.COMPLETED, {
				conversationId: "demo-conv-untitled",
				startedHoursAgo: 20,
				completedHoursAgo: 19
			}),
			isLoading: !1,
			isError: !1
		}
	}
];
if (c.length !== t) throw Error(`home-automations-demo: expected ${t} specs, got ${c.length}`);
c.filter((e) => e.pin).map((e) => e.automation.id), c.map((e) => e.automation), new Map(c.map((e) => [e.automation.id, s(e.runState)]));
//#endregion

//# sourceMappingURL=home-automations-demo.js.map