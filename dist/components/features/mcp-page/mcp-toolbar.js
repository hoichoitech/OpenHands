import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Search as n } from "../../../node_modules/lucide-react/dist/esm/icons/search.js";
import { X as r } from "../../../node_modules/lucide-react/dist/esm/icons/x.js";
import { cn as i } from "../../../utils/utils.js";
import { McpSectionFilterDropdown as a } from "./mcp-section-filter-dropdown.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/mcp-page/mcp-toolbar.tsx
function c({ search: c, onSearchChange: l, sectionFilter: u, onSectionFilterChange: d }) {
	let { t: f } = e("openhands");
	return /* @__PURE__ */ s("div", {
		"data-testid": "mcp-toolbar",
		className: "flex items-stretch gap-2",
		children: [/* @__PURE__ */ s("div", {
			"data-testid": "mcp-search",
			className: i("relative flex flex-1 min-w-0 items-center", "rounded-lg border border-[var(--oh-border)] bg-base-secondary", "focus-within:border-white/40 focus-within:ring-1 focus-within:ring-white/20", "transition-colors"),
			children: [
				/* @__PURE__ */ o(n, {
					className: "ml-3 h-4 w-4 text-tertiary-alt shrink-0",
					"aria-hidden": !0
				}),
				/* @__PURE__ */ o("input", {
					type: "search",
					value: c,
					onChange: (e) => l(e.target.value),
					placeholder: f(t.MCP$SEARCH_PLACEHOLDER),
					"aria-label": f(t.MCP$SEARCH_PLACEHOLDER),
					"data-testid": "mcp-search-input",
					className: i("flex-1 min-w-0 bg-transparent border-0 outline-none", "px-3 py-2 text-sm placeholder:text-tertiary-alt", "[&::-webkit-search-cancel-button]:hidden")
				}),
				c ? /* @__PURE__ */ o("button", {
					type: "button",
					onClick: () => l(""),
					"aria-label": f(t.MCP$SEARCH_CLEAR),
					"data-testid": "mcp-search-clear",
					className: "mr-2 p-1 rounded text-tertiary-alt hover:text-content-1 cursor-pointer",
					children: /* @__PURE__ */ o(r, {
						className: "h-4 w-4",
						"aria-hidden": !0
					})
				}) : null
			]
		}), /* @__PURE__ */ o(a, {
			value: u,
			onChange: d
		})]
	});
}
//#endregion
export { c as McpToolbar };

//# sourceMappingURL=mcp-toolbar.js.map