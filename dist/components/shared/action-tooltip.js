import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { cn as n } from "../../utils/utils.js";
import { StyledTooltip as r } from "./buttons/styled-tooltip.js";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/shared/action-tooltip.tsx
function a({ type: a, onClick: o }) {
	let { t: s } = e("openhands"), c = a === "confirm", l = s(c ? t.ACTION$CONFIRM : t.ACTION$REJECT), u = s(c ? t.CHAT_INTERFACE$USER_CONFIRMED : t.CHAT_INTERFACE$USER_REJECTED), d = c ? `${s(t.CHAT_INTERFACE$INPUT_CONTINUE_MESSAGE)} ⌘↩` : `${s(t.BUTTON$CANCEL)} ⇧⌘⌫`;
	return /* @__PURE__ */ i(r, {
		closeDelay: 100,
		content: u,
		children: /* @__PURE__ */ i("button", {
			"data-testid": `action-${a}-button`,
			type: "button",
			"aria-label": l,
			className: n("rounded px-2 h-6.5 text-sm font-normal leading-5 cursor-pointer hover:opacity-80", a === "confirm" ? "bg-tertiary text-white" : "bg-white text-base"),
			onClick: o,
			children: d
		})
	});
}
//#endregion
export { a as ActionTooltip };

//# sourceMappingURL=action-tooltip.js.map