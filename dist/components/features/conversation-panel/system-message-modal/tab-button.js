import { cn as e } from "../../../../utils/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/system-message-modal/tab-button.tsx
function n({ isActive: n, children: r, onClick: i, className: a, disabled: o = !1 }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		disabled: o,
		className: e("px-4 py-2 font-normal border-b-2 transition-colors", n ? "border-foreground text-foreground" : "border-transparent text-[var(--oh-muted)] hover:text-[var(--oh-foreground)]", o && "opacity-50 cursor-not-allowed", a),
		onClick: i,
		"aria-selected": n,
		role: "tab",
		children: r
	});
}
//#endregion
export { n as TabButton };

//# sourceMappingURL=tab-button.js.map