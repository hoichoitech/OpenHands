import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { FolderPlus as n } from "../../../node_modules/lucide-react/dist/esm/icons/folder-plus.js";
import { cn as r } from "../../../utils/utils.js";
import { LocalNewConversationMenu as i } from "./local-new-conversation-menu.js";
import { CloudNewConversationMenu as a } from "./cloud-new-conversation-menu.js";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-panel-new-thread-picker.tsx
var s = r("inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md", "text-[var(--oh-muted)] transition-colors", "hover:bg-[var(--oh-surface-raised)] hover:text-white", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--oh-border)]", "disabled:cursor-not-allowed disabled:opacity-50");
function c({ backendKind: r }) {
	let { t: c } = e("openhands"), l = c(t.CONVERSATION_PANEL$NEW_THREAD_FOLDER_ARIA), u = /* @__PURE__ */ o(n, {
		className: "h-4 w-4 shrink-0",
		"aria-hidden": !0,
		strokeWidth: 2
	});
	return o(r === "local" ? i : a, {
		useFixedPlacement: !0,
		popoverTestId: "conversation-panel-new-thread-popover",
		popoverClassName: "",
		trigger: ({ onClick: e, "aria-expanded": t, disabled: n, "aria-haspopup": r }) => /* @__PURE__ */ o("button", {
			type: "button",
			className: s,
			"aria-label": l,
			"aria-expanded": t,
			"aria-haspopup": r,
			disabled: n,
			"data-testid": "conversation-panel-new-thread-picker",
			onClick: e,
			children: u
		})
	});
}
//#endregion
export { c as ConversationPanelNewThreadPicker };

//# sourceMappingURL=conversation-panel-new-thread-picker.js.map