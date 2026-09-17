import { cn as e, isMobileDevice as t } from "../../../utils/utils.js";
import n from "../../../icons/u-close.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/chat/remove-file-button.tsx
function i({ onClick: i }) {
	return /* @__PURE__ */ r("button", {
		type: "button",
		onClick: i,
		className: e("z-10 flex w-4 h-4 rounded-full items-center justify-center bg-[var(--oh-surface)] hover:bg-[var(--oh-muted)] cursor-pointer absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200", t() && "opacity-100"),
		children: /* @__PURE__ */ r(n, {
			width: 10,
			height: 10,
			color: "#ffffff"
		})
	});
}
//#endregion
export { i as RemoveFileButton };

//# sourceMappingURL=remove-file-button.js.map