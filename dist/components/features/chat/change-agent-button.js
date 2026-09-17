import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { AgentState as n } from "../../../types/agent-state.js";
import { cn as r } from "../../../utils/utils.js";
import { useOptionalConversationId as i } from "../../../hooks/use-conversation-id.js";
import { useConversationStore as a } from "../../../stores/conversation-store.js";
import { useQueryClient as o } from "../../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useActiveConversation as s } from "../../../hooks/query/use-active-conversation.js";
import { useAgentState as c } from "../../../hooks/use-agent-state.js";
import { StyledTooltip as l } from "../../shared/buttons/styled-tooltip.js";
import { formControlTransitionClassName as u } from "../../../utils/form-control-classes.js";
import { useUnifiedWebSocketStatus as d } from "../../../hooks/use-unified-websocket-status.js";
import { useSubConversationTaskPolling as f } from "../../../hooks/query/use-sub-conversation-task-polling.js";
import { Typography as p } from "../../../ui/typography.js";
import { ComboboxCaretInline as m } from "../../../ui/combobox-caret.js";
import h from "../../../icons/lesson-plan.js";
import { CodePillIcon as g } from "../../../icons/code-pill.js";
import { ChangeAgentContextMenu as _ } from "./change-agent-context-menu.js";
import { useHandlePlanClick as v } from "../../../hooks/use-handle-plan-click.js";
import { useEffect as y, useMemo as b, useRef as x, useState as S } from "react";
import { jsx as C, jsxs as w } from "react/jsx-runtime";
//#region src/components/features/chat/change-agent-button.tsx
function T() {
	let [T, E] = S(!1), { conversationMode: D, setConversationMode: O, subConversationTaskId: k } = a(), { conversationId: A } = i(), j = !A, M = d() === "OPEN", { curAgentState: N } = c(), { t: P } = e("openhands"), F = N === n.RUNNING, { data: I } = s(), L = o(), R = x(null), { taskStatus: z, subConversationId: B } = f(k, I?.id || null);
	y(() => {
		z === "READY" && B && I?.id && k && R.current !== k && (R.current = k, L.invalidateQueries({ queryKey: [
			"user",
			"conversation",
			I.id
		] }));
	}, [
		z,
		B,
		I?.id,
		k,
		L
	]);
	let { handlePlanClick: V, isCreatingConversation: H } = v();
	y(() => {
		(F || !M) && T && E(!1);
	}, [
		F,
		T,
		M
	]);
	let U = j || F || H || !M;
	y(() => {
		if (U) return;
		let e = (e) => {
			if (e.shiftKey && e.key === "Tab") {
				e.preventDefault(), e.stopPropagation();
				let t = D === "code" ? "plan" : "code";
				t === "plan" ? V(e) : O(t);
			}
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [
		U,
		D,
		O,
		V
	]);
	let W = (e) => {
		e.preventDefault(), e.stopPropagation(), E(!T);
	}, G = (e) => {
		e.preventDefault(), e.stopPropagation(), O("code");
	}, K = D === "code", q = b(() => P(K ? t.COMMON$CODE : t.COMMON$PLAN), [K, P]), J = b(() => K ? /* @__PURE__ */ C(g, { className: "h-[11px] w-[11px] shrink-0" }) : /* @__PURE__ */ C(h, {
		width: 18,
		height: 18,
		color: "currentColor"
	}), [K]), Y = /* @__PURE__ */ w("div", {
		className: "relative",
		children: [/* @__PURE__ */ w("button", {
			type: "button",
			onClick: W,
			disabled: U,
			className: r("flex items-center rounded-[100px]", u, K ? "border border-transparent text-[var(--oh-muted)]" : "border border-[#597FF4] bg-[#4A67BD]", !U && K && r("cursor-pointer", "hover:text-white hover:bg-white/10"), !U && !K && "cursor-pointer text-white hover:bg-[#597FF4]", U && r("opacity-50 cursor-not-allowed", K && "border-transparent")),
			children: [/* @__PURE__ */ w("div", {
				className: "flex items-center gap-1 pl-1.5",
				children: [J, /* @__PURE__ */ C(p.Text, {
					className: "text-2.75 not-italic font-normal leading-5",
					children: q
				})]
			}), /* @__PURE__ */ C(m, { isOpen: T })]
		}), T && /* @__PURE__ */ C(_, {
			activeMode: D,
			onClose: () => E(!1),
			onCodeClick: G,
			onPlanClick: V
		})]
	});
	return j ? /* @__PURE__ */ C(l, {
		content: P(t.CHANGE_AGENT$SWITCH_AFTER_CONVERSATION),
		placement: "top",
		children: Y
	}) : Y;
}
//#endregion
export { T as ChangeAgentButton };

//# sourceMappingURL=change-agent-button.js.map