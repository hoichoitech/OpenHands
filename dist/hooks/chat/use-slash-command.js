import { BUILT_IN_COMMANDS as e, MODEL_COMMAND as t } from "../../utils/constants.js";
import { useActiveBackend as n } from "../../contexts/active-backend-context.js";
import { useFreeModels as r } from "../query/use-free-models.js";
import { formatModelNameForDisplay as i } from "../../utils/format-model-name.js";
import { useConversationSkills as a } from "../query/use-conversation-skills.js";
import { useLlmProfiles as o } from "../query/use-llm-profiles.js";
import { useCallback as s, useEffect as c, useMemo as l, useRef as u, useState as d } from "react";
//#region src/hooks/chat/use-slash-command.ts
function f(e) {
	let t = window.getSelection();
	if (!t || t.rangeCount === 0) return -1;
	let n = t.getRangeAt(0), r = n.cloneRange();
	return r.selectNodeContents(e), r.setEnd(n.startContainer, n.startOffset), r.toString().length;
}
var p = (p) => {
	let { data: m, isLoading: h } = a(), g = n().backend.kind === "cloud", { data: _, isLoading: v } = o(), y = r(), [b, x] = d(!1), [S, C] = d(""), [w, T] = d("command"), [E, D] = d(0), O = l(() => {
		let t = e.filter((e) => e.command === "/new" ? g : !0);
		return h || !m || m.forEach((e) => {
			let n = (e.triggers || []).filter((e) => e.startsWith("/"));
			n.length > 0 ? n.forEach((n) => {
				t.push({
					skill: e,
					command: n
				});
			}) : e.type === "agentskills" && t.push({
				skill: e,
				command: `/${e.name}`
			});
		}), t;
	}, [
		m,
		h,
		g
	]), k = l(() => (_?.profiles ?? []).map((e) => {
		let n = `${t} ${e.name}`;
		return {
			command: n,
			skill: {
				name: e.name,
				type: "agentskills",
				source: null,
				content: e.model ? `Switch to ${i(e.model, y)}` : "Switch to this LLM profile",
				triggers: [n]
			}
		};
	}), [_?.profiles, y]), A = l(() => {
		let e = w === "model-profile" ? k : O;
		if (!S) return e;
		let t = S.toLowerCase();
		return e.filter((e) => e.command.toLowerCase().includes(t) || e.skill.name.toLowerCase().includes(t) || e.skill.content?.toLowerCase().includes(t));
	}, [
		w,
		k,
		O,
		S
	]), j = u(b);
	j.current = b;
	let M = u(A);
	M.current = A;
	let N = u(E);
	N.current = E, c(() => {
		D(0);
	}, [S]);
	let P = u(null), F = s(() => {
		let e = p.current;
		if (!e) return null;
		let t = (e.innerText || "").replace(/[\n\r]+$/, ""), n = f(e);
		if (n < 0) return null;
		let r = t.slice(0, n), i = r.match(/(^|\s)(\/model(?:\s+\S*)?)$/);
		if (i) {
			let e = i[2], a = r.length - e.length, o = t.slice(n).match(/^\S*/), s = n + (o ? o[0].length : 0);
			return {
				kind: "model-profile",
				text: e.replace(/^\/model(?:\s+)?/, ""),
				start: a,
				end: s
			};
		}
		let a = r.match(/(^|\s)(\/\S*)$/);
		if (!a) return null;
		let o = a[2], s = r.length - o.length, c = t.slice(n).match(/^\S*/), l = n + (c ? c[0].length : 0);
		return {
			kind: "command",
			text: o.slice(1),
			start: s,
			end: l
		};
	}, [p]), I = s(() => {
		let e = F(), t = e?.kind === "model-profile" ? k.length > 0 || v : O.length > 0;
		e !== null && t ? (T(e.kind), C(e.text), P.current = {
			start: e.start,
			end: e.end
		}, x(!0)) : (x(!1), C(""), T("command"), P.current = null);
	}, [
		F,
		v,
		k.length,
		O.length
	]), L = s((e) => {
		let t = p.current;
		if (!t) return;
		let n = P.current, r = (t.innerText || "").replace(/[\n\r]+$/, ""), i = `${e.command} `;
		if (n) {
			t.textContent = r.slice(0, n.start) + i + r.slice(n.end);
			let e = n.start + i.length, a = t.firstChild;
			if (a) {
				let t = document.createRange(), n = window.getSelection(), r = Math.min(e, a.textContent.length);
				t.setStart(a, r), t.collapse(!0), n?.removeAllRanges(), n?.addRange(t);
			}
		} else {
			t.textContent = i;
			let e = document.createRange(), n = window.getSelection();
			e.selectNodeContents(t), e.collapse(!1), n?.removeAllRanges(), n?.addRange(e);
		}
		x(!1), C(""), T("command"), D(0), P.current = null, t.dispatchEvent(new InputEvent("input", { bubbles: !0 })), t.focus();
	}, [p]);
	return {
		isMenuOpen: b,
		filteredItems: A,
		selectedIndex: E,
		updateSlashMenu: I,
		selectItem: L,
		handleSlashKeyDown: s((e) => {
			let t = M.current;
			if (!j.current || t.length === 0) return !1;
			switch (e.key) {
				case "ArrowDown": return e.preventDefault(), D((e) => e < t.length - 1 ? e + 1 : 0), !0;
				case "ArrowUp": return e.preventDefault(), D((e) => e > 0 ? e - 1 : t.length - 1), !0;
				case "Enter":
				case "Tab": {
					let n = t[N.current];
					return n ? (e.preventDefault(), L(n), !0) : !1;
				}
				case "Escape": return e.preventDefault(), x(!1), !0;
				case "ArrowLeft":
				case "ArrowRight":
				case "Home":
				case "End": return x(!1), !1;
				default: return !1;
			}
		}, [L]),
		closeMenu: s(() => x(!1), [])
	};
};
//#endregion
export { p as useSlashCommand };

//# sourceMappingURL=use-slash-command.js.map