import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { GitCommitHorizontal as n } from "../../../node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js";
import { OH_STATUS_ERROR_COLOR as r, OH_STATUS_SUCCESS_COLOR as i } from "../../../constants/status-colors.js";
import { cn as a } from "../../../utils/utils.js";
import { useActiveConversation as o } from "../../../hooks/query/use-active-conversation.js";
import { useSelectConversationTab as s } from "../../../hooks/use-select-conversation-tab.js";
import { LuFileDiff as c } from "../../../node_modules/react-icons/lu/index.js";
import { useConversationOverviewGitDiffStats as l } from "../../../hooks/use-conversation-overview-git-diff-stats.js";
import { useConversationOverviewDrawerOptional as u } from "./conversation-overview-drawer-context.js";
import { ConversationGitActionsMenu as d } from "./conversation-git-actions-menu.js";
import { useEffect as f, useRef as p, useState as m } from "react";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-diffs-row.tsx
var v = a("flex min-w-0 flex-1 items-center gap-2 rounded-md px-2 py-1.5", "cursor-pointer border-0 bg-transparent text-left"), y = "size-4 shrink-0 text-[var(--oh-muted)]", b = "conversation-overview-diffs-git-action", x = a(b, "absolute inset-0 inline-flex items-center justify-center", "rounded-md text-[var(--oh-muted)] transition-opacity", "hover:bg-white/10 hover:text-[var(--oh-foreground)]"), S = a("flex items-center rounded-md transition-colors", "hover:bg-white/5", `has-[.${b}:hover]:bg-transparent`), C = a("pointer-events-none invisible opacity-0", "group-hover/diffstats:pointer-events-auto group-hover/diffstats:visible group-hover/diffstats:opacity-100", "group-focus-within/diffstats:pointer-events-auto group-focus-within/diffstats:visible group-focus-within/diffstats:opacity-100");
function w() {
	let { t: b } = e("openhands"), { navigateToChanges: w } = s(), T = u(), { data: E } = o(), { additions: D, deletions: O, isLoading: k } = l(), A = E?.git_provider ?? "github", [j, M] = m(!1), N = p(null);
	return f(() => {
		if (!j) return;
		let e = (e) => {
			e.key === "Escape" && M(!1);
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [j]), /* @__PURE__ */ _("li", {
		className: S,
		children: [/* @__PURE__ */ _("button", {
			type: "button",
			"data-testid": "conversation-overview-diffs",
			"aria-label": b(t.CONVERSATION$OVERVIEW_OPEN_CHANGES),
			onClick: () => {
				T?.closeDrawer(), w();
			},
			className: v,
			children: [/* @__PURE__ */ g(c, {
				className: y,
				"aria-hidden": !0
			}), /* @__PURE__ */ g("span", {
				className: "min-w-0 flex-1 truncate text-sm text-[var(--oh-foreground)]",
				children: b(t.COMMON$CHANGES)
			})]
		}), /* @__PURE__ */ g("div", {
			className: "group/diffstats relative mr-2 flex h-6 min-w-6 shrink-0 items-center justify-center",
			children: k ? /* @__PURE__ */ g("span", {
				className: "text-sm tabular-nums text-[var(--oh-muted)]",
				children: "…"
			}) : /* @__PURE__ */ _(h, { children: [
				/* @__PURE__ */ _("span", {
					className: a("flex items-center gap-1.5 text-sm tabular-nums transition-opacity", j ? "opacity-0" : "group-hover/diffstats:opacity-0 group-focus-within/diffstats:opacity-0"),
					children: [/* @__PURE__ */ g("span", {
						"data-testid": "conversation-overview-diffs-additions",
						style: { color: i },
						children: b(t.CONVERSATION$OVERVIEW_DIFF_ADDITIONS, { count: D.toLocaleString() })
					}), /* @__PURE__ */ g("span", {
						"data-testid": "conversation-overview-diffs-deletions",
						style: { color: r },
						children: b(t.CONVERSATION$OVERVIEW_DIFF_DELETIONS, { count: O.toLocaleString() })
					})]
				}),
				/* @__PURE__ */ g("button", {
					ref: N,
					type: "button",
					"data-testid": "conversation-overview-diffs-git-action",
					"aria-label": b(t.CONVERSATION$OVERVIEW_DIFF_GIT_ACTIONS),
					"aria-expanded": j,
					"aria-haspopup": "menu",
					onClick: (e) => {
						e.stopPropagation(), M((e) => !e);
					},
					className: a(x, !j && C, j && "pointer-events-auto visible opacity-100 text-[var(--oh-foreground)]"),
					children: /* @__PURE__ */ g(n, {
						className: "size-4",
						"aria-hidden": !0
					})
				}),
				j ? /* @__PURE__ */ g(d, {
					anchorRef: N,
					gitProvider: A,
					testIdPrefix: "conversation-overview-diffs-git",
					onClose: () => M(!1)
				}) : null
			] })
		})]
	});
}
//#endregion
export { w as ConversationOverviewDiffsRow };

//# sourceMappingURL=conversation-overview-diffs-row.js.map