import { cn as e } from "../../../utils/utils.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/shared/modals/modal-body.tsx
var n = {
	sm: "w-[384px]",
	md: "w-[520px]",
	lg: "w-[640px]",
	xl: "w-[720px]"
}, r = "max-w-[90vw]";
function i(e) {
	return n[e];
}
function a({ testID: n, children: r, className: a, width: o = "sm" }) {
	return /* @__PURE__ */ t("div", {
		"data-testid": n,
		className: e("bg-base-secondary flex flex-col gap-6 items-center p-6 rounded-xl", i(o), a),
		children: r
	});
}
//#endregion
export { r as MODAL_MAX_WIDTH_VIEWPORT, a as ModalBody, i as modalWidthClassName };

//# sourceMappingURL=modal-body.js.map