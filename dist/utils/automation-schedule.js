//#region src/utils/automation-schedule.ts
function e(e) {
	return e ? Array.isArray(e) ? e.join(", ") : e : "—";
}
var t = "JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC", n = "SUN|MON|TUE|WED|THU|FRI|SAT";
RegExp(`^(?:${t})(?:-(?:${t}))?(?:/\\d+)?$`, "i"), RegExp(`^(?:(?:${n}|\\d+)(?:-(?:${n}|\\d+))?(?:/\\d+)?(?:#\\d+)?|\\?)$`, "i");
//#endregion
export { e as formatEventOn };

//# sourceMappingURL=automation-schedule.js.map