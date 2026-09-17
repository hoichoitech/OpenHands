import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { AgentState as n } from "../../../types/agent-state.js";
import { SecurityRisk as r } from "../../../types/agent-server/core/base/common.js";
import { isActionEvent as i } from "../../../types/agent-server/type-guards.js";
import { useEventStore as a } from "../../../stores/use-event-store.js";
import { useActiveConversation as o } from "../../../hooks/query/use-active-conversation.js";
import { useAgentState as s } from "../../../hooks/use-agent-state.js";
import { ActionTooltip as c } from "../action-tooltip.js";
import { RiskAlert as l } from "../risk-alert.js";
import u from "../../../icons/u-warning.js";
import { useEventMessageStore as d } from "../../../stores/event-message-store.js";
import { useRespondToConfirmation as f } from "../../../hooks/mutation/use-respond-to-confirmation.js";
import { useCallback as p, useEffect as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/shared/buttons/conversation-confirmation-buttons.tsx
function _() {
	let _ = d((e) => e.submittedEventIds), v = d((e) => e.addSubmittedEventId), { t: y } = e("openhands"), { data: b } = o(), { curAgentState: x } = s(), { mutate: S } = f(), C = a((e) => e.events).slice().reverse().find((e) => e.source === "agent" ? x === n.AWAITING_USER_CONFIRMATION : !1), w = p((e) => {
		!C || !b || (C.id && v(C.id), S({
			conversationId: b.id,
			conversationUrl: b.conversation_url || "",
			sessionApiKey: b.session_api_key,
			accept: e
		}));
	}, [
		C,
		b,
		v,
		S
	]);
	return m(() => {
		if (!C) return;
		let e = (e) => {
			e.shiftKey && e.metaKey && e.key === "Backspace" && (e.preventDefault(), w(!1));
		}, t = (e) => {
			e.metaKey && e.key === "Enter" && (e.preventDefault(), w(!0));
		}, n = (n) => {
			e(n), t(n);
		};
		return document.addEventListener("keydown", n), () => document.removeEventListener("keydown", n);
	}, [C, w]), x !== n.AWAITING_USER_CONFIRMATION || !C || C.id !== void 0 && _.includes(C.id) ? null : /* @__PURE__ */ g("div", {
		className: "flex flex-col gap-2 pt-4",
		children: [(i(C) ? C.security_risk : r.UNKNOWN) === r.HIGH && /* @__PURE__ */ h(l, {
			content: y(t.CHAT_INTERFACE$HIGH_RISK_WARNING),
			icon: /* @__PURE__ */ h(u, {
				width: 16,
				height: 16,
				color: "#fff"
			}),
			severity: "high",
			title: y(t.COMMON$HIGH_RISK)
		}), /* @__PURE__ */ g("div", {
			className: "flex justify-between items-center",
			children: [/* @__PURE__ */ h("p", {
				className: "text-sm font-normal text-white",
				children: y(t.CHAT_INTERFACE$USER_ASK_CONFIRMATION)
			}), /* @__PURE__ */ g("div", {
				className: "flex items-center gap-3",
				children: [/* @__PURE__ */ h(c, {
					type: "reject",
					onClick: () => w(!1)
				}), /* @__PURE__ */ h(c, {
					type: "confirm",
					onClick: () => w(!0)
				})]
			})]
		})]
	});
}
//#endregion
export { _ as ConversationConfirmationButtons };

//# sourceMappingURL=conversation-confirmation-buttons.js.map