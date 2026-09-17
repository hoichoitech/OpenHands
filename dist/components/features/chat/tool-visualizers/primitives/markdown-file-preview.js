import { useTranslation as e } from "../../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../../i18n/declaration.js";
import { ArrowUpRight as n } from "../../../../../node_modules/lucide-react/dist/esm/icons/arrow-up-right.js";
import { isActionEvent as r, isObservationEvent as i } from "../../../../../types/agent-server/type-guards.js";
import { MarkdownRenderer as a } from "../../../markdown/markdown-renderer.js";
import o from "../../../../../icons/file.js";
import { Typography as s } from "../../../../../ui/typography.js";
import { planComponents as c } from "../../../markdown/plan-components.js";
import { isMarkdownFilePath as l } from "../../../../../utils/is-markdown-file-path.js";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/primitives/markdown-file-preview.tsx
var f = new Set(["FileEditorAction", "StrReplaceEditorAction"]), p = new Set(["FileEditorObservation", "StrReplaceEditorObservation"]);
function m(e, t) {
	if (r(e) && f.has(e.action.kind)) return e.action.path || null;
	if (i(e) && p.has(e.observation.kind)) {
		let n = e.observation.path;
		if (n) return n;
		if (t && f.has(t.action.kind)) return t.action.path || null;
	}
	return null;
}
function h(e, t) {
	if (r(e) && f.has(e.action.kind)) return e.action.command || null;
	if (i(e) && p.has(e.observation.kind)) {
		let n = e.observation.command;
		if (n) return n;
		if (t && f.has(t.action.kind)) return t.action.command || null;
	}
	return null;
}
function g(e, t) {
	let n = m(e, t), r = h(e, t);
	return !!(n && r === "create" && l(n));
}
function _({ content: r, path: i, onView: l }) {
	let { t: f } = e("openhands"), p = i.split("/").pop() || i;
	return /* @__PURE__ */ d("div", {
		className: "w-full overflow-hidden rounded-[12px] border border-[var(--oh-border)] bg-[var(--oh-surface)]",
		"data-testid": "markdown-file-preview",
		children: [/* @__PURE__ */ u("div", {
			"data-testid": "markdown-file-preview-content",
			className: "max-h-40 overflow-y-auto px-4 py-3 text-white custom-scrollbar-always [--oh-scroll-fade-from:var(--oh-surface)]",
			children: /* @__PURE__ */ u(a, {
				content: r,
				includeStandard: !0,
				includeHeadings: !0,
				components: c
			})
		}), /* @__PURE__ */ d("div", {
			className: "flex h-10 items-center justify-between gap-2 border-t border-[var(--oh-border)] px-3",
			children: [/* @__PURE__ */ d("div", {
				className: "flex min-w-0 items-center gap-1.5",
				children: [/* @__PURE__ */ u(o, { className: "h-3.5 w-3.5 flex-shrink-0 text-[var(--oh-muted)]" }), /* @__PURE__ */ u(s.Text, {
					className: "truncate font-mono text-[11px] leading-4 tracking-[0.11px] text-[var(--oh-muted)]",
					children: p
				})]
			}), l ? /* @__PURE__ */ d("button", {
				type: "button",
				onClick: l,
				className: "flex shrink-0 cursor-pointer items-center gap-1 transition-opacity hover:opacity-80",
				"data-testid": "markdown-file-preview-view",
				children: [/* @__PURE__ */ u(s.Text, {
					className: "text-[11px] leading-4 tracking-[0.11px] text-white",
					children: f(t.COMMON$VIEW)
				}), /* @__PURE__ */ u(n, {
					className: "text-white",
					size: 16
				})]
			}) : null]
		})]
	});
}
//#endregion
export { _ as MarkdownFilePreview, g as isMarkdownFileEditorEvent };

//# sourceMappingURL=markdown-file-preview.js.map