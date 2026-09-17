import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { getAutomationIcon as r, getIntegrationIds as i } from "../../../utils/automation-catalog.js";
import { readScrollFadeState as a } from "../../../utils/scroll-fade-state.js";
import { extensionModuleCardInteractiveClassName as o, extensionModuleCardSurfaceClassName as s } from "../../../utils/extension-module-card-classes.js";
import c from "../../../node_modules/@openhands/extensions/integrations/index.js";
import { McpLogoBadge as l } from "../mcp-logo-badge.js";
import { getMarketplaceEntryById as u } from "../../../utils/mcp-marketplace-utils.js";
import { flattenRecommendedRailGroups as d, getRecommendedRailGroups as f } from "../../../utils/recommended-automation-rail.js";
import { useDragScroll as p } from "../../../hooks/use-drag-scroll.js";
import { AUTOMATION_STACK_SECTION_BOTTOM_CLASS as m } from "../../../utils/automation-stack-section.js";
import { createElement as h, useCallback as g, useLayoutEffect as _, useRef as v, useState as y } from "react";
import { jsx as b, jsxs as x } from "react/jsx-runtime";
//#region src/components/features/automations/recommended-automations-rail.tsx
var S = "flex h-10 items-start";
function C(e) {
	return i(e).flatMap((e) => {
		let t = u(e, c);
		return t ? [t] : [];
	});
}
function w({ automation: e, entries: t, testId: i }) {
	let a = t.slice(0, 4), o = a.length > 1, s = r(e);
	return /* @__PURE__ */ b("span", {
		"aria-hidden": "true",
		"data-testid": i,
		"data-layout": o && !s ? "overlap" : void 0,
		className: n(S, o && !s && "-space-x-2"),
		children: s ? /* @__PURE__ */ b(l, {
			entry: null,
			size: "base",
			fallback: h(s, {
				className: "h-5 w-5",
				strokeWidth: 2.25
			})
		}) : a.length === 0 ? /* @__PURE__ */ b(l, {
			entry: null,
			size: "base"
		}) : a.map((e) => /* @__PURE__ */ b(l, {
			entry: e,
			size: "base",
			className: o ? "ring-2 ring-[var(--oh-color-base-secondary)]" : void 0
		}, e.id))
	});
}
function T({ installedAutomations: r, onSelect: i, className: c }) {
	let { t: l } = e("openhands"), u = d(f(r)), h = v(null), { handleMouseDown: S, handleClickCapture: T, handleDragStart: E } = p(h), [D, O] = y({
		left: !1,
		right: !1
	}), k = g(() => {
		let e = h.current;
		if (!e) return;
		let t = a(e);
		O((e) => e.left === t.left && e.right === t.right ? e : t);
	}, []);
	return _(() => {
		k();
		let e = h.current;
		if (!e) return;
		let t = new ResizeObserver(k);
		return t.observe(e), Array.from(e.children).forEach((e) => {
			t.observe(e);
		}), () => t.disconnect();
	}, [k, u.map((e) => e.id).join(",")]), u.length === 0 ? null : /* @__PURE__ */ x("section", {
		"data-testid": "recommended-automations-rail",
		"aria-label": l(t.RECOMMENDED_AUTOMATIONS$SECTION_LABEL),
		className: n("w-full", m, c),
		children: [/* @__PURE__ */ b("h2", {
			className: "mb-2 text-sm font-medium text-[var(--oh-foreground)]",
			children: l(t.RECOMMENDED_AUTOMATIONS$SECTION_LABEL)
		}), /* @__PURE__ */ x("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ b("div", {
					ref: h,
					role: "list",
					"data-testid": "recommended-automations-rail-scroll",
					onScroll: k,
					onMouseDown: S,
					onClickCapture: T,
					onDragStart: E,
					className: "flex flex-nowrap gap-3 overflow-x-auto scrollbar-hide select-none",
					children: u.map((e) => /* @__PURE__ */ b("div", {
						role: "listitem",
						children: /* @__PURE__ */ x("button", {
							type: "button",
							"data-testid": `recommended-automation-rail-card-${e.id}`,
							onClick: () => i(e),
							className: n("flex w-[220px] shrink-0 flex-col gap-3 p-3 text-left", s, o),
							children: [/* @__PURE__ */ b(w, {
								automation: e,
								entries: C(e),
								testId: `recommended-automation-rail-icon-${e.id}`
							}), /* @__PURE__ */ x("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ b("h3", {
									className: "truncate text-sm font-semibold text-white",
									children: e.name
								}), /* @__PURE__ */ b("p", {
									className: "mt-0.5 line-clamp-2 text-xs leading-relaxed text-tertiary-light",
									children: e.description
								})]
							})]
						})
					}, e.id))
				}),
				/* @__PURE__ */ b("div", {
					"aria-hidden": !0,
					"data-testid": "recommended-automations-rail-fade-left",
					"data-visible": D.left ? "true" : "false",
					className: n("pointer-events-none absolute inset-y-0 left-0 z-10 w-10", "bg-gradient-to-r from-[var(--oh-scroll-fade-from,var(--oh-color-base))] to-transparent", "transition-opacity duration-300 ease-out motion-reduce:transition-none", D.left ? "opacity-100" : "opacity-0")
				}),
				/* @__PURE__ */ b("div", {
					"aria-hidden": !0,
					"data-testid": "recommended-automations-rail-fade-right",
					"data-visible": D.right ? "true" : "false",
					className: n("pointer-events-none absolute inset-y-0 right-0 z-10 w-10", "bg-gradient-to-l from-[var(--oh-scroll-fade-from,var(--oh-color-base))] to-transparent", "transition-opacity duration-300 ease-out motion-reduce:transition-none", D.right ? "opacity-100" : "opacity-0")
				})
			]
		})]
	});
}
//#endregion
export { T as RecommendedAutomationsRail };

//# sourceMappingURL=recommended-automations-rail.js.map