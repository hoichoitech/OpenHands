import e from "../../../icons/pause.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/chat/chat-stop-button.tsx
function n({ handleStop: n }) {
	return /* @__PURE__ */ t("button", {
		type: "button",
		onClick: n,
		"data-testid": "stop-button",
		className: "cursor-pointer",
		children: /* @__PURE__ */ t(e, { className: "block max-w-none w-4 h-4 text-current" })
	});
}
//#endregion
export { n as ChatStopButton };

//# sourceMappingURL=chat-stop-button.js.map