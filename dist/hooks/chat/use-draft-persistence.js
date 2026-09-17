import { getConversationState as e, setConversationState as t, useConversationLocalStorageState as n } from "../../utils/conversation-local-storage.js";
import { focusContentEditableAtEnd as r, getTextContent as i } from "../../components/features/chat/utils/chat-input.utils.js";
import { useCallback as a, useEffect as o, useRef as s, useState as c } from "react";
//#region src/hooks/chat/use-draft-persistence.ts
var l = (e) => e.startsWith("task-"), u = 500, d = "oh:home-prompt-draft", f = (f, p) => {
	let { state: m, setDraftMessage: h } = n(f ?? ""), g = s(null), _ = s(!1), [v, y] = c(!1), b = s(f), x = s(!0), S = s("");
	o(() => {
		if (!f) return;
		let e = b.current, n = x.current;
		b.current = f, x.current = !1, g.current &&= (clearTimeout(g.current), null);
		let r = p.current;
		if (!n && e && e !== f) {
			let n = l(e), a = !l(f);
			if (n && a && r) {
				let e = i(r).trim();
				if (e) {
					t(f, { draftMessage: e }), _.current = !0, y(!0);
					return;
				}
			}
		}
		r && (r.textContent = ""), _.current = !1, y(!1);
	}, [f, p]), o(() => {
		if (_.current) return;
		let t = p.current;
		if (!t) return;
		if (!f) {
			try {
				let e = sessionStorage.getItem(d);
				if (e && i(t).trim() === "") {
					t.textContent = e;
					let n = window.getSelection(), r = document.createRange();
					r.selectNodeContents(t), r.collapse(!1), n?.removeAllRanges(), n?.addRange(r), S.current = e;
				}
			} catch {}
			_.current = !0, y(!0);
			return;
		}
		let { draftMessage: n } = e(f);
		n && i(t).trim() === "" && (t.textContent = n, r(t)), _.current = !0, y(!0);
	}, [p, f]);
	let C = a(() => {
		if (g.current && clearTimeout(g.current), !f) {
			let e = p.current;
			if (e) {
				let t = i(e).trim();
				S.current = t;
				try {
					t ? sessionStorage.setItem(d, t) : sessionStorage.removeItem(d);
				} catch {}
			}
			return;
		}
		let e = f;
		g.current = setTimeout(() => {
			if (e !== b.current) return;
			let t = p.current;
			if (!t) return;
			let n = i(t).trim();
			n !== (m.draftMessage || "") && h(n || null);
		}, u);
	}, [
		p,
		m.draftMessage,
		h,
		f
	]), w = a(() => {
		if (g.current &&= (clearTimeout(g.current), null), !f) {
			try {
				sessionStorage.removeItem(d);
			} catch {}
			return;
		}
		h(null);
	}, [f, h]);
	return o(() => () => {
		if (g.current && clearTimeout(g.current), !b.current) {
			let e = S.current;
			try {
				e ? sessionStorage.getItem("oh:home-prompt-draft") !== null && sessionStorage.setItem(d, e) : sessionStorage.removeItem(d);
			} catch {}
		}
	}, []), {
		saveDraft: C,
		clearDraft: w,
		isRestored: v,
		hasDraft: !!m.draftMessage
	};
};
//#endregion
export { f as useDraftPersistence };

//# sourceMappingURL=use-draft-persistence.js.map