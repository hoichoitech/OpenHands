import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Blocks as n } from "../../../node_modules/lucide-react/dist/esm/icons/blocks.js";
import { ExternalLink as r } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { cn as i } from "../../../utils/utils.js";
import { isNoBackend as a } from "../../../api/backend-registry/active-store.js";
import { useActiveBackendContext as o } from "../../../contexts/active-backend-context.js";
import { NavigationLink as s } from "../../shared/navigation-link.js";
import c from "../../../icons/skills.js";
import { SIDEBAR_ROW_INTERACTIVE_CLASS as l, sidebarNavRowClassName as u } from "../sidebar/sidebar-layout.js";
import { BackendSyncedSettingsBadge as d } from "../settings/backend-synced-settings-badge.js";
import f from "../../../icons/server-process.js";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/skills/extensions-navigation.tsx
var h = "/skills", g = new Set(["/plugins", "/apps"]), _ = [
	{
		to: "/mcp",
		label: "MCP Servers",
		icon: /* @__PURE__ */ p(f, {
			width: 16,
			height: 16
		}),
		end: !0
	},
	{
		to: "/skills",
		label: "Skills",
		icon: /* @__PURE__ */ p(c, {
			width: 16,
			height: 16,
			"aria-hidden": "true"
		}),
		end: !0
	},
	{
		to: "/plugins",
		label: "Plugins",
		icon: /* @__PURE__ */ m("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			width: 16,
			height: 16,
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ p("path", { d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" }),
				/* @__PURE__ */ p("path", { d: "m3.3 7 8.7 5 8.7-5" }),
				/* @__PURE__ */ p("path", { d: "M12 22V12" })
			]
		}),
		end: !0
	},
	{
		to: "/apps",
		label: "Apps",
		icon: /* @__PURE__ */ p(n, {
			width: 16,
			height: 16,
			"aria-hidden": "true"
		}),
		end: !0
	}
];
function v() {
	let { t: n } = e("openhands"), { active: c } = o(), { backend: f } = c, v = !a(f) && f.kind === "cloud";
	return /* @__PURE__ */ m("aside", {
		"data-testid": "extensions-navbar-desktop",
		className: "hidden md:flex md:w-[260px] md:shrink-0 md:flex-col md:gap-2 md:sticky md:top-8 md:self-start",
		children: [
			/* @__PURE__ */ p("span", {
				className: "px-2 text-sm font-normal text-white",
				children: n(t.NAV$CUSTOMIZE)
			}),
			/* @__PURE__ */ p("div", {
				className: "flex flex-col gap-0.5 pt-0.5",
				children: _.filter((e) => !(g.has(e.to) && v)).map((e) => {
					let a = e.to === h && v, o = /* @__PURE__ */ p("span", {
						className: "shrink-0 flex items-center justify-center",
						children: e.icon
					}), c = /* @__PURE__ */ p("span", {
						className: "truncate",
						children: a ? n(t.SIDEBAR$SKILLS_AND_PLUGINS_CLOUD_LINK) : e.label
					}), d = e.comingSoon && /* @__PURE__ */ p("span", {
						className: "ml-auto shrink-0 rounded-full border border-white/20 bg-white/5 px-1.5 py-0.5 text-[10px] font-medium text-[var(--oh-text-dim)]",
						children: n(t.NAV$COMING_SOON)
					});
					if (a) {
						let t = `${f.host.replace(/\/+$/, "")}/settings/skills`;
						return /* @__PURE__ */ m("a", {
							"data-testid": `sidebar-extensions-${e.to}`,
							href: t,
							target: "_blank",
							rel: "noopener noreferrer",
							className: i(u(), "truncate", l.idle),
							children: [
								o,
								c,
								/* @__PURE__ */ p(r, {
									className: "ml-auto size-4 shrink-0 text-[var(--oh-muted)]",
									"aria-hidden": !0
								})
							]
						}, e.to);
					}
					return /* @__PURE__ */ m(s, {
						to: e.to,
						end: e.end,
						"data-testid": `sidebar-extensions-${e.to}`,
						className: ({ isActive: e }) => i(u(), "truncate", e ? l.active : l.idle),
						children: [
							o,
							c,
							d
						]
					}, e.to);
				})
			}),
			/* @__PURE__ */ p("div", {
				className: "px-2 pt-3",
				children: /* @__PURE__ */ p(d, {})
			})
		]
	});
}
//#endregion
export { v as ExtensionsNavigation };

//# sourceMappingURL=extensions-navigation.js.map