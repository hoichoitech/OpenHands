import { isMobileUserAgent as e } from "../../utils/utils.js";
import { clearEmptyContent as t, ensureCursorVisible as n, getClipboardFiles as r } from "../../components/features/chat/utils/chat-input.utils.js";
import { useCallback as i } from "react";
//#region src/hooks/chat/use-chat-input-events.ts
var a = (a, o, s, c, l, u, d) => ({
	handleInput: i(() => {
		o(), a.current && t(a.current), n(a.current);
	}, [o, a]),
	handlePaste: i((e) => {
		e.preventDefault();
		let t = r(e.clipboardData);
		if (t.length > 0) {
			let e = new CustomEvent("pasteFiles", { detail: { files: t } });
			document.dispatchEvent(e);
			return;
		}
		let n = e.clipboardData.getData("text/plain");
		n && (document.execCommand("insertText", !1, n), setTimeout(o, 0));
	}, [o]),
	handleKeyDown: i((t, n, r) => {
		if (t.key === "Enter" && !t.nativeEvent.isComposing) {
			if (c()) {
				t.preventDefault(), s();
				return;
			}
			!e() && !t.shiftKey && !n && (t.preventDefault(), r());
		}
	}, [c, s]),
	handleBlur: i(() => {
		a.current && t(a.current), d && d();
	}, [a, d]),
	handleFocus: i(() => {
		u && u();
	}, [u])
});
//#endregion
export { a as useChatInputEvents };

//# sourceMappingURL=use-chat-input-events.js.map