import { cn as e } from "../../../utils/utils.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/markdown/plan-components.tsx
function n(n) {
	return {
		h1: ({ children: r, className: i }) => /* @__PURE__ */ t("h1", {
			className: e("text-lg text-white font-bold leading-6 mb-1.5 mt-3 first:mt-0", i, n),
			children: r
		}),
		h2: ({ children: r, className: i }) => /* @__PURE__ */ t("h2", {
			className: e("text-base font-semibold leading-5 text-white mb-1 mt-2.5 first:mt-0", i, n),
			children: r
		}),
		h3: ({ children: r, className: i }) => /* @__PURE__ */ t("h3", {
			className: e("text-sm font-semibold text-white mb-1 mt-2 first:mt-0", i, n),
			children: r
		}),
		h4: ({ children: r, className: i }) => /* @__PURE__ */ t("h4", {
			className: e("text-sm font-semibold text-white mb-1 mt-2 first:mt-0", i, n),
			children: r
		}),
		h5: ({ children: r, className: i }) => /* @__PURE__ */ t("h5", {
			className: e("text-xs font-semibold text-white mb-0.5 mt-1.5 first:mt-0", i, n),
			children: r
		}),
		h6: ({ children: r, className: i }) => /* @__PURE__ */ t("h6", {
			className: e("text-xs font-medium text-[var(--oh-text-tertiary)] mb-0.5 mt-1.5 first:mt-0", i, n),
			children: r
		}),
		p: ({ children: r, className: i }) => /* @__PURE__ */ t("p", {
			className: e("py-2.5 first:pt-0 last:pb-0", i, n),
			children: r
		}),
		ul: ({ children: r, className: i }) => /* @__PURE__ */ t("ul", {
			className: e("list-disc ml-5 pl-2 whitespace-normal", i, n),
			children: r
		}),
		ol: ({ children: r, className: i, start: a }) => /* @__PURE__ */ t("ol", {
			className: e("list-decimal ml-5 pl-2 whitespace-normal", i, n),
			start: a,
			children: r
		}),
		li: ({ children: r, className: i }) => /* @__PURE__ */ t("li", {
			className: e(i, n),
			children: r
		}),
		a: ({ children: r, className: i, href: a }) => /* @__PURE__ */ t("a", {
			className: e("text-blue-500 hover:underline", i, n),
			href: a,
			target: "_blank",
			rel: "noopener noreferrer",
			children: r
		}),
		code: ({ children: r, className: i }) => /* @__PURE__ */ t("code", {
			className: e("bg-[var(--oh-surface-raised)] px-1.5 py-0.5 rounded text-[var(--oh-foreground)] border border-[var(--oh-border-subtle)]", i, n),
			children: r
		})
	};
}
var r = n();
//#endregion
export { n as createPlanComponents, r as planComponents };

//# sourceMappingURL=plan-components.js.map