import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../icons/checkmark.js";
import { StyledTooltip as i } from "./styled-tooltip.js";
import a from "../../../icons/x-mark.js";
import o from "../../../icons/u-plus.js";
import s from "react";
import { jsx as c } from "react/jsx-runtime";
//#region src/components/shared/buttons/circle-plus-check-toggle.tsx
function l({ className: r, testId: a, tooltipKey: s = t.AUTOMATIONS$ADD_AUTOMATION }) {
	let { t: l } = e("openhands");
	return /* @__PURE__ */ c(i, {
		content: l(s),
		placement: "top",
		children: /* @__PURE__ */ c("span", {
			"aria-hidden": "true",
			"data-testid": a,
			className: n("inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-surface-raised text-white transition-colors hover:bg-[var(--oh-interactive-hover)]", r),
			children: /* @__PURE__ */ c(o, { className: "size-3" })
		})
	});
}
function u({ testId: l, isSelected: u, onToggle: d, isDisabled: f = !1, className: p, enableLabelKey: m = t.SETTINGS$SKILLS_ENABLE_SKILL, disableLabelKey: h = t.SETTINGS$SKILLS_DISABLE_SKILL, enableTooltipKey: g = t.COMMON$ENABLE, disableTooltipKey: _, removeTooltipKey: v = t.COMMON$REMOVE }) {
	let { t: y } = e("openhands"), [b, x] = s.useState(!1), S = (e) => {
		e.stopPropagation(), !f && (d(!u), e.currentTarget.blur());
	}, C = u && b, w = y(u ? _ ?? v : g), T = y(u ? h : m);
	return /* @__PURE__ */ c(i, {
		content: w,
		placement: "top",
		children: /* @__PURE__ */ c("button", {
			type: "button",
			role: "switch",
			"aria-checked": u,
			"data-testid": l,
			"data-showing-remove": C ? "true" : "false",
			disabled: f,
			"aria-label": T,
			onClick: S,
			onPointerEnter: () => x(!0),
			onPointerLeave: () => x(!1),
			className: n("inline-flex size-7 shrink-0 cursor-pointer items-center justify-center rounded-full p-0 transition-colors", u && (C ? "border-0 bg-[rgba(248,113,113,0.14)] text-[#ef4444] hover:bg-[rgba(248,113,113,0.24)]" : "border border-white bg-transparent text-white [&_path]:fill-current"), !u && "border-0 bg-surface-raised text-white hover:bg-[var(--oh-interactive-hover)]", f && "cursor-not-allowed opacity-50", p),
			children: u ? C ? /* @__PURE__ */ c(a, {
				"aria-hidden": !0,
				width: 14,
				height: 14,
				className: "stroke-[2.5]"
			}) : /* @__PURE__ */ c(r, {
				"aria-hidden": !0,
				width: 14,
				height: 14
			}) : /* @__PURE__ */ c(o, {
				"aria-hidden": !0,
				className: "size-3"
			})
		})
	});
}
//#endregion
export { l as CirclePlusBadge, u as CirclePlusCheckToggle };

//# sourceMappingURL=circle-plus-check-toggle.js.map