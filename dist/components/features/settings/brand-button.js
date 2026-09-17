import { cn as e } from "../../../utils/utils.js";
import { formControlButtonClassName as t } from "../../../utils/form-control-classes.js";
import { forwardRef as n } from "react";
import { jsxs as r } from "react/jsx-runtime";
//#region src/components/features/settings/brand-button.tsx
var i = n(function({ testId: n, name: i, children: a, variant: o, type: s, isDisabled: c, className: l, onClick: u, startContent: d, ariaLabel: f, "aria-busy": p, "aria-haspopup": m, "aria-expanded": h }, g) {
	return /* @__PURE__ */ r("button", {
		ref: g,
		name: i,
		"data-testid": n,
		disabled: c,
		type: s,
		onClick: u,
		"aria-label": f,
		"aria-busy": p,
		"aria-haspopup": m,
		"aria-expanded": h,
		className: e(t, o === "primary" && "bg-primary text-[var(--oh-color-base)] hover:opacity-80 disabled:bg-[var(--oh-interactive-hover)] disabled:text-[var(--oh-muted)] disabled:opacity-100", o === "secondary" && "border border-[var(--oh-border)] bg-base-secondary text-white hover:bg-surface-raised", o === "tertiary" && "bg-[var(--oh-interactive-hover)] text-white hover:opacity-80", o === "danger" && "bg-red-600 text-white hover:bg-red-700", o === "ghost-danger" && "h-auto min-h-0 bg-transparent px-0 text-red-600 underline hover:text-red-700 hover:no-underline font-normal", d && "flex items-center justify-center gap-2", l),
		children: [d, a]
	});
});
//#endregion
export { i as BrandButton };

//# sourceMappingURL=brand-button.js.map