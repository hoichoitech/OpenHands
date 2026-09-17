import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { RUNTIME_INACTIVE_STATES as n } from "../types/agent-state.js";
import { ConversationTabEmptyState as r } from "../components/features/conversation/conversation-tab-empty-state.js";
import { useConversationId as i } from "../hooks/use-conversation-id.js";
import { useConversationStore as a } from "../stores/conversation-store.js";
import { useAgentState as o } from "../hooks/use-agent-state.js";
import { RuntimeWaitingState as s } from "../components/features/conversation-panel/runtime-waiting-state.js";
import { useUnifiedGetGitChanges as c } from "../hooks/query/use-unified-get-git-changes.js";
import { useUnifiedGitCommits as l } from "../hooks/query/use-unified-git-commits.js";
import { CommitList as u } from "../components/features/diff-viewer/commit-list.js";
import { DiffDrawerIcon as d } from "../components/features/diff-viewer/diff-drawer-icon.js";
import { useCallback as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/routes/commits-tab.tsx
function h() {
	let { t: h } = e("openhands"), { conversationId: g } = i(), { commits: _, hasMore: v, isUnsupported: y, isLoading: b, isSuccess: x } = l(), { data: S, isSuccess: C, isLoading: w } = c(), T = a((e) => e.commitsAutoExpandSection), E = a((e) => e.setCommitsAutoExpandSection), D = f(() => E(null), [E]), { curAgentState: O } = o(), k = !n.includes(O), A = x && !y && _.length > 0, j = C && (S?.length ?? 0) > 0, M = A || j, N = b || k && w;
	return /* @__PURE__ */ p("main", {
		className: "h-full w-full flex flex-col items-stretch",
		children: M ? /* @__PURE__ */ p("div", {
			className: "h-full overflow-y-auto flex flex-col items-stretch custom-scrollbar-always",
			children: /* @__PURE__ */ p(u, {
				commits: A ? _ : [],
				hasMore: A ? v : !1,
				uncommittedChanges: C ? (S ?? []).slice(0, 100) : [],
				autoExpandUncommitted: T === "uncommitted",
				onAutoExpandHandled: D
			}, g)
		}) : /* @__PURE__ */ m("div", {
			className: "flex-1 flex items-center justify-center",
			children: [
				!k && /* @__PURE__ */ p(s, {
					testId: "commits-tab-status",
					messageKey: t.DIFF_VIEWER$WAITING_FOR_RUNTIME
				}),
				k && N && /* @__PURE__ */ p(s, {
					testId: "commits-tab-status",
					messageKey: t.DIFF_VIEWER$LOADING
				}),
				k && !N && /* @__PURE__ */ p(r, {
					icon: /* @__PURE__ */ p(d, {}),
					children: h(t.DIFF_VIEWER$NO_COMMITS)
				})
			]
		})
	});
}
//#endregion
export { h as default };

//# sourceMappingURL=commits-tab.js.map