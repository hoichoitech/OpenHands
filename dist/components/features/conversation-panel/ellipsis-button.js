import { cn as e } from "../../../utils/utils.js";
import { formControlMutedHoverClassName as t, formControlTransitionClassName as n } from "../../../utils/form-control-classes.js";
import r from "../../../icons/three-dots-vertical.js";
import i from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/ellipsis-button.tsx
var o = i.forwardRef(function({ onClick: i, className: o, iconClassName: s, ariaLabel: c, testId: l = "ellipsis-button" }, u) {
	return /* @__PURE__ */ a("button", {
		ref: u,
		"data-testid": l,
		type: "button",
		onClick: i,
		"aria-label": c,
		className: e("p-1 rounded-md cursor-pointer", n, "text-[var(--oh-muted)]", t, "flex items-center justify-center", o),
		children: /* @__PURE__ */ a(r, { className: s ?? "w-4 h-4" })
	});
});
//#endregion
export { o as EllipsisButton };

//# sourceMappingURL=ellipsis-button.js.map