import { AgentState as e } from "../../../types/agent-state.js";
import { useAgentState as t } from "../../../hooks/use-agent-state.js";
import { ModalBackdrop as n } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as r } from "../../shared/modals/modal-body.js";
import { useConversationHooks as i } from "../../../hooks/query/use-conversation-hooks.js";
import { HooksModalHeader as a } from "./hooks-modal-header.js";
import { HooksLoadingState as o } from "./hooks-loading-state.js";
import { HooksEmptyState as s } from "./hooks-empty-state.js";
import { HookEventItem as c } from "./hook-event-item.js";
import { RuntimeWaitingState as l } from "./runtime-waiting-state.js";
import { useState as u } from "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/hooks-modal.tsx
function p({ onClose: p }) {
	let { curAgentState: m } = t(), [h, g] = u({}), { data: _, isLoading: v, isError: y, refetch: b, isRefetching: x } = i(), S = (e) => {
		g((t) => ({
			...t,
			[e]: !t[e]
		}));
	}, C = ![e.LOADING, e.INIT].includes(m);
	return /* @__PURE__ */ d(n, {
		onClose: p,
		children: /* @__PURE__ */ f(r, {
			width: "lg",
			className: "relative max-h-[80vh] flex flex-col items-start border border-[var(--oh-border)]",
			testID: "hooks-modal",
			children: [/* @__PURE__ */ d(a, {
				isLoading: v,
				isRefetching: x,
				onRefresh: b,
				onClose: p
			}), /* @__PURE__ */ d("div", {
				className: "w-full h-[60vh] overflow-auto rounded-md border border-[var(--oh-border)] bg-surface-raised custom-scrollbar-always",
				children: C ? v ? /* @__PURE__ */ d(o, {}) : y || !_ || _.length === 0 ? /* @__PURE__ */ d(s, { isError: y }) : /* @__PURE__ */ d("div", {
					className: "divide-y divide-[var(--oh-border)]",
					children: _.map((e) => /* @__PURE__ */ d(c, {
						hookEvent: e,
						isExpanded: h[e.event_type] || !1,
						onToggle: S
					}, e.event_type))
				}) : /* @__PURE__ */ d(l, { testId: "hooks-runtime-waiting" })
			})]
		})
	});
}
//#endregion
export { p as HooksModal };

//# sourceMappingURL=hooks-modal.js.map