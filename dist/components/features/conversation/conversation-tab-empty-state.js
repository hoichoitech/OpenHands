import { cn as e } from "../../../utils/utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-tab-empty-state.tsx
function r({ icon: r, children: i, action: a, className: o }) {
	return /* @__PURE__ */ n("div", {
		className: e("flex flex-col items-center justify-center w-full h-full p-10 gap-4 text-center", o),
		children: [
			/* @__PURE__ */ t("div", {
				className: "shrink-0 text-[var(--oh-muted)] [&_svg]:size-10 [&_svg]:max-h-10 [&_svg]:max-w-10 [&_svg]:shrink-0",
				"aria-hidden": !0,
				children: r
			}),
			/* @__PURE__ */ t("p", {
				className: "max-w-sm text-center text-sm font-normal leading-5 text-[var(--oh-muted)]",
				children: i
			}),
			a ? /* @__PURE__ */ t("div", {
				className: "flex justify-center pt-1",
				children: a
			}) : null
		]
	});
}
//#endregion
export { r as ConversationTabEmptyState };

//# sourceMappingURL=conversation-tab-empty-state.js.map