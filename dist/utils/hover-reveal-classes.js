import { cn as e } from "./utils.js";
//#region src/utils/hover-reveal-classes.ts
var t = [
	"[@media(hover:hover)_and_(pointer:fine)]:pointer-events-none",
	"[@media(hover:hover)_and_(pointer:fine)]:invisible",
	"[@media(hover:hover)_and_(pointer:fine)]:opacity-0",
	"[@media(hover:hover)_and_(pointer:fine)]:group-hover:pointer-events-auto",
	"[@media(hover:hover)_and_(pointer:fine)]:group-hover:visible",
	"[@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-100",
	"[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:pointer-events-auto",
	"[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:visible",
	"[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:opacity-100"
], n = [
	"[@media(hover:hover)_and_(pointer:fine)]:opacity-100",
	"[@media(hover:hover)_and_(pointer:fine)]:group-hover:opacity-0",
	"[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:opacity-0"
], r = [
	"[@media(hover:hover)_and_(pointer:fine)]:min-w-0",
	"[@media(hover:hover)_and_(pointer:fine)]:group-hover:min-w-[3.75rem]",
	"[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:min-w-[3.75rem]"
], i = [
	"[@media(hover:hover)_and_(pointer:fine)]:flex",
	"[@media(hover:hover)_and_(pointer:fine)]:group-hover:hidden",
	"[@media(hover:hover)_and_(pointer:fine)]:group-focus-within:hidden"
];
function a(n = !1) {
	return n ? "pointer-events-auto visible opacity-100" : e("pointer-events-auto visible opacity-100", ...t);
}
function o(t = !1) {
	return t ? "opacity-0" : e("opacity-0", ...n);
}
function s(t = !1) {
	return t ? "min-w-[3.75rem]" : e("min-w-[3.75rem]", ...r);
}
function c(t = !1) {
	return t ? "hidden" : e("hidden", ...i);
}
//#endregion
export { a as hoverRevealActionClassName, c as hoverRevealPinnedTimestampClassName, s as hoverRevealReserveClassName, o as hoverRevealYieldClassName };

//# sourceMappingURL=hover-reveal-classes.js.map