import { cn as e } from "../../../utils/utils.js";
import { AnimatePresence as t } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as n } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as r } from "../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/accordion-panel.tsx
var a = {
	duration: .2,
	ease: "easeInOut"
};
function o({ open: o, children: s, testId: c, className: l }) {
	return r() ? o ? /* @__PURE__ */ i("div", {
		"data-testid": c,
		className: l,
		children: s
	}) : null : /* @__PURE__ */ i(t, {
		initial: !1,
		children: o ? /* @__PURE__ */ i(n.div, {
			"data-testid": c,
			initial: {
				height: 0,
				opacity: 0
			},
			animate: {
				height: "auto",
				opacity: 1
			},
			exit: {
				height: 0,
				opacity: 0
			},
			transition: a,
			className: e("overflow-hidden", l),
			children: s
		}, "accordion-panel") : null
	});
}
//#endregion
export { o as AccordionPanel };

//# sourceMappingURL=accordion-panel.js.map