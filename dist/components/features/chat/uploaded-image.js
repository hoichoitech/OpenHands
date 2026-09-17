import { LoaderCircle as e } from "../../../node_modules/lucide-react/dist/esm/icons/loader-circle.js";
import { RemoveFileButton as t } from "./remove-file-button.js";
import { PastedImageUploadAsFileButton as n } from "./pasted-image-upload-as-file-button.js";
import r from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/chat/uploaded-image.tsx
function o({ image: o, onRemove: s, isLoading: c = !1, showUploadAsFileToggle: l = !1, uploadAsFileActive: u = !1, onToggleUploadAsFile: d }) {
	let [f, p] = r.useState("");
	return r.useEffect(() => {
		let e = URL.createObjectURL(o);
		return p(e), () => {
			URL.revokeObjectURL(e);
		};
	}, [o]), /* @__PURE__ */ a("div", {
		className: "group relative flex h-[49px] w-[51px] min-h-[49px] min-w-[51px] items-center justify-center rounded-lg bg-[var(--oh-interactive-hover)]",
		children: [
			c ? /* @__PURE__ */ i(e, {
				className: "animate-spin w-5 h-5",
				color: "white"
			}) : f && /* @__PURE__ */ i("img", {
				src: f,
				alt: o.name,
				className: "h-full w-full rounded-lg object-cover"
			}),
			/* @__PURE__ */ i(t, { onClick: s }),
			l && d && /* @__PURE__ */ i(n, {
				active: u,
				onToggle: d
			})
		]
	});
}
//#endregion
export { o as UploadedImage };

//# sourceMappingURL=uploaded-image.js.map