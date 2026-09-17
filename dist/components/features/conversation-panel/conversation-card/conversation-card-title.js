import { cn as e } from "../../../../utils/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-card-title.tsx
function n({ titleMode: n, title: r, onSave: i, isConversationArchived: a }) {
	return n === "edit" ? /* @__PURE__ */ t("input", {
		autoFocus: !0,
		"data-testid": "conversation-card-title",
		onClick: (e) => {
			e.preventDefault(), e.stopPropagation();
		},
		onBlur: (e) => {
			i(e.currentTarget?.value?.trim?.() ?? "");
		},
		onKeyUp: (e) => {
			e.nativeEvent.isComposing || e.key === "Enter" && e.currentTarget.blur();
		},
		type: "text",
		defaultValue: r,
		className: "text-sm leading-6 font-semibold bg-transparent w-full"
	}) : /* @__PURE__ */ t("p", {
		"data-testid": "conversation-card-title",
		className: e("text-xs leading-6 font-semibold bg-transparent truncate overflow-hidden", a && "opacity-60"),
		children: r
	});
}
//#endregion
export { n as ConversationCardTitle };

//# sourceMappingURL=conversation-card-title.js.map