import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { getContextWindowUsagePercentage as r } from "../../../../utils/format-token-count.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
function o(e) {
	return e > 90 ? "danger" : e > 70 ? "warning" : "neutral";
}
function s({ perTurnToken: s, contextWindow: c }) {
	let { t: l } = e("openhands"), u = c <= 0, d = r(s, c), f = o(d), p = f === "warning", m = f === "danger", h = Math.round(d), g = Math.max(0, 100 - h), _ = u ? l(t.CONVERSATION$CONTEXT_WINDOW_UNKNOWN) : `${h}% ${l(t.CONVERSATION$USED)} (${g}% ${l(t.CONVERSATION$LEFT)})`;
	return /* @__PURE__ */ a("div", {
		"data-testid": "context-meter",
		className: "flex flex-col gap-2",
		children: [
			/* @__PURE__ */ a("div", {
				className: "flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ i("span", {
					className: "font-semibold",
					children: l(t.CONVERSATION$CONTEXT_WINDOW)
				}), /* @__PURE__ */ i("span", {
					className: n("shrink-0 text-xs", m ? "text-red-500" : p ? "text-amber-500" : "text-[var(--oh-muted)]"),
					children: _
				})]
			}),
			/* @__PURE__ */ i("div", {
				className: "relative h-1.5 w-full rounded-full bg-tertiary",
				children: /* @__PURE__ */ i("div", {
					"data-testid": "context-meter-bar",
					className: n("absolute inset-y-0 left-0 rounded-full transition-all duration-300", m ? "bg-red-500" : p ? "bg-amber-500" : "bg-foreground"),
					style: { width: `${d}%` }
				})
			}),
			/* @__PURE__ */ i("div", {
				className: "flex justify-end",
				children: /* @__PURE__ */ i("span", {
					className: "text-xs text-[var(--oh-muted)]",
					children: u ? s.toLocaleString() : `${s.toLocaleString()} / ${c.toLocaleString()}`
				})
			})
		]
	});
}
//#endregion
export { s as ContextMeter, o as getContextFillTone };

//# sourceMappingURL=context-meter.js.map