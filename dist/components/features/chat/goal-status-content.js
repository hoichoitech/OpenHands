import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useOptionalConversationId as r } from "../../../hooks/use-conversation-id.js";
import { displayErrorToast as i } from "../../../utils/custom-toast-handlers.js";
import { useGoalStore as a } from "../../../stores/goal-store.js";
import { pauseConversation as o, resumeGoal as s, stopGoal as c } from "../../../hooks/mutation/conversation-mutation-utils.js";
import { GenericEventMessage as l } from "./generic-event-message.js";
import u from "../../../icons/check-circle-solid.js";
import d from "../../../icons/x-circle-solid.js";
import { chatInputPillButtonClassName as f, formControlDisabledClassName as p } from "../../../utils/form-control-classes.js";
import { useState as m } from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/chat/goal-status-content.tsx
var _ = {
	running: t.GOAL$STATUS_RUNNING,
	complete: t.GOAL$STATUS_COMPLETE,
	capped: t.GOAL$STATUS_CAPPED,
	interrupted: t.GOAL$STATUS_INTERRUPTED
};
function v({ status: v }) {
	let { t: y } = e("openhands"), { conversationId: b } = r(), x = a((e) => b ? !!e.statusByConversation[b]?.active : !1), [S, C] = m(!1), { active: w, objective: T, iteration: E, max_iterations: D, verdict: O } = v, k = O ? Math.round(O.score * 100) : null, A = O?.missing ? y(t.GOAL$MISSING, { missing: O.missing }) : "", j = async (e, t) => {
		if (!(!b || S)) {
			C(!0);
			try {
				await e(b);
			} catch (e) {
				i(e instanceof Error && e.message ? e.message : y(t));
			} finally {
				C(!1);
			}
		}
	}, M = () => j(async (e) => {
		await c(e), await o(e);
	}, t.GOAL$STOP_FAILED), N = () => j(s, t.GOAL$RESUME_FAILED), P = null;
	return b && w ? P = /* @__PURE__ */ h("button", {
		type: "button",
		"data-testid": "goal-stop",
		disabled: S,
		onClick: M,
		className: n(f, p),
		children: y(t.GOAL$STOP)
	}) : b && v.status === "interrupted" && !x && (P = /* @__PURE__ */ h("button", {
		type: "button",
		"data-testid": "goal-resume",
		disabled: S,
		onClick: N,
		className: n(f, p),
		children: y(t.GOAL$RESUME)
	})), /* @__PURE__ */ h("div", {
		"data-testid": "goal-status",
		className: "flex flex-col w-full",
		children: /* @__PURE__ */ h(l, {
			title: /* @__PURE__ */ g("span", {
				className: "flex items-center gap-2 flex-wrap",
				children: [
					/* @__PURE__ */ h("span", {
						className: "opacity-60",
						children: y(t.GOAL$PREFIX)
					}),
					/* @__PURE__ */ h("span", { children: T }),
					/* @__PURE__ */ h("span", {
						className: "opacity-60",
						children: y(t.GOAL$ROUND, {
							iteration: E,
							max: D
						})
					}),
					/* @__PURE__ */ h("span", { children: y(_[v.status]) }),
					k !== null && /* @__PURE__ */ h("span", {
						className: "opacity-60",
						children: y(t.GOAL$SCORE, { score: k })
					}),
					w ? /* @__PURE__ */ h("span", {
						"data-testid": "goal-spinner",
						className: "inline-block w-3.5 h-3.5 ml-1 rounded-full border-2 border-transparent border-t-[var(--oh-border-input)] animate-spin"
					}) : v.status === "complete" ? /* @__PURE__ */ h("span", {
						"data-testid": "goal-done",
						className: "inline-flex ml-1",
						children: /* @__PURE__ */ h(u, { className: "w-3.5 h-3.5 fill-success" })
					}) : /* @__PURE__ */ h("span", {
						"data-testid": "goal-ended",
						className: "inline-flex ml-1",
						children: /* @__PURE__ */ h(d, { className: "w-3.5 h-3.5 fill-[var(--oh-muted)]" })
					})
				]
			}),
			titleTrailing: P,
			details: A,
			initiallyExpanded: !w,
			chevronPosition: "before"
		})
	});
}
//#endregion
export { v as GoalStatusContent };

//# sourceMappingURL=goal-status-content.js.map