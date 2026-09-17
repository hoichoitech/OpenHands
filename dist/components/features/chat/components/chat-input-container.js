import { cn as e } from "../../../../utils/utils.js";
import { useConversationStore as t } from "../../../../stores/conversation-store.js";
import { DragOver as n } from "../drag-over.js";
import { UploadedFiles as r } from "../uploaded-files.js";
import { ChatInputRow as i } from "./chat-input-row.js";
import { ChatInputActions as a } from "./chat-input-actions.js";
import { SlashCommandMenu as o } from "./slash-command-menu.js";
import "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/chat/components/chat-input-container.tsx
function l({ chatContainerRef: l, isDragOver: u, disabled: d, canSubmit: f, hasStartedConversation: p, isNewConversationPending: m = !1, showButton: h, buttonClassName: g, chatInputRef: _, handleFileIconClick: v, handleSubmit: y, onDragOver: b, onDragLeave: x, onDrop: S, onInput: C, onPaste: w, onKeyDown: T, onFocus: E, onBlur: D, isSlashMenuOpen: O = !1, slashItems: k = [], slashSelectedIndex: A = 0, onSlashSelect: j }) {
	return /* @__PURE__ */ c("div", {
		ref: l,
		className: e("bg-[var(--oh-surface)] box-border content-stretch flex flex-col items-start justify-center p-4 relative rounded-[15px] w-full", t((e) => e.conversationMode) === "plan" && "border border-[#597FF4]"),
		onDragOver: (e) => b(e, d),
		onDragLeave: (e) => x(e, d),
		onDrop: (e) => S(e, d),
		children: [
			u && /* @__PURE__ */ s(n, {}),
			/* @__PURE__ */ s(r, {}),
			/* @__PURE__ */ c("div", {
				className: "relative w-full",
				children: [O && j && /* @__PURE__ */ s(o, {
					items: k,
					selectedIndex: A,
					onSelect: j
				}), /* @__PURE__ */ s(i, {
					chatInputRef: _,
					isNewConversationPending: m,
					onInput: C,
					onPaste: w,
					onKeyDown: T,
					onFocus: E,
					onBlur: D
				})]
			}),
			/* @__PURE__ */ s(a, {
				disabled: d,
				canSubmit: f,
				hasStartedConversation: p,
				onAddFileClick: () => v(d),
				showButton: h,
				buttonClassName: g,
				handleSubmit: y
			})
		]
	});
}
//#endregion
export { l as ChatInputContainer };

//# sourceMappingURL=chat-input-container.js.map