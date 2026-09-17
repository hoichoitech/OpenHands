import { useCallback as e, useEffect as t, useRef as n, useState as r } from "react";
//#region src/hooks/chat/use-file-handling.ts
var i = (i) => {
	let a = n(null), o = n(null), [s, c] = r(!1), l = e((e, t) => {
		i && e.length > 0 && i(e, t);
	}, [i]);
	return t(() => {
		let e = (e) => {
			let t = e.detail.files;
			t && t.length > 0 && l(t, { fromPaste: !0 });
		};
		return document.addEventListener("pasteFiles", e), () => {
			document.removeEventListener("pasteFiles", e);
		};
	}, [l]), {
		fileInputRef: a,
		chatContainerRef: o,
		isDragOver: s,
		handleFileIconClick: e((e) => {
			!e && a.current && a.current.click();
		}, []),
		handleFileInputChange: e((e) => {
			l(Array.from(e.target.files || []));
		}, [l]),
		handleDragOver: e((e, t) => {
			t || (e.preventDefault(), c(!0));
		}, []),
		handleDragLeave: e((e, t) => {
			t || o.current?.contains(e.relatedTarget) || (e.preventDefault(), c(!1));
		}, []),
		handleDrop: e((e, t) => {
			t || (e.preventDefault(), c(!1), l(Array.from(e.dataTransfer.files)));
		}, [l])
	};
};
//#endregion
export { i as useFileHandling };

//# sourceMappingURL=use-file-handling.js.map