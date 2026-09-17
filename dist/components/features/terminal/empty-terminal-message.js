import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { SquareChevronRight as n } from "../../../node_modules/lucide-react/dist/esm/icons/square-chevron-right.js";
import { ConversationTabEmptyState as r } from "../conversation/conversation-tab-empty-state.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/terminal/empty-terminal-message.tsx
function a() {
	let { t: a } = e("openhands");
	return /* @__PURE__ */ i(r, {
		className: "h-full",
		icon: /* @__PURE__ */ i(n, {
			"aria-hidden": !0,
			strokeWidth: 2,
			className: "size-full"
		}),
		children: a(t.TERMINAL$NO_OUTPUT)
	});
}
//#endregion
export { a as EmptyTerminalMessage };

//# sourceMappingURL=empty-terminal-message.js.map