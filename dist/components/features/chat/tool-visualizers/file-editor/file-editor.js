import { useOptionalConversationId as e } from "../../../../../hooks/use-conversation-id.js";
import { openWorkspaceFile as t } from "../../../../../services/canvas-ui.js";
import { defineVisualizer as n } from "../define.js";
import { textFromContent as r } from "../text-content.js";
import { CodeBlock as i } from "../primitives/code-block.js";
import { getLanguageFromPath as a } from "../../../../../utils/get-language-from-path.js";
import { DiffView as o } from "../primitives/diff-view.js";
import { FilePathChip as s } from "../primitives/file-path-chip.js";
import { isMarkdownFilePath as c } from "../../../../../utils/is-markdown-file-path.js";
import { MarkdownFilePreview as l } from "../primitives/markdown-file-preview.js";
import "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/file-editor/file-editor.tsx
var f = ({ action: e, observation: t }) => t?.observation.path ?? e?.action.path ?? "";
function p({ action: e, observation: t, onOpenFile: n }) {
	let p = f({
		action: e,
		observation: t
	}), m = t?.observation.command ?? e?.action.command, h = a(p), g = e?.action.view_range, _ = m === "view" && g ? `${g[0]}-${g[1]}` : void 0, v = p ? /* @__PURE__ */ u(s, {
		path: p,
		range: _,
		onClick: n
	}) : null, y = (e) => p && m === "create" && c(p) ? {
		chip: null,
		body: /* @__PURE__ */ u(l, {
			content: e,
			path: p,
			onView: n
		})
	} : {
		chip: v,
		body: /* @__PURE__ */ u(i, {
			code: e,
			language: h
		})
	};
	if (t) {
		let e = t.observation, n = null, i = v;
		if (e.error) n = /* @__PURE__ */ u("span", {
			className: "whitespace-pre-wrap text-xs text-danger",
			children: e.error
		});
		else if (e.old_content != null && e.new_content != null) n = /* @__PURE__ */ u(o, {
			oldText: e.old_content,
			newText: e.new_content
		});
		else {
			let t = e.new_content || e.output || (e.content ? r(e.content) : "");
			if (t) {
				let e = y(t);
				i = e.chip, n = e.body;
			}
		}
		return /* @__PURE__ */ d("div", {
			className: "flex flex-col gap-2",
			children: [i, n]
		});
	}
	if (e) {
		let t = e.action, n = null, r = v;
		if (t.command === "create" && t.file_text) {
			let e = y(t.file_text);
			r = e.chip, n = e.body;
		} else (t.command === "str_replace" || t.command === "insert") && t.new_str != null && (n = /* @__PURE__ */ u(o, {
			oldText: t.old_str ?? "",
			newText: t.new_str
		}));
		return /* @__PURE__ */ d("div", {
			className: "flex flex-col gap-2",
			children: [r, n]
		});
	}
	return null;
}
function m({ conversationId: e, ...n }) {
	let r = f(n), i = r && n.observation ? () => t(r, e) : void 0;
	return /* @__PURE__ */ u(p, {
		...n,
		onOpenFile: i
	});
}
var h = n({
	actionKinds: ["FileEditorAction", "StrReplaceEditorAction"],
	observationKinds: ["FileEditorObservation", "StrReplaceEditorObservation"],
	Body: function(t) {
		let { conversationId: n } = e();
		return n ? /* @__PURE__ */ u(m, {
			...t,
			conversationId: n
		}) : /* @__PURE__ */ u(p, { ...t });
	}
});
//#endregion
export { h as fileEditorVisualizer };

//# sourceMappingURL=file-editor.js.map