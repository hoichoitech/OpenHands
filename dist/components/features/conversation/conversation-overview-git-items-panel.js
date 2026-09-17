import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ExternalLink as n } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { cn as r, getProviderName as i } from "../../../utils/utils.js";
import { useConversationPrimaryRepository as a } from "../../../hooks/use-conversation-primary-repository.js";
import { CONVERSATION_OVERVIEW_DRAWER_SECTION as o } from "./conversation-overview-drawer.types.js";
import { GitProviderItemsService as s } from "../../../api/git-provider-items-service.js";
import { useRepositoryIssues as c, useRepositoryPullRequests as l } from "../../../hooks/query/use-repository-git-items.js";
import { extensionModuleEmptyStateClassName as u } from "../../../utils/extension-module-card-classes.js";
import "react";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-git-items-panel.tsx
var p = r("size-3.5 shrink-0 text-[var(--oh-muted)]", "opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100");
function m(e) {
	let { repository: t, provider: n } = a();
	return !t || !n ? null : e === o.pull_requests ? s.constructPullRequestsListUrl(n, t) : s.constructIssuesListUrl(n, t);
}
function h({ kind: o }) {
	let { t: s } = e("openhands"), { provider: c } = a(), l = m(o);
	return !l || !c ? null : /* @__PURE__ */ f("a", {
		href: l,
		target: "_blank",
		rel: "noreferrer",
		"data-testid": `conversation-overview-${o}-open-external`,
		className: r("inline-flex h-7 min-h-7 shrink-0 items-center gap-1.5 whitespace-nowrap", "px-1 text-xs text-[var(--oh-muted)] transition-colors", "hover:text-[var(--oh-foreground)]"),
		children: [s(t.CONVERSATION$OVERVIEW_VIEW_ON_PROVIDER, { provider: i(c) }), /* @__PURE__ */ d(n, {
			className: "size-3.5",
			"aria-hidden": !0
		})]
	});
}
function g({ kind: i }) {
	let { t: s } = e("openhands"), { repository: m, provider: h, isConnected: g } = a(), _ = l(m, h), v = c(m, h), y = i === o.pull_requests ? _ : v;
	return !g || !m || !h ? /* @__PURE__ */ d("p", {
		"data-testid": "conversation-overview-git-items-unavailable",
		className: r(u, "px-4 py-6 text-center text-sm"),
		children: s(t.CONVERSATION$OVERVIEW_GIT_UNAVAILABLE)
	}) : /* @__PURE__ */ d("div", {
		"data-testid": `conversation-overview-${i}-panel`,
		className: "min-h-0 flex-1 overflow-y-auto px-2 py-2",
		children: y.isLoading ? /* @__PURE__ */ d("p", {
			className: "px-2 py-4 text-sm text-[var(--oh-muted)]",
			children: s(t.HOME$LOADING)
		}) : y.isError ? /* @__PURE__ */ d("p", {
			"data-testid": `conversation-overview-${i}-error`,
			className: r(u, "px-2 py-6 text-center text-sm"),
			children: s(t.CONVERSATION$OVERVIEW_GIT_ITEMS_ERROR)
		}) : y.data && y.data.length > 0 ? /* @__PURE__ */ d("ul", {
			className: "flex flex-col gap-0.5",
			children: y.data.map((e) => /* @__PURE__ */ d("li", { children: /* @__PURE__ */ f("a", {
				href: e.url,
				target: "_blank",
				rel: "noreferrer",
				"data-testid": `conversation-overview-${i}-item-${e.number}`,
				className: r("group flex min-w-0 items-center gap-2 rounded-md px-2 py-2", "transition-colors hover:bg-white/5"),
				children: [
					/* @__PURE__ */ f("span", {
						className: "shrink-0 text-sm tabular-nums text-[var(--oh-muted)]",
						children: ["#", e.number]
					}),
					/* @__PURE__ */ d("span", {
						className: "min-w-0 flex-1 truncate text-sm text-[var(--oh-foreground)]",
						children: e.title
					}),
					/* @__PURE__ */ d(n, {
						className: p,
						"aria-hidden": !0
					})
				]
			}) }, e.id))
		}) : /* @__PURE__ */ d("p", {
			"data-testid": `conversation-overview-${i}-empty`,
			className: r(u, "px-2 py-6 text-center text-sm"),
			children: i === o.pull_requests ? s(t.CONVERSATION$OVERVIEW_PULL_REQUESTS_EMPTY) : s(t.CONVERSATION$OVERVIEW_ISSUES_EMPTY)
		})
	});
}
//#endregion
export { h as ConversationOverviewGitItemsHeaderLink, g as ConversationOverviewGitItemsPanel };

//# sourceMappingURL=conversation-overview-git-items-panel.js.map