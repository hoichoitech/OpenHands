import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/features/markdown/list.tsx
function t({ children: t }) {
	return /* @__PURE__ */ e("ul", {
		className: "my-2 list-disc ml-5 pl-2 whitespace-normal leading-6",
		children: t
	});
}
function n({ children: t, start: n }) {
	return /* @__PURE__ */ e("ol", {
		className: "my-2 list-decimal ml-5 pl-2 whitespace-normal leading-6",
		start: n,
		children: t
	});
}
function r({ children: t }) {
	return /* @__PURE__ */ e("li", {
		className: "py-0.5",
		children: t
	});
}
//#endregion
export { r as li, n as ol, t as ul };

//# sourceMappingURL=list.js.map