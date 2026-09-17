import { Trans as e } from "../../../node_modules/react-i18next/dist/es/Trans.js";
import { isACPToolCallEvent as t, isActionEvent as n, isAgentErrorEvent as r, isObservationEvent as i } from "../../../types/agent-server/type-guards.js";
import { getACPToolCallTitleKey as a, stripRedundantTitlePrefix as o } from "../../conversation-events/chat/event-content-helpers/get-acp-tool-call-content.js";
import { getActionEventTitleDescriptor as s, getActionSummaryTitle as c } from "../../conversation-events/chat/event-content-helpers/get-action-event-title.js";
import { MonoComponent as l } from "./mono-component.js";
import { PathComponent as u } from "./path-component.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/chat/typing-indicator.tsx
var p = {
	kind: "translation",
	key: "ACTION_MESSAGE$THINK",
	values: {}
}, m = new Set([
	"ExecuteBashAction",
	"TerminalAction",
	"FileEditorAction",
	"StrReplaceEditorAction",
	"MCPToolAction",
	"InvokeSkillAction",
	"TaskAction",
	"ThinkAction",
	"TaskTrackerAction",
	"GrepAction",
	"GlobAction",
	"BrowserNavigateAction",
	"BrowserClickAction",
	"BrowserTypeAction",
	"BrowserGetStateAction",
	"BrowserGetContentAction",
	"BrowserScrollAction",
	"BrowserGoBackAction",
	"BrowserListTabsAction",
	"BrowserSwitchTabAction",
	"BrowserCloseTabAction"
]), h = (e) => {
	if (!n(e)) return null;
	let t = c(e);
	return t ? {
		kind: "text",
		text: t
	} : m.has(e.action.kind) ? s(e) : null;
}, g = (e) => e.source === "environment" && "rejection_reason" in e, _ = (e) => {
	let s = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Set();
	for (let l = e.length - 1; l >= 0; --l) {
		let u = e[l];
		if (!u.isFromPlanningAgent) {
			if (i(u) || g(u)) {
				s.add(u.action_id), c.add(u.tool_call_id);
				continue;
			}
			if (r(u)) {
				c.add(u.tool_call_id);
				continue;
			}
			if (t(u)) {
				if (!(u.status === "pending" || u.status === "in_progress")) {
					c.add(u.tool_call_id);
					continue;
				}
				if (c.has(u.tool_call_id)) continue;
				let e = o(u);
				return e ? {
					kind: "translation",
					key: a(u),
					values: { title: e }
				} : p;
			}
			if (n(u) && !s.has(u.id) && !c.has(u.tool_call_id)) return h(u) ?? p;
		}
	}
	return p;
};
function v({ events: t }) {
	let n = _(t);
	return /* @__PURE__ */ f("div", {
		className: "flex min-w-0 max-w-full items-center gap-2 rounded-full border border-[var(--oh-border)] bg-[var(--oh-surface)] px-3 py-1.5 text-xs text-[var(--oh-text-secondary)]",
		"data-testid": "live-activity-chip",
		role: "status",
		"aria-live": "polite",
		children: [/* @__PURE__ */ d("span", {
			"aria-hidden": "true",
			className: "size-1.5 shrink-0 animate-pulse rounded-full bg-[var(--oh-status-success)] motion-reduce:animate-none"
		}), /* @__PURE__ */ d("span", {
			className: "min-w-0 truncate",
			children: n.kind === "text" ? n.text : /* @__PURE__ */ d(e, {
				ns: "openhands",
				i18nKey: n.key,
				values: n.values,
				components: {
					path: /* @__PURE__ */ d(u, {}),
					cmd: /* @__PURE__ */ d(l, {})
				}
			})
		})]
	});
}
//#endregion
export { v as TypingIndicator };

//# sourceMappingURL=typing-indicator.js.map