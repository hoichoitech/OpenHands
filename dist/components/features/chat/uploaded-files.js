import { useConversationStore as e } from "../../../stores/conversation-store.js";
import { UploadedFile as t } from "./uploaded-file.js";
import { UploadedImage as n } from "./uploaded-image.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/chat/uploaded-files.tsx
function a() {
	let { images: a, files: o, loadingFiles: s, loadingImages: c, imagesMarkedUploadAsFile: l, removeFile: u, removeImage: d, toggleImageUploadAsFile: f } = e(), p = (e) => {
		u(e);
	}, m = (e) => {
		d(e);
	};
	return a.length === 0 && o.length === 0 && s.length === 0 && c.length === 0 ? null : /* @__PURE__ */ r("div", {
		className: "flex w-full flex-col gap-2 pb-4",
		children: /* @__PURE__ */ i("div", {
			className: "flex w-full items-center gap-4 overflow-x-auto custom-scrollbar",
			children: [
				o.map((e, n) => /* @__PURE__ */ r(t, {
					file: e,
					onRemove: () => p(n),
					isLoading: s.includes(e.name)
				}, `file-${n}-${e.name}`)),
				s.map((e, n) => /* @__PURE__ */ r(t, {
					file: new File([], e),
					onRemove: () => {},
					isLoading: !0
				}, `loading-file-${n}-${e}`)),
				a.map((e, t) => /* @__PURE__ */ r(n, {
					image: e,
					onRemove: () => m(t),
					isLoading: c.includes(e.name),
					showUploadAsFileToggle: !0,
					uploadAsFileActive: l.includes(e.name),
					onToggleUploadAsFile: () => f(e.name)
				}, `image-${t}-${e.name}`)),
				c.map((e, t) => /* @__PURE__ */ r(n, {
					image: new File([], e),
					onRemove: () => {},
					isLoading: !0,
					showUploadAsFileToggle: !0,
					uploadAsFileActive: l.includes(e),
					onToggleUploadAsFile: () => f(e)
				}, `loading-image-${t}-${e}`))
			]
		})
	});
}
//#endregion
export { a as UploadedFiles };

//# sourceMappingURL=uploaded-files.js.map