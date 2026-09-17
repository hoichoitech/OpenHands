import { cn as e } from "../utils/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/ui/toggle-switch.tsx
function n({ enabled: n, size: r = "md", className: i }) {
	let a = r === "sm";
	return /* @__PURE__ */ t("span", {
		"aria-hidden": "true",
		className: e("relative inline-flex shrink-0 items-center rounded-full", "transition-colors duration-200 ease-in-out motion-reduce:transition-none", a ? "h-3.5 w-6 p-[3px]" : "h-[22px] w-[40px] border", n ? a ? "bg-white" : "border-white bg-white" : a ? "bg-[var(--oh-border)]" : "border-[var(--oh-border)] bg-surface-raised", i),
		children: /* @__PURE__ */ t("span", { className: e("inline-block rounded-full", "transition-transform duration-200 ease-in-out motion-reduce:transition-none", a ? "size-2" : "size-4", n ? a ? "translate-x-[10px] bg-base-secondary" : "translate-x-[21px] bg-base-secondary" : a ? "translate-x-0 bg-[var(--oh-muted)]" : "translate-x-[2px] bg-[var(--oh-muted)]") })
	});
}
//#endregion
export { n as ToggleSwitchVisual };

//# sourceMappingURL=toggle-switch.js.map