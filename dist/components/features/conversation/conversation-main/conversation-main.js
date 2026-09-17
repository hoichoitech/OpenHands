import { cn as e } from "../../../../utils/utils.js";
import { useConversationStore as t } from "../../../../stores/conversation-store.js";
import { useConversationOverviewDrawerOptional as n } from "../conversation-overview-drawer-context.js";
import { useBreakpoint as r } from "../../../../hooks/use-breakpoint.js";
import { ChatInterfaceWrapper as i } from "./chat-interface-wrapper.js";
import { ConversationTabContent as a } from "../conversation-tabs/conversation-tab-content/conversation-tab-content.js";
import { ConversationNameWithStatus as o } from "../conversation-name-with-status.js";
import { ConversationTabs as s } from "../conversation-tabs/conversation-tabs.js";
import { ResizeHandle as c } from "../../../ui/resize-handle.js";
import { useResizablePanels as l } from "../../../../hooks/use-resizable-panels.js";
import { SidebarMobileMenuToggle as u } from "../../sidebar/sidebar-mobile-menu-toggle.js";
import { ConversationOverviewDrawer as d } from "../conversation-overview-drawer.js";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-main/conversation-main.tsx
function m(e) {
	return e ? "translate-x-0 opacity-100" : "w-0 translate-x-full opacity-0";
}
function h() {
	let h = r(), g = r(767), { isRightPanelShown: _ } = t(), v = !!n()?.section, { leftWidth: y, rightWidth: b, isDragging: x, containerRef: S, handleMouseDown: C } = l({
		defaultLeftWidth: 50,
		minLeftWidth: 30,
		maxLeftWidth: 80,
		storageKey: "desktop-layout-panel-width"
	});
	return /* @__PURE__ */ f("div", {
		className: e(h ? "relative min-h-0 flex-1 flex flex-col" : "h-full flex flex-col overflow-hidden"),
		children: /* @__PURE__ */ p("div", {
			ref: S,
			className: e("flex flex-1 overflow-hidden", h ? "flex-col" : "transition-all duration-300 ease-in-out"),
			style: h ? void 0 : { transitionProperty: x ? "none" : "all" },
			children: [
				/* @__PURE__ */ p("div", {
					className: e("flex flex-col bg-base overflow-hidden", h ? "flex-1" : e("min-w-0", !v && "transition-[width] duration-300 ease-in-out")),
					style: h ? void 0 : {
						width: _ ? `${y}%` : "100%",
						transitionProperty: x || v ? "none" : "width"
					},
					children: [/* @__PURE__ */ p("div", {
						"data-testid": "chat-pane-header",
						className: e("flex h-10 min-h-10 shrink-0 items-center", g && "gap-2 pl-2.5"),
						children: [g ? /* @__PURE__ */ f(u, {}) : null, /* @__PURE__ */ f("div", {
							className: "min-w-0 flex-1",
							children: /* @__PURE__ */ f(o, {})
						})]
					}), /* @__PURE__ */ f("div", {
						className: "flex-1 min-h-0 flex flex-col",
						children: /* @__PURE__ */ f(i, { isRightPanelShown: !h && _ })
					})]
				}),
				!h && _ && /* @__PURE__ */ f(c, {
					onMouseDown: C,
					isDragging: x
				}),
				!h && /* @__PURE__ */ f("div", {
					className: e("transition-all duration-300 ease-in-out overflow-hidden", m(_)),
					style: {
						width: _ ? `${b}%` : "0%",
						transitionProperty: x ? "opacity, transform" : "all"
					},
					children: /* @__PURE__ */ f("div", {
						className: "flex h-full w-full flex-col",
						children: /* @__PURE__ */ p("div", {
							className: "flex flex-col flex-1 min-h-0 bg-[var(--oh-surface)] border-l border-[var(--oh-border)] overflow-hidden",
							children: [/* @__PURE__ */ f("div", {
								"data-testid": "tabs-pane-header",
								className: "flex shrink-0 flex-col border-b border-[var(--oh-border)]",
								children: /* @__PURE__ */ f(s, { isPanelResizing: x })
							}), /* @__PURE__ */ f("div", {
								className: "flex-1 min-h-0 flex flex-col",
								children: /* @__PURE__ */ f(a, {})
							})]
						})
					})
				}),
				/* @__PURE__ */ f(d, {
					isMobile: h,
					resizeContainerRef: S
				})
			]
		})
	});
}
//#endregion
export { h as ConversationMain };

//# sourceMappingURL=conversation-main.js.map