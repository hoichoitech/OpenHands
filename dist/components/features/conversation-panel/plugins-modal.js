import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Typography as n } from "../../../ui/typography.js";
import { getPluginDisplayName as r, getPluginSourceLabel as i, isLocalPluginSource as a, pluginReferenceKey as o } from "../../../utils/plugin-display.js";
import { ModalBackdrop as s } from "../../shared/modals/modal-backdrop.js";
import { ModalBody as c } from "../../shared/modals/modal-body.js";
import { BaseModalTitle as l } from "../../shared/modals/confirmation-modals/base-modal.js";
import { ModalCloseButton as u } from "../../shared/modals/modal-close-button.js";
import { useConversationPlugins as d } from "../../../hooks/use-conversation-plugins.js";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/plugins-modal.tsx
function m({ onClose: m }) {
	let { t: h } = e("openhands"), g = d();
	return /* @__PURE__ */ f(s, {
		onClose: m,
		children: /* @__PURE__ */ p(c, {
			width: "lg",
			className: "relative flex max-h-[80vh] flex-col items-start border border-[var(--oh-border)]",
			testID: "plugins-modal",
			children: [
				/* @__PURE__ */ f(u, {
					onClose: m,
					testId: "close-plugins-modal"
				}),
				/* @__PURE__ */ p("div", {
					className: "flex w-full flex-col gap-2 pr-10",
					children: [/* @__PURE__ */ f(l, { title: h(t.PLUGINS_MODAL$TITLE) }), /* @__PURE__ */ f(n.Text, {
						className: "text-sm text-[var(--oh-muted)]",
						children: h(t.PLUGINS_MODAL$DESCRIPTION)
					})]
				}),
				/* @__PURE__ */ f("div", {
					className: "w-full overflow-auto rounded-md border border-[var(--oh-border)] bg-surface-raised custom-scrollbar-always",
					children: g.length === 0 ? /* @__PURE__ */ f("div", {
						className: "flex items-center justify-center p-6",
						children: /* @__PURE__ */ f(n.Text, {
							className: "text-[var(--oh-muted)]",
							children: h(t.PLUGINS_MODAL$EMPTY)
						})
					}) : /* @__PURE__ */ f("ul", {
						className: "divide-y divide-[var(--oh-border)]",
						children: g.map((e) => /* @__PURE__ */ p("li", {
							"data-testid": `active-plugin-${r(e)}`,
							className: "flex flex-col gap-1 p-4",
							children: [/* @__PURE__ */ f(n.Text, {
								className: "font-semibold text-white",
								children: r(e)
							}), /* @__PURE__ */ f(n.Text, {
								className: "text-xs text-tertiary-alt",
								children: a(e) ? h(t.PLUGINS_MODAL$SOURCE_LOCAL) : i(e)
							})]
						}, o(e)))
					})
				})
			]
		})
	});
}
//#endregion
export { m as PluginsModal };

//# sourceMappingURL=plugins-modal.js.map