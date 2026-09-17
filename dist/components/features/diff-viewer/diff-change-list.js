import { FileDiffViewer as e } from "./file-diff-viewer.js";
import { useState as t } from "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/diff-change-list.tsx
function r({ changes: r, commit: i }) {
	let [a, o] = t(null);
	return /* @__PURE__ */ n("div", {
		"data-testid": "diff-change-list",
		className: "w-full flex flex-col",
		children: r.map((t) => /* @__PURE__ */ n(e, {
			path: t.path,
			type: t.status,
			commit: i,
			isExpanded: a === t.path,
			onToggle: () => o((e) => e === t.path ? null : t.path)
		}, t.path))
	});
}
//#endregion
export { r as DiffChangeList };

//# sourceMappingURL=diff-change-list.js.map