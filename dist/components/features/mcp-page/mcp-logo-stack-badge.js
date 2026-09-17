import { cn as e } from "../../../utils/utils.js";
import { McpLogoBadge as t } from "../mcp-logo-badge.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/mcp-page/mcp-logo-stack-badge.tsx
var r = "inline-flex h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-surface-raised shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]";
function i(e) {
	return e.slice(0, 4);
}
function a({ entries: a, className: o, testId: s }) {
	let c = i(a);
	if (c.length === 0) return /* @__PURE__ */ n(t, {
		entry: null,
		size: "md",
		className: o,
		testId: s
	});
	if (c.length === 1) return /* @__PURE__ */ n(t, {
		entry: c[0],
		size: "md",
		className: o,
		testId: s
	});
	if (c.length === 2) return /* @__PURE__ */ n("span", {
		"aria-hidden": "true",
		"data-testid": s,
		"data-layout": "overlap",
		className: e(r, "items-center justify-center", o),
		children: /* @__PURE__ */ n("span", {
			className: "flex items-center justify-center -space-x-2",
			children: c.map((e) => /* @__PURE__ */ n(t, {
				entry: e,
				size: "sm",
				className: "ring-2 ring-surface-raised"
			}, e.id))
		})
	});
	let l = [
		c[0] ?? null,
		c[1] ?? null,
		c[2] ?? null,
		c[3] ?? null
	];
	return /* @__PURE__ */ n("span", {
		"aria-hidden": "true",
		"data-testid": s,
		"data-layout": "quadrants",
		className: e(r, "grid grid-cols-2 grid-rows-2 gap-0.5 p-1", o),
		children: l.map((e, r) => e ? /* @__PURE__ */ n("span", {
			className: "flex items-center justify-center",
			children: /* @__PURE__ */ n(t, {
				entry: e,
				size: "xs"
			})
		}, e.id) : /* @__PURE__ */ n("span", { "aria-hidden": "true" }, `empty-${r}`))
	});
}
//#endregion
export { a as McpLogoStackBadge };

//# sourceMappingURL=mcp-logo-stack-badge.js.map