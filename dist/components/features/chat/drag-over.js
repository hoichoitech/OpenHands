import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import n from "../../../icons/image.js";
import r from "../../../icons/arrow-down-curve.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/chat/drag-over.tsx
function o() {
	let { t: o } = e("openhands");
	return /* @__PURE__ */ i("div", {
		className: "drag-over",
		children: /* @__PURE__ */ a("div", {
			className: "drag-over-content-wrapper",
			children: [/* @__PURE__ */ a("div", {
				className: "relative",
				children: [/* @__PURE__ */ i(n, {
					width: 36,
					height: 36,
					className: "rotate-[-27deg] absolute top-[-40px] left-[-10px]"
				}), /* @__PURE__ */ i(r, {
					width: 16,
					height: 16,
					className: "absolute top-[-16px] left-[-20px]"
				})]
			}), /* @__PURE__ */ i("div", {
				className: "drag-over-content",
				children: /* @__PURE__ */ i("p", { children: o(t.COMMON$DROP_YOUR_FILES_HERE) })
			})]
		})
	});
}
//#endregion
export { o as DragOver };

//# sourceMappingURL=drag-over.js.map