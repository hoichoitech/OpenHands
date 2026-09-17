import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { BookOpen as n } from "../../../node_modules/lucide-react/dist/esm/icons/book-open.js";
import { cn as r } from "../../../utils/utils.js";
import { NavigationLink as i } from "../../shared/navigation-link.js";
import { SIDEBAR_ONBOARDING_CHECKLIST_ACTION_I18N_KEYS as a, SIDEBAR_ONBOARDING_CHECKLIST_DESCRIPTION_I18N_KEYS as o, SIDEBAR_ONBOARDING_CHECKLIST_DOCS_URLS as s, SIDEBAR_ONBOARDING_CHECKLIST_I18N_KEYS as c, getSidebarOnboardingChecklistHref as l } from "./sidebar-onboarding-checklist.constants.js";
import { SidebarOnboardingChecklistItemIcon as u } from "./sidebar-onboarding-checklist-item-icon.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/sidebar/sidebar-onboarding-checklist-item-preview.tsx
var p = r("inline-flex shrink-0 items-center rounded-md bg-white px-2.5 py-1", "text-xs font-medium text-black transition-colors hover:bg-white/90");
function m({ id: r, onActionClick: m, onDocsClick: h }) {
	let { t: g } = e("openhands"), _ = c[r], v = o[r], y = a[r], b = s[r], x = l(r);
	return /* @__PURE__ */ f("div", {
		className: "flex w-[280px] flex-col gap-2.5 p-3",
		"data-testid": `sidebar-onboarding-checklist-preview-${r}`,
		children: [
			/* @__PURE__ */ f("div", {
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ d("span", {
					className: "mt-0.5 inline-flex shrink-0 items-center justify-center",
					children: /* @__PURE__ */ d(u, { id: r })
				}), /* @__PURE__ */ d("span", {
					className: "min-w-0 flex-1 text-sm font-medium text-white",
					children: g(_)
				})]
			}),
			/* @__PURE__ */ d("p", {
				className: "text-xs leading-relaxed text-[var(--oh-muted)]",
				children: g(v)
			}),
			/* @__PURE__ */ f("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ f("a", {
					href: b,
					target: "_blank",
					rel: "noreferrer",
					"data-testid": `sidebar-onboarding-checklist-preview-docs-${r}`,
					className: "inline-flex min-w-0 items-center gap-2 text-xs text-[var(--oh-muted)] transition-colors hover:text-white hover:underline",
					onClick: h,
					children: [/* @__PURE__ */ d(n, {
						className: "size-3.5 shrink-0",
						"aria-hidden": !0
					}), g(t.SIDEBAR$ONBOARDING_CHECKLIST_DOCS_LINK)]
				}), x.kind === "external" ? /* @__PURE__ */ d("a", {
					href: x.href,
					target: "_blank",
					rel: "noreferrer",
					"data-testid": `sidebar-onboarding-checklist-preview-action-${r}`,
					className: p,
					onClick: m,
					children: g(y)
				}) : /* @__PURE__ */ d(i, {
					to: x.href,
					"data-testid": `sidebar-onboarding-checklist-preview-action-${r}`,
					className: p,
					onClick: m,
					children: g(y)
				})]
			})
		]
	});
}
//#endregion
export { m as SidebarOnboardingChecklistItemPreview };

//# sourceMappingURL=sidebar-onboarding-checklist-item-preview.js.map