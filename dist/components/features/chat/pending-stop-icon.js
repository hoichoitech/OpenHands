import { jsx as e, jsxs as t } from "react/jsx-runtime";
//#region src/components/features/chat/pending-stop-icon.tsx
function n({ className: n }) {
	return /* @__PURE__ */ t("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 24 24",
		fill: "none",
		"aria-hidden": !0,
		className: n,
		children: [/* @__PURE__ */ e("circle", {
			cx: "12",
			cy: "12",
			r: "10",
			className: "fill-[var(--oh-foreground)] transition-colors duration-150 group-hover:fill-[var(--oh-text-secondary)]"
		}), /* @__PURE__ */ e("rect", {
			x: "9",
			y: "9",
			width: "6",
			height: "6",
			rx: "1",
			className: "fill-[var(--oh-color-tertiary)]"
		})]
	});
}
//#endregion
export { n as PendingStopIcon };

//# sourceMappingURL=pending-stop-icon.js.map