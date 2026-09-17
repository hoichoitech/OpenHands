import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/features/chat/components/hidden-file-input.tsx
function t({ fileInputRef: t, onChange: n }) {
	return /* @__PURE__ */ e("input", {
		type: "file",
		ref: t,
		multiple: !0,
		accept: "*/*",
		className: "hidden",
		onChange: n,
		"data-testid": "upload-image-input"
	});
}
//#endregion
export { t as HiddenFileInput };

//# sourceMappingURL=hidden-file-input.js.map