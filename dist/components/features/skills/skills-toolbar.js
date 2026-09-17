import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ListFilter as n } from "../../../node_modules/lucide-react/dist/esm/icons/list-filter.js";
import { Search as r } from "../../../node_modules/lucide-react/dist/esm/icons/search.js";
import { X as i } from "../../../node_modules/lucide-react/dist/esm/icons/x.js";
import { cn as a } from "../../../utils/utils.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/skills/skills-toolbar.tsx
function c({ search: c, onSearchChange: l, activeFilterCount: u, onOpenFilters: d }) {
	let { t: f } = e("openhands");
	return /* @__PURE__ */ s("div", {
		"data-testid": "skills-toolbar",
		className: "flex items-stretch gap-2",
		children: [/* @__PURE__ */ s("div", {
			className: a("relative flex flex-1 min-w-0 items-center", "rounded-lg border border-[var(--oh-border)] bg-base-secondary", "focus-within:border-white/40 focus-within:ring-1 focus-within:ring-white/20", "transition-colors"),
			children: [
				/* @__PURE__ */ o(r, {
					className: "ml-3 h-4 w-4 shrink-0 text-tertiary-alt",
					"aria-hidden": !0
				}),
				/* @__PURE__ */ o("input", {
					"data-testid": "skills-search-input",
					type: "search",
					value: c,
					onChange: (e) => l(e.target.value),
					placeholder: f(t.SETTINGS$SKILLS_SEARCH_PLACEHOLDER),
					"aria-label": f(t.SETTINGS$SKILLS_SEARCH_PLACEHOLDER),
					className: a("flex-1 min-w-0 bg-transparent border-0 outline-none", "px-3 py-2 text-sm placeholder:text-tertiary-alt", "[&::-webkit-search-cancel-button]:hidden")
				}),
				c ? /* @__PURE__ */ o("button", {
					type: "button",
					onClick: () => l(""),
					"aria-label": f(t.MCP$SEARCH_CLEAR),
					className: "mr-2 p-1 rounded text-tertiary-alt hover:text-white cursor-pointer",
					children: /* @__PURE__ */ o(i, {
						className: "h-4 w-4",
						"aria-hidden": !0
					})
				}) : null
			]
		}), /* @__PURE__ */ s("button", {
			type: "button",
			"data-testid": "skills-filters-button",
			onClick: d,
			className: a("flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm md:hidden", "border border-[var(--oh-border)] bg-base-secondary text-white", "cursor-pointer hover:bg-[var(--oh-interactive-hover)]"),
			children: [
				/* @__PURE__ */ o(n, {
					className: "size-4 shrink-0",
					"aria-hidden": !0
				}),
				f(t.SETTINGS$SKILLS_FILTERS_BUTTON),
				u > 0 ? /* @__PURE__ */ o("span", {
					className: "rounded-full bg-white px-1.5 text-[11px] font-medium text-black",
					children: u
				}) : null
			]
		})]
	});
}
//#endregion
export { c as SkillsToolbar };

//# sourceMappingURL=skills-toolbar.js.map