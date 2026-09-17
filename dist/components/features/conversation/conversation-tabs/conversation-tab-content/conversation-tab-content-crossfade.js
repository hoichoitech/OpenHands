import { AnimatePresence as e } from "../../../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as t } from "../../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { ConversationLoading as r } from "../../conversation-loading.js";
import { TabReadyNotifier as i } from "./tab-ready-notifier.js";
import { SuspensePendingFallback as a } from "./suspense-pending-fallback.js";
import { Suspense as o, useCallback as s, useLayoutEffect as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-tabs/conversation-tab-content/conversation-tab-content-crossfade.tsx
var f = {
	duration: .35,
	ease: "easeInOut"
};
function p({ showAgentLoading: p, tabKey: m, children: h }) {
	let g = n(), [_, v] = l(!1);
	c(() => {
		v(!1);
	}, [m]);
	let y = s(() => {
		v(!0);
	}, []), b = s(() => {
		v(!1);
	}, []), x = p || _;
	return g ? /* @__PURE__ */ u("div", {
		className: "relative h-full w-full overflow-hidden",
		children: x ? /* @__PURE__ */ u(r, {}) : /* @__PURE__ */ u(o, {
			fallback: /* @__PURE__ */ u(a, { onPending: y }),
			children: /* @__PURE__ */ u(i, {
				onReady: b,
				children: h
			})
		})
	}) : /* @__PURE__ */ d("div", {
		className: "relative h-full w-full overflow-hidden",
		children: [/* @__PURE__ */ u(t.div, {
			className: "absolute inset-0 h-full w-full",
			initial: !1,
			animate: { opacity: +!x },
			transition: f,
			"aria-hidden": x,
			children: /* @__PURE__ */ u(o, {
				fallback: /* @__PURE__ */ u(a, { onPending: y }),
				children: /* @__PURE__ */ u(i, {
					onReady: b,
					children: h
				})
			})
		}), /* @__PURE__ */ u(e, { children: x ? /* @__PURE__ */ u(t.div, {
			className: "absolute inset-0 z-10 h-full w-full",
			initial: { opacity: 1 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: f,
			children: /* @__PURE__ */ u(r, {})
		}, "conversation-tab-loading-overlay") : null })]
	});
}
//#endregion
export { p as ConversationTabContentCrossfade };

//# sourceMappingURL=conversation-tab-content-crossfade.js.map