import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { IoIosGlobe as n } from "../../../node_modules/react-icons/io/index.js";
import { ConversationTabEmptyState as r } from "../conversation/conversation-tab-empty-state.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/browser/empty-browser-message.tsx
function a() {
	let { t: a } = e("openhands");
	return /* @__PURE__ */ i(r, {
		icon: /* @__PURE__ */ i(n, {}),
		children: a(t.BROWSER$NO_PAGE_LOADED)
	});
}
//#endregion
export { a as EmptyBrowserMessage };

//# sourceMappingURL=empty-browser-message.js.map