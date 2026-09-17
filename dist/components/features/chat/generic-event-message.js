import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../icons/angle-down-solid.js";
import i from "../../../icons/angle-up-solid.js";
import { SuccessIndicator as a } from "./success-indicator.js";
import { MarkdownRenderer as o } from "../markdown/markdown-renderer.js";
import { StyledTooltip as s } from "../../shared/buttons/styled-tooltip.js";
import { formatEventTimestamp as c } from "../../../utils/format-event-timestamp.js";
import l from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/components/features/chat/generic-event-message.tsx
function f({ title: f, details: p, success: m, initiallyExpanded: h = !1, chevronPosition: g = "after", titleTrailing: _, titleIcon: v, timestamp: y }) {
	let { t: b, i18n: x } = e("openhands"), [S, C] = l.useState(h), [w, T] = l.useState(!1), [E, D] = l.useState(!1), O = c(y, x?.language), k = p ? /* @__PURE__ */ u("button", {
		type: "button",
		onClick: (e) => {
			C((e) => !e), e.detail > 0 && (T(!1), e.currentTarget.blur());
		},
		className: "cursor-pointer text-left",
		"aria-label": b(S ? t.BUTTON$COLLAPSE : t.BUTTON$EXPAND),
		children: u(S ? i : r, { className: n("h-4 w-4 inline fill-[var(--oh-muted)]", g === "after" ? "ml-2" : "mr-2") })
	}) : null, A = /* @__PURE__ */ d("div", {
		"data-testid": "generic-event-message-title",
		className: "flex items-center",
		onMouseEnter: () => T(!0),
		onMouseLeave: () => T(!1),
		onFocusCapture: () => D(!0),
		onBlurCapture: (e) => {
			e.currentTarget.contains(e.relatedTarget) || D(!1);
		},
		children: [
			g === "before" && k,
			v,
			/* @__PURE__ */ u("span", { children: f }),
			g === "after" && k
		]
	});
	return /* @__PURE__ */ d("div", {
		className: "flex flex-col gap-1.5 my-1 py-1 text-sm w-full",
		children: [/* @__PURE__ */ d("div", {
			className: "flex items-center justify-between font-normal text-[var(--oh-muted)]",
			children: [O ? /* @__PURE__ */ u(s, {
				content: /* @__PURE__ */ u("time", {
					dateTime: y,
					children: O
				}),
				placement: "top",
				isOpen: w || E,
				children: A
			}) : A, /* @__PURE__ */ d("div", {
				className: "flex items-center",
				children: [_, m && /* @__PURE__ */ u(a, { status: m })]
			})]
		}), S && (typeof p == "string" ? /* @__PURE__ */ u(o, { children: p }) : p)]
	});
}
//#endregion
export { f as GenericEventMessage };

//# sourceMappingURL=generic-event-message.js.map