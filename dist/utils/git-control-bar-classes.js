import { cn as e } from "./utils.js";
//#region src/utils/git-control-bar-classes.ts
var t = "flex flex-row gap-1 items-center justify-center rounded-[100px]";
function n(n) {
	return e(t, n ? "bg-[var(--oh-surface)] hover:bg-tertiary cursor-pointer text-white" : "bg-[var(--oh-surface)] cursor-not-allowed opacity-50 text-[var(--oh-muted)]");
}
function r(e) {
	return e ? "white" : "var(--oh-muted)";
}
var i = "font-normal text-sm leading-5 truncate";
//#endregion
export { n as gitControlBarActionButtonClassName, r as gitControlBarActionIconColor, i as gitControlBarActionLabelClassName };

//# sourceMappingURL=git-control-bar-classes.js.map