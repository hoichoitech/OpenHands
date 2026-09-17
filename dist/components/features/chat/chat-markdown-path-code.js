import { cn as e } from "../../../utils/utils.js";
import { useOptionalConversationId as t } from "../../../hooks/use-conversation-id.js";
import n from "../../../api/conversation-service/conversation-service.api.js";
import { looksLikeWorkspaceFilePath as r, toFilesTabPath as i } from "../../../utils/path-utils.js";
import { openWorkspaceFile as a } from "../../../services/canvas-ui.js";
import { code as o } from "../markdown/code.js";
import { anchor as s } from "../markdown/anchor.js";
import { useWorkspaceFiles as c } from "../../../hooks/query/use-workspace-files.js";
import { createContext as l, useContext as u } from "react";
import { jsx as d } from "react/jsx-runtime";
//#region src/components/features/chat/chat-markdown-path-code.tsx
var f = l(!1), p = l(void 0);
function m({ children: e }) {
	let { data: t } = c();
	return /* @__PURE__ */ d(p.Provider, {
		value: t,
		children: e
	});
}
function h(e) {
	if (e == null || typeof e == "boolean") return "";
	if (typeof e == "string" || typeof e == "number") return String(e);
	if (Array.isArray(e)) {
		let t = e.map(h);
		return t.some((e) => e === null) ? null : t.join("");
	}
	return null;
}
function g(e) {
	let t = u(p);
	if (!t?.length || !r(e)) return null;
	let a = n.getCurrentConversation()?.workspace?.working_dir, o = i(e, a);
	return o && t.includes(o) ? o : null;
}
function _({ path: n, className: r, children: i }) {
	let { conversationId: o } = t();
	return /* @__PURE__ */ d("button", {
		type: "button",
		"data-testid": "markdown-file-path-link",
		title: n,
		className: e(r, "cursor-pointer rounded border border-surface-raised bg-surface-raised px-[0.4em] py-[0.2em] font-mono text-foreground hover:underline"),
		onClick: (e) => {
			e.stopPropagation(), a(n, o);
		},
		children: i
	});
}
function v(e) {
	let { children: t, className: n } = e, r = u(f), i = /language-(\w+)/.exec(n || ""), a = String(t).replace(/\n$/, ""), s = String(t).includes("\n"), c = g(!i && !s && !r ? a : "");
	return c ? /* @__PURE__ */ d(_, {
		path: c,
		className: n,
		children: t
	}) : o(e);
}
function y(e) {
	let { children: t } = e, n = u(f), r = h(t)?.trim() ?? "", i = g(n ? "" : r);
	return i ? /* @__PURE__ */ d(_, {
		path: i,
		children: t
	}) : /* @__PURE__ */ d("strong", { children: t });
}
function b(e) {
	return /* @__PURE__ */ d(f.Provider, {
		value: !0,
		children: s(e)
	});
}
//#endregion
export { b as ChatAnchor, v as ChatCode, y as ChatStrong, m as WorkspaceFilesForChatProvider };

//# sourceMappingURL=chat-markdown-path-code.js.map