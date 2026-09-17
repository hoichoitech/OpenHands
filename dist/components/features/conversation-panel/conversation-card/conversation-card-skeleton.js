import { jsx as e } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-card-skeleton.tsx
function t({ compact: t = !1 }) {
	return t ? /* @__PURE__ */ e("div", {
		"data-testid": "conversation-card-skeleton-compact",
		className: "skeleton-stagger flex flex-col items-center gap-1.5 py-1",
		"aria-hidden": !0,
		children: [
			0,
			1,
			2
		].map((t) => /* @__PURE__ */ e("div", { className: "h-1.5 w-7 shrink-0 skeleton" }, `conversation-skeleton-compact-${t}`))
	}) : /* @__PURE__ */ e("div", {
		"data-testid": "conversation-card-skeleton",
		className: "skeleton-stagger flex flex-col gap-1.5 py-0.5",
		"aria-hidden": !0,
		children: [
			0,
			1,
			2
		].map((t) => /* @__PURE__ */ e("div", { className: "h-6 min-h-6 w-full skeleton" }, `conversation-skeleton-row-${t}`))
	});
}
//#endregion
export { t as ConversationCardSkeleton };

//# sourceMappingURL=conversation-card-skeleton.js.map