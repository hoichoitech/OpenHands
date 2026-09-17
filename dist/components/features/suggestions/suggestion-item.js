import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import t from "../../../icons/tachometer-fast.js";
import n from "../../../icons/pr-status.js";
import r from "../../../icons/document.js";
import i from "../../../icons/u-water.js";
import { useMemo as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/suggestions/suggestion-item.tsx
function c({ suggestion: c, onClick: l }) {
	let { t: u } = e("openhands");
	return /* @__PURE__ */ s("button", {
		type: "button",
		className: "list-none border border-[var(--oh-border)] rounded-[15px] hover:bg-surface-raised hover:border-[var(--oh-interactive-hover)] transition-colors flex-1 flex items-center justify-center cursor-pointer gap-[10px] h-[55px] px-4",
		onClick: () => l(c.value),
		children: [a(() => {
			switch (c.label) {
				case "INCREASE_TEST_COVERAGE": return /* @__PURE__ */ o(t, {
					width: 24,
					height: 24,
					color: "#fff"
				});
				case "AUTO_MERGE_PRS": return /* @__PURE__ */ o(n, {
					width: 19,
					height: 20,
					color: "#fff"
				});
				case "FIX_README": return /* @__PURE__ */ o(r, {
					width: 24,
					height: 24,
					color: "#fff"
				});
				case "CLEAN_DEPENDENCIES": return /* @__PURE__ */ o(i, {
					width: 24,
					height: 24,
					color: "#fff"
				});
				default: return null;
			}
		}, [c]), /* @__PURE__ */ o("span", {
			"data-testid": "suggestion",
			className: "text-[15px] font-normal leading-5 text-white text-center cursor-pointer",
			children: u(c.label)
		})]
	});
}
//#endregion
export { c as SuggestionItem };

//# sourceMappingURL=suggestion-item.js.map