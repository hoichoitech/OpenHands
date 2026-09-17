import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useActiveConversation as r } from "../../../hooks/query/use-active-conversation.js";
import { ContextMenu as i } from "../../../ui/context-menu.js";
import { ContextMenuListItem as a } from "../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as o } from "../../../hooks/use-click-outside-element.js";
import { Divider as s } from "../../../ui/divider.js";
import { useUserProviders as c } from "../../../hooks/use-user-providers.js";
import l from "../../../icons/u-code-branch.js";
import u from "../../../icons/skills.js";
import d from "../../../icons/u-puzzle-piece.js";
import f from "../../../icons/fishing-hook.js";
import p from "../../../icons/u-tools.js";
import m from "../../../icons/u-robot.js";
import h from "../../../icons/settings.js";
import g from "../../../icons/carret-right-fill.js";
import { ToolsContextMenuIconText as _ } from "./tools-context-menu-icon-text.js";
import { GitToolsSubmenu as v } from "./git-tools-submenu.js";
import { MacrosSubmenu as y } from "./macros-submenu.js";
import { ChatInputProfileMenuContent as b } from "../chat/components/chat-input-profile-picker.js";
import { ArchivedDisabledTooltip as x } from "../context-menu/archived-disabled-tooltip.js";
import { useIsArchivedConversation as S } from "../../../hooks/use-is-archived-conversation.js";
import { useState as C } from "react";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
//#region src/components/features/controls/tools-context-menu.tsx
function D({ onClose: D, onShowSkills: O, onShowPlugins: k, onShowHooks: A, onShowAgentTools: j, shouldShowAgentTools: M = !0, shouldShowHooks: N = !1, shouldShowPlugins: P = !1, showAgentProfileSwitch: F = !1, footerAction: I }) {
	let { t: L } = e("openhands"), { data: R } = r(), { providers: z } = c(), B = S(), [V, H] = C(null), U = !!R?.selected_repository, W = z.length > 0, G = U && W, K = (e) => {
		B || H(V === e ? null : e);
	}, q = () => {
		H(null), D();
	};
	return /* @__PURE__ */ E(i, {
		ref: o(q),
		testId: "tools-context-menu",
		position: "top",
		alignment: "left",
		className: "left-[-16px] mb-2 bottom-full overflow-visible min-w-[200px]",
		children: [
			F && /* @__PURE__ */ E("div", {
				className: "relative group/agent-profile",
				children: [/* @__PURE__ */ T(a, {
					testId: "switch-agent-profile-button",
					onClick: () => K("agent-profile"),
					children: /* @__PURE__ */ T(_, {
						icon: /* @__PURE__ */ T(m, {
							width: 16,
							height: 16,
							"aria-hidden": !0
						}),
						text: L(t.CHAT$SWITCH_AGENT_PROFILE),
						rightIcon: /* @__PURE__ */ T(g, {
							width: 10,
							height: 10
						})
					})
				}), /* @__PURE__ */ T("div", {
					className: n("absolute left-full top-[-4px] z-60 opacity-0 invisible pointer-events-none transition-all duration-200 ml-[1px]", "group-hover/agent-profile:opacity-100 group-hover/agent-profile:visible group-hover/agent-profile:pointer-events-auto", "hover:opacity-100 hover:visible hover:pointer-events-auto", V === "agent-profile" && "opacity-100 visible pointer-events-auto"),
					children: /* @__PURE__ */ T(i, {
						testId: "agent-profile-submenu",
						className: "min-w-[220px] max-w-[320px] max-h-[60vh] overflow-y-auto gap-0",
						children: /* @__PURE__ */ T(b, {
							onClose: q,
							dividerInset: "menu"
						})
					})
				})]
			}),
			G && /* @__PURE__ */ E("div", {
				className: "relative group/git",
				children: [/* @__PURE__ */ T(x, {
					isDisabled: B,
					children: /* @__PURE__ */ T(a, {
						testId: "git-tools-button",
						onClick: () => K("git"),
						isDisabled: B,
						children: /* @__PURE__ */ T(_, {
							icon: /* @__PURE__ */ T(l, {
								width: 16,
								height: 16
							}),
							text: L(t.COMMON$GIT_TOOLS),
							rightIcon: /* @__PURE__ */ T(g, {
								width: 10,
								height: 10
							})
						})
					})
				}), !B && /* @__PURE__ */ T("div", {
					className: n("absolute left-full top-[-6px] z-60 opacity-0 invisible pointer-events-none transition-all duration-200 ml-[1px]", "group-hover/git:opacity-100 group-hover/git:visible group-hover/git:pointer-events-auto", "hover:opacity-100 hover:visible hover:pointer-events-auto", V === "git" && "opacity-100 visible pointer-events-auto"),
					children: /* @__PURE__ */ T(v, { onClose: q })
				})]
			}),
			/* @__PURE__ */ E("div", {
				className: "relative group/macros",
				children: [/* @__PURE__ */ T(x, {
					isDisabled: B,
					children: /* @__PURE__ */ T(a, {
						testId: "macros-button",
						onClick: () => K("macros"),
						isDisabled: B,
						children: /* @__PURE__ */ T(_, {
							icon: /* @__PURE__ */ T(h, {
								width: 16,
								height: 16
							}),
							text: L(t.COMMON$MACROS),
							rightIcon: /* @__PURE__ */ T(g, {
								width: 10,
								height: 10
							})
						})
					})
				}), !B && /* @__PURE__ */ T("div", {
					className: n("absolute left-full top-[-4px] z-60 opacity-0 invisible pointer-events-none transition-all duration-200 ml-[1px]", "group-hover/macros:opacity-100 group-hover/macros:visible group-hover/macros:pointer-events-auto", "hover:opacity-100 hover:visible hover:pointer-events-auto", V === "macros" && "opacity-100 visible pointer-events-auto"),
					children: /* @__PURE__ */ T(y, { onClose: q })
				})]
			}),
			M && /* @__PURE__ */ T(s, { inset: "menu" }),
			/* @__PURE__ */ T(x, {
				isDisabled: B,
				children: /* @__PURE__ */ T(a, {
					testId: "show-skills-button",
					onClick: O,
					isDisabled: B,
					children: /* @__PURE__ */ T(_, {
						icon: /* @__PURE__ */ T(u, {
							width: 16,
							height: 16,
							className: "stroke-[1.75]",
							"aria-hidden": !0
						}),
						text: L(t.CONVERSATION$SHOW_SKILLS)
					})
				})
			}),
			P && /* @__PURE__ */ T(x, {
				isDisabled: B,
				children: /* @__PURE__ */ T(a, {
					testId: "show-plugins-button",
					onClick: k,
					isDisabled: B,
					children: /* @__PURE__ */ T(_, {
						icon: /* @__PURE__ */ T(d, {
							width: 16,
							height: 16,
							"aria-hidden": !0
						}),
						text: L(t.CONVERSATION$SHOW_PLUGINS)
					})
				})
			}),
			N && /* @__PURE__ */ T(x, {
				isDisabled: B,
				children: /* @__PURE__ */ T(a, {
					testId: "show-hooks-button",
					onClick: A,
					isDisabled: B,
					children: /* @__PURE__ */ T(_, {
						icon: /* @__PURE__ */ T(f, {
							width: 16,
							height: 16,
							"aria-hidden": !0
						}),
						text: L(t.CONVERSATION$SHOW_HOOKS)
					})
				})
			}),
			M && /* @__PURE__ */ T(x, {
				isDisabled: B,
				children: /* @__PURE__ */ T(a, {
					testId: "show-agent-tools-button",
					onClick: j,
					isDisabled: B,
					children: /* @__PURE__ */ T(_, {
						icon: /* @__PURE__ */ T(p, {
							width: 16,
							height: 16
						}),
						text: L(t.BUTTON$SHOW_AGENT_TOOLS_AND_METADATA)
					})
				})
			}),
			I && /* @__PURE__ */ E(w, { children: [/* @__PURE__ */ T(s, {}), /* @__PURE__ */ T(a, {
				testId: I.testId,
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), I.onClick(), q();
				},
				children: /* @__PURE__ */ T(_, {
					icon: I.icon,
					text: I.label
				})
			})] })
		]
	});
}
//#endregion
export { D as ToolsContextMenu };

//# sourceMappingURL=tools-context-menu.js.map