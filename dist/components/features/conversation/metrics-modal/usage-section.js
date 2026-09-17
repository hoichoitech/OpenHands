import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { MetricRow as n } from "./metric-row.js";
import { Fragment as r, jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/conversation/metrics-modal/usage-section.tsx
function o({ usage: o }) {
	let { t: s } = e("openhands");
	return /* @__PURE__ */ a(r, { children: [
		/* @__PURE__ */ i(n, {
			label: s(t.CONVERSATION$INPUT),
			value: o.prompt_tokens.toLocaleString()
		}),
		/* @__PURE__ */ a("div", {
			className: "grid grid-cols-2 gap-2 pl-4 text-sm",
			children: [
				/* @__PURE__ */ i("span", {
					className: "text-[var(--oh-muted)]",
					children: s(t.CONVERSATION$CACHE_HIT)
				}),
				/* @__PURE__ */ i("span", {
					className: "text-right",
					children: o.cache_read_tokens.toLocaleString()
				}),
				/* @__PURE__ */ i("span", {
					className: "text-[var(--oh-muted)]",
					children: s(t.CONVERSATION$CACHE_WRITE)
				}),
				/* @__PURE__ */ i("span", {
					className: "text-right",
					children: o.cache_write_tokens.toLocaleString()
				})
			]
		}),
		/* @__PURE__ */ i(n, {
			label: s(t.CONVERSATION$OUTPUT),
			value: o.completion_tokens.toLocaleString()
		}),
		/* @__PURE__ */ i(n, {
			label: s(t.CONVERSATION$TOTAL),
			value: (o.prompt_tokens + o.completion_tokens).toLocaleString(),
			labelClassName: "font-semibold",
			valueClassName: "font-bold",
			showBorder: !1
		})
	] });
}
//#endregion
export { o as UsageSection };

//# sourceMappingURL=usage-section.js.map