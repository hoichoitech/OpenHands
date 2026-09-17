import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ExternalLink as n } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { Gauge as r } from "../../../node_modules/lucide-react/dist/esm/icons/gauge.js";
import { Share2 as i } from "../../../node_modules/lucide-react/dist/esm/icons/share-2.js";
import { cn as a } from "../../../utils/utils.js";
import { useActiveBackend as ee } from "../../../contexts/active-backend-context.js";
import { useActiveConversation as o } from "../../../hooks/query/use-active-conversation.js";
import s from "../../../icons/copy.js";
import c from "../../../icons/u-close.js";
import { ContextMenu as l } from "../../../ui/context-menu.js";
import { ContextMenuListItem as u } from "../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as d } from "../../../hooks/use-click-outside-element.js";
import { Divider as f } from "../../../ui/divider.js";
import p from "../../../icons/skills.js";
import m from "../../../icons/fishing-hook.js";
import te from "../../../icons/u-tools.js";
import { ArchivedDisabledTooltip as h } from "../context-menu/archived-disabled-tooltip.js";
import { useIsArchivedConversation as ne } from "../../../hooks/use-is-archived-conversation.js";
import { ConversationNameContextMenuIconText as g } from "./conversation-name-context-menu-icon-text.js";
import { useBreakpoint as _ } from "../../../hooks/use-breakpoint.js";
import v from "../../../icons/u-edit.js";
import y from "../../../icons/u-download.js";
import b from "../../../icons/u-delete.js";
import x from "react";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
import w from "react-dom";
//#region src/components/features/conversation/conversation-name-context-menu.tsx
function T({ isPublic: e, onToggle: t, ariaLabel: n }) {
	return /* @__PURE__ */ C("label", {
		className: "relative inline-flex shrink-0 cursor-pointer items-center",
		children: [/* @__PURE__ */ S("input", {
			hidden: !0,
			type: "checkbox",
			"data-testid": "share-publicly-button",
			checked: e,
			"aria-label": n,
			onChange: (e) => t(e.target.checked)
		}), /* @__PURE__ */ S("span", {
			"aria-hidden": !0,
			className: a("inline-flex h-3.5 w-7 items-center rounded-full px-0.5 py-px transition-colors duration-200 ease-in-out", e ? "bg-white" : "bg-base-secondary"),
			children: /* @__PURE__ */ S("span", { className: a("block h-2 w-2 shrink-0 rounded-full transition-transform duration-200 ease-in-out", e ? "translate-x-[calc(1rem-1px)] bg-base-secondary" : "translate-x-px bg-tertiary-light") })
		})]
	});
}
function E({ onClose: E, onRename: D, onDelete: O, onStop: k, onDisplayCost: A, onShowAgentTools: j, onShowSkills: M, onShowHooks: N, onTogglePublic: P, onCopyShareLink: F, onExportTranscript: I, onDownloadConversation: L, shareUrl: R, position: z = "bottom", anchorRef: B }) {
	let V = _(), { t: H } = e("openhands"), { backend: U } = ee(), { data: W } = o(), G = ne(), K = d(E, B), q = B?.current ?? null, [J, Y] = x.useState();
	x.useLayoutEffect(() => {
		if (!q) return;
		let e = () => {
			let e = q.getBoundingClientRect();
			if (!e) return;
			let t = {
				position: "fixed",
				zIndex: 9999
			};
			z === "top" ? t.bottom = window.innerHeight - e.top + 8 : t.top = e.bottom + 8, t.left = e.left, Y(t);
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [q, z]);
	let X = !!(j || M || N), re = !!A, ie = !!(k || O), ae = U.kind === "cloud" ? t.COMMON$CLOSE_CONVERSATION_STOP_RUNTIME : t.COMMON$STOP_CONVERSATION, oe = U.kind === "cloud" && !!P, Z = W?.public || !1, Q = !!q, $ = /* @__PURE__ */ C(l, {
		ref: K,
		testId: "conversation-name-context-menu",
		position: z,
		alignment: "left",
		className: a(V ? "right-0 translate-x-[34%] left-auto" : "", Q ? "!static !top-auto !bottom-auto !left-auto !right-auto !mt-0" : ""),
		children: [
			D && /* @__PURE__ */ S(u, {
				testId: "rename-button",
				onClick: D,
				children: /* @__PURE__ */ S(g, {
					icon: /* @__PURE__ */ S(v, {
						width: 16,
						height: 16
					}),
					text: H(t.BUTTON$RENAME)
				})
			}),
			X && /* @__PURE__ */ S(f, {
				testId: "separator-tools",
				inset: "menu"
			}),
			M && /* @__PURE__ */ S(h, {
				isDisabled: G,
				children: /* @__PURE__ */ S(u, {
					testId: "show-skills-button",
					onClick: M,
					isDisabled: G,
					children: /* @__PURE__ */ S(g, {
						icon: /* @__PURE__ */ S(p, {
							width: 16,
							height: 16,
							className: "stroke-[1.75]",
							"aria-hidden": !0
						}),
						text: H(t.CONVERSATION$SHOW_SKILLS)
					})
				})
			}),
			N && /* @__PURE__ */ S(h, {
				isDisabled: G,
				children: /* @__PURE__ */ S(u, {
					testId: "show-hooks-button",
					onClick: N,
					isDisabled: G,
					children: /* @__PURE__ */ S(g, {
						icon: /* @__PURE__ */ S(m, {
							width: 16,
							height: 16,
							"aria-hidden": !0
						}),
						text: H(t.CONVERSATION$SHOW_HOOKS)
					})
				})
			}),
			j && /* @__PURE__ */ S(h, {
				isDisabled: G,
				children: /* @__PURE__ */ S(u, {
					testId: "show-agent-tools-button",
					onClick: j,
					isDisabled: G,
					children: /* @__PURE__ */ S(g, {
						icon: /* @__PURE__ */ S(te, {
							width: 16,
							height: 16
						}),
						text: H(t.BUTTON$SHOW_AGENT_TOOLS_AND_METADATA)
					})
				})
			}),
			I && /* @__PURE__ */ S(u, {
				testId: "export-transcript-button",
				onClick: I,
				children: /* @__PURE__ */ S(g, {
					icon: /* @__PURE__ */ S(y, {
						width: 16,
						height: 16
					}),
					text: H(t.BUTTON$EXPORT_TRANSCRIPT)
				})
			}),
			L && /* @__PURE__ */ S(u, {
				testId: "download-trajectory-button",
				onClick: L,
				children: /* @__PURE__ */ S(g, {
					icon: /* @__PURE__ */ S(y, {
						width: 16,
						height: 16
					}),
					text: H(t.BUTTON$DOWNLOAD_CONVERSATION_DATA)
				})
			}),
			(re || ie) && /* @__PURE__ */ S(f, {
				testId: "separator-info-control",
				inset: "menu"
			}),
			A && /* @__PURE__ */ S(u, {
				testId: "display-cost-button",
				onClick: A,
				children: /* @__PURE__ */ S(g, {
					icon: /* @__PURE__ */ S(r, { size: 16 }),
					text: H(t.BUTTON$DISPLAY_COST)
				})
			}),
			oe && P && /* @__PURE__ */ C("li", {
				className: "flex w-full items-center gap-2 rounded px-2 py-2 hover:bg-[var(--oh-interactive-hover)]",
				children: [
					/* @__PURE__ */ S("span", {
						className: "flex shrink-0 items-center text-[var(--oh-muted)]",
						"aria-hidden": !0,
						children: /* @__PURE__ */ S(i, { size: 16 })
					}),
					/* @__PURE__ */ S("span", {
						className: "min-w-0 flex-1 truncate text-sm",
						children: H(t.CONVERSATION$SHARE_PUBLICLY)
					}),
					/* @__PURE__ */ C("div", {
						className: "flex shrink-0 items-center",
						children: [Z && R && F && /* @__PURE__ */ C("div", {
							className: "mr-2 flex items-center gap-0.5",
							children: [/* @__PURE__ */ S("button", {
								type: "button",
								"data-testid": "copy-share-link-button",
								onClick: F,
								className: "rounded p-0.5 text-[var(--oh-muted)] hover:bg-[var(--oh-interactive-selected)] hover:text-[var(--oh-foreground)] cursor-pointer [&_svg]:text-current",
								title: H(t.BUTTON$COPY_TO_CLIPBOARD),
								children: /* @__PURE__ */ S(s, {
									width: 14,
									height: 14
								})
							}), /* @__PURE__ */ S("a", {
								"data-testid": "open-share-link-button",
								href: R,
								target: "_blank",
								rel: "noopener noreferrer",
								onClick: (e) => e.stopPropagation(),
								className: "rounded p-0.5 text-[var(--oh-muted)] no-underline visited:text-[var(--oh-muted)] hover:bg-[var(--oh-interactive-selected)] hover:text-[var(--oh-foreground)] cursor-pointer [&_svg]:text-current",
								title: H(t.BUTTON$OPEN_IN_NEW_TAB),
								children: /* @__PURE__ */ S(n, {
									size: 14,
									"aria-hidden": !0
								})
							})]
						}), /* @__PURE__ */ S(T, {
							isPublic: Z,
							onToggle: P,
							ariaLabel: H(t.CONVERSATION$SHARE_PUBLICLY)
						})]
					})
				]
			}),
			k && /* @__PURE__ */ S(h, {
				isDisabled: G,
				children: /* @__PURE__ */ S(u, {
					testId: "stop-button",
					onClick: k,
					isDisabled: G,
					children: /* @__PURE__ */ S(g, {
						icon: /* @__PURE__ */ S(c, {
							width: 16,
							height: 16
						}),
						text: H(ae)
					})
				})
			}),
			O && /* @__PURE__ */ S(u, {
				testId: "delete-button",
				onClick: O,
				children: /* @__PURE__ */ S(g, {
					icon: /* @__PURE__ */ S(b, {
						width: 16,
						height: 16
					}),
					text: H(t.COMMON$DELETE_CONVERSATION)
				})
			})
		]
	});
	return Q ? typeof document > "u" || !J ? null : w.createPortal(/* @__PURE__ */ S("div", {
		style: J,
		children: $
	}), document.body) : $;
}
//#endregion
export { E as ConversationNameContextMenu };

//# sourceMappingURL=conversation-name-context-menu.js.map