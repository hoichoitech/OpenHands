import { cn as e } from "../utils/utils.js";
import { cva as t } from "../node_modules/class-variance-authority/dist/index.js";
import { Fragment as n, jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/ui/help-link.tsx
var a = t("", {
	variants: {
		size: {
			default: "text-xs",
			settings: "text-sm text-[var(--oh-muted)] font-normal leading-5.5"
		},
		linkColor: {
			default: "",
			white: "text-white"
		}
	},
	defaultVariants: {
		size: "default",
		linkColor: "default"
	}
});
function o({ testId: t, text: o, linkText: s, href: c, suffix: l, suffixLinkText: u, suffixLinkHref: d, trailing: f, size: p, linkColor: m, className: h, linkTextClassName: g, suffixClassName: _ }) {
	return /* @__PURE__ */ i("p", {
		"data-testid": t,
		className: e(a({ size: p }), h),
		children: [
			o,
			" ",
			/* @__PURE__ */ r("a", {
				href: c,
				rel: "noreferrer noopener",
				target: "_blank",
				className: e("underline underline-offset-2", a({
					size: p,
					linkColor: m
				}), g),
				children: s
			}),
			l && /* @__PURE__ */ r("span", {
				className: _,
				children: l
			}),
			u && d ? /* @__PURE__ */ i(n, { children: [
				" ",
				/* @__PURE__ */ r("a", {
					href: d,
					rel: "noreferrer noopener",
					target: "_blank",
					className: e("underline underline-offset-2", a({
						size: p,
						linkColor: m
					}), g),
					children: u
				}),
				f
			] }) : null
		]
	});
}
//#endregion
export { o as HelpLink };

//# sourceMappingURL=help-link.js.map