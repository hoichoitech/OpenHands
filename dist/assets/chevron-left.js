import { jsx as e } from "react/jsx-runtime";
//#region src/assets/chevron-left.tsx
function t({ width: t = 20, height: n = 20, active: r }) {
	return /* @__PURE__ */ e("svg", {
		width: t,
		height: n,
		viewBox: `0 0 ${t} ${n}`,
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		children: /* @__PURE__ */ e("path", {
			fillRule: "evenodd",
			clipRule: "evenodd",
			d: "M11.204 15.0037L6.65511 9.99993L11.204 4.99617L12.1289 5.83701L8.34444 9.99993L12.1289 14.1628L11.204 15.0037Z",
			fill: r ? "var(--oh-text-tertiary)" : "var(--oh-border)"
		})
	});
}
//#endregion
export { t as ChevronLeft };

//# sourceMappingURL=chevron-left.js.map