//#region src/utils/settings-value-pickers.ts
var e = (...e) => e.find((e) => typeof e == "boolean"), t = (...e) => e.find((e) => typeof e == "number"), n = (...e) => {
	for (let t of e) {
		if (typeof t == "string") return t;
		if (t === null) return null;
	}
};
//#endregion
export { e as pickFirstBoolean, t as pickFirstNumber, n as pickNullableString };

//# sourceMappingURL=settings-value-pickers.js.map