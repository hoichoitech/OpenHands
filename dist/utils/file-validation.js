//#region src/utils/file-validation.ts
var e = 3 * 1024 * 1024, t = 3 * 1024 * 1024;
function n(t) {
	let n = t.filter((t) => t.size > e);
	if (n.length > 0) {
		let e = n.map((e) => e.name);
		return {
			isValid: !1,
			errorMessage: `Files exceeding 3MB are not allowed: ${e.join(", ")}`,
			oversizedFiles: e
		};
	}
	return { isValid: !0 };
}
function r(e, n = []) {
	let r = n.reduce((e, t) => e + t.size, 0) + e.reduce((e, t) => e + t.size, 0);
	return r > t ? {
		isValid: !1,
		errorMessage: `Total file size would be ${(r / (1024 * 1024)).toFixed(1)}MB, exceeding the 3MB limit. Please select fewer or smaller files.`
	} : { isValid: !0 };
}
function i(e, t = []) {
	let i = n(e);
	return i.isValid ? r(e, t) : i;
}
//#endregion
export { i as validateFiles };

//# sourceMappingURL=file-validation.js.map