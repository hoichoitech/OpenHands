import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { cn as t } from "../../../utils/utils.js";
import { Typography as n } from "../../../ui/typography.js";
import { NavigationLink as r } from "../../shared/navigation-link.js";
import { navInteractiveTransitionClassName as i } from "../sidebar/sidebar-layout.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/settings/settings-nav-link.tsx
function s({ item: s, onClick: c }) {
	let { t: l } = e("openhands"), { to: u, icon: d, text: f } = s;
	return /* @__PURE__ */ o(r, {
		end: !0,
		to: u,
		onClick: c,
		className: ({ isActive: e }) => t("group flex items-center gap-3 p-1 sm:px-3.5 sm:py-2 rounded", i, e ? "bg-tertiary" : "hover:bg-[var(--oh-surface-raised)]", e ? "[&_*]:text-white" : ""),
		children: [/* @__PURE__ */ a(n.Text, {
			className: "flex h-5 w-5 shrink-0 items-center justify-center text-[var(--oh-muted)] group-hover:text-white",
			children: d
		}), /* @__PURE__ */ a("div", {
			className: "min-w-0 flex-1 overflow-hidden",
			children: /* @__PURE__ */ a(n.Text, {
				className: t("block truncate whitespace-nowrap text-[var(--oh-muted)] group-hover:text-white", "transition-transform duration-300 motion-reduce:transition-none group-hover:translate-x-1"),
				children: l(f)
			})
		})]
	});
}
//#endregion
export { s as SettingsNavLink };

//# sourceMappingURL=settings-nav-link.js.map