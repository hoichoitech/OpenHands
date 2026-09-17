import { cn as e } from "../utils/utils.js";
import { cva as t } from "../node_modules/class-variance-authority/dist/index.js";
import { dropdownMenuListGapClassName as n } from "../utils/dropdown-classes.js";
import "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/ui/context-menu.tsx
var i = t("z-50 overflow-hidden text-[var(--oh-foreground)]", {
	variants: {
		theme: {
			default: "absolute rounded-md border border-[var(--oh-border-subtle)] bg-tertiary px-1 py-1 shadow-lg",
			naked: "relative",
			popover: "relative rounded-md border border-[var(--oh-border-subtle)] bg-tertiary px-1 py-1 shadow-lg"
		},
		size: {
			compact: "py-1 px-1",
			default: ""
		},
		layout: { vertical: e("flex flex-col", n) },
		position: {
			top: "bottom-full",
			bottom: "top-full",
			none: ""
		},
		spacing: {
			default: "mt-2",
			none: ""
		},
		alignment: {
			left: "left-0",
			right: "right-0",
			none: ""
		}
	},
	compoundVariants: [{
		theme: "naked",
		className: "shadow-none"
	}],
	defaultVariants: {
		theme: "default",
		size: "default",
		layout: "vertical",
		spacing: "default"
	}
});
function a({ testId: t, children: n, className: a, style: o, onKeyDown: s, ref: c, theme: l, size: u, layout: d, position: f, spacing: p, alignment: m }) {
	return /* @__PURE__ */ r("ul", {
		"data-testid": t,
		"data-position": f,
		ref: c,
		style: o,
		onKeyDown: s,
		className: e(i({
			theme: l,
			size: u,
			layout: d,
			position: f,
			spacing: p,
			alignment: m
		}), a),
		children: n
	});
}
//#endregion
export { a as ContextMenu };

//# sourceMappingURL=context-menu.js.map