//#region src/utils/file-processing.ts
var e = async (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => {
		t();
	}, r.onerror = () => {
		n(/* @__PURE__ */ Error(`Failed to read file: ${e.name}`));
	}, r.onabort = () => {
		n(/* @__PURE__ */ Error(`File reading was aborted: ${e.name}`));
	}, r.readAsArrayBuffer(e);
}), t = async (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => {
		t();
	}, r.onerror = () => {
		n(/* @__PURE__ */ Error(`Failed to read image: ${e.name}`));
	}, r.onabort = () => {
		n(/* @__PURE__ */ Error(`Image reading was aborted: ${e.name}`));
	}, r.readAsDataURL(e);
}), n = async (t) => {
	let n = await Promise.allSettled(t.map(async (t) => (await e(t), t))), r = [], i = [];
	return n.forEach((e, n) => {
		e.status === "fulfilled" ? r.push(e.value) : i.push({
			file: t[n],
			error: e.reason
		});
	}), {
		successful: r,
		failed: i
	};
}, r = async (e) => {
	let n = await Promise.allSettled(e.map(async (e) => (await t(e), e))), r = [], i = [];
	return n.forEach((t, n) => {
		t.status === "fulfilled" ? r.push(t.value) : i.push({
			file: e[n],
			error: t.reason
		});
	}), {
		successful: r,
		failed: i
	};
};
//#endregion
export { n as processFiles, r as processImages };

//# sourceMappingURL=file-processing.js.map