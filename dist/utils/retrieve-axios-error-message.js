import { getUserFacingConnectionErrorMessage as e } from "./user-facing-error.js";
import { isAxiosErrorWithErrorField as t, isAxiosErrorWithMessageField as n } from "./type-guards.js";
//#region src/utils/retrieve-axios-error-message.ts
function r(e) {
	return typeof e == "object" && !!e && "isAxiosError" in e && e.isAxiosError === !0;
}
var i = (i) => {
	let a = null, o = !1;
	return r(i) ? (o = !0, a = t(i) && i.response?.data.error ? i.response?.data.error : n(i) && i.response?.data.message ? i.response?.data.message : i.message) : a = i instanceof Error ? i.message : typeof i == "string" ? i : null, e(o ? a ?? i : i) ?? a ?? "";
};
//#endregion
export { i as retrieveAxiosErrorMessage };

//# sourceMappingURL=retrieve-axios-error-message.js.map