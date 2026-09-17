import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ChevronLeft as n } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-left.js";
import { ChevronRight as r } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { PanelsTopLeft as i } from "../../../node_modules/lucide-react/dist/esm/icons/panels-top-left.js";
import { Plus as a } from "../../../node_modules/lucide-react/dist/esm/icons/plus.js";
import { Server as o } from "../../../node_modules/lucide-react/dist/esm/icons/server.js";
import { Settings as s } from "../../../node_modules/lucide-react/dist/esm/icons/settings.js";
import { cn as c } from "../../../utils/utils.js";
import { getLockedCloudHost as l } from "../../../api/agent-server-config.js";
import { automationListPath as u, getInterfaceCopy as d, hasAutomationInterface as f } from "../../../manifests/automation-interface.js";
import { StyledTooltip as p } from "../../shared/buttons/styled-tooltip.js";
import { NavigationLink as m } from "../../shared/navigation-link.js";
import { SIDEBAR_COLLAPSED_LOGO_WRAPPER_CLASS as ee, SIDEBAR_COLLAPSE_TOGGLE_OVERLAY_CLASS as te, SIDEBAR_ICON_BUTTON_CLASS as h, SIDEBAR_ICON_SLOT_CLASS as ne, sidebarHeaderRowClassName as g, sidebarNavLabelClassName as _, sidebarNavListClassName as v, sidebarNavRowClassName as y } from "./sidebar-layout.js";
import { SidebarCollapsedIconSlot as b } from "./sidebar-collapsed-icon-slot.js";
import { SidebarNavLink as x } from "./sidebar-nav-link.js";
import { OpenHandsLogoButton as S } from "../../shared/buttons/openhands-logo-button.js";
import { CUSTOMIZE_PATH as C, usePinnedHomeRoute as w } from "../../../hooks/use-pinned-home-route.js";
import { BackendStatusDot as T } from "../backends/backend-status-dot.js";
import { BackendSelector as E } from "../backends/backend-selector.js";
import { CommandMenuTrigger as re } from "../command-menu/command-menu-trigger.js";
import { AgentCanvasVersionTile as ie } from "../settings/agent-canvas-version-tile.js";
import ae from "../../../icons/automations.js";
import { SidebarConversationList as oe } from "./sidebar-conversation-list.js";
import { SidebarOnboardingChecklist as se } from "./sidebar-onboarding-checklist.js";
import { useCanvasExtensionsRuntime as D } from "../canvas-extensions/canvas-extensions-runtime.js";
import "react";
import { Fragment as O, jsx as k, jsxs as A } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-rail-body.tsx
var j = 18, M = 34, N = Math.round(M * 30 / 46);
function P({ collapsed: P, showCollapseToggle: F, showMobileCloseButton: I = !1, onCloseMobile: L, collapseToggleLabel: R, onCollapse: z, onExpand: B, showCollapsedExpandButton: V, isExtensionsActive: ce, currentPath: H, activeBackend: U, activeOrgId: W, activeBackendHealth: G, collapsedBackendPopoverOpen: K, setCollapsedBackendPopoverOpen: q, collapsedBackendPopoverRef: le, collapsedBackendCloseTimer: ue, onOpenAddBackend: de, onOpenManageBackends: fe }) {
	let { t: J } = e("openhands"), { pages: pe } = D(), Y = ue, { isPinnedRoute: me, togglePinnedRoute: he } = w(), X = (e, n) => {
		let r = me(e);
		return {
			pinned: r,
			onToggle: () => he(e),
			label: J(r ? t.SIDEBAR$UNPIN_AS_HOME : t.SIDEBAR$PIN_AS_HOME),
			testId: n
		};
	}, Z = U.kind === "cloud", ge = W ? `?org=${encodeURIComponent(W)}` : "", Q = Z ? `${U.host.replace(/\/+$/, "")}/settings${ge}` : null, $ = l() !== null;
	return /* @__PURE__ */ A("div", {
		className: "flex min-h-0 flex-1 flex-col",
		children: [
			/* @__PURE__ */ A("div", {
				className: g(P),
				children: [
					/* @__PURE__ */ A("div", {
						className: c(P && F ? ee : "flex min-w-0 shrink-0 items-center"),
						children: [/* @__PURE__ */ k("div", {
							className: c(P && F && "flex h-full w-full items-center justify-start pl-2.5 transition-opacity duration-150", P && V && "opacity-0"),
							children: /* @__PURE__ */ k(S, {
								logoWidth: M,
								logoHeight: N,
								logoClassName: "max-w-none",
								className: c(ne, "overflow-visible")
							})
						}), P && F ? /* @__PURE__ */ k("button", {
							type: "button",
							"data-testid": "sidebar-collapse-toggle",
							"aria-pressed": P,
							"aria-label": R,
							onClick: B,
							className: c(te, V ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"),
							children: /* @__PURE__ */ k(r, {
								width: 14,
								height: 14
							})
						}) : null]
					}),
					!P && F ? /* @__PURE__ */ k("button", {
						type: "button",
						"data-testid": "sidebar-collapse-toggle",
						"aria-pressed": P,
						"aria-label": R,
						onClick: z,
						className: c("hidden md:inline-flex ml-auto", h, "text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)]"),
						children: /* @__PURE__ */ k(n, {
							width: 14,
							height: 14
						})
					}) : null,
					!P && I ? /* @__PURE__ */ k("button", {
						type: "button",
						"data-testid": "sidebar-mobile-drawer-close",
						onClick: L,
						"aria-label": J(t.SIDEBAR$CLOSE_MENU),
						className: c("inline-flex ml-auto", h, "text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)]"),
						children: /* @__PURE__ */ k(n, {
							width: 14,
							height: 14
						})
					}) : null
				]
			}),
			/* @__PURE__ */ A("nav", {
				className: v(P),
				children: [
					/* @__PURE__ */ k(re, { collapsed: P }),
					/* @__PURE__ */ k(x, {
						to: "/conversations",
						end: !0,
						label: J(t.SIDEBAR$NEW_CHAT),
						testId: "sidebar-conversations-link",
						collapsed: P,
						icon: /* @__PURE__ */ k(a, {
							width: j,
							height: j
						})
					}),
					/* @__PURE__ */ k(x, {
						to: C,
						label: J(t.NAV$CUSTOMIZE),
						testId: "sidebar-skills-link",
						collapsed: P,
						forceActive: ce,
						pinAction: X(C, "sidebar-pin-home-toggle-customize"),
						icon: /* @__PURE__ */ A("svg", {
							xmlns: "http://www.w3.org/2000/svg",
							width: j,
							height: j,
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							strokeLinecap: "round",
							strokeLinejoin: "round",
							"aria-hidden": "true",
							children: [
								/* @__PURE__ */ k("path", { d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" }),
								/* @__PURE__ */ k("path", { d: "m7 16.5-4.74-2.85" }),
								/* @__PURE__ */ k("path", { d: "m7 16.5 5-3" }),
								/* @__PURE__ */ k("path", { d: "M7 16.5v5.17" }),
								/* @__PURE__ */ k("path", { d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z" }),
								/* @__PURE__ */ k("path", { d: "m17 16.5-5-3" }),
								/* @__PURE__ */ k("path", { d: "m17 16.5 4.74-2.85" }),
								/* @__PURE__ */ k("path", { d: "m17 16.5v5.17" }),
								/* @__PURE__ */ k("path", { d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z" }),
								/* @__PURE__ */ k("path", { d: "M12 8 7.26 5.15" }),
								/* @__PURE__ */ k("path", { d: "m12 8 4.74-2.85" }),
								/* @__PURE__ */ k("path", { d: "M12 13.5V8" })
							]
						})
					}),
					f() && /* @__PURE__ */ k(x, {
						to: u(),
						label: d().sidebarLabel,
						testId: "sidebar-automations-link",
						collapsed: P,
						icon: /* @__PURE__ */ k(ae, {
							width: j,
							height: j
						}),
						pinAction: X(u(), "sidebar-pin-home-toggle-automations")
					}),
					pe.map((e) => /* @__PURE__ */ k(x, {
						to: e.href,
						label: e.contribution.nav_label || e.contribution.title,
						testId: `sidebar-canvas-extension-${e.extension.name}-${e.contribution.id}`,
						collapsed: P,
						icon: /* @__PURE__ */ k(i, {
							width: j,
							height: j
						})
					}, `${e.extension.name}:${e.contribution.id}`))
				]
			}),
			/* @__PURE__ */ k(oe, { collapsed: P }),
			P && F ? /* @__PURE__ */ A("nav", {
				className: c(v(P), "mt-auto pb-2 cursor-pointer"),
				children: [/* @__PURE__ */ k(p, {
					content: J(t.SIDEBAR$SETTINGS),
					placement: "right",
					children: Z && Q ? /* @__PURE__ */ A("a", {
						href: Q,
						target: $ ? void 0 : "_blank",
						rel: $ ? void 0 : "noopener noreferrer",
						"data-testid": "collapsed-settings-link",
						"aria-label": J(t.SIDEBAR$SETTINGS),
						className: y({ collapsed: !0 }),
						children: [/* @__PURE__ */ k(b, {
							active: !1,
							children: /* @__PURE__ */ k(s, {
								width: j,
								height: j
							})
						}), /* @__PURE__ */ k("span", {
							className: _(!0),
							children: J(t.SIDEBAR$SETTINGS)
						})]
					}) : /* @__PURE__ */ A(m, {
						to: "/settings",
						"data-testid": "collapsed-settings-link",
						"aria-label": J(t.SIDEBAR$SETTINGS),
						className: y({ collapsed: !0 }),
						children: [/* @__PURE__ */ k(b, {
							active: H.startsWith("/settings"),
							children: /* @__PURE__ */ k(s, {
								width: j,
								height: j
							})
						}), /* @__PURE__ */ k("span", {
							className: _(!0),
							children: J(t.SIDEBAR$SETTINGS)
						})]
					})
				}), /* @__PURE__ */ A("div", {
					className: "relative",
					ref: le,
					onMouseEnter: () => {
						Y.current &&= (clearTimeout(Y.current), null), q(!0);
					},
					onMouseLeave: () => {
						Y.current = setTimeout(() => q(!1), 150);
					},
					children: [/* @__PURE__ */ A("button", {
						type: "button",
						"data-testid": "collapsed-backend-selector-link",
						"aria-label": J(t.BACKEND$MANAGE),
						"aria-expanded": K,
						onMouseDown: (e) => {
							e.preventDefault(), e.stopPropagation();
						},
						onMouseUp: (e) => e.stopPropagation(),
						className: c(y({ collapsed: !0 }), "relative"),
						children: [/* @__PURE__ */ k(b, {
							active: K,
							children: /* @__PURE__ */ A("span", {
								className: "relative inline-flex size-[18px] shrink-0 items-center justify-center",
								children: [/* @__PURE__ */ k(T, {
									isConnected: G?.isConnected ?? null,
									className: "absolute -left-0.5 -top-0.5 z-[1] pointer-events-none"
								}), /* @__PURE__ */ k(o, {
									width: j,
									height: j
								})]
							})
						}), /* @__PURE__ */ k("span", {
							className: _(!0),
							children: J(t.BACKEND$MANAGE)
						})]
					}), K ? /* @__PURE__ */ k("div", {
						className: "absolute bottom-[-4px] left-full pl-2.5 z-40 w-[272px]",
						onClick: (e) => e.stopPropagation(),
						children: /* @__PURE__ */ k(E, {
							sidebarCollapsed: P,
							hideTrigger: !0,
							defaultOpen: !0,
							openUpward: !0,
							onSelectOption: () => q(!1),
							onOpenAddBackend: de,
							onOpenManageBackends: fe
						})
					}) : null]
				})]
			}) : null,
			P ? null : /* @__PURE__ */ A(O, { children: [/* @__PURE__ */ k("div", {
				className: "mb-2 shrink-0 pr-2.5",
				children: /* @__PURE__ */ k(se, { collapsed: P })
			}), /* @__PURE__ */ A("div", {
				className: c("flex flex-col items-stretch max-w-none box-border shrink-0 gap-2", "-ml-2.5 w-[calc(100%+0.625rem)] border-t border-[var(--oh-border)] pt-2 px-2.5"),
				children: [/* @__PURE__ */ k(ie, { hideWhenUpToDate: !0 }), /* @__PURE__ */ k(E, {
					sidebarCollapsed: P,
					openUpward: !0
				})]
			})] })
		]
	});
}
//#endregion
export { P as SidebarRailBody };

//# sourceMappingURL=sidebar-rail-body.js.map