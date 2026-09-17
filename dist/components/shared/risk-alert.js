import { cn as e } from "../../utils/utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/shared/risk-alert.tsx
function r({ className: r, content: i, icon: a, severity: o, title: s }) {
	return o === "high" ? /* @__PURE__ */ n("div", {
		className: e("flex items-center gap-3.5 bg-[#4A0709] border border-[#FF0006] text-red-400 rounded-xl px-3.5 h-13 text-sm text-white", r),
		children: [
			a && /* @__PURE__ */ t("span", {
				className: "",
				children: a
			}),
			/* @__PURE__ */ t("span", {
				className: "font-bold",
				children: s
			}),
			/* @__PURE__ */ t("span", {
				className: "font-normal",
				children: i
			})
		]
	}) : null;
}
//#endregion
export { r as RiskAlert };

//# sourceMappingURL=risk-alert.js.map