import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/settings/optional-tag.tsx
function r() {
	let { t: r } = e("openhands");
	return /* @__PURE__ */ n("span", {
		className: "text-xs text-tertiary-alt",
		children: r(t.COMMON$OPTIONAL)
	});
}
//#endregion
export { r as OptionalTag };

//# sourceMappingURL=optional-tag.js.map