import { ChatInputField as e } from "./chat-input-field.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/chat/components/chat-input-row.tsx
function n({ chatInputRef: n, isNewConversationPending: r = !1, onInput: i, onPaste: a, onKeyDown: o, onFocus: s, onBlur: c }) {
	return /* @__PURE__ */ t("div", {
		className: "box-border content-stretch flex flex-row items-end justify-between p-0 relative shrink-0 w-full pb-[18px] gap-2",
		children: /* @__PURE__ */ t("div", {
			className: "basis-0 box-border content-stretch flex flex-row gap-4 grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0",
			children: /* @__PURE__ */ t(e, {
				chatInputRef: n,
				disabled: r,
				onInput: i,
				onPaste: a,
				onKeyDown: o,
				onFocus: s,
				onBlur: c
			})
		})
	});
}
//#endregion
export { n as ChatInputRow };

//# sourceMappingURL=chat-input-row.js.map