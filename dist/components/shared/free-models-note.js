import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { Info as n } from "../../node_modules/lucide-react/dist/esm/icons/info.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/shared/free-models-note.tsx
function a({ modelIds: a }) {
	let { t: o } = e("openhands");
	return /* @__PURE__ */ i("p", {
		"data-testid": "openhands-free-models-note",
		className: "flex items-start gap-2 text-xs text-warning",
		children: [/* @__PURE__ */ r(n, {
			className: "mt-0.5 size-4 shrink-0 text-warning",
			"aria-hidden": !0
		}), /* @__PURE__ */ r("span", { children: o(t.SETTINGS$OPENHANDS_FREE_MODELS_NOTE, { ids: [...a].join(", ") }) })]
	});
}
//#endregion
export { a as FreeOpenHandsModelsNote };

//# sourceMappingURL=free-models-note.js.map