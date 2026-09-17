import { cn as e } from "../../../utils/utils.js";
import { useConversationStore as t } from "../../../stores/conversation-store.js";
import { useChatInputLogic as n } from "../../../hooks/chat/use-chat-input-logic.js";
import { useFileHandling as r } from "../../../hooks/chat/use-file-handling.js";
import { useGripResize as i } from "../../../hooks/chat/use-grip-resize.js";
import { useChatInputEvents as a } from "../../../hooks/chat/use-chat-input-events.js";
import { useChatSubmission as o } from "../../../hooks/chat/use-chat-submission.js";
import { useSlashCommand as ee } from "../../../hooks/chat/use-slash-command.js";
import { ChatInputGrip as s } from "./components/chat-input-grip.js";
import { ChatInputContainer as c } from "./components/chat-input-container.js";
import { HiddenFileInput as l } from "./components/hidden-file-input.js";
import u, { useEffect as d, useRef as f } from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/chat/custom-chat-input.tsx
function h({ disabled: h = !1, isNewConversationPending: g = !1, hasStartedConversation: _, showButton: v = !0, onSubmit: y, onFocus: te, onBlur: ne, onFilesPaste: b, className: x = "", buttonClassName: S = "" }) {
	let [C, w] = u.useState(!1), { submittedMessage: T, clearAllFiles: E, setShouldHideSuggestions: D, setSubmittedMessage: O, images: k, files: A } = t(), j = h, M = f(y);
	d(() => {
		M.current = y;
	}, [y]), d(() => {
		!T || h || (M.current(T), O(null));
	}, [
		T,
		h,
		O
	]);
	let { chatInputRef: N, messageToSend: P, checkIsContentEmpty: F, clearEmptyContentHandler: I, saveDraft: L } = n(), R = u.useCallback(() => {
		let e = N.current?.innerText ?? "", t = k.length > 0 || A.length > 0;
		w(e.trim().length > 0 || t);
	}, [
		N,
		k,
		A
	]), { fileInputRef: z, chatContainerRef: B, isDragOver: V, handleFileIconClick: H, handleFileInputChange: U, handleDragOver: re, handleDragLeave: W, handleDrop: G } = r(b), { gripRef: K, isGripVisible: q, isGripDragging: J, canResize: Y, handleTopEdgeClick: X, smartResize: Z, handleGripMouseDown: ie, handleGripTouchStart: ae, increaseHeightForEmptyContent: oe, resetManualResize: se } = i(N, P), { handleSubmit: Q } = o(N, z, Z, y, se), $ = u.useCallback(() => {
		Q(), R();
	}, [Q, R]), { handleInput: ce, handlePaste: le, handleKeyDown: ue, handleBlur: de, handleFocus: fe } = a(N, Z, oe, F, I, te, ne), { isMenuOpen: pe, filteredItems: me, selectedIndex: he, updateSlashMenu: ge, selectItem: _e, handleSlashKeyDown: ve, closeMenu: ye } = ee(N);
	return d(() => () => {
		D(!1), E();
	}, [D, E]), d(() => {
		R();
	}, [
		R,
		k.length,
		A.length
	]), /* @__PURE__ */ m("div", {
		className: e("w-full", x),
		children: [/* @__PURE__ */ p(l, {
			fileInputRef: z,
			onChange: U
		}), /* @__PURE__ */ m("div", {
			className: "relative w-full",
			children: [/* @__PURE__ */ p(s, {
				gripRef: K,
				isGripVisible: q,
				isGripDragging: J,
				canResize: Y,
				handleTopEdgeClick: X,
				handleGripMouseDown: ie,
				handleGripTouchStart: ae
			}), /* @__PURE__ */ p(c, {
				chatContainerRef: B,
				isDragOver: V,
				disabled: j,
				canSubmit: C,
				hasStartedConversation: _,
				isNewConversationPending: g,
				showButton: v,
				buttonClassName: S,
				chatInputRef: N,
				handleFileIconClick: H,
				handleSubmit: $,
				onDragOver: re,
				onDragLeave: W,
				onDrop: G,
				onInput: () => {
					ce(), ge(), L(), R();
				},
				onPaste: le,
				onKeyDown: (e) => {
					ve(e) || ue(e, j, $);
				},
				onFocus: fe,
				onBlur: () => {
					de(), ye(), R();
				},
				isSlashMenuOpen: pe,
				slashItems: me,
				slashSelectedIndex: he,
				onSlashSelect: _e
			})]
		})]
	});
}
//#endregion
export { h as CustomChatInput };

//# sourceMappingURL=custom-chat-input.js.map