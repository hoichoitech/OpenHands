import e from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/primitives/key-value-grid.tsx
function r({ rows: r }) {
	return /* @__PURE__ */ t("div", {
		className: "grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs",
		children: r.map(({ label: r, value: i }) => /* @__PURE__ */ n(e.Fragment, { children: [/* @__PURE__ */ t("span", {
			className: "text-muted",
			children: r
		}), /* @__PURE__ */ t("span", {
			className: "break-all font-mono text-foreground",
			children: i
		})] }, r))
	});
}
//#endregion
export { r as KeyValueGrid };

//# sourceMappingURL=key-value-grid.js.map