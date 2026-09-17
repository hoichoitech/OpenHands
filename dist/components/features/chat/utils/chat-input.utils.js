//#region src/components/features/chat/utils/chat-input.utils.ts
var e = {
	"image/png": "png",
	"image/jpeg": "jpg",
	"image/jpg": "jpg",
	"image/gif": "gif",
	"image/webp": "webp",
	"image/bmp": "bmp"
};
function t(t) {
	if (t.name.trim()) return t;
	let n = e[t.type] ?? (t.type.startsWith("image/") ? "png" : "bin");
	return new File([t], `pasted-image-${Date.now()}.${n}`, {
		type: t.type,
		lastModified: t.lastModified
	});
}
function n(e, t) {
	let n = new Set(t), r = [], i = [];
	for (let t of e) n.has(t.name) ? i.push(t) : r.push(t);
	return {
		imagesToEmbed: r,
		imagesAsFiles: i
	};
}
function r(e) {
	let n = Array.from(e.files);
	if (n.length > 0) return n.map(t);
	let r = [];
	for (let n = 0; n < e.items.length; n += 1) {
		let i = e.items[n];
		if (i.kind !== "file") continue;
		let a = i.getAsFile();
		a && r.push(t(a));
	}
	return r;
}
var i = (e) => e ? (e.innerText || e.textContent || "").trim() === "" : !0, a = (e) => {
	e && i(e) && (e.innerHTML = "", e.textContent = "");
}, o = (e) => e?.innerText || "", s = (e) => {
	e && (e.textContent = "");
}, c = (e) => {
	e && (e.value = "");
}, l = (e) => {
	if (!e) return;
	let t = window.getSelection();
	if (!t || t.rangeCount === 0) return;
	let n = t.getRangeAt(0);
	if (!n.getBoundingClientRect || !e.getBoundingClientRect) return;
	let r = n.getBoundingClientRect(), i = e.getBoundingClientRect();
	r.bottom > i.bottom && (e.scrollTop = e.scrollHeight - e.clientHeight);
}, u = (e) => {
	if (!e) return;
	e.focus();
	let t = window.getSelection();
	if (!t) return;
	let n = document.createRange();
	n.selectNodeContents(e), n.collapse(!1), t.removeAllRanges(), t.addRange(n), l(e);
};
//#endregion
export { a as clearEmptyContent, c as clearFileInput, s as clearTextContent, l as ensureCursorVisible, u as focusContentEditableAtEnd, r as getClipboardFiles, o as getTextContent, i as isContentEmpty, n as partitionImagesForUpload };

//# sourceMappingURL=chat-input.utils.js.map