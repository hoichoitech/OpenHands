import { I18nKey as e } from "../i18n/declaration.js";
//#region src/utils/automation-disabled-reason.ts
var t = new Set(["user"]), n = new Set(["manual", "manual_delete"]);
function r(e) {
	return !e.enabled && !!e.disabled_reason;
}
function i(e) {
	let r = e.disabled_reason;
	if (r && n.has(r)) return !0;
	let i = e.disabled_detail?.source;
	return !!(i && t.has(i));
}
function a(t, n) {
	return r(t) ? i(t) ? { text: n(e.AUTOMATIONS$DETAIL$DISABLED_MANUAL) } : { text: t.disabled_reason } : null;
}
//#endregion
export { a as getDisablementReasonDisplay, r as hasDisablementReason };

//# sourceMappingURL=automation-disabled-reason.js.map