import { cn as e } from "../../../utils/utils.js";
import { readScrollFadeState as t } from "../../../utils/scroll-fade-state.js";
import n from "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/markdown/markdown-table-scroll.tsx
var a = "w-10";
function o({ children: o }) {
	let s = n.useRef(null), [c, l] = n.useState({
		left: !1,
		right: !1
	}), u = n.useCallback(() => {
		let e = s.current;
		e && l(t(e));
	}, []);
	return n.useLayoutEffect(() => {
		u();
		let e = s.current;
		if (!e) return;
		let t = new ResizeObserver(u);
		t.observe(e);
		let n = e.firstElementChild;
		return n && t.observe(n), () => t.disconnect();
	}, [u, o]), /* @__PURE__ */ i("div", {
		className: "relative max-w-full",
		children: [
			/* @__PURE__ */ r("div", {
				ref: s,
				"data-testid": "markdown-table-scroll",
				onScroll: u,
				className: "max-w-full overflow-x-auto custom-scrollbar-always",
				children: o
			}),
			/* @__PURE__ */ r("div", {
				"aria-hidden": !0,
				"data-testid": "markdown-table-scroll-fade-left",
				"data-visible": c.left ? "true" : "false",
				className: e("pointer-events-none absolute inset-y-0 left-0 z-10", a, "bg-gradient-to-r from-[var(--oh-scroll-fade-from,var(--oh-color-base))] to-transparent", "transition-opacity duration-300 ease-out motion-reduce:transition-none", c.left ? "opacity-100" : "opacity-0")
			}),
			/* @__PURE__ */ r("div", {
				"aria-hidden": !0,
				"data-testid": "markdown-table-scroll-fade-right",
				"data-visible": c.right ? "true" : "false",
				className: e("pointer-events-none absolute inset-y-0 right-0 z-10", a, "bg-gradient-to-l from-[var(--oh-scroll-fade-from,var(--oh-color-base))] to-transparent", "transition-opacity duration-300 ease-out motion-reduce:transition-none", c.right ? "opacity-100" : "opacity-0")
			})
		]
	});
}
//#endregion
export { o as MarkdownTableScroll };

//# sourceMappingURL=markdown-table-scroll.js.map