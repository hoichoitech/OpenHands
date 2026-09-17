import { ChevronDown as e } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as t } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../icons/file.js";
import i from "../../../icons/folder.js";
import { useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/files-tab/tree-node.tsx
function c({ node: l, depth: u, selectedPath: d, onSelectFile: f }) {
	let [p, m] = a(!1), h = 8 + u * 12;
	if (l.isDirectory) return /* @__PURE__ */ s("li", { children: [/* @__PURE__ */ s("button", {
		type: "button",
		onClick: () => m((e) => !e),
		"aria-expanded": p,
		"data-testid": `file-tree-dir-${l.path}`,
		className: n("flex w-full items-center gap-1.5 py-1 pr-2 text-left text-sm text-white", "hover:bg-tertiary cursor-pointer"),
		style: { paddingLeft: `${h}px` },
		children: [
			/* @__PURE__ */ o("span", {
				"aria-hidden": !0,
				className: "inline-flex w-3.5 shrink-0 items-center justify-center text-[var(--oh-muted)]",
				children: o(p ? e : t, { className: "w-3.5 h-3.5" })
			}),
			/* @__PURE__ */ o(i, { className: "w-3.5 h-3.5 shrink-0" }),
			/* @__PURE__ */ o("span", {
				className: "truncate",
				children: l.name
			})
		]
	}), p && l.children.length > 0 && /* @__PURE__ */ o("ul", { children: l.children.map((e) => /* @__PURE__ */ o(c, {
		node: e,
		depth: u + 1,
		selectedPath: d,
		onSelectFile: f
	}, e.path)) })] });
	let g = d === l.path;
	return /* @__PURE__ */ o("li", { children: /* @__PURE__ */ s("button", {
		type: "button",
		onClick: () => f(l.path),
		"data-testid": `file-tree-file-${l.path}`,
		className: n("flex w-full items-center gap-1.5 py-1 pr-2 text-left text-sm", "hover:bg-tertiary cursor-pointer", g ? "bg-[var(--oh-interactive-hover)] text-white" : "text-[var(--oh-text-tertiary)]"),
		style: { paddingLeft: `${h + 16}px` },
		children: [/* @__PURE__ */ o(r, { className: "w-3.5 h-3.5 shrink-0" }), /* @__PURE__ */ o("span", {
			className: "truncate",
			children: l.name
		})]
	}) });
}
//#endregion
export { c as TreeNode };

//# sourceMappingURL=tree-node.js.map