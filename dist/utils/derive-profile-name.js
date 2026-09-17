//#region src/utils/derive-profile-name.ts
var e = /^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/;
function t(t, { isRequired: n = !1 } = {}) {
	return t === "" ? !n : e.test(t);
}
//#endregion
export { t as isProfileNameValid };

//# sourceMappingURL=derive-profile-name.js.map