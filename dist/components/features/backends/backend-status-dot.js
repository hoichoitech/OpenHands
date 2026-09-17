import { cn as e } from "../../../utils/utils.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/backends/backend-status-dot.tsx
function n({ isConnected: n, className: r }) {
	let i, a, o;
	return n === "unavailable" ? (i = "bg-[var(--oh-text-tertiary)]", a = "No Backend Available", o = "unavailable") : n === !0 ? (i = "bg-[var(--oh-status-success)]", a = "Connected", o = "connected") : n === !1 ? (i = "bg-red-500", a = "Disconnected", o = "disconnected") : (i = "bg-[var(--oh-interactive-selected)]", a = "Checking connection", o = "checking"), /* @__PURE__ */ t("span", {
		"data-testid": "backend-status-dot",
		"data-status": o,
		"aria-label": a,
		title: a,
		role: "status",
		className: e("inline-block w-2 h-2 rounded-full shrink-0", i, r)
	});
}
//#endregion
export { n as BackendStatusDot };

//# sourceMappingURL=backend-status-dot.js.map