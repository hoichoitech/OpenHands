import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { EyeOff as n } from "../../../node_modules/lucide-react/dist/esm/icons/eye-off.js";
import { cn as r } from "../../../utils/utils.js";
import { dropdownMenuRowClassName as i, dropdownMenuRowIconClassName as a } from "../../../utils/dropdown-classes.js";
import { ToggleSwitchVisual as o } from "../../../ui/toggle-switch.js";
import { EnumFilterDropdown as s } from "../../shared/filters/enum-filter-dropdown.js";
import { OLDER_CONVERSATION_CUTOFFS as c, isOlderConversationCutoff as l } from "./conversation-panel-list-helpers.js";
import { useConversationPanelPreferencesStore as u } from "../../../stores/conversation-panel-preferences-store.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/hide-older-conversations-row.tsx
var p = {
	"1h": t.CONVERSATION_PANEL$OLDER_OVER_ONE_HOUR,
	"1d": t.CONVERSATION_PANEL$OLDER_OVER_ONE_DAY,
	"7d": t.CONVERSATION_PANEL$OLDER_OVER_ONE_WEEK,
	"30d": t.CONVERSATION_PANEL$OLDER_OVER_THIRTY_DAYS
};
function m() {
	let { t: m } = e("openhands"), h = u((e) => e.showOlderConversations), g = u((e) => e.olderConversationCutoff), _ = u((e) => e.toggleShowOlderConversations), v = u((e) => e.setOlderConversationCutoff), y = !h, b = l(g) ? g : "7d";
	return /* @__PURE__ */ f("div", {
		role: "menuitemcheckbox",
		"aria-checked": y,
		"data-testid": "toggle-older-conversations",
		tabIndex: 0,
		onClick: _,
		onKeyDown: (e) => {
			(e.key === " " || e.key === "Enter") && (e.preventDefault(), _());
		},
		className: r("group", i, "text-[var(--oh-foreground)]"),
		children: [
			/* @__PURE__ */ d(n, {
				className: r("h-3.5 w-3.5", a),
				"aria-hidden": !0
			}),
			/* @__PURE__ */ d("span", {
				className: "min-w-0 shrink truncate",
				children: m(t.CONVERSATION_PANEL$HIDE_CONVERSATIONS)
			}),
			/* @__PURE__ */ d("div", {
				className: "shrink-0",
				onClick: (e) => e.stopPropagation(),
				onKeyDown: (e) => e.stopPropagation(),
				children: /* @__PURE__ */ d(s, {
					testId: "older-conversation-cutoff",
					value: b,
					onChange: v,
					options: c,
					labelKeyByValue: p,
					ariaLabel: m(t.CONVERSATION_PANEL$OLDER_CUTOFF_LABEL),
					emphasizeNonDefault: !1,
					triggerClassName: r("h-7 gap-1 rounded py-0 pl-2 pr-1.5 font-normal", "text-[var(--oh-foreground)] [&_svg]:h-3 [&_svg]:w-3 [&_svg]:text-[var(--oh-muted)]")
				})
			}),
			/* @__PURE__ */ d(o, {
				enabled: y,
				size: "sm",
				className: "ml-auto"
			})
		]
	});
}
//#endregion
export { m as HideOlderConversationsRow };

//# sourceMappingURL=hide-older-conversations-row.js.map