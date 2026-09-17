import { cn as e } from "../../../../utils/utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/conversation/metrics-modal/metric-row.tsx
function r({ label: r, value: i, labelClassName: a = "", valueClassName: o = "font-semibold", showBorder: s = !0 }) {
	return /* @__PURE__ */ n("div", {
		className: e("flex justify-between items-center pb-2", s && "border-b border-[var(--oh-border-subtle)]"),
		children: [/* @__PURE__ */ t("span", {
			className: a,
			children: r
		}), /* @__PURE__ */ t("span", {
			className: o,
			children: i
		})]
	});
}
//#endregion
export { r as MetricRow };

//# sourceMappingURL=metric-row.js.map