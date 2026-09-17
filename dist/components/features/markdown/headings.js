import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/features/markdown/headings.tsx
function t({ children: t }) {
	return /* @__PURE__ */ e("h1", {
		className: "text-xl text-white font-medium leading-7 mb-3 mt-4 first:mt-0",
		children: t
	});
}
function n({ children: t }) {
	return /* @__PURE__ */ e("h2", {
		className: "text-lg font-medium leading-6 -tracking-[0.01em] text-white mb-2.5 mt-4 first:mt-0",
		children: t
	});
}
function r({ children: t }) {
	return /* @__PURE__ */ e("h3", {
		className: "text-base font-medium text-white mb-2 mt-3 first:mt-0",
		children: t
	});
}
function i({ children: t }) {
	return /* @__PURE__ */ e("h4", {
		className: "text-sm font-medium text-white mb-1.5 mt-3 first:mt-0",
		children: t
	});
}
function a({ children: t }) {
	return /* @__PURE__ */ e("h5", {
		className: "text-sm font-normal text-[var(--oh-text-tertiary)] mb-1.5 mt-2.5 first:mt-0",
		children: t
	});
}
function o({ children: t }) {
	return /* @__PURE__ */ e("h6", {
		className: "text-sm font-normal text-[var(--oh-text-tertiary)] mb-1.5 mt-2.5 first:mt-0",
		children: t
	});
}
//#endregion
export { t as h1, n as h2, r as h3, i as h4, a as h5, o as h6 };

//# sourceMappingURL=headings.js.map