import { cn as e } from "../utils/utils.js";
import { cva as t } from "../node_modules/class-variance-authority/dist/index.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/ui/typography.tsx
var r = t("", {
	variants: { variant: {
		h1: "text-[32px] text-white font-medium leading-5",
		h2: "text-xl font-medium leading-6 -tracking-[0.02em] text-white",
		h3: "text-sm font-medium text-[var(--oh-text-tertiary)]",
		span: "text-sm font-normal text-white leading-5.5",
		p: "text-sm font-normal text-white leading-5.5",
		codeBlock: "font-mono text-sm leading-relaxed text-[var(--oh-text-tertiary)] whitespace-pre-wrap"
	} },
	defaultVariants: { variant: "h1" }
});
function i({ variant: t, className: i, testId: a, children: o }) {
	return /* @__PURE__ */ n(t, {
		"data-testid": a,
		className: e(r({ variant: t }), i),
		children: o
	});
}
function a({ className: e, testId: t, children: r }) {
	return /* @__PURE__ */ n(i, {
		variant: "h1",
		className: e,
		testId: t,
		children: r
	});
}
function o({ className: e, testId: t, children: r }) {
	return /* @__PURE__ */ n(i, {
		variant: "h2",
		className: e,
		testId: t,
		children: r
	});
}
function s({ className: e, testId: t, children: r }) {
	return /* @__PURE__ */ n(i, {
		variant: "h3",
		className: e,
		testId: t,
		children: r
	});
}
function c({ className: e, testId: t, children: r }) {
	return /* @__PURE__ */ n(i, {
		variant: "span",
		className: e,
		testId: t,
		children: r
	});
}
function l({ className: e, testId: t, children: r }) {
	return /* @__PURE__ */ n(i, {
		variant: "codeBlock",
		className: e,
		testId: t,
		children: r
	});
}
function u({ className: e, testId: t, children: r }) {
	return /* @__PURE__ */ n(i, {
		variant: "p",
		className: e,
		testId: t,
		children: r
	});
}
i.H1 = a, i.H2 = o, i.H3 = s, i.Text = c, i.CodeBlock = l, i.Paragraph = u;
//#endregion
export { c as Text, i as Typography };

//# sourceMappingURL=typography.js.map