import { X as e } from "../../node_modules/lucide-react/dist/esm/icons/x.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/ui/dropdown/clear-button.tsx
function n({ onClear: n }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		"data-testid": "dropdown-clear",
		onClick: n,
		"aria-label": "Clear selection",
		className: "text-white hover:text-[var(--oh-text-tertiary)]",
		children: /* @__PURE__ */ t(e, { size: 14 })
	});
}
//#endregion
export { n as ClearButton };

//# sourceMappingURL=clear-button.js.map