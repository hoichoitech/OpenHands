import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { CircleCheck as n } from "../../../node_modules/lucide-react/dist/esm/icons/circle-check.js";
import { AgentState as r } from "../../../types/agent-state.js";
import { getStatusCode as i } from "../../../utils/status.js";
import { cn as a, isTaskPolling as o } from "../../../utils/utils.js";
import { useConversationStore as s } from "../../../stores/conversation-store.js";
import { useActiveConversation as c } from "../../../hooks/query/use-active-conversation.js";
import { useAgentState as l } from "../../../hooks/use-agent-state.js";
import { useTaskPolling as u } from "../../../hooks/query/use-task-polling.js";
import { ChatStopButton as d } from "../chat/chat-stop-button.js";
import f from "../../../icons/u-clock-three.js";
import { ChatResumeAgentButton as p } from "../chat/chat-play-button.js";
import { AgentLoading as m } from "./agent-loading.js";
import h from "../../../icons/circle-error.js";
import { useUnifiedWebSocketStatus as g } from "../../../hooks/use-unified-websocket-status.js";
import { useSubConversationTaskPolling as _ } from "../../../hooks/query/use-sub-conversation-task-polling.js";
import { useAgentNotification as v } from "../../../hooks/use-agent-notification.js";
import { useEffect as y, useState as b } from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/features/controls/agent-status.tsx
function C({ className: C = "", handleStop: w, handleResumeAgent: T, disabled: E = !1, isPausing: D = !1 }) {
	let { t: O } = e("openhands"), { setShouldShownAgentLoading: k } = s(), { curAgentState: A, executionStatus: j } = l();
	v(A);
	let M = g(), { data: N } = c(), { taskStatus: P } = u(), { subConversationTaskId: F } = s(), { taskStatus: I } = _(F, N?.id || null), L = i(M, j ?? null, P, I), R = A === r.INIT || A === r.LOADING || M === "CONNECTING" && P !== "ERROR" || o(P) || o(I), z = R || D, B = A === r.ERROR || A === r.RATE_LIMITED || M === "CLOSED" || P === "ERROR", V = !B && A === r.RUNNING, H = !B && (A === r.STOPPED || A === r.PAUSED), U = !z && (V || H), W = L === t.CHAT_INTERFACE$AGENT_FINISHED_MESSAGE, G = L === t.AGENT_STATUS$WAITING_FOR_TASK, K = W || G, [q, J] = b(!0), [Y, X] = b(!1);
	return y(() => {
		k(!!R);
	}, [R, k]), y(() => {
		if (!K) {
			J(!0), X(!1);
			return;
		}
		J(!0), X(!1);
		let e = window.setTimeout(() => {
			X(!0);
		}, 1e3), t = window.setTimeout(() => {
			J(!1);
		}, 1500);
		return () => {
			window.clearTimeout(e), window.clearTimeout(t);
		};
	}, [K]), K && !q ? null : /* @__PURE__ */ S("div", {
		className: a("flex items-center gap-1 min-w-0", K && "transition-opacity duration-500", Y && "opacity-0", C),
		children: [/* @__PURE__ */ x("span", {
			className: "text-[11px] text-[var(--oh-muted)] font-normal leading-5 min-w-0 max-w-full truncate",
			title: O(L),
			children: O(L)
		}), /* @__PURE__ */ S("div", {
			className: a("box-border content-stretch flex flex-row gap-[3px] items-center justify-center overflow-clip px-0.5 py-1 relative rounded-[100px] shrink-0 size-6 transition-all duration-200 active:scale-95 bg-transparent text-[var(--oh-muted)] hover:bg-white/10 hover:text-white", U ? "cursor-pointer" : "cursor-default"),
			children: [
				z && /* @__PURE__ */ x(m, {}),
				!z && V && /* @__PURE__ */ x(d, { handleStop: w }),
				!z && H && /* @__PURE__ */ x(p, {
					onAgentResumed: T,
					disabled: E
				}),
				!z && B && /* @__PURE__ */ x(h, {
					className: "w-4 h-4 text-current",
					"data-testid": "circle-error-icon"
				}),
				!z && !V && !H && !B && x(K ? n : f, { className: "w-4 h-4 text-current" })
			]
		})]
	});
}
//#endregion
export { C as default };

//# sourceMappingURL=agent-status.js.map