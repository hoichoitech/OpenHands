import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ListTree as n } from "../../../node_modules/lucide-react/dist/esm/icons/list-tree.js";
import { cn as r } from "../../../utils/utils.js";
import i from "../../../icons/u-close.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/files-tab/file-quick-row.tsx
var s = "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";
function c({ openPaths: c, selectedPath: l, onSelectFile: u, onCloseFile: d, isTreeVisible: f, onToggleTree: p, actions: m }) {
	let { t: h } = e("openhands");
	return /* @__PURE__ */ o("div", {
		className: "flex h-[34px] shrink-0 items-stretch gap-1.5 overflow-y-hidden border-b border-[var(--oh-border)] px-2",
		"data-testid": "file-quick-row",
		children: [
			/* @__PURE__ */ a("button", {
				type: "button",
				onClick: p,
				"data-testid": "file-quick-row-tree-toggle",
				"aria-pressed": f,
				"aria-label": h(f ? t.FILES$HIDE_FILE_TREE : t.FILES$SHOW_FILE_TREE),
				title: h(f ? t.FILES$HIDE_FILE_TREE : t.FILES$SHOW_FILE_TREE),
				className: r("shrink-0 self-center inline-flex items-center justify-center w-6 h-6 rounded-md cursor-pointer", "text-[var(--oh-text-tertiary)] hover:bg-tertiary", f && "bg-[var(--oh-surface-raised)]"),
				children: /* @__PURE__ */ a(n, {
					className: "w-3 h-3",
					"aria-hidden": !0,
					strokeWidth: 2
				})
			}),
			c.length > 0 ? /* @__PURE__ */ a("div", {
				role: "tablist",
				"aria-label": h(t.COMMON$FILES),
				className: r("flex min-h-0 min-w-0 flex-1 flex-nowrap items-stretch overflow-x-auto overflow-y-hidden overscroll-y-none", s),
				children: c.map((e, n) => {
					let s = l === e, c = e.split("/").pop() || e;
					return /* @__PURE__ */ o("div", {
						className: r("group/file-tab relative flex shrink-0 items-stretch", "border-r border-r-[var(--oh-border)]", n === 0 && "border-l border-l-[var(--oh-border)]", "border-b-2 -mb-px transition-colors", s ? "border-b-white text-white" : "border-b-transparent text-[var(--oh-muted)] hover:text-white hover:border-b-white/25"),
						children: [/* @__PURE__ */ a("button", {
							type: "button",
							role: "tab",
							"aria-selected": s,
							onClick: () => u(e),
							title: e,
							"data-testid": `file-quick-row-item-${e}`,
							className: "flex min-w-0 max-w-[160px] items-center pl-2.5 pr-1 text-xs cursor-pointer text-inherit",
							children: /* @__PURE__ */ a("span", {
								className: "truncate",
								children: c
							})
						}), /* @__PURE__ */ a("button", {
							type: "button",
							"data-testid": `file-quick-row-close-${e}`,
							"aria-label": h(t.FILES$CLOSE_TAB, { path: e }),
							title: h(t.FILES$CLOSE_TAB, { path: e }),
							className: r("inline-flex items-center justify-center size-5 self-center mr-1 rounded-sm shrink-0 cursor-pointer", "text-inherit hover:bg-white/10", "opacity-100 transition-opacity", "md:opacity-0 md:group-hover/file-tab:opacity-100 md:group-focus-within/file-tab:opacity-100"),
							onClick: () => d(e),
							children: /* @__PURE__ */ a(i, {
								width: 10,
								height: 10,
								"aria-hidden": !0
							})
						})]
					}, e);
				})
			}) : /* @__PURE__ */ a("div", { className: "flex-1 min-w-0" }),
			m ? /* @__PURE__ */ a("div", {
				className: "ml-auto shrink-0 self-center flex items-center gap-1",
				children: m
			}) : null
		]
	});
}
//#endregion
export { c as FileQuickRow };

//# sourceMappingURL=file-quick-row.js.map