import { BaseModal as e } from "./base-modal.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/shared/modals/confirmation-modals/danger-modal.tsx
function n({ testId: n, title: r, description: i, buttons: a }) {
	return /* @__PURE__ */ t(e, {
		testId: n,
		title: r,
		description: i,
		buttons: [{
			text: a.danger.text,
			onClick: a.danger.onClick,
			className: "bg-danger"
		}, {
			text: a.cancel.text,
			onClick: a.cancel.onClick,
			className: "bg-[var(--oh-interactive-selected)]"
		}]
	});
}
//#endregion
export { n as DangerModal };

//# sourceMappingURL=danger-modal.js.map