import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import r from "../../../../icons/checkmark.js";
import { chatInputPillButtonClassName as i } from "../../../../utils/form-control-classes.js";
import { Typography as a } from "../../../../ui/typography.js";
import { ComboboxCaretInline as o } from "../../../../ui/combobox-caret.js";
import { ContextMenu as s } from "../../../../ui/context-menu.js";
import { ContextMenuListItem as c } from "../../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as l } from "../../../../hooks/use-click-outside-element.js";
import { useChatInputModelState as u } from "../../../../hooks/use-chat-input-model-state.js";
import { useSwitchAcpModel as d } from "../../../../hooks/mutation/use-switch-acp-model.js";
import f from "../../../../icons/settings-gear.js";
import { NavigationLink as p } from "../../../shared/navigation-link.js";
import { Divider as m } from "../../../../ui/divider.js";
import h from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/features/chat/components/chat-input-model.tsx
var y = 10, b = 22;
function x(e, t = y) {
	return e.length <= t ? e : `${e.slice(0, t)}…`;
}
function S({ model: i, onClose: o, dividerInset: s, settingsLinkClassName: l, settingsIconClassName: u }) {
	let { t: h } = e("openhands"), y = d(), b = i.showAcpPicker || !!i.displayModel, x = (e) => {
		e !== i.currentModelId && y.mutate({
			conversationId: i.switchConversationId,
			model: e
		}), o();
	};
	return /* @__PURE__ */ v(g, { children: [
		i.showAcpPicker ? /* @__PURE__ */ v(g, { children: [/* @__PURE__ */ _("li", {
			role: "presentation",
			className: "px-2 pt-1 pb-0.5",
			children: /* @__PURE__ */ _(a.Text, {
				className: "text-[11px] font-medium text-[var(--oh-text-dim)] uppercase tracking-wide leading-4",
				children: h(t.MODEL$AVAILABLE_MODELS)
			})
		}), i.availableAcpModels.map((e) => {
			let t = e.id === i.currentModelId;
			return /* @__PURE__ */ v(c, {
				testId: `chat-input-acp-model-option-${e.id}`,
				onClick: (t) => {
					t.preventDefault(), t.stopPropagation(), x(e.id);
				},
				className: n("flex items-center gap-2", t && "bg-[var(--oh-interactive-hover)]"),
				children: [/* @__PURE__ */ _("span", {
					className: "flex-1 truncate text-sm leading-5",
					title: e.label,
					children: e.label
				}), t && /* @__PURE__ */ _(r, {
					width: 14,
					height: 14,
					className: "shrink-0",
					"aria-hidden": !0
				})]
			}, e.id);
		})] }) : i.displayModel ? /* @__PURE__ */ _("li", {
			className: "text-sm",
			children: /* @__PURE__ */ _("div", {
				className: "p-2 leading-5 text-[var(--oh-foreground)] break-all",
				children: i.displayModel
			})
		}) : null,
		b && /* @__PURE__ */ _(m, { inset: s }),
		/* @__PURE__ */ _("li", {
			className: "text-sm",
			children: /* @__PURE__ */ v(p, {
				to: i.destinationPath,
				onClick: o,
				className: n("flex h-[30px] items-center gap-2 rounded p-2 leading-5 text-[var(--oh-foreground)] hover:bg-[var(--oh-interactive-hover)] transition-colors", l),
				children: [/* @__PURE__ */ _(f, {
					width: 16,
					height: 16,
					className: n("shrink-0", u),
					"aria-hidden": !0
				}), /* @__PURE__ */ _("span", { children: i.destinationLabel })]
			})
		})
	] });
}
function C() {
	let e = u(), [t, n] = h.useState(!1), r = h.useRef(null), a = l(() => n(!1), r);
	if (!e.displayModel) return null;
	let c = x(e.displayModel, e.isAcpContext ? b : y);
	return /* @__PURE__ */ v("div", {
		className: "relative min-w-0",
		children: [/* @__PURE__ */ v("button", {
			ref: r,
			type: "button",
			className: i,
			title: e.displayModel,
			"data-testid": "chat-input-llm-model",
			"aria-expanded": t,
			"aria-haspopup": "dialog",
			onClick: (e) => {
				e.preventDefault(), e.stopPropagation(), n((e) => !e);
			},
			children: [/* @__PURE__ */ _("span", { children: c }), /* @__PURE__ */ _(o, { isOpen: t })]
		}), t && /* @__PURE__ */ _(s, {
			ref: a,
			testId: "chat-input-llm-model-popover",
			position: "top",
			alignment: "left",
			spacing: "none",
			className: "z-[60] mb-2 min-w-[200px] max-w-[320px] max-h-[60vh] overflow-y-auto",
			children: /* @__PURE__ */ _(S, {
				model: e,
				onClose: () => n(!1)
			})
		})]
	});
}
//#endregion
export { C as ChatInputModel, S as ChatInputModelMenuContent };

//# sourceMappingURL=chat-input-model.js.map