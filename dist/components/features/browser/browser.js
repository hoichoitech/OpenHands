import { BrowserSnapshot as e } from "./browser-snapshot.js";
import { BrowserChromeBar as t } from "./browser-chrome-bar.js";
import { EmptyBrowserMessage as n } from "./empty-browser-message.js";
import { useBrowserStore as r } from "../../../stores/browser-store.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/browser/browser.tsx
function o() {
	let { url: o, screenshotSrc: s } = r(), c = !!s, l = s?.startsWith("data:image/png;base64,") ? s : `data:image/png;base64,${s ?? ""}`;
	return /* @__PURE__ */ a("div", {
		className: "flex h-full min-h-0 w-full flex-col text-[var(--oh-muted)]",
		children: [/* @__PURE__ */ i(t, {
			url: o,
			hasPage: c
		}), /* @__PURE__ */ i("div", {
			className: "flex min-h-0 flex-1 flex-col overflow-y-auto scrollbar-hide bg-[var(--oh-surface)]",
			children: s ? /* @__PURE__ */ i(e, { src: l }) : /* @__PURE__ */ i(n, {})
		})]
	});
}
//#endregion
export { o as BrowserPanel };

//# sourceMappingURL=browser.js.map