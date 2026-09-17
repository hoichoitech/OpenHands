import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/features/markdown/anchor.tsx
function t({ href: t, children: n }) {
	return /* @__PURE__ */ e("a", {
		className: "text-blue-500 hover:underline",
		href: t,
		target: "_blank",
		rel: "noopener noreferrer",
		children: n
	});
}
//#endregion
export { t as anchor };

//# sourceMappingURL=anchor.js.map