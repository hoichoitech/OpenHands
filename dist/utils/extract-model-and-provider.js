//#region src/utils/extract-model-and-provider.ts
var e = (e) => {
	let [t, ...n] = e.split("/");
	return !t || n.length === 0 ? {
		provider: "",
		model: e,
		separator: ""
	} : {
		provider: t,
		model: n.join("/"),
		separator: "/"
	};
};
//#endregion
export { e as extractModelAndProvider };

//# sourceMappingURL=extract-model-and-provider.js.map