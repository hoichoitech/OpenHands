import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useSettings as n } from "../../../hooks/query/use-settings.js";
import { StyledTooltip as r } from "../../shared/buttons/styled-tooltip.js";
import i from "../../../icons/lock.js";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/features/chat/confirmation-mode-enabled.tsx
function o() {
	let { t: o } = e("openhands"), { data: s } = n();
	return s?.confirmation_mode ? /* @__PURE__ */ a(r, {
		closeDelay: 100,
		content: o(t.COMMON$CONFIRMATION_MODE_ENABLED),
		tooltipClassName: "bg-white text-black hover:bg-transparent",
		children: /* @__PURE__ */ a("div", {
			className: "flex items-center justify-center w-[26px] h-[26px] rounded-lg bg-[var(--oh-surface)]",
			children: /* @__PURE__ */ a(i, {
				width: 15,
				height: 15
			})
		})
	}) : null;
}
//#endregion
export { o as default };

//# sourceMappingURL=confirmation-mode-enabled.js.map