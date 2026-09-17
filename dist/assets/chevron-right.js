import { jsx as e } from "react/jsx-runtime";
//#region src/assets/chevron-right.tsx
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
			d: "M8.79602 4.99634L13.3449 10.0001L8.79602 15.0038L7.87109 14.163L11.6556 10.0001L7.87109 5.83718L8.79602 4.99634Z",
			fill: r ? "var(--oh-text-tertiary)" : "var(--oh-border)"
		})
	});
}
//#endregion
export { t as ChevronRight };

//# sourceMappingURL=chevron-right.js.map