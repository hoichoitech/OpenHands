import e from "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
import { createPortal as r } from "react-dom";
//#region src/components/shared/modals/modal-backdrop.tsx
function i({ children: i, onClose: a, closeOnEscape: o = !0, closeOnBackdropClick: s = !0, elevated: c = !1, "aria-label": l }) {
	return e.useEffect(() => {
		if (!o) return;
		let e = (e) => {
			e.key === "Escape" && a?.();
		};
		return window.addEventListener("keydown", e), () => window.removeEventListener("keydown", e);
	}, [o, a]), typeof document > "u" ? null : r(/* @__PURE__ */ n("div", {
		role: "dialog",
		"aria-modal": "true",
		"aria-label": l,
		className: `fixed inset-0 flex items-center justify-center ${c ? "z-[70]" : "z-60"}`,
		children: [/* @__PURE__ */ t("div", {
			onClick: (e) => {
				s && e.target === e.currentTarget && a?.();
			},
			className: "fixed inset-0 bg-black opacity-60"
		}), /* @__PURE__ */ t("div", {
			className: "relative",
			children: i
		})]
	}), document.body);
}
//#endregion
export { i as ModalBackdrop };

//# sourceMappingURL=modal-backdrop.js.map