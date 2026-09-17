import { I18nKey as e } from "../i18n/declaration.js";
//#region src/utils/format-relative-time.ts
function t(e, t) {
	return new Date(e).toLocaleDateString(t, {
		year: "numeric",
		month: "short",
		day: "numeric"
	});
}
function n(e) {
	if (!e) return !0;
	let t = new Date(e).getTime();
	return Number.isNaN(t) || t === 0;
}
function r(n, r, i) {
	let a = Date.now() - new Date(n).getTime(), o = Math.floor(a / 6e4), s = Math.floor(a / 36e5), c = Math.floor(a / 864e5);
	return o < 1 ? i(e.AUTOMATIONS$DETAIL$TIME_JUST_NOW) : o < 60 ? i(e.AUTOMATIONS$DETAIL$TIME_MINUTES_AGO, { count: o }) : s < 24 ? i(e.AUTOMATIONS$DETAIL$TIME_HOURS_AGO, { count: s }) : c === 1 ? i(e.AUTOMATIONS$DETAIL$TIME_YESTERDAY) : c < 7 ? i(e.AUTOMATIONS$DETAIL$TIME_DAYS_AGO, { count: c }) : t(n, r);
}
//#endregion
export { r as formatRelativeTime, n as isInvalidTimestamp };

//# sourceMappingURL=format-relative-time.js.map