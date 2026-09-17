import { cn as e } from "../../../../utils/utils.js";
import { getContextFillTone as t } from "../../conversation/usage-panel/context-meter.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/chat/components/context-window-ring.tsx
var i = 16, a = 2, o = `color-mix(in srgb, var(--oh-foreground) ${.42 * 100}%, transparent)`, s = {
	neutral: "var(--oh-foreground)",
	warning: "#f59e0b",
	danger: "#ef4444"
};
function c({ percentage: c, className: l }) {
	let u = (i - a) / 2, d = 2 * Math.PI * u, f = Math.min(100, Math.max(0, c)), p = d - f / 100 * d, m = t(f);
	return /* @__PURE__ */ r("svg", {
		width: i,
		height: i,
		viewBox: `0 0 ${i} ${i}`,
		className: e("shrink-0", l),
		"aria-hidden": !0,
		children: [/* @__PURE__ */ n("circle", {
			cx: i / 2,
			cy: i / 2,
			r: u,
			fill: "none",
			style: { stroke: o },
			strokeWidth: a,
			"data-testid": "context-window-ring-track"
		}), /* @__PURE__ */ n("circle", {
			cx: i / 2,
			cy: i / 2,
			r: u,
			fill: "none",
			stroke: s[m],
			strokeWidth: a,
			strokeLinecap: "round",
			strokeDasharray: d,
			strokeDashoffset: p,
			transform: `rotate(-90 ${i / 2} ${i / 2})`,
			className: "transition-[stroke-dashoffset,stroke] duration-300",
			"data-testid": "context-window-ring-arc"
		})]
	});
}
//#endregion
export { o as CONTEXT_WINDOW_TRACK_COLOR, c as ContextWindowRing };

//# sourceMappingURL=context-window-ring.js.map