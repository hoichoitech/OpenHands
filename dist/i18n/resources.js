import e from "./translation.js";
var t = /* @__PURE__ */ ((e) => {
	let t = {};
	return Object.entries(e).forEach(([e, n]) => {
		Object.entries(n).forEach(([n, r]) => {
			typeof r == "string" && (t[n] || (t[n] = {}), t[n][e] = r);
		});
	}), t;
})(e);
//#endregion
export { t as translationResources };

//# sourceMappingURL=resources.js.map