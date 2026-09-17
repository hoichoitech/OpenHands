//#region src/utils/convert-image-to-base-64.ts
var e = (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onloadend = () => {
		t(r.result);
	}, r.onerror = n, r.readAsDataURL(e);
});
//#endregion
export { e as convertImageToBase64 };

//# sourceMappingURL=convert-image-to-base-64.js.map