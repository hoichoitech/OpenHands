//#region src/utils/format-event-timestamp.ts
function e(e, t) {
	if (!e) return null;
	let n = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(e) ? e : `${e}Z`, r = new Date(n);
	return Number.isNaN(r.getTime()) ? null : r.toLocaleString(t, {
		dateStyle: "medium",
		timeStyle: "short"
	});
}
//#endregion
export { e as formatEventTimestamp };

//# sourceMappingURL=format-event-timestamp.js.map