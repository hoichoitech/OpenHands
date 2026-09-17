import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import n from "../../../../icons/angle-down-solid.js";
import r from "../../../../icons/angle-up-solid.js";
import { MarkdownRenderer as i } from "../../../features/markdown/markdown-renderer.js";
import a from "../../../../icons/lightbulb.js";
import o from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/collapsible-thinking.tsx
function l({ content: l }) {
	let { t: u } = e("openhands"), [d, f] = o.useState(!1);
	if (!l.trim()) return null;
	let p = d ? r : n;
	return /* @__PURE__ */ c("div", {
		className: "my-1 w-full py-1 text-sm",
		"data-testid": "collapsible-thinking",
		children: [/* @__PURE__ */ c("button", {
			type: "button",
			onClick: () => f((e) => !e),
			"aria-expanded": d,
			"aria-label": u(d ? t.THINKING$COLLAPSE : t.THINKING$EXPAND),
			"data-testid": "collapsible-thinking-toggle",
			className: "w-full flex items-center gap-2 text-left cursor-pointer",
			children: [
				/* @__PURE__ */ s(p, { className: "h-4 w-4 fill-[var(--oh-muted)] flex-shrink-0" }),
				/* @__PURE__ */ s(a, { className: "h-4 w-4 fill-[var(--oh-muted)] flex-shrink-0" }),
				/* @__PURE__ */ s("span", {
					className: "font-normal text-[var(--oh-muted)]",
					children: u(t.THINKING$TITLE)
				})
			]
		}), d && /* @__PURE__ */ s("div", {
			className: "mt-1.5 pl-6",
			"data-testid": "collapsible-thinking-content",
			children: /* @__PURE__ */ s(i, { children: l })
		})]
	});
}
//#endregion
export { l as CollapsibleThinking };

//# sourceMappingURL=collapsible-thinking.js.map