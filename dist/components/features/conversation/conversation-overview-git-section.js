import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ExternalLink as n } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { GitBranch as r } from "../../../node_modules/lucide-react/dist/esm/icons/git-branch.js";
import { GitCommitHorizontal as i } from "../../../node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js";
import { cn as a, constructBranchUrl as o, constructRepositoryUrl as s } from "../../../utils/utils.js";
import { useConversationId as c } from "../../../hooks/use-conversation-id.js";
import { CONVERSATION_OVERVIEW_GIT_PART as l, isOverviewGitPartPinned as u } from "./conversation-overview-sections.js";
import { useConversationLocalStorageState as d } from "../../../utils/conversation-local-storage.js";
import { useSettings as f } from "../../../hooks/query/use-settings.js";
import { FaCodeBranch as p } from "../../../node_modules/react-icons/fa/index.js";
import { useSelectConversationTab as m } from "../../../hooks/use-select-conversation-tab.js";
import h from "../../../icons/u-pr.js";
import { GitProviderIcon as g } from "../../shared/git-provider-icon.js";
import { useConversationPrimaryRepository as _ } from "../../../hooks/use-conversation-primary-repository.js";
import { useConversationOverviewDrawerOptional as v } from "./conversation-overview-drawer-context.js";
import { CONVERSATION_OVERVIEW_DRAWER_SECTION as y } from "./conversation-overview-drawer.types.js";
import { useRepositoryPullRequests as b } from "../../../hooks/query/use-repository-git-items.js";
import { useUnifiedGitCommits as x } from "../../../hooks/query/use-unified-git-commits.js";
import "react";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-git-section.tsx
var w = "size-4 shrink-0 text-[var(--oh-muted)]", T = a("size-3.5 shrink-0 text-[var(--oh-muted)]", "opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"), E = "-";
function D() {
	let { t: D } = e("openhands"), { conversationId: O } = c(), { state: k } = d(O), { navigateToCommits: A } = m(), j = v(), { data: M } = f(), { repository: N, provider: P, branch: F, isConnected: I } = _(), L = u(l.repository, k.unpinnedOverviewGitParts ?? []), R = u(l.branch, k.unpinnedOverviewGitParts ?? []), z = u(l.commits, k.unpinnedOverviewGitParts ?? []), B = u(l.pull_requests, k.unpinnedOverviewGitParts ?? []), V = b(B ? N : null, B ? P : null), H = x();
	if (!I || !N || !P || !L && !R && !z && !B) return null;
	let U = M?.provider_tokens_set?.[P] ?? null, W = s(P, N, U), G = F ? o(P, N, F, U) : null, K = V.data?.length ?? null, q = H.isUnsupported ? null : H.commits.length, J = q !== null && q > 0 ? H.hasMore ? `${q}+` : String(q) : E, Y = () => {
		j?.openSection(y.pull_requests);
	}, X = () => {
		j?.closeDrawer(), A();
	}, Z = L || R, Q = z || B;
	return /* @__PURE__ */ C("div", {
		"data-testid": "conversation-overview-git-section",
		children: [Z ? /* @__PURE__ */ C("div", {
			className: "px-2 pb-1",
			children: [L ? /* @__PURE__ */ C("a", {
				href: W,
				target: "_blank",
				rel: "noreferrer",
				"data-testid": "conversation-overview-git-repo",
				className: a("group flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5", "transition-colors hover:bg-white/5"),
				children: [
					/* @__PURE__ */ S(g, {
						gitProvider: P,
						className: w
					}),
					/* @__PURE__ */ S("span", {
						className: "min-w-0 flex-1 truncate text-sm text-[var(--oh-foreground)]",
						children: N
					}),
					/* @__PURE__ */ S(n, {
						className: T,
						"aria-hidden": !0
					})
				]
			}) : null, R ? F && G ? /* @__PURE__ */ C("a", {
				href: G,
				target: "_blank",
				rel: "noreferrer",
				"data-testid": "conversation-overview-git-branch",
				className: a("group flex min-w-0 items-center gap-2 rounded-md px-2 py-1.5", "transition-colors hover:bg-white/5"),
				children: [
					/* @__PURE__ */ S(p, {
						size: 14,
						className: "shrink-0 text-[var(--oh-muted)]",
						"aria-hidden": !0
					}),
					/* @__PURE__ */ S("span", {
						className: "min-w-0 flex-1 truncate text-sm text-[var(--oh-foreground)]",
						children: F
					}),
					/* @__PURE__ */ S(n, {
						className: T,
						"aria-hidden": !0
					})
				]
			}) : /* @__PURE__ */ C("div", {
				"data-testid": "conversation-overview-git-branch",
				className: "flex min-w-0 items-center gap-2 px-2 py-1.5",
				children: [/* @__PURE__ */ S(r, {
					className: "size-3.5 shrink-0 text-[var(--oh-muted)]",
					"aria-hidden": !0
				}), /* @__PURE__ */ S("span", {
					className: a("text-sm", F ? "text-[var(--oh-foreground)]" : "text-[var(--oh-muted)]"),
					children: F || D(t.CONVERSATION$OVERVIEW_NONE)
				})]
			}) : null]
		}) : null, Q ? /* @__PURE__ */ C("ul", {
			className: "px-2",
			children: [z ? /* @__PURE__ */ S("li", { children: /* @__PURE__ */ C("button", {
				type: "button",
				"data-testid": "conversation-overview-commits",
				onClick: X,
				className: a("flex w-full min-w-0 items-center gap-2 rounded-md px-2 py-1.5", "cursor-pointer bg-transparent text-left transition-colors hover:bg-white/5"),
				children: [
					/* @__PURE__ */ S(i, {
						className: w,
						"aria-hidden": !0
					}),
					/* @__PURE__ */ S("span", {
						className: "min-w-0 flex-1 truncate text-sm text-[var(--oh-foreground)]",
						children: D(t.DIFF_VIEWER$COMMITS)
					}),
					H.isLoading ? /* @__PURE__ */ S("span", {
						className: "text-sm tabular-nums text-[var(--oh-muted)]",
						children: "…"
					}) : /* @__PURE__ */ S("span", {
						"data-testid": "conversation-overview-commits-count",
						className: "text-sm tabular-nums text-[var(--oh-muted)]",
						children: J
					})
				]
			}) }) : null, B ? /* @__PURE__ */ S("li", { children: /* @__PURE__ */ C("button", {
				type: "button",
				"data-testid": "conversation-overview-pull-requests",
				onClick: Y,
				className: a("flex w-full min-w-0 items-center gap-2 rounded-md px-2 py-1.5", "cursor-pointer bg-transparent text-left transition-colors hover:bg-white/5"),
				children: [
					/* @__PURE__ */ S(h, {
						className: w,
						"aria-hidden": !0
					}),
					/* @__PURE__ */ S("span", {
						className: "min-w-0 flex-1 truncate text-sm text-[var(--oh-foreground)]",
						children: D(t.CONVERSATION$OVERVIEW_PULL_REQUESTS)
					}),
					V.isLoading ? /* @__PURE__ */ S("span", {
						className: "text-sm tabular-nums text-[var(--oh-muted)]",
						children: "…"
					}) : /* @__PURE__ */ S("span", {
						"data-testid": "conversation-overview-pull-requests-count",
						className: "text-sm tabular-nums text-[var(--oh-muted)]",
						children: K !== null && K > 0 ? K : E
					})
				]
			}) }) : null]
		}) : null]
	});
}
//#endregion
export { D as ConversationOverviewGitSection };

//# sourceMappingURL=conversation-overview-git-section.js.map