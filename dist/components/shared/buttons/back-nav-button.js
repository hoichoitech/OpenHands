import { cn as e } from "../../../utils/utils.js";
import { formControlBackNavButtonClassName as t } from "../../../utils/form-control-classes.js";
import { NavigationLink as n } from "../navigation-link.js";
import { BackNavButtonContent as r } from "./back-nav-button-content.js";
import "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/shared/buttons/back-nav-button.tsx
function a(a) {
	let { children: o, testId: s, className: c } = a, l = e(t, c);
	return "to" in a ? /* @__PURE__ */ i(n, {
		to: a.to,
		onClick: a.onClick,
		"data-testid": s,
		className: l,
		children: /* @__PURE__ */ i(r, { children: o })
	}) : /* @__PURE__ */ i("button", {
		type: "button",
		onClick: a.onClick,
		"data-testid": s,
		className: l,
		children: /* @__PURE__ */ i(r, { children: o })
	});
}
//#endregion
export { a as BackNavButton };

//# sourceMappingURL=back-nav-button.js.map