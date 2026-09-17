import { useOptionalConversationId as e } from "../../../../../hooks/use-conversation-id.js";
import { openWorkspaceFile as t } from "../../../../../services/canvas-ui.js";
import n from "../../../../../icons/file.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/primitives/file-path-chip.tsx
function o({ path: o, range: s, onClick: c }) {
	let { conversationId: l } = e();
	return /* @__PURE__ */ i("button", {
		type: "button",
		"data-testid": "file-path-chip",
		title: o,
		className: "inline-flex max-w-full cursor-pointer items-center gap-1.5 self-start rounded bg-surface-raised px-2 py-0.5 text-left font-mono text-xs text-foreground hover:bg-[var(--oh-interactive-hover)]",
		onClick: (e) => {
			if (e.stopPropagation(), c) {
				c();
				return;
			}
			t(o, l);
		},
		children: /* @__PURE__ */ a(r, { children: [/* @__PURE__ */ i(n, { className: "h-3.5 w-3.5 flex-shrink-0 text-muted" }), /* @__PURE__ */ i("span", {
			className: "break-all",
			children: s ? `${o}:${s}` : o
		})] })
	});
}
//#endregion
export { o as FilePathChip };

//# sourceMappingURL=file-path-chip.js.map