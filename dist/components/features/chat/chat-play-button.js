import { cn as e } from "../../../utils/utils.js";
import t from "../../../icons/play-solid.js";
import { jsx as n } from "react/jsx-runtime";
//#region src/components/features/chat/chat-play-button.tsx
function r({ onAgentResumed: r, disabled: i = !1 }) {
	return /* @__PURE__ */ n("button", {
		type: "button",
		onClick: r,
		"data-testid": "play-button",
		disabled: i,
		className: e("cursor-pointer", i && "cursor-not-allowed"),
		children: /* @__PURE__ */ n(t, { className: "block max-w-none w-4 h-4 text-current" })
	});
}
//#endregion
export { r as ChatResumeAgentButton };

//# sourceMappingURL=chat-play-button.js.map