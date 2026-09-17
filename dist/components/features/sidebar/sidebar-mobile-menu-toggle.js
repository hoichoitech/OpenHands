import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { mobileTopBarIconButtonClassName as n, mobileTopBarIconClassName as r } from "../../../utils/mobile-top-bar-icon-button-classes.js";
import i from "../../../icons/block-drawer-left.js";
import { useSidebarMobileNav as a } from "./sidebar-mobile-nav-context.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-mobile-menu-toggle.tsx
function s() {
	let { t: s } = e("openhands"), { isOpen: c, toggle: l } = a();
	return /* @__PURE__ */ o("button", {
		type: "button",
		"data-testid": "sidebar-mobile-menu-toggle",
		onClick: l,
		"aria-expanded": c,
		"aria-label": s(c ? t.SIDEBAR$CLOSE_MENU : t.SIDEBAR$OPEN_MENU),
		className: n,
		children: /* @__PURE__ */ o(i, {
			className: r,
			"aria-hidden": !0
		})
	});
}
//#endregion
export { s as SidebarMobileMenuToggle };

//# sourceMappingURL=sidebar-mobile-menu-toggle.js.map