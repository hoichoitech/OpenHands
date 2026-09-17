import { cn as e } from "../../../../utils/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/home/featured-automations/automation-health-indicator.tsx
function n({ health: n }) {
	return n === "success" ? /* @__PURE__ */ t("svg", {
		viewBox: "0 0 12 12",
		className: "h-2.5 w-2.5 shrink-0 stroke-[var(--oh-status-success)]",
		fill: "none",
		strokeWidth: 2.25,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: /* @__PURE__ */ t("path", { d: "M2.5 6.5 5 9l4.5-5.5" })
	}) : /* @__PURE__ */ t("span", {
		"aria-hidden": "true",
		className: e("h-1.5 w-1.5 shrink-0 rounded-full", n === "failed" && "bg-[var(--oh-status-error)]", n === "warning" && "bg-[var(--oh-warning)]", n === "in_progress" && "animate-pulse bg-[var(--oh-status-success)] motion-reduce:animate-none", (n === "none" || n === "unknown") && "bg-[var(--oh-border)]")
	});
}
//#endregion
export { n as AutomationHealthIndicator };

//# sourceMappingURL=automation-health-indicator.js.map