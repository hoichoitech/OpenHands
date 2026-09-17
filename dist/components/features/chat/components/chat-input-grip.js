import { cn as e } from "../../../../utils/utils.js";
import "react";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/chat/components/chat-input-grip.tsx
function r({ gripRef: r, isGripVisible: i, isGripDragging: a, canResize: o, handleTopEdgeClick: s, handleGripMouseDown: c, handleGripTouchStart: l }) {
	return /* @__PURE__ */ n("div", {
		className: e("absolute top-0 left-0 w-full h-3 z-20 group", !o && "pointer-events-none"),
		id: "resize-grip",
		onClick: o ? s : void 0,
		children: [o && /* @__PURE__ */ t("div", {
			className: "absolute inset-0 z-[1] cursor-ns-resize select-none",
			onMouseDown: c,
			onTouchStart: l,
			"aria-hidden": !0
		}), /* @__PURE__ */ t("div", {
			ref: r,
			className: e("pointer-events-none absolute top-0 left-0 w-full h-px bg-white z-[2] transition-opacity duration-200", !o && "opacity-0", o && (i || a ? "opacity-100" : "opacity-0 group-hover:opacity-100"))
		})]
	});
}
//#endregion
export { r as ChatInputGrip };

//# sourceMappingURL=chat-input-grip.js.map