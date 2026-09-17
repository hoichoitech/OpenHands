import { I18nKey as e } from "../../../i18n/declaration.js";
import { EnumFilterDropdown as t } from "../../shared/filters/enum-filter-dropdown.js";
import { MCP_SECTION_FILTER_OPTIONS as n } from "./mcp-section-filter.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/mcp-page/mcp-section-filter-dropdown.tsx
var i = {
	all: e.MCP$SECTION_FILTER_ALL,
	installed: e.MCP$INSTALLED_TITLE,
	library: e.MCP$LIBRARY_TITLE
};
function a({ value: e, onChange: a }) {
	return /* @__PURE__ */ r(t, {
		testId: "mcp-section-filter",
		value: e,
		onChange: a,
		options: n,
		labelKeyByValue: i
	});
}
//#endregion
export { a as McpSectionFilterDropdown };

//# sourceMappingURL=mcp-section-filter-dropdown.js.map