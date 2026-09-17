import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { NavigationLink as r } from "../navigation-link.js";
import i from "../../../assets/branding/openhands-logo.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/shared/buttons/openhands-logo-button.tsx
var o = 46, s = 30;
function c({ className: c, logoClassName: l, logoWidth: u = o, logoHeight: d = s } = {}) {
	let { t: f } = e("openhands");
	return /* @__PURE__ */ a(r, {
		to: "/conversations",
		"aria-label": f(t.BRANDING$OPENHANDS_LOGO),
		className: n(c),
		children: /* @__PURE__ */ a(i, {
			width: u,
			height: d,
			className: n("shrink-0", l)
		})
	});
}
//#endregion
export { c as OpenHandsLogoButton };

//# sourceMappingURL=openhands-logo-button.js.map