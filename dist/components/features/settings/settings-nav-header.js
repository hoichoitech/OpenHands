import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { cn as t } from "../../../utils/utils.js";
import { Typography as n } from "../../../ui/typography.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/settings/settings-nav-header.tsx
function i({ text: i, className: a }) {
	let { t: o } = e("openhands");
	return /* @__PURE__ */ r("div", {
		className: t("px-3.5", a),
		children: /* @__PURE__ */ r(n.Text, {
			className: "text-[11px] font-medium text-[var(--oh-text-dim)] uppercase tracking-wide leading-5",
			children: o(i)
		})
	});
}
//#endregion
export { i as SettingsNavHeader };

//# sourceMappingURL=settings-nav-header.js.map