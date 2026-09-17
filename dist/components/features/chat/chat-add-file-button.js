import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Paperclip as n } from "../../../node_modules/lucide-react/dist/esm/icons/paperclip.js";
import { Plus as r } from "../../../node_modules/lucide-react/dist/esm/icons/plus.js";
import { cn as i } from "../../../utils/utils.js";
import { useOptionalConversationId as a } from "../../../hooks/use-conversation-id.js";
import { useActiveConversation as o } from "../../../hooks/query/use-active-conversation.js";
import { chatInputIconButtonClassName as s } from "../../../utils/form-control-classes.js";
import { useConversationNameContextMenu as c } from "../../../hooks/use-conversation-name-context-menu.js";
import { ToolsContextMenu as l } from "../controls/tools-context-menu.js";
import { SystemMessageModal as u } from "../conversation-panel/system-message-modal.js";
import { SkillsModal as d } from "../conversation-panel/skills-modal.js";
import { PluginsModal as f } from "../conversation-panel/plugins-modal.js";
import { HooksModal as p } from "../conversation-panel/hooks-modal.js";
import m from "react";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/chat/chat-add-file-button.tsx
function _({ handleFileIconClick: _, disabled: v = !1, showAgentProfileSwitch: y = !1 }) {
	let { t: b } = e("openhands"), { conversationId: x } = a(), { data: S } = o(), [C, w] = m.useState(!1), { handleShowAgentTools: T, handleShowSkills: E, handleShowPlugins: D, handleShowHooks: O, systemModalVisible: k, setSystemModalVisible: A, skillsModalVisible: j, setSkillsModalVisible: M, pluginsModalVisible: N, setPluginsModalVisible: P, hooksModalVisible: F, setHooksModalVisible: I, systemMessage: L, shouldShowAgentTools: R, shouldShowHooks: z, shouldShowPlugins: B } = c({
		conversationId: x ?? void 0,
		executionStatus: S?.execution_status,
		showOptions: !0,
		onContextMenuToggle: w
	});
	return /* @__PURE__ */ g("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ h("button", {
				type: "button",
				className: i(s, "relative shrink-0 size-6", v ? "cursor-not-allowed text-[var(--oh-text-subtle)]" : void 0, C && !v && "text-white bg-white/10"),
				"aria-label": b(t.CHAT_INTERFACE$PLUS_MENU),
				"aria-expanded": C,
				"aria-haspopup": "menu",
				"data-testid": "chat-plus-button",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), !v && w((e) => !e);
				},
				disabled: v,
				children: /* @__PURE__ */ h("span", {
					className: "flex h-full w-full items-center justify-center",
					children: /* @__PURE__ */ h(r, {
						className: "h-[13px] w-[13px] shrink-0",
						strokeWidth: 2
					})
				})
			}),
			C && /* @__PURE__ */ h(l, {
				onClose: () => w(!1),
				showAgentProfileSwitch: y,
				onShowSkills: E,
				onShowPlugins: D,
				onShowHooks: O,
				onShowAgentTools: T,
				shouldShowAgentTools: R,
				shouldShowHooks: z,
				shouldShowPlugins: B,
				footerAction: {
					testId: "add-files-and-images-button",
					icon: /* @__PURE__ */ h(n, {
						className: "h-4 w-4 shrink-0",
						strokeWidth: 2,
						"aria-hidden": !0
					}),
					label: b(t.CHAT_INTERFACE$ADD_FILES_AND_IMAGES),
					onClick: _
				}
			}),
			/* @__PURE__ */ h(u, {
				isOpen: k,
				onClose: () => A(!1),
				systemMessage: L || null
			}),
			j && /* @__PURE__ */ h(d, { onClose: () => M(!1) }),
			N && /* @__PURE__ */ h(f, { onClose: () => P(!1) }),
			F && /* @__PURE__ */ h(p, { onClose: () => I(!1) })
		]
	});
}
//#endregion
export { _ as ChatAddFileButton };

//# sourceMappingURL=chat-add-file-button.js.map