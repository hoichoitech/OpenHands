import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { LoadingSpinner as r } from "../../shared/loading-spinner.js";
import { Avatar as i } from "./avatar.js";
import a from "../../../icons/profile.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/sidebar/user-avatar.tsx
function c({ avatarUrl: c, isLoading: l }) {
	let { t: u } = e("openhands");
	return /* @__PURE__ */ s("button", {
		type: "button",
		"data-testid": "user-avatar",
		className: n("w-8 h-8 rounded-full flex items-center justify-center cursor-pointer", l && "bg-transparent"),
		children: [
			!l && c && /* @__PURE__ */ o(i, { src: c }),
			!l && !c && /* @__PURE__ */ o(a, {
				"aria-label": u(t.USER$AVATAR_PLACEHOLDER),
				width: 28,
				height: 28,
				className: "text-[var(--oh-muted)]"
			}),
			l && /* @__PURE__ */ o(r, { size: "small" })
		]
	});
}
//#endregion
export { c as UserAvatar };

//# sourceMappingURL=user-avatar.js.map