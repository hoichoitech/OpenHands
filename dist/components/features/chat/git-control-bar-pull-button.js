import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n, getGitPullPrompt as r } from "../../../utils/utils.js";
import { useTracking as i } from "../../../hooks/use-tracking.js";
import a from "../../../icons/u-arrow-down.js";
import { gitControlBarActionButtonClassName as o, gitControlBarActionIconColor as s, gitControlBarActionLabelClassName as c } from "../../../utils/git-control-bar-classes.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/chat/git-control-bar-pull-button.tsx
function d({ onSuggestionsClick: d, hasRepository: f, providerTokensReady: p, isConversationReady: m = !0 }) {
	let { t: h } = e("openhands"), { trackPullButtonClick: g } = i(), _ = p && f && m;
	return /* @__PURE__ */ u("button", {
		type: "button",
		onClick: () => {
			g(), d(r());
		},
		disabled: !_,
		className: n(o(_), "px-0.5 py-1 w-[76px] min-w-[76px]"),
		children: [/* @__PURE__ */ l("div", {
			className: "w-3 h-3 flex items-center justify-center",
			children: /* @__PURE__ */ l(a, {
				width: 12,
				height: 12,
				color: s(_)
			})
		}), /* @__PURE__ */ l("div", {
			className: n(c, "max-w-[76px]"),
			title: h(t.COMMON$PULL),
			children: h(t.COMMON$PULL)
		})]
	});
}
//#endregion
export { d as GitControlBarPullButton };

//# sourceMappingURL=git-control-bar-pull-button.js.map