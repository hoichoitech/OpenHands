import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { buildFileTree as n } from "../../../utils/file-tree.js";
import { TreeNode as r } from "./tree-node.js";
import { useMemo as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/features/files-tab/file-tree-view.tsx
function o({ paths: o, selectedPath: s, onSelectFile: c }) {
	let { t: l } = e("openhands"), u = i(() => n(o), [o]);
	return u.children.length === 0 ? /* @__PURE__ */ a("div", {
		className: "px-3 py-4 text-sm text-[var(--oh-muted)]",
		children: l(t.FILES$NO_FILES)
	}) : /* @__PURE__ */ a("ul", {
		className: "py-1 custom-scrollbar-always",
		"data-testid": "file-tree-view",
		children: u.children.map((e) => /* @__PURE__ */ a(r, {
			node: e,
			depth: 0,
			selectedPath: s,
			onSelectFile: c
		}, e.path))
	});
}
//#endregion
export { o as FileTreeView };

//# sourceMappingURL=file-tree-view.js.map