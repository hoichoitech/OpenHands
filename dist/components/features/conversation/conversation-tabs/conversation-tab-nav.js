import { cn as e } from "../../../../utils/utils.js";
import { motion as t } from "../../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { useReducedMotion as n } from "../../../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-tabs/conversation-tab-nav.tsx
var a = 160, o = {
	duration: .22,
	ease: [
		.4,
		0,
		.2,
		1
	]
};
function s({ tabValue: s, icon: c, onClick: l, isActive: u, label: d, className: f, measureOnly: p, suppressLayoutAnimation: m = !1 }) {
	let h = n(), g = p || h || !1, _ = !g && !m, v = e("flex items-center rounded-md cursor-pointer", "pl-1.5 pr-2 py-1 lg:py-1.5", "text-[var(--oh-muted)] bg-transparent", u && "bg-[var(--oh-interactive-active)] text-white", u ? "hover:text-white hover:bg-[var(--oh-interactive-hover)]" : "hover:text-white hover:bg-white/5", u ? "focus-within:text-white" : "focus-within:text-[var(--oh-muted)]", f), y = /* @__PURE__ */ r(c, { className: e("h-4 w-4 shrink-0 text-inherit") }), b = d && u ? /* @__PURE__ */ r("span", {
		className: "whitespace-nowrap text-sm font-normal",
		children: d
	}) : null, x = d ? /* @__PURE__ */ r(t.span, {
		initial: !1,
		animate: {
			maxWidth: u ? a : 0,
			opacity: +!!u,
			marginLeft: u ? 8 : 0
		},
		transition: o,
		className: "block overflow-hidden whitespace-nowrap text-sm font-normal",
		"aria-hidden": !u,
		children: d
	}) : null;
	return g ? /* @__PURE__ */ i("button", {
		type: "button",
		onClick: l,
		...p ? {} : { "data-testid": `conversation-tab-${s}` },
		"data-tab-measure": p ? "true" : void 0,
		className: e(v, "gap-2"),
		children: [y, b]
	}) : /* @__PURE__ */ i(t.button, {
		layout: _ ? "position" : !1,
		type: "button",
		onClick: l,
		...p ? {} : { "data-testid": `conversation-tab-${s}` },
		"data-tab-measure": p ? "true" : void 0,
		className: v,
		transition: _ ? { layout: o } : void 0,
		children: [y, x]
	});
}
//#endregion
export { s as ConversationTabNav };

//# sourceMappingURL=conversation-tab-nav.js.map