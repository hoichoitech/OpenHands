import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { RemoveButton as n } from "../../shared/buttons/remove-button.js";
import { ImageLightbox as r } from "./image-lightbox.js";
import { Thumbnail as i } from "./thumbnail.js";
import a from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/images/image-preview.tsx
function c({ src: c, onRemove: l, size: u = "small" }) {
	let { t: d } = e("openhands"), [f, p] = a.useState(!1);
	return /* @__PURE__ */ s("div", {
		"data-testid": "image-preview",
		className: "relative w-fit shrink-0 py-1",
		children: [
			/* @__PURE__ */ o("button", {
				type: "button",
				"data-testid": "expand-image-button",
				"aria-label": d(t.BUTTON$VIEW_FULL_SIZE_IMAGE),
				onClick: () => p(!0),
				className: "block cursor-zoom-in rounded-sm transition-opacity hover:opacity-80",
				children: /* @__PURE__ */ o(i, {
					src: c,
					size: u
				})
			}),
			l && /* @__PURE__ */ o(n, {
				onClick: l,
				"aria-label": d(t.BUTTON$REMOVE_IMAGE),
				className: "absolute right-[3px] top-[3px] cursor-pointer"
			}),
			f && /* @__PURE__ */ o(r, {
				src: c,
				onClose: () => p(!1)
			})
		]
	});
}
//#endregion
export { c as ImagePreview };

//# sourceMappingURL=image-preview.js.map