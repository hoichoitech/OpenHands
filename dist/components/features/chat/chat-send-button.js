import { ArrowUp as e } from "../../../node_modules/lucide-react/dist/esm/icons/arrow-up.js";
import { cn as t } from "../../../utils/utils.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/chat/chat-send-button.tsx
function r({ buttonClassName: r, handleSubmit: i, disabled: a }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		className: t("flex items-center justify-center rounded-full border border-white size-8", a ? "cursor-not-allowed border-[var(--oh-muted)]" : "cursor-pointer hover:bg-white/10", r),
		"data-name": "arrow-up-circle-fill",
		"data-testid": "submit-button",
		onClick: i,
		disabled: a,
		children: /* @__PURE__ */ n(e, {
			className: "w-4 h-4",
			color: a ? "var(--oh-muted)" : "white"
		})
	});
}
//#endregion
export { r as ChatSendButton };

//# sourceMappingURL=chat-send-button.js.map