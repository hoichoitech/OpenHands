import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Check as n } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { ChevronDown as r } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { cn as i } from "../../../utils/utils.js";
import { useTracking as a } from "../../../hooks/use-tracking.js";
import { tooltip_default as o } from "../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import { NavigationLink as s } from "../../shared/navigation-link.js";
import { SIDEBAR_ONBOARDING_CHECKLIST_DESTINATION_TYPES as c, SIDEBAR_ONBOARDING_CHECKLIST_I18N_KEYS as l, SIDEBAR_ONBOARDING_CHECKLIST_LINK_IDS as u, getSidebarOnboardingChecklistHref as d, isExternalSidebarOnboardingChecklistItem as f } from "./sidebar-onboarding-checklist.constants.js";
import { SidebarOnboardingChecklistItemPreview as p } from "./sidebar-onboarding-checklist-item-preview.js";
import { useSidebarOnboardingChecklist as m } from "./use-sidebar-onboarding-checklist.js";
import { Fragment as h, jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-onboarding-checklist.tsx
var v = "rounded-xl border border-[var(--oh-border)] bg-base-secondary p-0 text-white shadow-xl", y = i("flex min-w-0 w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm", "transition-colors hover:bg-[var(--oh-surface)]");
function b({ isComplete: e }) {
	return /* @__PURE__ */ g("span", {
		"aria-hidden": !0,
		className: i("inline-flex size-4 shrink-0 items-center justify-center rounded-full border", e ? "border-primary bg-primary text-[var(--oh-color-base)]" : "border-[var(--oh-border)] bg-transparent"),
		children: e ? /* @__PURE__ */ g(n, {
			className: "size-2.5",
			strokeWidth: 3
		}) : null
	});
}
function x({ id: t, isComplete: n, onActivate: r }) {
	let { t: f } = e("openhands"), { trackOnboardingLinkClicked: m } = a(), x = l[t], S = d(t), C = u[t], w = () => {
		m({
			linkId: C,
			destinationType: c[t],
			surface: "landing_checklist",
			checklistItem: C,
			isExternal: S.kind === "external"
		}), r?.();
	}, T = () => {
		m({
			linkId: "open_docs",
			destinationType: "documentation",
			surface: "landing_checklist",
			checklistItem: C,
			isExternal: !0
		});
	}, E = i(y, n ? "text-muted" : "text-content"), D = /* @__PURE__ */ _(h, { children: [/* @__PURE__ */ g(b, { isComplete: n }), /* @__PURE__ */ g("span", {
		className: i("min-w-0 flex-1 truncate", n && "line-through"),
		children: f(x)
	})] });
	return /* @__PURE__ */ g("li", { children: /* @__PURE__ */ g(o, {
		placement: "right-start",
		delay: 0,
		closeDelay: 100,
		disableAnimation: !1,
		className: v,
		content: /* @__PURE__ */ g(p, {
			id: t,
			onActionClick: w,
			onDocsClick: T
		}),
		children: S.kind === "external" ? /* @__PURE__ */ g("a", {
			href: S.href,
			target: "_blank",
			rel: "noreferrer",
			"data-testid": `sidebar-onboarding-checklist-item-${t}`,
			className: E,
			onClick: w,
			children: D
		}) : /* @__PURE__ */ g(s, {
			to: S.href,
			"data-testid": `sidebar-onboarding-checklist-item-${t}`,
			className: E,
			onClick: w,
			children: D
		})
	}) });
}
function S({ collapsed: n }) {
	let { t: a } = e("openhands"), { items: o, completedCount: s, isVisible: c, isMinimized: l, toggleMinimized: u, markJoinSlackComplete: d } = m();
	return n || !c ? null : /* @__PURE__ */ _("div", {
		"data-testid": "sidebar-onboarding-checklist",
		"data-minimized": l ? "true" : "false",
		className: i("w-full shrink-0 overflow-hidden rounded-xl border border-[var(--oh-border)]", "bg-[var(--oh-surface-raised)] shadow-sm"),
		children: [/* @__PURE__ */ g("div", {
			className: i("px-1", l ? "py-1" : "pt-2 pb-1"),
			children: /* @__PURE__ */ _("div", {
				className: i("relative flex w-full items-center gap-0.5 rounded-md px-1.5", "transition-colors hover:bg-[var(--oh-surface)]", l ? "py-1" : "py-1.5"),
				children: [
					/* @__PURE__ */ g("button", {
						type: "button",
						"data-testid": "sidebar-onboarding-checklist-toggle",
						"aria-expanded": !l,
						"aria-label": a(l ? t.SIDEBAR$ONBOARDING_CHECKLIST_EXPAND : t.SIDEBAR$ONBOARDING_CHECKLIST_COLLAPSE),
						onClick: u,
						className: "absolute inset-0 z-0 cursor-pointer rounded-md"
					}),
					/* @__PURE__ */ g("div", {
						className: "relative z-10 min-w-0 flex-1 px-0.5 pointer-events-none",
						children: /* @__PURE__ */ _("div", {
							className: "flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5",
							children: [/* @__PURE__ */ g("span", {
								className: "text-sm font-semibold text-content",
								children: a(t.SIDEBAR$ONBOARDING_CHECKLIST_TITLE)
							}), /* @__PURE__ */ g("span", {
								className: "text-xs text-muted",
								children: a(t.SIDEBAR$ONBOARDING_CHECKLIST_PROGRESS, { completed: s })
							})]
						})
					}),
					/* @__PURE__ */ g("span", {
						"data-testid": "sidebar-onboarding-checklist-chevron",
						"aria-hidden": !0,
						className: i("relative z-10 inline-flex size-7 shrink-0 items-center justify-center", "pointer-events-none text-[var(--oh-muted)]"),
						children: /* @__PURE__ */ g(r, { className: i("size-4 transition-transform motion-reduce:transition-none", l && "-rotate-90") })
					})
				]
			})
		}), l ? null : /* @__PURE__ */ g("ul", {
			className: "flex flex-col gap-0.5 px-2.5 pb-2",
			children: o.map((e) => /* @__PURE__ */ g(x, {
				id: e.id,
				isComplete: e.isComplete,
				onActivate: f(e.id) ? d : void 0
			}, e.id))
		})]
	});
}
//#endregion
export { S as SidebarOnboardingChecklist };

//# sourceMappingURL=sidebar-onboarding-checklist.js.map