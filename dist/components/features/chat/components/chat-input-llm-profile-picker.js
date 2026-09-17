import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import r from "../../../../icons/checkmark.js";
import { chatInputPillButtonClassName as i } from "../../../../utils/form-control-classes.js";
import { useFreeModels as a } from "../../../../hooks/query/use-free-models.js";
import { formatModelPillLabel as o } from "../../../../utils/format-model-name.js";
import { Typography as s } from "../../../../ui/typography.js";
import { ComboboxCaretInline as c } from "../../../../ui/combobox-caret.js";
import { ContextMenu as l } from "../../../../ui/context-menu.js";
import { ContextMenuListItem as u } from "../../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as d } from "../../../../hooks/use-click-outside-element.js";
import f from "../../../../icons/settings-gear.js";
import { NavigationLink as p } from "../../../shared/navigation-link.js";
import { Divider as m } from "../../../../ui/divider.js";
import { useChatInputLlmProfileState as h } from "../../../../hooks/use-chat-input-llm-profile-state.js";
import g from "react";
import { Fragment as _, jsx as v, jsxs as y } from "react/jsx-runtime";
//#region src/components/features/chat/components/chat-input-llm-profile-picker.tsx
var b = 18;
function x(e) {
	return e.length <= b ? e : `${e.slice(0, b)}…`;
}
function S({ onClose: i, dividerInset: c, settingsLinkClassName: l, settingsIconClassName: d }) {
	let { t: g } = e("openhands"), b = a(), { profiles: x, currentProfileName: S, currentProfileModel: C, canSwitchProfile: w, selectProfile: T } = h(), E = w && x.length > 0, D = w ? null : S, O = (e) => {
		T(e), i();
	};
	return /* @__PURE__ */ y(_, { children: [
		E && /* @__PURE__ */ y(_, { children: [/* @__PURE__ */ v("li", {
			role: "presentation",
			className: "px-2 pt-1 pb-0.5",
			children: /* @__PURE__ */ v(s.Text, {
				className: "text-[11px] font-medium text-[var(--oh-text-dim)] uppercase tracking-wide leading-4",
				children: g(t.SETTINGS$AVAILABLE_PROFILES)
			})
		}), x.map((e) => {
			let t = e.name === S, a = o(e.model, b);
			return /* @__PURE__ */ y(u, {
				testId: `chat-input-llm-profile-option-${e.name}`,
				onClick: (n) => {
					if (n.preventDefault(), n.stopPropagation(), t) {
						i();
						return;
					}
					O(e.name);
				},
				className: n("flex flex-col items-stretch gap-0.5", t && "bg-[var(--oh-interactive-hover)]"),
				children: [/* @__PURE__ */ y("span", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ v("span", {
						className: "flex-1 truncate text-sm leading-5",
						title: e.model ?? e.name,
						children: e.name
					}), t && /* @__PURE__ */ v(r, {
						width: 14,
						height: 14,
						className: "shrink-0",
						"aria-hidden": !0
					})]
				}), a && /* @__PURE__ */ v("span", {
					className: "block truncate text-xs leading-4 text-[var(--oh-muted)]",
					children: a
				})]
			}, e.name);
		})] }),
		D && /* @__PURE__ */ v("li", {
			className: "text-sm",
			"data-testid": "chat-input-llm-profile-current",
			children: /* @__PURE__ */ y("div", {
				className: "flex flex-col gap-0.5 p-2 leading-5 text-[var(--oh-foreground)]",
				children: [/* @__PURE__ */ v("span", {
					className: "truncate",
					title: D,
					children: D
				}), C && /* @__PURE__ */ v("span", {
					className: "truncate text-xs leading-4 text-[var(--oh-muted)]",
					children: o(C, b)
				})]
			})
		}),
		(E || D) && /* @__PURE__ */ v(m, { inset: c }),
		/* @__PURE__ */ v("li", {
			className: "text-sm",
			children: /* @__PURE__ */ y(p, {
				to: "/settings/llm",
				onClick: i,
				className: n("flex h-[30px] items-center gap-2 rounded p-2 leading-5 text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)] transition-colors", l),
				children: [/* @__PURE__ */ v(f, {
					width: 16,
					height: 16,
					className: n("shrink-0", d),
					"aria-hidden": !0
				}), /* @__PURE__ */ v("span", { children: g(t.SETTINGS$LLM_PROFILES) })]
			})
		})
	] });
}
function C() {
	let { t: r } = e("openhands"), { profiles: a, currentProfileName: o, isLoading: s, isSwitching: u } = h(), [f, p] = g.useState(!1), m = g.useRef(null), _ = d(() => p(!1), m);
	if (s || a.length === 0) return null;
	let b = o ?? r(t.LLM$SELECT_MODEL_PLACEHOLDER);
	return /* @__PURE__ */ y("div", {
		className: "relative min-w-0",
		children: [/* @__PURE__ */ y("button", {
			ref: m,
			type: "button",
			className: n(i, "max-w-[200px]"),
			title: o ?? void 0,
			"data-testid": "chat-input-llm-profile",
			"aria-expanded": f,
			"aria-haspopup": "dialog",
			disabled: u,
			"aria-busy": u,
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), p((e) => !e);
			},
			children: [/* @__PURE__ */ v("span", {
				className: "truncate",
				children: x(b)
			}), /* @__PURE__ */ v(c, { isOpen: f })]
		}), f && /* @__PURE__ */ v(l, {
			ref: _,
			testId: "chat-input-llm-profile-popover",
			position: "top",
			alignment: "left",
			spacing: "none",
			className: "z-[60] mb-2 min-w-[200px] max-w-[320px] max-h-[60vh] overflow-y-auto",
			children: /* @__PURE__ */ v(S, { onClose: () => p(!1) })
		})]
	});
}
//#endregion
export { S as ChatInputLlmProfileMenuContent, C as ChatInputLlmProfilePicker };

//# sourceMappingURL=chat-input-llm-profile-picker.js.map