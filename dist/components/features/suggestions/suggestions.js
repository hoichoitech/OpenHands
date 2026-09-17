import { SuggestionItem as e } from "./suggestion-item.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/suggestions/suggestions.tsx
function n({ suggestions: n, onSuggestionClick: r }) {
	return /* @__PURE__ */ t("div", {
		"data-testid": "suggestions",
		className: "grid grid-cols-2 gap-5 max-w-fit",
		children: n.map((n, i) => /* @__PURE__ */ t(e, {
			suggestion: n,
			onClick: r
		}, i))
	});
}
//#endregion
export { n as Suggestions };

//# sourceMappingURL=suggestions.js.map