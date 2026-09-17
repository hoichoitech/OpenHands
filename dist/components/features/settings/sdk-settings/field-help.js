import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { Typography as t } from "../../../../ui/typography.js";
import { HelpLink as n } from "../../../../ui/help-link.js";
import { resolveSchemaFieldDescription as r } from "../../../../utils/sdk-settings-field-metadata.js";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/settings/sdk-settings/field-help.tsx
var s = {
	"llm.api_key": {
		textKey: "SCHEMA$LLM$API_KEY$HELP_TEXT",
		linkTextKey: "SCHEMA$LLM$API_KEY$HELP_LINK_TEXT",
		href: "https://docs.openhands.dev/usage/local-setup#getting-an-api-key"
	},
	"verification.critic_api_key": {
		textKey: "SCHEMA$VERIFICATION$CRITIC_API_KEY$HELP_TEXT",
		linkTextKey: "SETTINGS$OPENHANDS_API_KEY_HELP_LINK",
		suffixKey: "SCHEMA$VERIFICATION$CRITIC_API_KEY$HELP_SUFFIX",
		href: "https://app.all-hands.dev/settings/api-keys",
		hideDescription: !0
	}
};
function c({ field: c }) {
	let { t: l } = e("openhands"), u = s[c.key], d = r(l, c.key, c.description);
	return /* @__PURE__ */ o(i, { children: [d && !u?.hideDescription ? /* @__PURE__ */ a(t.Paragraph, {
		className: "text-tertiary-alt text-xs leading-5",
		children: d
	}) : null, u ? /* @__PURE__ */ a(n, {
		testId: `help-link-${c.key}`,
		text: l(u.textKey),
		linkText: l(u.linkTextKey),
		href: u.href,
		suffix: u.suffixKey ? ` ${l(u.suffixKey)}` : void 0,
		size: "settings",
		linkColor: "white"
	}) : null] });
}
//#endregion
export { c as FieldHelp };

//# sourceMappingURL=field-help.js.map