import { formatCompactDuration as e } from "../../../manifests/automation-insights.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/automations/automation-run-insights.tsx
function r(e) {
	return e?.summary ? e.summary.total.toLocaleString() : !e || e.isLoading ? "…" : "—";
}
function i(e) {
	let t = e?.summary?.recentSuccessRate;
	return t == null ? "—" : `${Math.round(t * 100)}%`;
}
function a(t) {
	return e(t?.summary?.averageDurationMs ?? null);
}
function o({ state: e, copy: o }) {
	return /* @__PURE__ */ t("dl", {
		"data-testid": "automation-run-stats",
		className: "grid grid-cols-3 gap-2 text-xs",
		children: [
			{
				label: o.runs,
				value: r(e)
			},
			{
				label: o.recentSuccess,
				value: i(e)
			},
			{
				label: o.averageDuration,
				value: a(e)
			}
		].map((e) => /* @__PURE__ */ n("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ t("dt", {
				className: "truncate text-muted",
				children: e.label
			}), /* @__PURE__ */ t("dd", {
				className: "mt-0.5 truncate font-medium text-content",
				children: e.value
			})]
		}, e.label))
	});
}
//#endregion
export { o as AutomationRunStats };

//# sourceMappingURL=automation-run-insights.js.map