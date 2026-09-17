import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { SettingsInput as r } from "../settings-input.js";
import { isProfileNameValid as i } from "../../../../utils/derive-profile-name.js";
import a, { forwardRef as o } from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
o(function({ testId: o, ruleTestId: l, value: u, onChange: d, onKeyDown: f, placeholder: p, isDisabled: m, isOptional: h, isRequired: g = !1 }, _) {
	let { t: v } = e("openhands"), y = i(u, { isRequired: g }), b = h ? `${v(t.SETTINGS$PROFILE_NAME_LABEL)} (${v(t.COMMON$OPTIONAL)})` : v(t.SETTINGS$PROFILE_NAME_LABEL), x = a.useId(), S = l ?? `${x}-rule`;
	return /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ s(r, {
			ref: _,
			testId: o,
			label: b,
			type: "text",
			className: "w-full",
			value: u,
			placeholder: p ?? v(t.SETTINGS$PROFILE_NAME_PLACEHOLDER),
			onChange: d,
			onKeyDown: f,
			isDisabled: m,
			ariaDescribedBy: S,
			ariaInvalid: !y
		}), /* @__PURE__ */ s("p", {
			id: S,
			"data-testid": l,
			className: n("text-xs", y ? "text-[var(--oh-muted)]" : "text-red-400"),
			children: v(t.SETTINGS$PROFILE_NAME_RULE)
		})]
	});
});
//#endregion

//# sourceMappingURL=profile-name-input.js.map