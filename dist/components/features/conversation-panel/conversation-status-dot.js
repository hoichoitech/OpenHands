import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { ExecutionStatus as t } from "../../../types/agent-server/core/base/common.js";
import { FaArchive as n } from "../../../node_modules/react-icons/fa/index.js";
import { StyledTooltip as r } from "../../shared/buttons/styled-tooltip.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-status-dot.tsx
var a = (e) => {
	switch (e) {
		case t.FINISHED: return "check";
		case t.RUNNING: return "working";
		case t.IDLE:
		case t.WAITING_FOR_CONFIRMATION: return "active";
		case t.PAUSED: return "paused";
		case t.ERROR:
		case t.STUCK: return "error";
		default: return "unknown";
	}
}, o = (e, t) => {
	if (t) return "COMMON$ARCHIVED";
	switch (e) {
		case "check": return "COMMON$FINISHED";
		case "working":
		case "active": return "COMMON$WORKING";
		case "paused": return "COMMON$PAUSED";
		case "error": return "COMMON$ERROR";
		default: return "COMMON$STOPPED";
	}
};
function s(e) {
	switch (e) {
		case "check": return /* @__PURE__ */ i("svg", {
			"data-testid": "conversation-status-check",
			viewBox: "0 0 12 12",
			className: "w-2.5 h-2.5 stroke-[var(--oh-status-success)]",
			fill: "none",
			strokeWidth: 2.25,
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			children: /* @__PURE__ */ i("path", { d: "M2.5 6.5 5 9l4.5-5.5" })
		});
		case "working": return /* @__PURE__ */ i("span", {
			"data-testid": "conversation-status-working",
			className: "w-1.5 h-1.5 rounded-full animate-pulse bg-[var(--oh-status-success)]"
		});
		case "active": return /* @__PURE__ */ i("span", {
			"data-testid": "conversation-status-active",
			className: "w-1.5 h-1.5 rounded-full bg-[var(--oh-status-success)]"
		});
		case "paused": return /* @__PURE__ */ i("span", {
			"data-testid": "conversation-status-paused",
			className: "w-1.5 h-1.5 rounded-full bg-[var(--oh-muted)]"
		});
		case "error": return /* @__PURE__ */ i("span", {
			"data-testid": "conversation-status-error",
			className: "w-1.5 h-1.5 rounded-full bg-[var(--oh-status-error)]"
		});
		default: return /* @__PURE__ */ i("span", {
			"data-testid": "conversation-status-unknown",
			className: "w-1.5 h-1.5 rounded-full bg-[var(--oh-color-tertiary)]"
		});
	}
}
function c({ executionStatus: t, sandboxStatus: c, showTooltip: l = !0 }) {
	let { t: u } = e("openhands"), d = c === "MISSING", f = c === "ERROR" ? "error" : d ? "paused" : a(t), p = u(o(f, d)), m = /* @__PURE__ */ i("div", {
		className: "w-2.5 h-2.5 flex items-center justify-center shrink-0",
		children: d ? /* @__PURE__ */ i(n, {
			"data-testid": "conversation-status-archived",
			size: 10,
			className: "shrink-0 text-[var(--oh-muted)] opacity-60",
			"aria-hidden": !0
		}) : s(f)
	});
	return l ? /* @__PURE__ */ i(r, {
		content: p,
		placement: "right",
		showArrow: !0,
		tooltipClassName: "bg-base text-white text-xs shadow-lg",
		children: m
	}) : m;
}
//#endregion
export { c as ConversationStatusDot };

//# sourceMappingURL=conversation-status-dot.js.map