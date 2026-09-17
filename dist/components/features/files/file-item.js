import { FaFile as e } from "../../../node_modules/react-icons/fa/index.js";
import { RemoveButton as t } from "../../shared/buttons/remove-button.js";
import { jsx as n, jsxs as r } from "react/jsx-runtime";
//#region src/components/features/files/file-item.tsx
function i({ filename: i, onRemove: a }) {
	return /* @__PURE__ */ r("div", {
		"data-testid": "file-item",
		className: "flex flex-row gap-x-1 items-center justify-start py-1",
		children: [
			/* @__PURE__ */ n(e, { className: "h-4 w-4" }),
			/* @__PURE__ */ n("code", {
				className: "text-sm flex-1 text-white truncate",
				children: i
			}),
			a && /* @__PURE__ */ n(t, { onClick: a })
		]
	});
}
//#endregion
export { i as FileItem };

//# sourceMappingURL=file-item.js.map