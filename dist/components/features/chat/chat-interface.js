import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { AgentState as n } from "../../../types/agent-state.js";
import { getStatusColor as r, getStatusText as i } from "../../../utils/utils.js";
import { useOptionalConversationId as a } from "../../../hooks/use-conversation-id.js";
import { useConversationStore as o } from "../../../stores/conversation-store.js";
import { displayErrorToast as s } from "../../../utils/custom-toast-handlers.js";
import "../../../constants/server-connection-error.js";
import { useErrorMessageStore as c } from "../../../stores/error-message-store.js";
import { useOptimisticUserMessageStore as l } from "../../../stores/optimistic-user-message-store.js";
import { useGoalStore as u } from "../../../stores/goal-store.js";
import { useModelStore as d } from "../../../stores/model-store.js";
import { useConversationWebSocket as f } from "../../../contexts/conversation-websocket-context.js";
import { useSendMessage as p } from "../../../hooks/use-send-message.js";
import { useActiveConversation as m } from "../../../hooks/query/use-active-conversation.js";
import { useAgentState as h, usePlanningAgentState as ee } from "../../../hooks/use-agent-state.js";
import { convertImageToBase64 as te } from "../../../utils/convert-image-to-base-64.js";
import { validateFiles as ne } from "../../../utils/file-validation.js";
import { matchesPendingConversationId as re } from "../../../utils/pending-task-message-link.js";
import { useTaskPolling as ie } from "../../../hooks/query/use-task-polling.js";
import { useTracking as ae } from "../../../hooks/use-tracking.js";
import { isAcpAuthErrorCode as oe } from "../../../utils/acp-error-codes.js";
import { createChatMessage as se } from "../../../services/chat-service.js";
import { BtwMessages as ce } from "./btw-messages.js";
import { GoalStatusBanner as le } from "./goal-status-banner.js";
import { ModelMessages as ue } from "./model-messages.js";
import { hasConversationStarted as de } from "./components/resolve-picker-kind.js";
import { useIsArchivedConversation as fe } from "../../../hooks/use-is-archived-conversation.js";
import { LoadingSpinner as pe } from "../../shared/loading-spinner.js";
import { useScrollToBottom as me } from "../../../hooks/use-scroll-to-bottom.js";
import { ScrollProvider as he } from "../../../context/scroll-context.js";
import { InteractiveChatBox as ge } from "./interactive-chat-box.js";
import { useFilteredEvents as _e } from "../../../hooks/use-filtered-events.js";
import { useLoadOlderEvents as ve } from "../../../hooks/use-load-older-events.js";
import { useAutoRefreshFilesOnEdit as ye } from "../../../hooks/use-auto-refresh-files-on-edit.js";
import { WorkspaceFilesForChatProvider as be } from "./chat-markdown-path-code.js";
import { TypingIndicator as xe } from "./typing-indicator.js";
import { ChatSuggestions as Se } from "./chat-suggestions.js";
import { useInitialQueryStore as Ce } from "../../../stores/initial-query-store.js";
import { useHandleBuildPlanClick as we } from "../../../hooks/use-handle-build-plan-click.js";
import { ScrollToBottomButton as Te } from "../../shared/buttons/scroll-to-bottom-button.js";
import { ChatMessagesSkeleton as Ee } from "./chat-messages-skeleton.js";
import { ErrorMessageBanner as De } from "./error-message-banner.js";
import { SkillInstallRestartBanner as Oe } from "./skill-install-restart-banner.js";
import { useLlmConfigured as ke } from "../../../hooks/use-llm-configured.js";
import { LlmNotConfiguredBanner as Ae } from "../home/llm-not-configured-banner.js";
import { Messages as je } from "../../conversation-events/chat/messages.js";
import { PendingUserMessages as Me } from "./pending-user-messages.js";
import { useUnifiedUploadFiles as Ne } from "../../../hooks/mutation/use-unified-upload-files.js";
import Pe from "./confirmation-mode-enabled.js";
import Fe from "./chat-status-indicator.js";
import { useNewConversationCommand as Ie } from "../../../hooks/mutation/use-new-conversation-command.js";
import g from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
import { useNavigate as Le } from "react-router";
//#region src/components/features/chat/chat-interface.tsx
function Re(e, t) {
	return e ? "github" : t ? "replay" : "direct";
}
function y() {
	ye();
	let { trackInitialQuerySubmitted: y, trackUserMessageSent: ze } = ae(), { setMessageToSend: b, conversationMode: x, planContent: S } = o(), { errorMessage: C, errorCode: w, errorClassification: Be, removeErrorMessage: Ve, setErrorMessage: T } = c(), He = Le(), { isTask: E, taskStatus: D, taskDetail: Ue } = ie(), O = E, k = f(), { send: We } = p(), { renderableEvents: A, allConversationEvents: j, totalEvents: M, hasSubstantiveAgentActions: N, userEventsExist: P } = _e(), Ge = l((e) => e.enqueuePendingMessage), Ke = l((e) => e.markPendingMessageError), F = l((e) => e.pendingMessages), { t: I } = e("openhands"), L = g.useRef(null), { scrollDomToBottom: R, onChatBodyScroll: z, hitBottom: B, autoScroll: V, setAutoScroll: qe, setHitBottom: Je } = me(L), { mutate: Ye, isPending: Xe } = Ie(), { curAgentState: H } = h(), { isPlanningAgentRunning: Ze } = ee(), { handleBuildPlanClick: Qe } = we(), { data: $e } = m(), et = $e?.sandbox_status ?? null, U = fe(), { isConfigured: tt, isLoading: nt } = ke(), W = !nt && !tt, rt = H === n.RUNNING || H === n.LOADING;
	g.useEffect(() => {
		if (rt || x !== "plan" || !S) return;
		let e = (e) => {
			(e.metaKey || e.ctrlKey) && e.key === "Enter" && (e.preventDefault(), e.stopPropagation(), Qe(e), R());
		};
		return document.addEventListener("keydown", e), () => {
			document.removeEventListener("keydown", e);
		};
	}, [
		rt,
		x,
		S,
		Qe,
		R
	]);
	let { selectedRepository: it, replayJson: at } = Ce(), { conversationId: G } = a(), ot = u((e) => {
		let t = G ? e.statusByConversation[G] : void 0;
		return t?.active ? `${t.iteration}:${t.status}` : null;
	}), { mutateAsync: st } = Ne(), { isLoading: K, hasMore: q, loadOlder: ct } = ve(G), J = g.useRef(null), Y = g.useCallback((e) => {
		if (O || K || !q) return;
		let n = e.scrollTop <= 80, r = e.scrollHeight <= e.clientHeight + 80;
		!n && !r || (J.current = {
			scrollHeight: e.scrollHeight,
			scrollTop: e.scrollTop
		}, ct().catch((e) => {
			J.current = null, T(e instanceof Error && e.message ? e.message : I(t.ERROR$GENERIC));
		}));
	}, [
		q,
		K,
		O,
		ct,
		T,
		I
	]), lt = g.useCallback((e) => {
		e.deltaY < 0 && e.currentTarget.scrollTop <= 0 && Y(e.currentTarget);
	}, [Y]), X = g.useMemo(() => G ? F.some((e) => re(G, e.conversationId)) : !1, [F, G]), ut = d((e) => G ? (e.entriesByConversation[G]?.length ?? 0) > 0 : !1), dt = de({
		isLoadingHistory: k?.isLoadingHistory === !0,
		hasUserEvents: P,
		hasPendingUserMessages: X,
		hasSubstantiveAgentActions: N,
		hasModelEntries: ut
	}), ft = j.length > 0 || X || !k?.isLoadingHistory, pt = !!G, Z = !ft && !E, mt = async (e, n, r) => {
		if (e.trim() === "/new") {
			if (!G) {
				s(I(t.CONVERSATION$CLEAR_NO_ID));
				return;
			}
			if (M === 0) {
				s(I(t.CONVERSATION$CLEAR_EMPTY));
				return;
			}
			if (Xe) return;
			Ye();
			return;
		}
		let i = [...n], a = [...r];
		M === 0 ? y({
			entryPoint: Re(it !== null, at !== null),
			queryCharacterLength: e.length,
			replayJsonSize: at?.length
		}) : ze({
			sessionMessageCount: M,
			currentMessageLength: e.length
		});
		let o = ne([...i, ...a]);
		if (!o.isValid) {
			s(`Error: ${o.errorMessage}`);
			return;
		}
		let c = i.map((e) => te(e)), l = await Promise.all(c), u = (/* @__PURE__ */ new Date()).toISOString(), { skipped_files: d, uploaded_files: f } = a.length > 0 ? await st({
			conversationId: G,
			files: a
		}) : {
			skipped_files: [],
			uploaded_files: []
		};
		d.forEach((e) => s(e.reason));
		let p = `${I(t.CHAT_INTERFACE$AUGMENTED_PROMPT_FILES_TITLE)}: ${f.join("\n\n")}`, m = f.length > 0 ? `${e}\n\n${p}` : e, h = Ge({
			conversationId: G,
			text: e,
			content: m,
			imageUrls: l,
			fileUrls: f,
			timestamp: u
		});
		R(), b("");
		try {
			await We(se(m, l, f, u));
		} catch (e) {
			Ke(h, e instanceof Error ? e.message : I(t.CHAT_INTERFACE$FAILED_TO_SEND_MESSAGE));
		}
	};
	g.useEffect(() => {
		if (J.current && L.current) {
			let { scrollHeight: e, scrollTop: t } = J.current, n = L.current, r = n.scrollHeight - e;
			r > 0 && (n.scrollTop = t + r), J.current = null;
			return;
		}
		V && R();
	}, [
		A.length,
		X,
		ot,
		R
	]);
	let ht = g.useRef(Y);
	g.useEffect(() => {
		ht.current = Y;
	}), g.useEffect(() => {
		let e = L.current;
		e && ht.current(e);
	}, [A.length, q]);
	let gt = {
		scrollRef: L,
		autoScroll: V,
		setAutoScroll: qe,
		scrollDomToBottom: R,
		hitBottom: B,
		setHitBottom: Je,
		onChatBodyScroll: z
	}, Q = H === n.LOADING || H === n.INIT, _t = H === n.STOPPED, $ = H === n.PAUSED, vt = r({
		isPausing: $,
		isTask: E,
		taskStatus: D,
		isStartingStatus: Q,
		isStopStatus: _t,
		curAgentState: H
	}), yt = i({
		isPausing: $,
		isTask: E,
		taskStatus: D,
		taskDetail: Ue,
		isStartingStatus: Q,
		isStopStatus: _t,
		curAgentState: H,
		errorMessage: C,
		t: I
	});
	return /* @__PURE__ */ _(be, { children: /* @__PURE__ */ _(he, {
		value: gt,
		children: /* @__PURE__ */ v("div", {
			className: "relative flex h-full flex-col justify-between px-4",
			"data-testid": "chat-interface",
			children: [
				!N && !X && !P && !ut && !Z && !O && M === 0 && !U && !W && /* @__PURE__ */ _(Se, { onSuggestionsClick: (e) => b(e) }),
				/* @__PURE__ */ v("div", {
					ref: L,
					"data-testid": "chat-scroll-container",
					onScroll: (e) => {
						z(e.currentTarget), Y(e.currentTarget);
					},
					onWheel: lt,
					className: "custom-scrollbar-always flex min-h-0 grow flex-col gap-2 overflow-x-hidden overflow-y-auto px-0 pt-4 pb-8 md:px-4",
					children: [
						Z && pt && /* @__PURE__ */ _(Ee, {}),
						Z && !pt && /* @__PURE__ */ _("div", {
							className: "flex justify-center",
							"data-testid": "loading-spinner",
							children: /* @__PURE__ */ _(pe, { size: "small" })
						}),
						K && /* @__PURE__ */ v("div", {
							className: "flex items-center justify-center gap-2 py-3 text-sm text-neutral-400",
							"data-testid": "loading-older-events",
							children: [/* @__PURE__ */ _(pe, { size: "small" }), /* @__PURE__ */ _("span", { children: I(t.CHAT_INTERFACE$FETCHING_OLDER_MESSAGES) })]
						}),
						/* @__PURE__ */ _(ue, {
							conversationId: G,
							anchorEventId: null
						}),
						ft && A.length > 0 && /* @__PURE__ */ _(je, {
							messages: A,
							allEvents: j
						}),
						/* @__PURE__ */ _(Me, {}),
						/* @__PURE__ */ _(le, { conversationId: G })
					]
				}),
				/* @__PURE__ */ v("div", {
					className: "flex shrink-0 flex-col gap-[6px] pb-4",
					children: [
						/* @__PURE__ */ _(Oe, { conversationId: G }),
						/* @__PURE__ */ _(ce, { conversationId: G }),
						C && /* @__PURE__ */ _(De, {
							message: C,
							code: w,
							classification: Be,
							onDismiss: Ve,
							onRetry: C === "Unable to connect to server" ? () => k?.reconnect() : void 0,
							onReauth: oe(w) ? () => He("/settings/agents") : void 0
						}),
						W && !U && /* @__PURE__ */ _(Ae, {}),
						U ? /* @__PURE__ */ v("div", {
							"data-testid": "archived-conversation-banner",
							className: "mx-1 px-4 py-3 rounded-lg bg-[var(--oh-surface)] border border-[var(--oh-border-subtle)]",
							children: [/* @__PURE__ */ _("p", {
								className: "text-xs font-semibold text-[var(--oh-foreground)]",
								children: I(et === "ERROR" ? t.CHAT_INTERFACE$ERROR_SANDBOX_TITLE : t.CHAT_INTERFACE$ARCHIVED_SANDBOX_TITLE)
							}), /* @__PURE__ */ _("p", {
								className: "text-xs text-[var(--oh-muted)] mt-0.5",
								children: I(et === "ERROR" ? t.CHAT_INTERFACE$ERROR_SANDBOX_DESCRIPTION : t.CHAT_INTERFACE$ARCHIVED_SANDBOX_DESCRIPTION)
							})]
						}) : /* @__PURE__ */ v("div", {
							className: "relative",
							children: [/* @__PURE__ */ _("div", {
								className: "pointer-events-none absolute inset-x-0 bottom-full mb-1 z-20",
								children: /* @__PURE__ */ v("div", {
									className: "flex justify-between relative",
									children: [/* @__PURE__ */ v("div", {
										className: "flex items-end gap-1 pointer-events-auto",
										children: [/* @__PURE__ */ _(Pe, {}), Q && /* @__PURE__ */ _(Fe, {
											statusColor: vt,
											status: yt
										})]
									}), B ? (H === n.RUNNING || Ze) && /* @__PURE__ */ _("div", {
										className: "pointer-events-none absolute inset-x-9 bottom-0 flex justify-center",
										children: /* @__PURE__ */ _(xe, { events: j })
									}) : /* @__PURE__ */ _("div", {
										className: "absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-auto",
										children: /* @__PURE__ */ _(Te, { onClick: R })
									})]
								})
							}), /* @__PURE__ */ _(ge, {
								onSubmit: mt,
								disabled: Xe || W,
								hasStartedConversation: dt
							})]
						})
					]
				})
			]
		})
	}) });
}
//#endregion
export { y as ChatInterface };

//# sourceMappingURL=chat-interface.js.map