import { AnimatePresence as e } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as t } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { cn as n } from "../../../node_modules/@heroui/theme/dist/chunk-YW4DIYUX.js";
import r from "../../../icons/debug-stackframe-dot.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/chat/chat-status-indicator.tsx
function o({ status: o, statusColor: s }) {
	return /* @__PURE__ */ i("div", {
		"data-testid": "chat-status-indicator",
		className: n("w-full max-w-full rounded-[100px] p-1 bg-[var(--oh-surface)] flex items-center gap-1"),
		children: /* @__PURE__ */ a(e, {
			mode: "wait",
			children: [/* @__PURE__ */ i(t.span, {
				className: "flex-shrink-0 animate-[pulse_1.2s_ease-in-out_infinite]",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				transition: { duration: .3 },
				children: /* @__PURE__ */ i(r, {
					className: "w-4 h-4",
					color: s
				})
			}, `dot-${o}`), /* @__PURE__ */ i(t.span, {
				initial: {
					opacity: 0,
					y: -2
				},
				animate: {
					opacity: 1,
					y: 0
				},
				exit: {
					opacity: 0,
					y: 2
				},
				transition: { duration: .3 },
				className: "pr-1.5 font-normal text-[11px] leading-[16px] normal-case break-words whitespace-normal",
				children: o
			}, `text-${o}`)]
		})
	});
}
//#endregion
export { o as default };

//# sourceMappingURL=chat-status-indicator.js.map