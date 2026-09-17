import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ChevronDown as n } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as r } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { Typography as i } from "../../../ui/typography.js";
import { HookMatcherContent as a } from "./hook-matcher-content.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/hook-event-item.tsx
var c = {
	pre_tool_use: t.HOOKS_MODAL$EVENT_PRE_TOOL_USE,
	post_tool_use: t.HOOKS_MODAL$EVENT_POST_TOOL_USE,
	user_prompt_submit: t.HOOKS_MODAL$EVENT_USER_PROMPT_SUBMIT,
	session_start: t.HOOKS_MODAL$EVENT_SESSION_START,
	session_end: t.HOOKS_MODAL$EVENT_SESSION_END,
	stop: t.HOOKS_MODAL$EVENT_STOP
}, l = "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[11px] font-medium leading-4 border border-[var(--oh-border)] bg-[var(--oh-surface)] text-tertiary-light", u = "HOOKS_MODAL$HOOK_COUNT";
function d({ hookEvent: t, isExpanded: d, onToggle: f }) {
	let { t: p } = e("openhands"), m = c[t.event_type], h = m ? p(m) : t.event_type, g = t.matchers.reduce((e, t) => e + (t.hooks ?? []).length, 0);
	return /* @__PURE__ */ s("div", { children: [/* @__PURE__ */ s("button", {
		type: "button",
		onClick: () => f(t.event_type),
		className: "w-full py-3 px-3 text-left flex items-center justify-between hover:bg-tertiary transition-colors",
		children: [/* @__PURE__ */ o("div", {
			className: "flex items-center",
			children: /* @__PURE__ */ o(i.Text, {
				className: "font-bold text-content-2",
				children: h
			})
		}), /* @__PURE__ */ s("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ o("span", {
				className: l,
				children: p(u, { count: g })
			}), /* @__PURE__ */ o(i.Text, {
				className: "text-[var(--oh-text-tertiary)]",
				children: o(d ? n : r, { size: 18 })
			})]
		})]
	}), d && /* @__PURE__ */ o("div", {
		className: "border-t border-[var(--oh-border)] px-3 pt-3 pb-3",
		children: /* @__PURE__ */ o("div", {
			className: "divide-y divide-[var(--oh-border)]",
			children: t.matchers.map((e, n) => /* @__PURE__ */ o(a, { matcher: e }, `${t.event_type}-${e.matcher}-${n}`))
		})
	})] });
}
//#endregion
export { d as HookEventItem };

//# sourceMappingURL=hook-event-item.js.map