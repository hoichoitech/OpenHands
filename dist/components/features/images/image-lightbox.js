import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ModalBackdrop as n } from "../../shared/modals/modal-backdrop.js";
import { ModalCloseButton as r } from "../../shared/modals/modal-close-button.js";
import i from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/images/image-lightbox.tsx
function s({ src: s, onClose: c }) {
	let { t: l } = e("openhands");
	return i.useEffect(() => {
		let e = (e) => {
			e.key === "Escape" && (e.stopPropagation(), c());
		};
		return document.addEventListener("keydown", e, !0), () => document.removeEventListener("keydown", e, !0);
	}, [c]), /* @__PURE__ */ a(n, {
		onClose: c,
		closeOnEscape: !1,
		"aria-label": l(t.IMAGE$FULL_SIZE_PREVIEW),
		children: /* @__PURE__ */ o("div", {
			"data-testid": "image-lightbox",
			className: "relative",
			children: [/* @__PURE__ */ a(r, {
				onClose: c,
				testId: "image-lightbox-close",
				className: "bg-black/60 text-white hover:bg-black/80"
			}), /* @__PURE__ */ a("img", {
				src: s,
				alt: l(t.IMAGE$FULL_SIZE_PREVIEW),
				className: "max-h-[90vh] max-w-[90vw] rounded-lg object-contain"
			})]
		})
	});
}
//#endregion
export { s as ImageLightbox };

//# sourceMappingURL=image-lightbox.js.map