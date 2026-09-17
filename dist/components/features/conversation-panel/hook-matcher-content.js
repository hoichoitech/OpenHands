import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Typography as n } from "../../../ui/typography.js";
import { Pre as r } from "../../../ui/pre.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/hook-matcher-content.tsx
var o = "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium leading-4 border border-[var(--oh-border)] bg-[var(--oh-surface)] text-tertiary-light";
function s({ matcher: s }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ a("div", {
		className: "py-3",
		children: [/* @__PURE__ */ a("div", {
			className: "mb-2",
			children: [/* @__PURE__ */ i(n.Text, {
				className: "text-sm font-semibold text-[var(--oh-text-tertiary)]",
				children: c(t.HOOKS_MODAL$MATCHER)
			}), /* @__PURE__ */ i("span", {
				className: `ml-2 ${o}`,
				children: s.matcher
			})]
		}), /* @__PURE__ */ a("div", {
			className: "mt-2",
			children: [/* @__PURE__ */ i(n.Text, {
				className: "text-sm font-semibold text-[var(--oh-text-tertiary)] mb-2",
				children: c(t.HOOKS_MODAL$COMMANDS)
			}), (s.hooks ?? []).map((e, n) => /* @__PURE__ */ a("div", {
				className: "mt-2",
				children: [/* @__PURE__ */ i(r, {
					size: "small",
					font: "mono",
					lineHeight: "relaxed",
					padding: "medium",
					borderRadius: "medium",
					maxHeight: "small",
					overflow: "auto",
					className: "border border-[var(--oh-border)] bg-base text-[var(--oh-text-tertiary)]",
					children: e.command
				}), /* @__PURE__ */ a("div", {
					className: "mt-2 flex flex-wrap gap-2 text-xs text-[var(--oh-muted)]",
					children: [
						/* @__PURE__ */ i("span", {
							className: o,
							children: c(t.HOOKS_MODAL$TYPE, { type: e.type })
						}),
						/* @__PURE__ */ i("span", {
							className: o,
							children: c(t.HOOKS_MODAL$TIMEOUT, { timeout: e.timeout })
						}),
						e.async ? /* @__PURE__ */ i("span", {
							className: o,
							children: c(t.HOOKS_MODAL$ASYNC)
						}) : null
					]
				})]
			}, `${e.command}-${n}`))]
		})]
	});
}
//#endregion
export { s as HookMatcherContent };

//# sourceMappingURL=hook-matcher-content.js.map