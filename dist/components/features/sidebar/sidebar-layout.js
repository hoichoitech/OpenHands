import { cn as e } from "../../../utils/utils.js";
//#region src/components/features/sidebar/sidebar-layout.ts
var t = "transition-none motion-reduce:transition-none", n = "flex h-9 w-[18px] shrink-0 items-center justify-center", r = "relative h-9 min-h-9 max-h-9 w-full shrink-0";
function i(t) {
	return e("flex h-10 min-h-10 shrink-0 items-center w-full", t ? "px-0" : "gap-2 pl-2.5 pr-2.5");
}
var a = {
	active: "bg-tertiary text-white font-normal",
	idle: "text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)]"
};
function o(t) {
	return e("flex flex-col gap-0.5 w-full shrink-0 items-stretch", !t && "pr-2.5");
}
function s(n) {
	let { indent: r = !1, collapsed: i = !1 } = n ?? {};
	return e("flex h-9 min-h-9 min-w-0 items-center rounded-md", t, "text-sm leading-5 w-full", i ? "group gap-0 px-0 overflow-visible bg-transparent hover:bg-transparent" : "gap-2 px-2.5 overflow-hidden", r && !i && "pl-7");
}
function c(n) {
	return e("pointer-events-none absolute inset-0 z-0 rounded-md", t, n ? "bg-tertiary" : "bg-transparent group-hover:bg-[var(--oh-surface-raised)]");
}
function l(t) {
	return e("relative z-[1] flex h-full w-full items-center justify-start pl-2.5 [&_svg]:shrink-0", t ? "text-white font-normal" : "text-[var(--oh-muted)] group-hover:text-white");
}
function u(e) {
	return e ? "sr-only" : "min-w-0 truncate";
}
var d = e("inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md", t, "cursor-pointer"), f = e("relative hidden md:block shrink-0 overflow-visible", r), p = e("absolute left-1/2 top-1/2 hidden h-7 w-7 -translate-x-1/2 -translate-y-1/2 md:inline-flex", "items-center justify-center rounded-md", t, "cursor-pointer", "text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)]");
//#endregion
export { r as SIDEBAR_COLLAPSED_ICON_SLOT_CLASS, f as SIDEBAR_COLLAPSED_LOGO_WRAPPER_CLASS, p as SIDEBAR_COLLAPSE_TOGGLE_OVERLAY_CLASS, d as SIDEBAR_ICON_BUTTON_CLASS, n as SIDEBAR_ICON_SLOT_CLASS, a as SIDEBAR_ROW_INTERACTIVE_CLASS, t as navInteractiveTransitionClassName, c as sidebarCollapsedIconBgClassName, l as sidebarCollapsedIconGlyphClassName, i as sidebarHeaderRowClassName, u as sidebarNavLabelClassName, o as sidebarNavListClassName, s as sidebarNavRowClassName };

//# sourceMappingURL=sidebar-layout.js.map