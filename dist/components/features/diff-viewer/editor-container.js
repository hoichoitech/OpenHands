import { cn as e } from "../../../utils/utils.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/editor-container.tsx
function n({ height: n, children: r, className: i }) {
	return /* @__PURE__ */ t("div", {
		"data-testid": "editor-container",
		className: e("w-full border-b border-[var(--oh-border)] overflow-hidden h-[var(--editor-height)]", i),
		style: { "--editor-height": `${n}px` },
		children: r
	});
}
//#endregion
export { n as EditorContainer };

//# sourceMappingURL=editor-container.js.map