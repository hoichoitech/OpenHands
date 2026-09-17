import { cn as e } from "../utils/utils.js";
import { cva as t } from "../node_modules/class-variance-authority/dist/index.js";
import { jsx as n } from "react/jsx-runtime";
var r = t("shrink-0 self-stretch min-w-full bg-[var(--oh-border)]", {
	variants: {
		orientation: { horizontal: "h-[1px]" },
		color: { light: "bg-[var(--oh-border)]" },
		size: { thin: "h-[1px]" },
		inset: {
			none: "",
			menu: ""
		}
	},
	defaultVariants: {
		orientation: "horizontal",
		color: "light",
		size: "thin",
		inset: "none"
	}
});
function i({ orientation: t, color: i, size: a, inset: o, className: s, testId: c }) {
	return o === "menu" ? /* @__PURE__ */ n("div", {
		"data-testid": c,
		role: "separator",
		className: e("relative min-w-full shrink-0 self-stretch", "h-3", s),
		children: /* @__PURE__ */ n("div", {
			"aria-hidden": !0,
			className: "absolute top-1/2 -left-1 -right-1 h-px -translate-y-1/2 bg-[var(--oh-border)]"
		})
	}) : /* @__PURE__ */ n("div", {
		"data-testid": c,
		role: "separator",
		className: e(r({
			orientation: t,
			color: i,
			size: a,
			inset: o
		}), s)
	});
}
//#endregion
export { i as Divider };

//# sourceMappingURL=divider.js.map