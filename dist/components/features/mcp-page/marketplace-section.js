import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { extensionModuleCardGridClassName as n, extensionModuleCardGridContainerClassName as r } from "../../../utils/extension-module-card-classes.js";
import i from "../../../node_modules/@openhands/extensions/integrations/index.js";
import { getMarketplaceEntriesByPopularity as a, getMcpMarketplaceCatalog as o, marketplaceEntryMatchesQuery as s } from "../../../utils/mcp-marketplace-utils.js";
import { MarketplaceCard as c } from "./marketplace-card.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/mcp-page/marketplace-section.tsx
function d({ onSelect: d, onAdd: f, query: p = "" }) {
	let { t: m } = e("openhands"), h = a(o(i)).filter((e) => s(e, p));
	return /* @__PURE__ */ u("section", {
		"data-testid": "mcp-marketplace-section",
		className: "flex flex-col gap-3",
		children: [/* @__PURE__ */ l("h2", {
			className: "text-base font-medium text-foreground",
			children: m(t.MCP$LIBRARY_TITLE)
		}), h.length === 0 ? /* @__PURE__ */ l("div", {
			"data-testid": "mcp-marketplace-empty",
			className: "rounded-xl border border-dashed border-[var(--oh-border)] p-6 text-center",
			children: /* @__PURE__ */ l("p", {
				className: "text-xs text-tertiary-light",
				children: m(t.MCP$SEARCH_EMPTY)
			})
		}) : /* @__PURE__ */ l("div", {
			className: r,
			children: /* @__PURE__ */ l("div", {
				"data-testid": "mcp-marketplace-grid",
				className: n,
				children: h.map((e) => /* @__PURE__ */ l(c, {
					entry: e,
					onClick: () => d(e),
					onAdd: () => f(e)
				}, e.id))
			})
		})]
	});
}
//#endregion
export { d as MarketplaceSection };

//# sourceMappingURL=marketplace-section.js.map