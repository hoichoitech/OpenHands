import { cn as e } from "../../utils/utils.js";
import { useReducedMotion as t } from "../../node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.js";
import n, { useId as r, useMemo as i } from "react";
import { Fragment as a, jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/shared/text-shimmer.tsx
var c = "200%", l = 8, u = l * 2;
function d({ children: n, as: d = "p", className: f, duration: p = 2, spread: m = 2, style: h, ...g }) {
	let _ = t(), v = `oh-text-shimmer-${r().replace(/:/g, "")}`, y = i(() => Math.min(l / 2 - 1, 1 + m / 2), [m]), b = i(() => {
		let e = l / 2;
		return {
			...h,
			backgroundImage: `repeating-linear-gradient(90deg, var(--oh-muted) 0%, var(--oh-muted) ${e - y}%, var(--oh-foreground) ${e}%, var(--oh-muted) ${e + y}%, var(--oh-muted) ${l}%)`,
			backgroundSize: `${c} 100%`,
			backgroundRepeat: "no-repeat",
			WebkitBackgroundClip: "text",
			backgroundClip: "text",
			color: "transparent",
			WebkitTextFillColor: "transparent",
			animation: `${v} ${p}s linear infinite`
		};
	}, [
		v,
		y,
		p,
		h
	]);
	return _ ? /* @__PURE__ */ o(d, {
		className: e("text-[var(--oh-muted)]", f),
		style: h,
		...g,
		children: n
	}) : /* @__PURE__ */ s(a, { children: [/* @__PURE__ */ o("style", { dangerouslySetInnerHTML: { __html: `@keyframes ${v}{from{background-position:${u}% center}to{background-position:0% center}}` } }), /* @__PURE__ */ o(d, {
		className: e("relative inline-block", f),
		style: b,
		...g,
		children: n
	})] });
}
var f = n.memo(d);
//#endregion
export { f as TextShimmer };

//# sourceMappingURL=text-shimmer.js.map