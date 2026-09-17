import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { AgentState as n } from "../../../types/agent-state.js";
import { isExecutionActive as r, isExecutionErrored as i, isExecutionPaused as a } from "../../../utils/status.js";
import { cn as o, getStatusColor as s } from "../../../utils/utils.js";
import { useConversationId as c } from "../../../hooks/use-conversation-id.js";
import { useActiveConversation as l } from "../../../hooks/query/use-active-conversation.js";
import { useAgentState as u } from "../../../hooks/use-agent-state.js";
import { useTaskPolling as d } from "../../../hooks/query/use-task-polling.js";
import { useUnifiedPauseConversation as f } from "../../../hooks/mutation/use-unified-stop-conversation.js";
import { useUserProviders as p } from "../../../hooks/use-user-providers.js";
import m from "../../../icons/debug-stackframe-dot.js";
import { useUnifiedResumeConversation as h } from "../../../hooks/mutation/use-unified-start-conversation.js";
import { ServerStatusContextMenu as g } from "../controls/server-status-context-menu.js";
import { ConversationName as _ } from "./conversation-name.js";
import { ConversationGitActionsToggle as v } from "./conversation-git-actions-toggle.js";
import { ConversationOverviewToggle as y } from "./conversation-overview-toggle.js";
import { RightPanelToggle as b } from "./right-panel-toggle.js";
import x from "react";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-name-with-status.tsx
function w() {
	let { t: w } = e("openhands"), { conversationId: T } = c(), { data: E } = l(), { curAgentState: D } = u(), { isTask: O, taskStatus: k } = d(), { mutate: A } = f(), { mutate: j } = h(), { providers: M } = p(), [N, P] = x.useState(!1), [F, I] = x.useState(!1), L = x.useRef(null), R = E?.execution_status ?? null, z = s({
		isPausing: !1,
		isTask: O,
		taskStatus: k,
		isStartingStatus: D === n.LOADING || D === n.INIT,
		isStopStatus: i(R),
		curAgentState: D
	}), B = N || F, V = () => {
		P(!1), I(!1);
	};
	return /* @__PURE__ */ C("div", {
		className: "flex items-center justify-between w-full",
		children: [/* @__PURE__ */ C("div", {
			className: "flex items-center min-w-0",
			children: [/* @__PURE__ */ C("div", {
				className: "relative shrink-0",
				onPointerEnter: (e) => {
					e.pointerType === "mouse" && I(!0);
				},
				onPointerLeave: (e) => {
					e.pointerType === "mouse" && I(!1);
				},
				children: [/* @__PURE__ */ S("button", {
					ref: L,
					type: "button",
					"data-testid": "server-status-menu-trigger",
					"aria-label": w(t.COMMON$SERVER_STATUS),
					"aria-expanded": B,
					"aria-haspopup": "menu",
					onClick: (e) => {
						if (e.preventDefault(), e.stopPropagation(), B) {
							V();
							return;
						}
						P(!0);
					},
					className: o("flex items-center justify-center rounded-md", "text-[var(--oh-muted)] hover:bg-white/10"),
					children: /* @__PURE__ */ S(m, {
						className: "ml-[3.5px] w-6 h-6 cursor-pointer",
						color: z,
						"aria-hidden": !0
					})
				}), B ? /* @__PURE__ */ S(g, {
					onClose: V,
					ignoreOutsideClickRef: L,
					onStopServer: r(R) ? (e) => {
						e.preventDefault(), e.stopPropagation(), T && A({ conversationId: T }), V();
					} : void 0,
					onStartServer: a(R) ? (e) => {
						e.preventDefault(), e.stopPropagation(), T && j({
							conversationId: T,
							providers: M
						}), V();
					} : void 0,
					executionStatus: R,
					position: "bottom",
					className: "bottom-full left-0 mt-0 min-h-fit",
					isPausing: !1
				}) : null]
			}), /* @__PURE__ */ S(_, {})]
		}), /* @__PURE__ */ C("div", {
			className: "mr-2 flex shrink-0 items-center gap-1",
			children: [
				/* @__PURE__ */ S(v, {}),
				/* @__PURE__ */ S(y, {}),
				/* @__PURE__ */ S(b, {})
			]
		})]
	});
}
//#endregion
export { w as ConversationNameWithStatus };

//# sourceMappingURL=conversation-name-with-status.js.map