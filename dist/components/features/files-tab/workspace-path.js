import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { CopyToClipboardButton as n } from "../../shared/buttons/copy-to-clipboard-button.js";
import r from "react";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/files-tab/workspace-path.tsx
function o({ path: o }) {
	let { t: s } = e("openhands"), [c, l] = r.useState(!1), u = o?.trim();
	return r.useEffect(() => {
		if (!c) return;
		let e = window.setTimeout(() => l(!1), 2e3);
		return () => window.clearTimeout(e);
	}, [c]), u ? /* @__PURE__ */ a("div", {
		className: "flex min-w-0 items-center gap-2 border-b border-[var(--oh-border)] px-3 py-1.5 text-xs",
		"data-testid": "files-tab-workspace-path",
		children: [
			/* @__PURE__ */ a("span", {
				className: "shrink-0 text-[var(--oh-muted)]",
				children: [s(t.WORKSPACE$TITLE), ":"]
			}),
			/* @__PURE__ */ i("span", {
				className: "min-w-0 flex-1 truncate font-mono",
				"data-testid": "files-tab-workspace-path-value",
				title: u,
				children: u
			}),
			/* @__PURE__ */ i(n, {
				isHidden: !1,
				isDisabled: c,
				onClick: async () => {
					await navigator.clipboard.writeText(u), l(!0);
				},
				mode: c ? "copied" : "copy"
			})
		]
	}) : null;
}
//#endregion
export { o as WorkspacePath };

//# sourceMappingURL=workspace-path.js.map