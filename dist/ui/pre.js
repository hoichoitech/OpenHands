import { cn as e } from "../utils/utils.js";
import { cva as t } from "../node_modules/class-variance-authority/dist/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/pre.tsx
var r = t("whitespace-pre-wrap", {
	variants: {
		size: {
			default: "text-sm",
			small: "text-xs"
		},
		font: {
			default: "",
			mono: "font-mono"
		},
		lineHeight: {
			default: "",
			relaxed: "leading-relaxed"
		},
		background: {
			default: "",
			dark: "bg-base"
		},
		textColor: {
			default: "",
			light: "text-[var(--oh-text-tertiary)]"
		},
		padding: {
			default: "",
			medium: "p-3",
			large: "px-5"
		},
		borderRadius: {
			default: "",
			medium: "rounded-md"
		},
		shadow: {
			default: "",
			inner: "shadow-inner"
		},
		maxHeight: {
			default: "",
			small: "max-h-[400px]",
			large: "max-h-[60vh]"
		},
		overflow: {
			default: "",
			auto: "overflow-auto"
		}
	},
	defaultVariants: {
		size: "default",
		font: "default",
		lineHeight: "default",
		background: "default",
		textColor: "default",
		padding: "default",
		borderRadius: "default",
		shadow: "default",
		maxHeight: "default",
		overflow: "default"
	}
});
function i({ size: t, font: i, lineHeight: a, background: o, textColor: s, padding: c, borderRadius: l, shadow: u, maxHeight: d, overflow: f, className: p, testId: m, children: h }) {
	return /* @__PURE__ */ n("pre", {
		"data-testid": m,
		className: e(r({
			size: t,
			font: i,
			lineHeight: a,
			background: o,
			textColor: s,
			padding: c,
			borderRadius: l,
			shadow: u,
			maxHeight: d,
			overflow: f
		}), p),
		children: h
	});
}
//#endregion
export { i as Pre };

//# sourceMappingURL=pre.js.map