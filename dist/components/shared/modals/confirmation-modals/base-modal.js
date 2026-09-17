import { cn as e } from "../../../../utils/utils.js";
import { ModalBody as t } from "../modal-body.js";
import { ModalButton as n } from "../../buttons/modal-button.js";
import { modalTitleClassName as r } from "../../../../utils/modal-classes.js";
import "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/shared/modals/confirmation-modals/base-modal.tsx
function o({ title: t, id: n, className: a }) {
	return /* @__PURE__ */ i("span", {
		id: n,
		className: e(r, a),
		children: t
	});
}
function s({ description: e, children: t }) {
	return /* @__PURE__ */ i("span", {
		className: "text-sm text-modal-muted",
		children: t || e
	});
}
function c({ testId: e, title: r, description: c, buttons: l }) {
	return /* @__PURE__ */ a(t, {
		testID: e,
		children: [/* @__PURE__ */ a("div", {
			className: "flex flex-col gap-2 self-start",
			children: [/* @__PURE__ */ i(o, { title: r }), /* @__PURE__ */ i(s, { description: c })]
		}), /* @__PURE__ */ i("div", {
			className: "flex flex-col gap-2 w-full",
			children: l.map((e, t) => /* @__PURE__ */ i(n, {
				onClick: e.onClick,
				text: e.text,
				className: e.className
			}, t))
		})]
	});
}
//#endregion
export { c as BaseModal, s as BaseModalDescription, o as BaseModalTitle };

//# sourceMappingURL=base-modal.js.map