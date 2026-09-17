import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n, getGitPushPrompt as r } from "../../../utils/utils.js";
import { useTracking as i } from "../../../hooks/use-tracking.js";
import a from "../../../icons/u-arrow-up.js";
import { gitControlBarActionButtonClassName as o, gitControlBarActionIconColor as s, gitControlBarActionLabelClassName as c } from "../../../utils/git-control-bar-classes.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/chat/git-control-bar-push-button.tsx
function d({ onSuggestionsClick: d, hasRepository: f, providerTokensReady: p, currentGitProvider: m, isConversationReady: h = !0 }) {
	let { t: g } = e("openhands"), { trackPushButtonClick: _ } = i(), v = p && f && h;
	return /* @__PURE__ */ u("button", {
		type: "button",
		onClick: () => {
			_(), d(r(m));
		},
		disabled: !v,
		className: n(o(v), "px-2 py-1 w-[77px] min-w-[77px]"),
		children: [/* @__PURE__ */ l("div", {
			className: "w-3 h-3 flex items-center justify-center",
			children: /* @__PURE__ */ l(a, {
				width: 12,
				height: 12,
				color: s(v)
			})
		}), /* @__PURE__ */ l("div", {
			className: n(c, "max-w-[77px]"),
			title: g(t.COMMON$PUSH),
			children: g(t.COMMON$PUSH)
		})]
	});
}
//#endregion
export { d as GitControlBarPushButton };

//# sourceMappingURL=git-control-bar-push-button.js.map