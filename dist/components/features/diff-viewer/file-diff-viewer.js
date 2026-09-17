import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ChevronDown as n } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as ee } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { cn as r } from "../../../utils/utils.js";
import { MarkdownRenderer as i } from "../markdown/markdown-renderer.js";
import { Typography as a } from "../../../ui/typography.js";
import { getLanguageFromPath as o } from "../../../utils/get-language-from-path.js";
import { LuFileCheck as s, LuFileDiff as c, LuFileMinus as l, LuFilePlus as u, LuGitCompareArrows as d, LuHistory as f } from "../../../node_modules/react-icons/lu/index.js";
import { AccordionPanel as p } from "./accordion-panel.js";
import { de as te, we as ne } from "../../../node_modules/@monaco-editor/react/dist/index.js";
import { useUnifiedGitDiff as re } from "../../../hooks/query/use-unified-git-diff.js";
import { LoadingSpinner as ie } from "./loading-spinner.js";
import { EditorContainer as m } from "./editor-container.js";
import h from "react";
import { jsx as g, jsxs as _ } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/file-diff-viewer.tsx
var v = [
	{
		mode: "old",
		icon: f
	},
	{
		mode: "diff",
		icon: d
	},
	{
		mode: "new",
		icon: s
	}
], y = {
	renderValidationDecorations: "off",
	readOnly: !0,
	scrollBeyondLastLine: !1,
	minimap: { enabled: !1 },
	automaticLayout: !0,
	scrollbar: { alwaysConsumeMouseWheel: !1 }
};
function b(e) {
	return Math.min(e, 600);
}
var x = {
	A: u,
	D: l,
	M: c,
	R: "Renamed",
	U: "Untracked"
}, S = (e) => {
	e.editor.defineTheme("custom-diff-theme", {
		base: "vs-dark",
		inherit: !0,
		rules: [
			{
				token: "comment",
				foreground: "6a9955"
			},
			{
				token: "keyword",
				foreground: "569cd6"
			},
			{
				token: "string",
				foreground: "ce9178"
			},
			{
				token: "number",
				foreground: "b5cea8"
			}
		],
		colors: {
			"diffEditor.insertedTextBackground": "#014b01AA",
			"diffEditor.removedTextBackground": "#750000AA",
			"diffEditor.insertedLineBackground": "#003f00AA",
			"diffEditor.removedLineBackground": "#5a0000AA",
			"diffEditor.border": "var(--oh-border-subtle)",
			"editorUnnecessaryCode.border": "#00000000",
			"editorUnnecessaryCode.opacity": "rgba(0, 0, 0, 0.467)"
		}
	});
};
function C({ path: s, type: c, commit: l, isExpanded: u, onToggle: d }) {
	let { t: f } = e("openhands"), [C, w] = h.useState(!1), T = u !== void 0, E = T ? u : C, D = !E, O = () => {
		if (T) {
			d?.();
			return;
		}
		w((e) => !e);
	}, [k, A] = h.useState(0), [j, M] = h.useState(!1), [N, P] = h.useState("diff"), F = h.useRef(null), I = h.useRef(null), L = c === "A" || c === "U", R = c === "D", z = h.useMemo(() => {
		if (c === "R") {
			let e = s.split(/\s+/).slice(1);
			return e[e.length - 1];
		}
		return s;
	}, [s, c]), { data: B, isLoading: V, isSuccess: H, isRefetching: U } = re({
		filePath: z,
		type: c,
		enabled: !D,
		commit: l
	}), W = h.useCallback(() => {
		if (!F.current) return;
		let e = F.current.getOriginalEditor(), t = F.current.getModifiedEditor();
		e && t && (A(b(Math.max(e.getContentHeight(), t.getContentHeight()) + 20)), M(!0));
	}, []), G = h.useCallback(() => {
		I.current && (A(b(I.current.getContentHeight() + 20)), M(!0));
	}, []);
	h.useEffect(() => {
		M(!1), A(0);
	}, [D, N]);
	let K = (e) => {
		F.current = e, W(), e.getOriginalEditor().onDidContentSizeChange(W), e.getModifiedEditor().onDidContentSizeChange(W);
	}, q = (e) => {
		I.current = e, G(), e.onDidContentSizeChange(G);
	}, J = (c === "U" ? x.A : x[c]) || "?", ae = typeof J == "string" ? /* @__PURE__ */ g(a.Text, { children: J }) : h.createElement(J, { className: "w-4 h-4 shrink-0" }), oe = V || U, Y = o(z), se = Y === "markdown", X = N === "old" ? B?.original ?? "" : B?.modified ?? "", Z = !R, Q = !D && Z, $ = (e) => /* @__PURE__ */ g("div", {
		className: r("relative w-full", !j && "h-0 overflow-hidden"),
		children: /* @__PURE__ */ g(m, {
			height: j ? k : b(400),
			className: r(!j && "absolute inset-x-0 top-0 invisible"),
			children: e
		})
	});
	return /* @__PURE__ */ _("div", {
		"data-testid": "file-diff-viewer-outer",
		className: "w-full flex flex-col",
		children: [/* @__PURE__ */ g("div", {
			className: "flex h-10 items-center px-3 border-b border-[var(--oh-border)] hover:cursor-pointer",
			onClick: O,
			children: /* @__PURE__ */ _("span", {
				className: "text-sm w-full text-content flex items-center gap-2 min-w-0",
				children: [
					/* @__PURE__ */ g("span", {
						className: "inline-flex w-4 h-4 shrink-0 items-center justify-center",
						children: oe ? /* @__PURE__ */ g(ie, { className: "w-4 h-4" }) : ae
					}),
					/* @__PURE__ */ g("strong", {
						className: "min-w-0 flex-1 truncate font-medium",
						children: z
					}),
					Z && /* @__PURE__ */ g("span", {
						className: r("flex items-center gap-0.5 shrink-0", !Q && "invisible pointer-events-none"),
						onClick: (e) => e.stopPropagation(),
						"aria-hidden": !Q,
						children: v.map(({ mode: e, icon: t }) => /* @__PURE__ */ g("button", {
							"data-testid": `view-mode-${e}`,
							type: "button",
							tabIndex: Q ? 0 : -1,
							"aria-pressed": N === e,
							onClick: () => P(e),
							className: r("p-1 rounded transition-colors cursor-pointer", N === e ? "bg-[var(--oh-interactive-hover)] text-white" : "text-[var(--oh-muted)] hover:bg-[var(--oh-interactive-hover)] hover:text-white"),
							children: /* @__PURE__ */ g(t, { className: "w-4 h-4" })
						}, e))
					}),
					/* @__PURE__ */ g("button", {
						"data-testid": "collapse",
						type: "button",
						className: "shrink-0 text-[var(--oh-muted)]",
						children: g(D ? ee : n, {
							className: "w-4 h-4",
							"aria-hidden": !0
						})
					})
				]
			})
		}), /* @__PURE__ */ g(p, {
			open: E,
			children: R && !l ? /* @__PURE__ */ g("div", {
				"data-testid": "file-deleted-message",
				className: "w-full border-b border-[var(--oh-border)] p-4 bg-base text-[var(--oh-text-dim)] text-sm",
				children: f(t.DIFF_VIEWER$FILE_DELETED)
			}) : H && (N === "diff" ? $(/* @__PURE__ */ g(ne, {
				"data-testid": "file-diff-viewer",
				className: "w-full h-full",
				language: Y,
				original: L ? "" : B?.original ?? "",
				modified: R ? "" : B?.modified ?? "",
				theme: "custom-diff-theme",
				onMount: K,
				beforeMount: S,
				options: {
					...y,
					renderSideBySide: !L && !R,
					hideUnchangedRegions: { enabled: !0 }
				}
			})) : se ? /* @__PURE__ */ g("div", {
				className: "w-full border-b border-[var(--oh-border)] overflow-auto p-4 bg-base prose prose-invert max-w-none",
				"data-testid": "markdown-preview",
				style: { maxHeight: 600 },
				children: /* @__PURE__ */ g(i, {
					content: X,
					includeStandard: !0,
					includeHeadings: !0
				})
			}) : $(/* @__PURE__ */ g(te, {
				"data-testid": "file-single-viewer",
				className: "w-full h-full",
				language: Y,
				value: X,
				theme: "custom-diff-theme",
				beforeMount: S,
				onMount: q,
				options: y
			})))
		})]
	});
}
//#endregion
export { C as FileDiffViewer };

//# sourceMappingURL=file-diff-viewer.js.map