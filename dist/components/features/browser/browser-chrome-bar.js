import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ExternalLink as n } from "../../../node_modules/lucide-react/dist/esm/icons/external-link.js";
import { cn as r } from "../../../utils/utils.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/browser/browser-chrome-bar.tsx
function o({ url: o, hasPage: s }) {
	let { t: c } = e("openhands"), l = r("shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md", "text-[var(--oh-text-tertiary)] opacity-40 cursor-not-allowed"), u = "w-3.5 h-3.5";
	return /* @__PURE__ */ a("div", {
		className: "flex w-full min-h-[34px] shrink-0 items-center gap-1 border-b border-[var(--oh-border)] px-2 py-1.5",
		"data-testid": "browser-chrome-bar",
		children: [/* @__PURE__ */ i("div", {
			className: r("flex min-h-7 min-w-0 flex-1 items-center rounded-md border border-[var(--oh-border)]", "bg-[var(--oh-surface-raised)] px-2 text-xs leading-5", o ? "text-[var(--oh-text-tertiary)]" : "text-[var(--oh-text-dim)]"),
			"data-testid": "browser-chrome-url",
			title: o || void 0,
			children: /* @__PURE__ */ i("span", {
				className: "truncate",
				children: o || c(t.BROWSER$URL_PLACEHOLDER)
			})
		}), s && o ? /* @__PURE__ */ i("a", {
			href: o,
			target: "_blank",
			rel: "noopener noreferrer",
			"aria-label": c(t.BUTTON$OPEN_IN_NEW_TAB),
			title: c(t.BUTTON$OPEN_IN_NEW_TAB),
			"data-testid": "browser-chrome-open-external",
			className: r("shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md", "text-[var(--oh-text-tertiary)] hover:bg-tertiary cursor-pointer"),
			children: /* @__PURE__ */ i(n, {
				className: u,
				"aria-hidden": !0,
				strokeWidth: 2
			})
		}) : /* @__PURE__ */ i("button", {
			type: "button",
			disabled: !0,
			"aria-label": c(t.BUTTON$OPEN_IN_NEW_TAB),
			title: c(t.BUTTON$OPEN_IN_NEW_TAB),
			className: l,
			children: /* @__PURE__ */ i(n, {
				className: u,
				"aria-hidden": !0,
				strokeWidth: 2
			})
		})]
	});
}
//#endregion
export { o as BrowserChromeBar };

//# sourceMappingURL=browser-chrome-bar.js.map