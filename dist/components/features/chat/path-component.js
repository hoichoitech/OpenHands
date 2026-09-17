import { useOptionalConversationId as e } from "../../../hooks/use-conversation-id.js";
import { openWorkspaceFile as t } from "../../../services/canvas-ui.js";
import n from "../../../utils/event-logger.js";
import { createContext as r, useContext as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/features/chat/path-component.tsx
var o = r(!0), s = (e) => {
	let t = document.createElement("textarea");
	return t.innerHTML = e, t.value;
}, c = (e) => e ? e.endsWith("/") || e.endsWith("\\") ? !0 : !(e.split(/[/\\]/).pop() || "").includes(".") : !1, l = (e) => {
	if (!e) return "";
	let t = e.split(/[/\\]/), n = t[t.length - 1];
	return c(e) && !n.endsWith("/") ? `${n}/` : n;
};
function u(r) {
	let { children: c } = r, { conversationId: u } = e(), d = i(o), f = (e) => {
		try {
			let n = s(e), r = l(n);
			return d ? /* @__PURE__ */ a("button", {
				type: "button",
				"data-testid": "path-component-link",
				className: "cursor-pointer font-mono font-normal tracking-tight hover:underline",
				title: n,
				onClick: (e) => {
					e.stopPropagation(), t(n, u);
				},
				children: r
			}) : /* @__PURE__ */ a("span", {
				className: "font-mono font-normal tracking-tight",
				title: n,
				children: r
			});
		} catch (t) {
			return n.error(String(t)), /* @__PURE__ */ a("span", {
				className: "font-mono font-normal tracking-tight",
				children: e
			});
		}
	};
	return Array.isArray(c) ? /* @__PURE__ */ a("span", {
		className: "font-normal tracking-tight",
		children: c.map((e, t) => typeof e == "string" ? /* @__PURE__ */ a("span", { children: f(e) }, `${e}-${t}`) : e)
	}) : typeof c == "string" ? /* @__PURE__ */ a("span", {
		className: "font-normal tracking-tight",
		children: f(c)
	}) : /* @__PURE__ */ a("span", {
		className: "font-mono font-normal tracking-tight",
		children: c
	});
}
//#endregion
export { u as PathComponent, o as PathInteractiveContext };

//# sourceMappingURL=path-component.js.map