import { cn as e } from "../../../utils/utils.js";
import { FileItem as t } from "./file-item.js";
import "react";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/files/file-list.tsx
function r({ files: r, onRemove: i }) {
	return /* @__PURE__ */ n("div", {
		"data-testid": "file-list",
		className: e("flex flex-col gap-y-1.5 justify-start"),
		children: r.map((e, r) => /* @__PURE__ */ n(t, {
			filename: e,
			onRemove: i ? () => i?.(r) : void 0
		}, r))
	});
}
//#endregion
export { r as FileList };

//# sourceMappingURL=file-list.js.map