import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { Typography as r } from "../../../ui/typography.js";
import i from "../../../icons/settings-gear.js";
import a from "../../../icons/close.js";
import { navInteractiveTransitionClassName as o } from "../sidebar/sidebar-layout.js";
import { AgentCanvasUpdateCard as s } from "./agent-canvas-update-card.js";
import { BackendSyncedSettingsBadge as c } from "./backend-synced-settings-badge.js";
import { CloudSettingsLink as l } from "./cloud-settings-link.js";
import { IntegrationsSettingsLink as u } from "./integrations-settings-link.js";
import { SettingsNavHeader as d } from "./settings-nav-header.js";
import { SettingsNavDivider as f } from "./settings-nav-divider.js";
import { SettingsNavLink as p } from "./settings-nav-link.js";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/settings/settings-mobile-drawer.tsx
function _({ isMobileMenuOpen: _, onCloseMobileMenu: v, navigationItems: y }) {
	let { t: b } = e("openhands");
	return /* @__PURE__ */ g(m, { children: [_ && /* @__PURE__ */ h("div", {
		className: "fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden",
		onClick: v
	}), /* @__PURE__ */ g("nav", {
		"data-testid": "settings-navbar",
		className: n("flex flex-col gap-6 transition-transform duration-300 ease-in-out", "fixed inset-0 z-50 w-full bg-[var(--oh-surface-deep)] p-4 transform md:hidden", _ ? "translate-x-0" : "-translate-x-full"),
		children: [
			/* @__PURE__ */ g("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ g("div", {
					className: "ml-1 flex items-center gap-2 sm:ml-4.5",
					children: [/* @__PURE__ */ h(i, {
						width: 16,
						height: 16
					}), /* @__PURE__ */ h(r.H2, { children: b(t.SETTINGS$TITLE) })]
				}), /* @__PURE__ */ h("button", {
					type: "button",
					onClick: v,
					className: n("cursor-pointer rounded-md p-0.5 hover:bg-tertiary md:hidden", o),
					"aria-label": b(t.SIDEBAR$CLOSE_MENU),
					children: /* @__PURE__ */ h(a, {
						width: 32,
						height: 32
					})
				})]
			}),
			/* @__PURE__ */ g("div", {
				className: "flex flex-col gap-2",
				children: [
					y.map((e, t) => e.type === "header" ? /* @__PURE__ */ h(d, { text: e.text }, `header-${e.text}`) : e.type === "divider" ? /* @__PURE__ */ h(f, {}, `divider-${t}`) : /* @__PURE__ */ h(p, {
						item: e.item,
						onClick: v
					}, e.item.to)),
					/* @__PURE__ */ h(u, {}),
					/* @__PURE__ */ h(l, {})
				]
			}),
			/* @__PURE__ */ h("div", {
				className: "flex flex-col gap-2 px-2 pt-3",
				children: /* @__PURE__ */ h(s, {})
			}),
			/* @__PURE__ */ h("div", {
				className: "px-2 pt-3",
				children: /* @__PURE__ */ h(c, {})
			})
		]
	})] });
}
//#endregion
export { _ as SettingsMobileDrawer };

//# sourceMappingURL=settings-mobile-drawer.js.map