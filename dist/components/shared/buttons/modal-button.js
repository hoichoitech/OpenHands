import e from "../../../node_modules/clsx/dist/clsx.js";
import "react";
import { jsxs as t } from "react/jsx-runtime";
//#region src/components/shared/buttons/modal-button.tsx
function n({ testId: n, variant: r = "default", onClick: i, text: a, className: o, icon: s, type: c = "button", disabled: l, intent: u }) {
	return /* @__PURE__ */ t("button", {
		"data-testid": n,
		type: c === "submit" ? "submit" : "button",
		disabled: l,
		onClick: i,
		className: e(r === "default" && "text-sm font-normal py-[10px] rounded-sm", r === "text-like" && "text-xs leading-4 font-normal", s && "flex items-center justify-center gap-2", l && "opacity-50 cursor-not-allowed", o),
		name: u && "intent",
		value: u,
		children: [s, a]
	});
}
//#endregion
export { n as ModalButton };

//# sourceMappingURL=modal-button.js.map