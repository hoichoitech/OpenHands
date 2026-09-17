import { SettingsDesktopSidebar as e } from "./settings-desktop-sidebar.js";
import { settingsLayoutMainScrollClassName as t } from "../../../utils/settings-like-page-layout-classes.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/settings/settings-layout.tsx
function i({ children: i, navigationItems: a }) {
	return /* @__PURE__ */ n("div", {
		className: "flex h-full flex-col md:pt-8",
		children: /* @__PURE__ */ r("div", {
			className: "flex min-h-0 flex-1 gap-10 md:items-start",
			children: [/* @__PURE__ */ n(e, { navigationItems: a }), /* @__PURE__ */ n("main", {
				className: t,
				children: /* @__PURE__ */ n("div", {
					className: "mx-auto w-full min-w-0 max-w-[800px]",
					children: i
				})
			})]
		})
	});
}
//#endregion
export { i as SettingsLayout };

//# sourceMappingURL=settings-layout.js.map