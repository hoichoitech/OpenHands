import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useConversationId as n } from "../../../hooks/use-conversation-id.js";
import { displayErrorToast as r } from "../../../utils/custom-toast-handlers.js";
import { useActiveBackend as i } from "../../../contexts/active-backend-context.js";
import { useOptimisticUserMessageStore as a } from "../../../stores/optimistic-user-message-store.js";
import { getStoredConversationMetadata as o } from "../../../api/conversation-metadata-store.js";
import { useConversationWebSocket as ee } from "../../../contexts/conversation-websocket-context.js";
import { useSendMessage as te } from "../../../hooks/use-send-message.js";
import { useActiveConversation as ne } from "../../../hooks/query/use-active-conversation.js";
import { useTaskPolling as re } from "../../../hooks/query/use-task-polling.js";
import { useUnifiedWebSocketStatus as s } from "../../../hooks/use-unified-websocket-status.js";
import { useCreateConversation as c } from "../../../hooks/mutation/use-create-conversation.js";
import { useUserProviders as ie } from "../../../hooks/use-user-providers.js";
import { GitControlBarRepoButton as ae } from "./git-control-bar-repo-button.js";
import { GitControlBarBranchButton as l } from "./git-control-bar-branch-button.js";
import { GitControlBarPullButton as u } from "./git-control-bar-pull-button.js";
import { GitControlBarPushButton as d } from "./git-control-bar-push-button.js";
import { GitControlBarPrButton as f } from "./git-control-bar-pr-button.js";
import { useLocalGitInfo as p } from "../../../hooks/query/use-local-git-info.js";
import { useUpdateConversationRepository as m } from "../../../hooks/mutation/use-update-conversation-repository.js";
import { GitControlBarTooltipWrapper as h } from "./git-control-bar-tooltip-wrapper.js";
import { useHomeStore as oe } from "../../../stores/home-store.js";
import { OpenRepositoryModal as g } from "./open-repository-modal.js";
import { useOptionalScrollContext as se } from "../../../context/scroll-context.js";
import { useEffect as _, useRef as v, useState as y } from "react";
import { Fragment as b, jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/features/chat/git-control-bar.tsx
function C({ onSuggestionsClick: C }) {
	let { t: w } = e("openhands"), { conversationId: T } = n(), [ce, E] = y(!1), [D, O] = y(!1), k = v(null), { addRecentRepository: A } = oe(), j = a((e) => e.enqueuePendingMessage), M = a((e) => e.markPendingMessageError), { backend: N } = i(), P = N.kind === "local", { providers: F } = ie(), I = P || F.length > 0, { data: L } = ne(), { repositoryInfo: R } = re(), { data: z } = p(), B = s(), V = ee()?.isLoadingHistory ?? !1, H = v(B);
	_(() => {
		H.current = B;
	}, [B]);
	let { send: U } = te(), W = v(U);
	_(() => {
		W.current = U;
	}, [U]);
	let G = se(), { mutate: le } = m(), { mutate: ue, isPending: de } = c(), fe = L?.selected_repository || R?.selectedRepository, pe = L?.git_provider || R?.gitProvider, me = L?.selected_branch || R?.selectedBranch, K = fe || z?.repository || void 0, q = pe || z?.provider, J = me || z?.branch || void 0, Y = (L?.id ? o(L.id) : null)?.selected_workspace ?? null, X = Y && Y.replace(/\/+$/, "").split("/").pop() || null, Z = !!K && !!q, Q = !!L && B === "OPEN" && !V;
	_(() => {
		if (!D) return;
		let e = (e) => {
			k.current && !k.current.contains(e.target) && O(!1);
		};
		return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e);
	}, [D]), _(() => {
		if (!D) return;
		let e = (e) => {
			e.key === "Escape" && O(!1);
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [D]);
	let he = (e, n) => {
		T && (A(e), le({
			conversationId: T,
			repository: e.full_name,
			branch: n.name,
			gitProvider: e.git_provider
		}, { onSuccess: () => {
			if (H.current !== "OPEN") {
				r(w(t.CONVERSATION$CLONE_COMMAND_FAILED_DISCONNECTED));
				return;
			}
			let i = e.git_provider.charAt(0).toUpperCase() + e.git_provider.slice(1), a = `Clone ${e.full_name} from ${i} and checkout branch ${n.name}.`, o = T ? j({
				conversationId: T,
				text: a
			}) : null;
			G?.scrollDomToBottom(), Promise.resolve(W.current({
				action: "message",
				args: {
					content: a,
					timestamp: (/* @__PURE__ */ new Date()).toISOString()
				}
			})).catch((e) => {
				o && M(o, e instanceof Error ? e.message : w(t.CHAT_INTERFACE$FAILED_TO_SEND_MESSAGE));
			});
		} }));
	}, $ = !P || !!K || !!X;
	return $ || J || Z ? /* @__PURE__ */ S("div", {
		className: "flex flex-row items-center",
		children: [/* @__PURE__ */ S("div", {
			className: "flex flex-row gap-2.5 items-center overflow-x-auto flex-nowrap relative scrollbar-hide",
			children: [
				$ ? /* @__PURE__ */ x(ae, {
					selectedRepository: K,
					gitProvider: q,
					workspaceName: X,
					onClick: () => E(!0),
					disabled: !Q || P && !Z
				}) : null,
				J ? /* @__PURE__ */ x(l, {
					selectedBranch: J,
					selectedRepository: K,
					gitProvider: q
				}) : null,
				Z ? /* @__PURE__ */ S(b, { children: [
					/* @__PURE__ */ x(h, {
						tooltipMessage: w(t.COMMON$GIT_TOOLS_DISABLED_CONTENT),
						testId: "git-control-bar-pull-button-tooltip",
						shouldShowTooltip: !Z,
						children: /* @__PURE__ */ x(u, {
							onSuggestionsClick: C,
							hasRepository: Z,
							providerTokensReady: I,
							isConversationReady: Q
						})
					}),
					/* @__PURE__ */ x(h, {
						tooltipMessage: w(t.COMMON$GIT_TOOLS_DISABLED_CONTENT),
						testId: "git-control-bar-push-button-tooltip",
						shouldShowTooltip: !Z,
						children: /* @__PURE__ */ x(d, {
							onSuggestionsClick: C,
							hasRepository: Z,
							providerTokensReady: I,
							currentGitProvider: q,
							isConversationReady: Q
						})
					}),
					/* @__PURE__ */ x(h, {
						tooltipMessage: w(t.COMMON$GIT_TOOLS_DISABLED_CONTENT),
						testId: "git-control-bar-pr-button-tooltip",
						shouldShowTooltip: !Z,
						children: /* @__PURE__ */ x(f, {
							onSuggestionsClick: C,
							hasRepository: Z,
							providerTokensReady: I,
							currentGitProvider: q,
							isConversationReady: Q
						})
					})
				] }) : null
			]
		}), /* @__PURE__ */ x(g, {
			isOpen: ce,
			onClose: () => E(!1),
			onLaunch: he,
			defaultProvider: q
		})]
	}) : null;
}
//#endregion
export { C as GitControlBar };

//# sourceMappingURL=git-control-bar.js.map