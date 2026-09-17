import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { AgentState as t } from "../../../types/agent-state.js";
import { isExecutionErrored as n, isExecutionPaused as r } from "../../../utils/status.js";
import { getStatusColor as i, getStatusText as a } from "../../../utils/utils.js";
import { useErrorMessageStore as o } from "../../../stores/error-message-store.js";
import { useAgentState as s } from "../../../hooks/use-agent-state.js";
import { useTaskPolling as c } from "../../../hooks/query/use-task-polling.js";
import l from "../../../icons/debug-stackframe-dot.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/controls/server-status.tsx
function f({ className: f = "", executionStatus: p, isPausing: m = !1 }) {
	let { curAgentState: h } = s(), { isTask: g, taskStatus: _, taskDetail: v } = c(), { t: y } = e("openhands"), { errorMessage: b } = o(), x = h === t.LOADING || h === t.INIT, S = n(p) || r(p), C = i({
		isPausing: m,
		isTask: g,
		taskStatus: _,
		isStartingStatus: x,
		isStopStatus: S,
		curAgentState: h
	}), w = a({
		isPausing: m,
		isTask: g,
		taskStatus: _,
		taskDetail: v,
		isStartingStatus: x,
		isStopStatus: S,
		curAgentState: h,
		errorMessage: b,
		t: y
	});
	return /* @__PURE__ */ u("div", {
		className: f,
		"data-testid": "server-status",
		children: /* @__PURE__ */ d("div", {
			className: "flex items-center",
			children: [/* @__PURE__ */ u(l, {
				className: "w-6 h-6 shrink-0",
				color: C
			}), /* @__PURE__ */ u("span", {
				className: "text-[13px] text-white font-normal",
				children: w
			})]
		})
	});
}
//#endregion
export { f as default };

//# sourceMappingURL=server-status.js.map