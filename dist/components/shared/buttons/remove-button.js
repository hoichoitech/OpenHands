import { cn as e } from "../../../utils/utils.js";
import t from "../../../icons/close.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/shared/buttons/remove-button.tsx
function r({ onClick: r, className: i, "aria-label": a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: r,
		"aria-label": a,
		className: e("bg-[var(--oh-muted)] rounded-full w-5 h-5 flex items-center justify-center cursor-pointer", i),
		children: /* @__PURE__ */ n(t, {
			width: 18,
			height: 18
		})
	});
}
//#endregion
export { r as RemoveButton };

//# sourceMappingURL=remove-button.js.map