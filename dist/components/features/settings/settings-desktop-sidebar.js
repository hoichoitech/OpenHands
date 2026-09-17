import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { Typography as r } from "../../../ui/typography.js";
import { SidebarNavLink as i } from "../sidebar/sidebar-nav-link.js";
import { AgentCanvasUpdateCard as a } from "./agent-canvas-update-card.js";
import { BackendSyncedSettingsBadge as o } from "./backend-synced-settings-badge.js";
import { CloudSettingsLink as s } from "./cloud-settings-link.js";
import { IntegrationsSettingsLink as c } from "./integrations-settings-link.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/settings/settings-desktop-sidebar.tsx
function d({ navigationItems: d }) {
	let { t: f } = e("openhands"), p = d.filter((e) => e.type === "item");
	return /* @__PURE__ */ u("aside", {
		"data-testid": "settings-navbar-desktop",
		className: n("hidden md:flex md:w-[260px] md:shrink-0 md:flex-col md:gap-2", "md:sticky md:top-8 md:self-start md:pl-8"),
		children: [
			/* @__PURE__ */ l(r.Text, {
				className: "px-2 text-sm font-normal text-white",
				children: f(t.SETTINGS$TITLE)
			}),
			/* @__PURE__ */ u("div", {
				className: "flex flex-col gap-0.5 pt-0.5",
				children: [
					p.map((e) => /* @__PURE__ */ l(i, {
						to: e.item.to,
						label: f(e.item.text),
						end: !0,
						testId: `sidebar-settings-${e.item.to}`,
						icon: e.item.icon
					}, e.item.to)),
					/* @__PURE__ */ l(c, {}),
					/* @__PURE__ */ l(s, {})
				]
			}),
			/* @__PURE__ */ l("div", {
				className: "flex flex-col gap-2 px-2 pt-3",
				children: /* @__PURE__ */ l(a, {})
			}),
			/* @__PURE__ */ l("div", {
				className: "px-2 pt-3",
				children: /* @__PURE__ */ l(o, {})
			})
		]
	});
}
//#endregion
export { d as SettingsDesktopSidebar };

//# sourceMappingURL=settings-desktop-sidebar.js.map