import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { useConversationStore as r } from "../../../../stores/conversation-store.js";
import { focusContentEditableAtEnd as i } from "../utils/chat-input.utils.js";
import a from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/features/chat/components/chat-input-field.tsx
function s({ chatInputRef: s, disabled: c = !1, onInput: l, onPaste: u, onKeyDown: d, onFocus: f, onBlur: p }) {
	let { t: m } = e("openhands"), h = r((e) => e.conversationMode) === "plan";
	return a.useEffect(() => {
		c || i(s.current);
	}, []), /* @__PURE__ */ o("div", {
		className: "box-border content-stretch flex flex-row items-center justify-start min-h-6 p-0 relative shrink-0 flex-1",
		"data-name": "Text & caret",
		children: /* @__PURE__ */ o("div", {
			className: "basis-0 flex flex-col font-normal grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[var(--oh-text-tertiary)] text-[16px] text-left",
			children: /* @__PURE__ */ o("div", {
				ref: s,
				className: n("chat-input bg-transparent text-white text-[16px] font-normal leading-[20px] outline-none resize-none custom-scrollbar min-h-[20px] max-h-[400px] [text-overflow:inherit] [text-wrap-mode:inherit] [white-space-collapse:inherit] block whitespace-pre-wrap", c && "cursor-not-allowed opacity-50"),
				contentEditable: !c,
				"data-placeholder": m(h ? t.COMMON$LET_S_WORK_ON_A_PLAN : t.SUGGESTIONS$WHAT_TO_BUILD),
				"data-testid": "chat-input",
				onInput: l,
				onPaste: u,
				onKeyDown: d,
				onFocus: f,
				onBlur: p
			})
		})
	});
}
//#endregion
export { s as ChatInputField };

//# sourceMappingURL=chat-input-field.js.map