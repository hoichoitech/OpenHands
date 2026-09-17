import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { extensionModuleCardGridClassName as n, extensionModuleCardGridContainerClassName as r, extensionModuleEmptyStateClassName as i } from "../../../utils/extension-module-card-classes.js";
import { InstalledServerCard as a } from "./installed-server-card.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/mcp-page/installed-servers-section.tsx
function c({ servers: c, hasAnyInstalled: l, query: u = "", onEdit: d, onToggleEnabled: f }) {
	let { t: p } = e("openhands");
	return c.length === 0 ? l && u.trim().length > 0 ? /* @__PURE__ */ o("div", {
		"data-testid": "mcp-installed-empty-search",
		className: "rounded-xl border border-[var(--oh-border)] p-6 text-center",
		children: /* @__PURE__ */ o("p", {
			className: "text-xs text-tertiary-light",
			children: p(t.MCP$SEARCH_EMPTY)
		})
	}) : /* @__PURE__ */ s("div", {
		"data-testid": "mcp-installed-empty",
		className: i,
		children: [/* @__PURE__ */ o("p", {
			className: "text-sm text-white",
			children: p(t.MCP$INSTALLED_EMPTY_TITLE)
		}), /* @__PURE__ */ o("p", {
			className: "text-xs text-tertiary-light mt-1",
			children: p(t.MCP$INSTALLED_EMPTY_HINT)
		})]
	}) : /* @__PURE__ */ o("div", {
		className: r,
		children: /* @__PURE__ */ o("div", {
			"data-testid": "mcp-installed-list",
			className: n,
			children: c.map((e) => /* @__PURE__ */ o(a, {
				server: e,
				onEdit: () => d(e),
				onToggleEnabled: (t) => f(e, t)
			}, e.id))
		})
	});
}
//#endregion
export { c as InstalledServersSection };

//# sourceMappingURL=installed-servers-section.js.map