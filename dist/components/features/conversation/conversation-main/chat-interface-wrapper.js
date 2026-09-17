import { useConversationStore as e } from "../../../../stores/conversation-store.js";
import { AnimatePresence as t } from "../../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as n } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as r } from "../../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { ChatInterface as i } from "../../chat/chat-interface.js";
import { ConversationOverviewPanel as a } from "../conversation-overview-panel.js";
import { useBreakpoint as o } from "../../../../hooks/use-breakpoint.js";
import { CONVERSATION_OVERVIEW_PANEL_TRANSITION as s } from "../conversation-overview-panel.constants.js";
import { useConversationOverviewColumnSpace as c } from "../../../../hooks/use-conversation-overview-column-space.js";
import { useRef as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-main/chat-interface-wrapper.tsx
var f = "w-full min-w-0 max-w-[800px] h-full flex flex-col min-h-0";
function p({ isRightPanelShown: p }) {
	let m = o(), h = !r() && !0, g = e((e) => e.isOverviewPanelShown), _ = l(null), v = !m && g, y = c(_, v);
	return /* @__PURE__ */ d("div", {
		ref: _,
		className: "flex h-full min-h-0 w-full overflow-hidden",
		children: [/* @__PURE__ */ u("div", {
			className: "flex min-h-0 min-w-0 flex-1 justify-center overflow-hidden",
			children: /* @__PURE__ */ u("div", {
				className: f,
				children: /* @__PURE__ */ u(i, {})
			})
		}), /* @__PURE__ */ u(t, { children: v && y ? /* @__PURE__ */ u(n.div, {
			"data-testid": "conversation-overview-column",
			initial: h ? {
				width: 0,
				opacity: 0
			} : !1,
			animate: {
				width: 268,
				opacity: 1
			},
			exit: h ? {
				width: 0,
				opacity: 0
			} : { opacity: 0 },
			transition: s,
			className: "flex shrink-0 flex-col items-start overflow-hidden pt-4 pl-3 pr-4",
			children: /* @__PURE__ */ u("div", {
				className: "w-full shrink-0",
				style: { width: 268 },
				children: /* @__PURE__ */ u(a, {})
			})
		}, "conversation-overview-column") : null })]
	});
}
//#endregion
export { p as ChatInterfaceWrapper };

//# sourceMappingURL=chat-interface-wrapper.js.map