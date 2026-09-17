import { cn as e } from "../../../utils/utils.js";
import { useNavigation as t } from "../../../context/navigation-context.js";
import { jsx as n } from "react/jsx-runtime";
import r from "react-dom";
//#region src/components/features/conversation-panel/conversation-panel-wrapper.tsx
function i({ isOpen: i, children: a }) {
	let { currentPath: o } = t();
	if (!i) return null;
	let s = document.getElementById("root-outlet");
	return s ? r.createPortal(/* @__PURE__ */ n("div", {
		className: e("absolute h-full w-full left-0 top-0 z-[100] bg-black/80 rounded-xl", o === "/" && "bottom-0 top-0 md:top-3 md:bottom-3 h-auto"),
		children: a
	}), s) : null;
}
//#endregion
export { i as ConversationPanelWrapper };

//# sourceMappingURL=conversation-panel-wrapper.js.map