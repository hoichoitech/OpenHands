import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../node_modules/@openhands/extensions/automations/index.js";
import { getAutomationIcon as i, getAutomationLaunchPrompt as a, getIntegrationIds as o } from "../../../utils/automation-catalog.js";
import { getFeaturedAutomationIds as s } from "../../../manifests/automation-interface.js";
import { extensionModuleCardGridClassName as c, extensionModuleCardGridContainerClassName as l, extensionModuleCardInteractiveClassName as u, extensionModuleCardPillClassName as d, extensionModuleCardSurfaceClassName as f } from "../../../utils/extension-module-card-classes.js";
import { SkillCardPillRow as p } from "../skills/skill-card-pill-row.js";
import m from "../../../node_modules/@openhands/extensions/integrations/index.js";
import { McpLogoBadge as h } from "../mcp-logo-badge.js";
import { findInstalledEntryMatch as g, getMarketplaceEntryById as _, isMcpInstallableEntry as v } from "../../../utils/mcp-marketplace-utils.js";
import { StatusBadge as y } from "./status-badge.js";
import { getAutomationsByPopularity as b } from "../../../utils/recommended-automation-rail.js";
import { McpLogoStackBadge as x } from "../mcp-page/mcp-logo-stack-badge.js";
import { CirclePlusBadge as S } from "../../shared/buttons/circle-plus-check-toggle.js";
import { createElement as C } from "react";
import { Fragment as w, jsx as T, jsxs as E } from "react/jsx-runtime";
//#region src/components/features/automations/recommended-automations-section.tsx
var D = b(r);
function O(e) {
	return s().includes(e.id);
}
function k(e) {
	return o(e).map((e) => {
		let t = _(e, m);
		return {
			id: e,
			entry: t,
			mcpInstallable: !!t && v(t)
		};
	});
}
function A(e, t, n) {
	let r = n.trim().toLowerCase();
	return r ? [
		e.name,
		e.category,
		e.description,
		a(e),
		...t.flatMap(({ entry: e, id: t }) => e ? [
			e.name,
			t,
			...e.keywords ?? []
		] : [t])
	].join(" ").toLowerCase().includes(r) : !0;
}
function j(e, r, i, a) {
	let o = e.map(({ id: e, entry: i, mcpInstallable: o }) => {
		let s = !!i && g(i, r), c = i?.name ?? e;
		return {
			id: `integration-${e}`,
			node: /* @__PURE__ */ E("span", {
				className: n(d, "gap-1"),
				children: [
					/* @__PURE__ */ T(h, {
						entry: i,
						size: "xs"
					}),
					c,
					s ? /* @__PURE__ */ T("span", {
						className: "text-white",
						children: a(t.RECOMMENDED_AUTOMATIONS$CONNECTED)
					}) : i ? o ? null : /* @__PURE__ */ T("span", {
						className: "text-tertiary-alt",
						"data-testid": `automation-integration-external-${e}`,
						children: a(t.RECOMMENDED_AUTOMATIONS$EXTERNAL_SETUP)
					}) : /* @__PURE__ */ T("span", {
						className: "text-tertiary-alt",
						"data-testid": `recommended-automation-integration-${e}`,
						children: a(t.RECOMMENDED_AUTOMATIONS$UNKNOWN_SETUP)
					})
				]
			})
		};
	});
	return i > 0 && o.push({
		id: "missing-connect",
		node: /* @__PURE__ */ T("span", {
			className: d,
			children: a(t.RECOMMENDED_AUTOMATIONS$MISSING_CONNECT, { count: i })
		})
	}), o;
}
function M({ automation: e, integrations: t, size: n, testId: r }) {
	let a = i(e);
	return a ? /* @__PURE__ */ T(h, {
		entry: null,
		size: n,
		testId: r,
		fallback: C(a, {
			className: "h-5 w-5",
			strokeWidth: 2.25
		})
	}) : /* @__PURE__ */ T(x, {
		entries: t.flatMap(({ entry: e }) => e ? [e] : []),
		testId: r
	});
}
function N({ automations: e, installedServers: t, onSelect: r, translate: i }) {
	return /* @__PURE__ */ T("div", {
		className: n("mt-3", c),
		children: e.map((e) => {
			let a = k(e), o = a.filter(({ entry: e, mcpInstallable: n }) => !!e && n && !g(e, t)).length;
			return /* @__PURE__ */ T("button", {
				type: "button",
				"data-testid": `recommended-automation-card-${e.id}`,
				onClick: () => r(e),
				className: n("flex min-w-0 overflow-hidden p-4 text-left", f, u),
				children: /* @__PURE__ */ E("div", {
					className: "flex min-w-0 flex-1 items-start gap-3",
					children: [/* @__PURE__ */ T(M, {
						automation: e,
						integrations: a,
						size: "md",
						testId: `recommended-automation-icon-${e.id}`
					}), /* @__PURE__ */ E("div", {
						className: "flex min-w-0 flex-1 flex-col gap-3",
						children: [
							/* @__PURE__ */ E("header", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ E("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ T("h3", {
										className: "truncate text-sm font-semibold text-white",
										children: e.name
									}), /* @__PURE__ */ T("p", {
										className: "mt-0.5 truncate text-xs text-tertiary-alt",
										children: e.category
									})]
								}), /* @__PURE__ */ T(S, { testId: `recommended-automation-plus-${e.id}` })]
							}),
							/* @__PURE__ */ T("p", {
								className: "line-clamp-2 text-xs leading-relaxed text-tertiary-light",
								children: e.description
							}),
							/* @__PURE__ */ T(p, {
								pills: j(a, t, o, i),
								testId: `recommended-automation-pills-${e.id}`
							})
						]
					})]
				})
			}, e.id);
		})
	});
}
function P({ backendKind: r, installedServers: i, query: a = "", onSelect: o, scrollableGrid: s = !1 }) {
	let { t: c } = e("openhands"), u = D.filter((e) => A(e, k(e), a));
	if (u.length === 0) return null;
	let d = u.filter(O), f = u.filter((e) => !O(e));
	return /* @__PURE__ */ T("section", {
		"data-testid": "recommended-automations-section",
		className: n(s && "flex min-h-0 flex-1 flex-col"),
		children: /* @__PURE__ */ E("div", {
			"data-testid": s ? "recommended-automations-scroll-area" : void 0,
			className: n("mt-3", l, s && "min-h-0 flex-1 overflow-y-auto custom-scrollbar-always"),
			children: [d.length > 0 && /* @__PURE__ */ E(w, { children: [
				/* @__PURE__ */ E("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ T("h2", {
						className: "text-base font-semibold text-foreground",
						children: c(t.RECOMMENDED_AUTOMATIONS$SECTION_TITLE)
					}), /* @__PURE__ */ T(y, { count: d.length })]
				}),
				/* @__PURE__ */ T("p", {
					className: "mt-1 text-sm text-muted",
					children: c(t.RECOMMENDED_AUTOMATIONS$SECTION_DESCRIPTION)
				}),
				/* @__PURE__ */ T(N, {
					automations: d,
					installedServers: i,
					onSelect: o,
					translate: c
				})
			] }), f.length > 0 && /* @__PURE__ */ E("section", {
				"data-testid": "recommended-automations-beta-section",
				className: n(d.length > 0 && "mt-8"),
				children: [/* @__PURE__ */ E("div", {
					"data-testid": "recommended-automations-beta-heading",
					className: "flex items-center",
					children: [/* @__PURE__ */ T("h2", {
						className: "text-base font-semibold text-foreground",
						children: c(t.RECOMMENDED_AUTOMATIONS$BETA_LABEL)
					}), /* @__PURE__ */ T(y, { count: f.length })]
				}), /* @__PURE__ */ T(N, {
					automations: f,
					installedServers: i,
					onSelect: o,
					translate: c
				})]
			})]
		})
	});
}
//#endregion
export { P as RecommendedAutomationsSection };

//# sourceMappingURL=recommended-automations-section.js.map