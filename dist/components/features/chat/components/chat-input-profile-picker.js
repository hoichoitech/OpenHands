import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import r from "../../../../icons/checkmark.js";
import { Typography as i } from "../../../../ui/typography.js";
import { ContextMenuListItem as a } from "../../context-menu/context-menu-list-item.js";
import o from "../../../../icons/settings-gear.js";
import { NavigationLink as s } from "../../../shared/navigation-link.js";
import { Divider as c } from "../../../../ui/divider.js";
import { useChatInputProfileState as l } from "../../../../hooks/use-chat-input-profile-state.js";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/chat/components/chat-input-profile-picker.tsx
function p({ onClose: p, dividerInset: m, settingsLinkClassName: h, settingsIconClassName: g }) {
	let { t: _ } = e("openhands"), { profiles: v, currentProfileId: y, isInConversation: b, isSwitching: x, selectProfile: S } = l(), C = (e) => {
		S(e), p();
	};
	return /* @__PURE__ */ f(u, { children: [
		v.length > 0 && /* @__PURE__ */ f(u, { children: [
			/* @__PURE__ */ d("li", {
				role: "presentation",
				className: "px-2 pt-1 pb-0.5",
				children: /* @__PURE__ */ d(i.Text, {
					className: "text-[11px] font-medium text-[var(--oh-text-dim)] uppercase tracking-wide leading-4",
					children: _(t.SETTINGS$AVAILABLE_PROFILES)
				})
			}),
			v.map((e) => {
				let t = e.id != null && e.id === y;
				return /* @__PURE__ */ f(a, {
					testId: `chat-input-agent-profile-option-${e.name}`,
					isDisabled: x,
					onClick: (n) => {
						if (n.preventDefault(), n.stopPropagation(), t) {
							p();
							return;
						}
						C(e);
					},
					className: n("flex items-center gap-2", t && "bg-[var(--oh-interactive-hover)]"),
					children: [/* @__PURE__ */ d("span", {
						className: "flex-1 truncate text-sm leading-5",
						title: e.name,
						children: e.name
					}), t && /* @__PURE__ */ d(r, {
						width: 14,
						height: 14,
						className: "shrink-0",
						"aria-hidden": !0
					})]
				}, e.id ?? e.name);
			}),
			b && /* @__PURE__ */ d("li", {
				role: "presentation",
				className: "px-2 pt-0.5 pb-1",
				children: /* @__PURE__ */ d(i.Text, {
					className: "text-[11px] text-[var(--oh-text-dim)] leading-4",
					children: _(t.CHAT$START_NEW_WITH_PROFILE_HINT)
				})
			})
		] }),
		v.length > 0 && /* @__PURE__ */ d(c, { inset: m }),
		/* @__PURE__ */ d("li", {
			className: "text-sm",
			children: /* @__PURE__ */ f(s, {
				to: "/settings/agents",
				onClick: p,
				className: n("flex h-[30px] items-center gap-2 rounded p-2 leading-5 text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)] transition-colors", h),
				children: [/* @__PURE__ */ d(o, {
					width: 16,
					height: 16,
					className: n("shrink-0", g),
					"aria-hidden": !0
				}), /* @__PURE__ */ d("span", { children: _(t.CHAT$MANAGE_AGENT_PROFILES) })]
			})
		})
	] });
}
//#endregion
export { p as ChatInputProfileMenuContent };

//# sourceMappingURL=chat-input-profile-picker.js.map