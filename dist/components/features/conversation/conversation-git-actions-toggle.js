import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { GitCommitHorizontal as n } from "../../../node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js";
import { cn as r } from "../../../utils/utils.js";
import { useActiveConversation as i } from "../../../hooks/query/use-active-conversation.js";
import { formControlBorderClassName as a, formControlMutedHoverClassName as o, formControlTransitionClassName as s } from "../../../utils/form-control-classes.js";
import { useIsArchivedConversation as c } from "../../../hooks/use-is-archived-conversation.js";
import { ConversationGitActionsMenu as l } from "./conversation-git-actions-menu.js";
import { ChatActionTooltip as u } from "../chat/chat-action-tooltip.js";
import { useEffect as d, useRef as f, useState as p } from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-git-actions-toggle.tsx
var g = r("inline-flex h-7 min-h-7 w-fit shrink-0 cursor-pointer items-center justify-center gap-1.5 px-2.5", "rounded-md text-xs font-normal leading-none", a, s, "text-[var(--oh-muted)]", o, "disabled:cursor-not-allowed disabled:opacity-30");
function _({ className: a }) {
	let { t: o } = e("openhands"), s = c(), { data: _ } = i(), [v, y] = p(!1), b = f(null), x = _?.git_provider ?? "github";
	d(() => {
		if (!v) return;
		let e = (e) => {
			e.key === "Escape" && y(!1);
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [v]);
	let S = o(t.CONVERSATION$OVERVIEW_DIFF_GIT_ACTIONS), C = /* @__PURE__ */ h("button", {
		ref: b,
		type: "button",
		onClick: () => {
			s || y((e) => !e);
		},
		disabled: s,
		className: r(g, v && "bg-white/10 text-[var(--oh-foreground)]", s && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-[var(--oh-muted)]", a),
		"aria-expanded": v,
		"aria-haspopup": "menu",
		"aria-disabled": s,
		"data-testid": "conversation-git-actions-toggle",
		children: [/* @__PURE__ */ m(n, {
			className: "size-4 shrink-0",
			size: 16,
			"aria-hidden": !0
		}), /* @__PURE__ */ m("span", {
			className: "whitespace-nowrap",
			children: S
		})]
	});
	return /* @__PURE__ */ h("div", {
		className: "relative inline-flex items-center self-center",
		children: [s ? /* @__PURE__ */ m(u, {
			tooltip: o(t.CONVERSATION$UNAVAILABLE_FOR_ARCHIVES),
			ariaLabel: o(t.CONVERSATION$UNAVAILABLE_FOR_ARCHIVES),
			children: C
		}) : C, v ? /* @__PURE__ */ m(l, {
			anchorRef: b,
			gitProvider: x,
			onClose: () => y(!1)
		}) : null]
	});
}
//#endregion
export { _ as ConversationGitActionsToggle };

//# sourceMappingURL=conversation-git-actions-toggle.js.map