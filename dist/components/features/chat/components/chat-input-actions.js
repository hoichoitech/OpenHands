import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Cpu as n } from "../../../../node_modules/lucide-react/dist/esm/icons/cpu.js";
import { AgentState as r } from "../../../../types/agent-state.js";
import { cn as i } from "../../../../utils/utils.js";
import { useOptionalConversationId as a } from "../../../../hooks/use-conversation-id.js";
import { useConversationStore as o } from "../../../../stores/conversation-store.js";
import { useActiveBackend as s } from "../../../../contexts/active-backend-context.js";
import { useAgentState as c } from "../../../../hooks/use-agent-state.js";
import { chatInputIconButtonClassName as ee, formControlTransitionClassName as l } from "../../../../utils/form-control-classes.js";
import { useUnifiedWebSocketStatus as te } from "../../../../hooks/use-unified-websocket-status.js";
import ne from "../../controls/agent-status.js";
import re from "../../../../icons/lesson-plan.js";
import { CodePillIcon as u } from "../../../../icons/code-pill.js";
import { ContextMenu as d } from "../../../../ui/context-menu.js";
import { ContextMenuListItem as f } from "../../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as ie } from "../../../../hooks/use-click-outside-element.js";
import { useAgentProfiles as p } from "../../../../hooks/query/use-agent-profiles.js";
import { useHandlePlanClick as ae } from "../../../../hooks/use-handle-plan-click.js";
import { ChangeAgentButton as oe } from "../change-agent-button.js";
import { useChatInputModelState as se } from "../../../../hooks/use-chat-input-model-state.js";
import { ChatInputModel as ce, ChatInputModelMenuContent as le } from "./chat-input-model.js";
import { ChatInputLlmProfileMenuContent as ue, ChatInputLlmProfilePicker as de } from "./chat-input-llm-profile-picker.js";
import { resolvePickerKind as fe } from "./resolve-picker-kind.js";
import { useUnifiedPauseConversation as pe } from "../../../../hooks/mutation/use-unified-stop-conversation.js";
import m from "../../../../icons/carret-right-fill.js";
import { ToolsContextMenuIconText as h } from "../../controls/tools-context-menu-icon-text.js";
import { ChatAddFileButton as me } from "../chat-add-file-button.js";
import { ChatSendButton as he } from "../chat-send-button.js";
import { ContextWindowMeter as ge } from "./context-window-meter.js";
import _e from "../../../../icons/three-dots-vertical.js";
import { usePauseConversation as ve } from "../../../../hooks/mutation/use-pause-conversation.js";
import { useResumeConversation as ye } from "../../../../hooks/mutation/use-resume-conversation.js";
import g from "react";
import { jsx as _, jsxs as v } from "react/jsx-runtime";
import be from "react-dom";
//#region src/components/features/chat/components/chat-input-actions.tsx
function y({ disabled: y, canSubmit: xe = !0, hasStartedConversation: Se, onAddFileClick: Ce = () => {}, showButton: we = !0, buttonClassName: Te = "", handleSubmit: Ee = () => {} }) {
	let { t: b } = e("openhands"), De = pe(), x = ve(), Oe = ye(), { conversationId: S } = a(), { backend: ke } = s(), C = ke.kind === "cloud", w = se(), T = !S || Se === !1, Ae = p({ enabled: T }), je = T && !(S?.startsWith("task-") ?? !1) && (Ae.data?.profiles?.length ?? 0) > 0, E = C && !w.isAcpContext, Me = te(), { curAgentState: Ne } = c(), { conversationMode: Pe, setConversationMode: Fe } = o(), { handlePlanClick: Ie, isCreatingConversation: Le } = ae(), D = g.useRef(null), O = g.useRef(null), k = g.useRef(null), A = g.useRef(null), j = g.useRef(null), M = g.useRef(null), [N, Re] = g.useState(Infinity), [ze, Be] = g.useState(0), [Ve, He] = g.useState(32), [P, Ue] = g.useState(96), [F, We] = g.useState(120), [I, L] = g.useState(!1), [R, z] = g.useState(null), [B, Ge] = g.useState();
	g.useEffect(() => {
		let e = D.current, t = O.current, n = k.current, r = A.current, i = j.current;
		if (!e || !t || !n || !i || E && !r || typeof ResizeObserver > "u") return;
		let a = () => {
			let a = e.getBoundingClientRect().width, o = t.getBoundingClientRect().width, s = n.getBoundingClientRect().width, c = i.getBoundingClientRect().width;
			if (a > 0 && Re(a), o > 0 && Be(o), s > 0 && He(s), c > 0 && We(c), r) {
				let e = r.getBoundingClientRect().width;
				e > 0 && Ue(e);
			}
		}, o = new ResizeObserver(() => {
			a();
		});
		return o.observe(e), o.observe(t), o.observe(n), o.observe(i), r && o.observe(r), a(), () => o.disconnect();
	}, [E]);
	let Ke = () => {
		S && x.mutate({ conversationId: S });
	}, qe = () => {
		S && Oe.mutate({ conversationId: S });
	}, Je = De.isPending || x.isPending, V = g.useCallback((e) => {
		let t = e, n = {
			showCodeInline: !1,
			showModelInline: !1
		};
		return E && t >= P && (n.showCodeInline = !0, t -= P + 12), t >= F && (n.showModelInline = !0), n;
	}, [
		E,
		P,
		F
	]), H = N - ze - 8 - Ve - 12, U = V(H), W = (!E || U.showCodeInline) && U.showModelInline ? U : V(H - 28 - 12), G = E ? W.showCodeInline : !1, K = W.showModelInline, Ye = N >= 360, q = E && !G || !K;
	g.useEffect(() => {
		q || (L(!1), z(null));
	}, [q]);
	let J = ie(() => {
		L(!1), z(null);
	}), Y = Ne === r.RUNNING || Le || Me !== "OPEN", X = () => {
		z(null), L(!1);
	}, Z = fe({ isAcp: w.isAcpContext }), Q = i("group", l), $ = i("text-[var(--oh-muted)] group-hover:text-[var(--oh-foreground)]", l);
	g.useLayoutEffect(() => {
		if (!I || !M.current) return;
		let e = M.current, t = () => {
			let t = e.getBoundingClientRect();
			Ge({
				position: "fixed",
				top: t.top - 8,
				left: t.left,
				transform: "translateY(-100%)",
				zIndex: 9999
			});
		};
		return t(), window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
			window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0);
		};
	}, [I]);
	let Xe = /* @__PURE__ */ v(d, {
		ref: J,
		testId: "chat-input-overflow-menu",
		position: "top",
		alignment: "left",
		className: "!static !top-auto !bottom-auto !left-auto !right-auto !mt-0 overflow-visible min-w-[200px]",
		children: [E && !G && /* @__PURE__ */ v("div", {
			className: "relative group/overflow-agent",
			children: [/* @__PURE__ */ _(f, {
				testId: "overflow-agent-button",
				onClick: () => z((e) => e === "agent" ? null : "agent"),
				isDisabled: Y,
				children: /* @__PURE__ */ _(h, {
					icon: /* @__PURE__ */ _(u, { className: "h-[11px] w-[11px]" }),
					text: b(Pe === "code" ? t.COMMON$CODE : t.COMMON$PLAN),
					rightIcon: /* @__PURE__ */ _(m, {
						width: 10,
						height: 10
					})
				})
			}), !Y && /* @__PURE__ */ _("div", {
				className: i("absolute left-full top-[-4px] z-60 opacity-0 invisible pointer-events-none transition-all duration-200 ml-[1px]", "group-hover/overflow-agent:opacity-100 group-hover/overflow-agent:visible group-hover/overflow-agent:pointer-events-auto", "hover:opacity-100 hover:visible hover:pointer-events-auto", R === "agent" && "opacity-100 visible pointer-events-auto"),
				children: /* @__PURE__ */ v(d, {
					testId: "overflow-agent-submenu",
					className: "overflow-visible min-w-[195px]",
					children: [/* @__PURE__ */ _(f, {
						testId: "overflow-agent-code",
						onClick: (e) => {
							e.preventDefault(), e.stopPropagation(), Fe("code"), X();
						},
						children: /* @__PURE__ */ _(h, {
							icon: /* @__PURE__ */ _(u, { className: "h-[11px] w-[11px]" }),
							text: b(t.COMMON$CODE)
						})
					}), /* @__PURE__ */ _(f, {
						testId: "overflow-agent-plan",
						onClick: (e) => {
							Ie(e), X();
						},
						children: /* @__PURE__ */ _(h, {
							icon: /* @__PURE__ */ _(re, {
								width: 16,
								height: 16,
								color: "currentColor"
							}),
							text: b(t.COMMON$PLAN)
						})
					})]
				})
			})]
		}), !K && /* @__PURE__ */ v("div", {
			className: "relative group/overflow-model",
			children: [/* @__PURE__ */ _(f, {
				testId: "overflow-model-button",
				onClick: () => z((e) => e === "model" ? null : "model"),
				children: /* @__PURE__ */ _(h, {
					icon: /* @__PURE__ */ _(n, {
						width: 16,
						height: 16,
						strokeWidth: 2,
						"aria-hidden": !0
					}),
					text: b(t.SETTINGS$AGENT_MODEL),
					rightIcon: /* @__PURE__ */ _(m, {
						width: 10,
						height: 10
					})
				})
			}), /* @__PURE__ */ _("div", {
				className: i("absolute left-full top-[-4px] z-60 opacity-0 invisible pointer-events-none transition-all duration-200 ml-[1px]", "group-hover/overflow-model:opacity-100 group-hover/overflow-model:visible group-hover/overflow-model:pointer-events-auto", "hover:opacity-100 hover:visible hover:pointer-events-auto", R === "model" && "opacity-100 visible pointer-events-auto"),
				children: /* @__PURE__ */ _(d, {
					testId: "overflow-model-submenu",
					className: "min-w-[220px] max-w-[320px] max-h-[60vh] overflow-y-auto gap-0",
					children: Z === "model" ? /* @__PURE__ */ _(le, {
						model: w,
						onClose: X,
						dividerInset: "menu",
						settingsLinkClassName: Q,
						settingsIconClassName: $
					}) : /* @__PURE__ */ _(ue, {
						onClose: X,
						dividerInset: "menu",
						settingsLinkClassName: Q,
						settingsIconClassName: $
					})
				})
			})]
		})]
	});
	return /* @__PURE__ */ v("div", {
		ref: D,
		className: "w-full min-w-0 flex items-center justify-between gap-2",
		children: [/* @__PURE__ */ _("div", {
			className: "flex min-w-0 items-center gap-1",
			children: /* @__PURE__ */ v("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [
					/* @__PURE__ */ _("div", {
						ref: k,
						className: i(!1),
						children: /* @__PURE__ */ _(me, {
							disabled: y,
							handleFileIconClick: Ce,
							showAgentProfileSwitch: je
						})
					}),
					E && /* @__PURE__ */ _("div", {
						ref: A,
						className: i(!G && "hidden"),
						children: /* @__PURE__ */ _(oe, {})
					}),
					/* @__PURE__ */ _("div", {
						ref: j,
						className: i(!K && "hidden"),
						children: _(Z === "model" ? ce : de, {})
					}),
					q && /* @__PURE__ */ v("div", {
						className: "relative shrink-0",
						children: [/* @__PURE__ */ _("button", {
							ref: M,
							type: "button",
							className: i(ee, "size-6"),
							"aria-label": b(t.CHAT_INTERFACE$MORE_INPUT_ACTIONS),
							"aria-expanded": I,
							"aria-haspopup": "menu",
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), L((e) => !e);
							},
							children: /* @__PURE__ */ _(_e, {
								width: 16,
								height: 16,
								color: "currentColor"
							})
						}), I && typeof document < "u" && B && be.createPortal(/* @__PURE__ */ _("div", {
							style: B,
							children: Xe
						}), document.body)]
					})
				]
			})
		}), /* @__PURE__ */ v("div", {
			ref: O,
			className: "ml-auto flex shrink-0 items-center gap-2",
			children: [
				Ye && S && /* @__PURE__ */ _(ne, {
					handleStop: Ke,
					handleResumeAgent: qe,
					disabled: y,
					isPausing: Je
				}),
				/* @__PURE__ */ _(ge, {}),
				we && /* @__PURE__ */ _(he, {
					buttonClassName: Te,
					handleSubmit: Ee,
					disabled: y || !xe
				})
			]
		})]
	});
}
//#endregion
export { y as ChatInputActions };

//# sourceMappingURL=chat-input-actions.js.map