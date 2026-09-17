import { cn as e } from "../../../utils/utils.js";
import { useConversationOverviewDrawerOptional as t } from "./conversation-overview-drawer-context.js";
import { ResizeHandle as n } from "../../ui/resize-handle.js";
import { useResizableDrawerWidth as r } from "../../../hooks/use-resizable-drawer-width.js";
import { ConversationOverviewDrawerContent as i } from "./conversation-overview-drawer-content.js";
import { CONVERSATION_OVERVIEW_DRAWER_RESIZE_HANDLE_TEST_ID as a, CONVERSATION_OVERVIEW_DRAWER_TEST_ID as o, CONVERSATION_OVERVIEW_DRAWER_WIDTH_STORAGE_KEY as s } from "./conversation-overview-drawer.constants.js";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-drawer.tsx
function d(e) {
	return e ? "translate-x-0 opacity-100" : "w-0 translate-x-full opacity-0";
}
function f({ isMobile: f, resizeContainerRef: p }) {
	let m = t(), h = !!m?.section, { drawerWidth: g, isDragging: _, handleMouseDown: v } = r({
		containerRef: p ?? { current: null },
		defaultWidth: 420,
		minWidth: 300,
		maxWidth: 640,
		storageKey: s,
		enabled: h && !f && p != null
	});
	return m ? f ? h ? /* @__PURE__ */ l(i, { className: "max-h-[min(50vh,420px)] w-full border-t border-[var(--oh-border)]" }) : null : /* @__PURE__ */ u(c, { children: [h && p ? /* @__PURE__ */ l("div", {
		"data-testid": a,
		children: /* @__PURE__ */ l(n, {
			onMouseDown: v,
			isDragging: _
		})
	}) : null, /* @__PURE__ */ l("div", {
		"data-testid": o,
		"aria-hidden": !h,
		className: e("shrink-0 overflow-hidden ease-in-out", _ ? "transition-[transform,opacity] duration-300" : "transition-all duration-300", d(h)),
		style: {
			width: h ? `${g}px` : "0px",
			transitionProperty: _ ? "transform, opacity" : "width, transform, opacity"
		},
		children: /* @__PURE__ */ l("div", {
			className: "flex h-full flex-col overflow-hidden border-l border-[var(--oh-border)] bg-base-secondary",
			style: { width: `${g}px` },
			children: h ? /* @__PURE__ */ l(i, { className: "h-full" }) : null
		})
	})] }) : null;
}
//#endregion
export { f as ConversationOverviewDrawer };

//# sourceMappingURL=conversation-overview-drawer.js.map