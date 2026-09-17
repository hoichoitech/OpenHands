import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useConversationId as n } from "../../../hooks/use-conversation-id.js";
import { displaySuccessToast as r } from "../../../utils/custom-toast-handlers.js";
import { useActiveConversation as i } from "../../../hooks/query/use-active-conversation.js";
import { useConversationNameContextMenu as a } from "../../../hooks/use-conversation-name-context-menu.js";
import { SystemMessageModal as o } from "../conversation-panel/system-message-modal.js";
import { SkillsModal as s } from "../conversation-panel/skills-modal.js";
import { HooksModal as c } from "../conversation-panel/hooks-modal.js";
import { EllipsisButton as l } from "../conversation-panel/ellipsis-button.js";
import { useUpdateConversation as u } from "../../../hooks/mutation/use-update-conversation.js";
import { ConversationNameContextMenu as d } from "./conversation-name-context-menu.js";
import { ConfirmDeleteModal as f } from "../conversation-panel/confirm-delete-modal.js";
import { ConfirmStopModal as p } from "../conversation-panel/confirm-stop-modal.js";
import { TranscriptExportModal as m } from "./transcript-export-modal.js";
import h from "react";
import { Fragment as g, jsx as _, jsxs as v } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-name.tsx
function y() {
	let { t: y } = e("openhands"), { conversationId: b } = n(), { data: x } = i(), { mutate: S } = u(), [C, w] = h.useState("view"), [T, E] = h.useState(!1), [D, O] = h.useState(!1), k = h.useRef(null), A = h.useRef(null), { handleDelete: j, handleStop: M, handleDownloadConversation: N, handleDisplayCost: P, handleShowAgentTools: F, handleShowSkills: ee, handleShowHooks: I, handleTogglePublic: L, handleCopyShareLink: R, shareUrl: z, handleConfirmDelete: B, handleConfirmStop: V, systemModalVisible: H, setSystemModalVisible: U, skillsModalVisible: W, setSkillsModalVisible: G, hooksModalVisible: K, setHooksModalVisible: q, confirmDeleteModalVisible: J, setConfirmDeleteModalVisible: Y, confirmStopModalVisible: X, setConfirmStopModalVisible: Z, systemMessage: Q, shouldShowStop: $, shouldShowDownloadConversation: te, shouldShowDisplayCost: ne, shouldShowAgentTools: re, shouldShowSkills: ie, shouldShowHooks: ae } = a({
		conversationId: b,
		executionStatus: x?.execution_status,
		showOptions: !0,
		onContextMenuToggle: E
	});
	return h.useEffect(() => {
		C === "edit" && k.current?.focus();
	}, [C]), x ? /* @__PURE__ */ v(g, { children: [
		/* @__PURE__ */ v("div", {
			className: "flex items-center gap-2 h-[22px] text-base font-normal text-left pl-0 lg:pl-1 min-w-0",
			"data-testid": "conversation-name",
			children: [C === "edit" ? /* @__PURE__ */ _("input", {
				ref: k,
				"data-testid": "conversation-name-input",
				onClick: (e) => {
					C === "edit" && (e.preventDefault(), e.stopPropagation());
				},
				onBlur: () => {
					if (k.current?.value && b) {
						let e = k.current.value.trim();
						e !== x?.title && S({
							conversationId: b,
							newTitle: e
						}, { onSuccess: () => {
							r(y(t.CONVERSATION$TITLE_UPDATED));
						} });
					} else k.current && (k.current.value = x?.title ?? "");
					w("view");
				},
				onKeyUp: (e) => {
					e.nativeEvent.isComposing || e.key === "Enter" && e.currentTarget.blur();
				},
				type: "text",
				defaultValue: x.title || "",
				className: "text-white leading-5 bg-transparent border-none outline-none text-base font-normal w-fit max-w-fit field-sizing-content"
			}) : /* @__PURE__ */ _("div", {
				className: "text-white leading-5 truncate",
				"data-testid": "conversation-name-title",
				onDoubleClick: () => {
					w("edit");
				},
				title: x.title || "",
				children: x.title
			}), C !== "edit" && /* @__PURE__ */ v("div", {
				ref: A,
				className: "relative flex items-center shrink-0",
				children: [/* @__PURE__ */ _(l, {
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), E(!T);
					},
					ariaLabel: y(t.COMMON$MORE_OPTIONS)
				}), T && /* @__PURE__ */ _(d, {
					onClose: () => E(!1),
					onRename: (e) => {
						e.preventDefault(), e.stopPropagation(), w("edit"), E(!1);
					},
					onDelete: j,
					onStop: $ ? M : void 0,
					onDisplayCost: ne ? P : void 0,
					onShowAgentTools: re ? F : void 0,
					onShowSkills: ie ? ee : void 0,
					onShowHooks: ae ? I : void 0,
					onTogglePublic: L,
					onCopyShareLink: R,
					shareUrl: z,
					onExportTranscript: (e) => {
						e.preventDefault(), e.stopPropagation(), O(!0), E(!1);
					},
					onDownloadConversation: te ? N : void 0,
					position: "bottom",
					anchorRef: A
				})]
			})]
		}),
		D && b && /* @__PURE__ */ _(m, {
			conversationId: b,
			conversationUrl: x.conversation_url,
			sessionApiKey: x.session_api_key,
			conversationTitle: x.title,
			model: x.llm_model,
			onClose: () => O(!1)
		}),
		/* @__PURE__ */ _(o, {
			isOpen: H,
			onClose: () => U(!1),
			systemMessage: Q || null
		}),
		W && /* @__PURE__ */ _(s, { onClose: () => G(!1) }),
		K && /* @__PURE__ */ _(c, { onClose: () => q(!1) }),
		J && /* @__PURE__ */ _(f, {
			onConfirm: B,
			onCancel: () => Y(!1),
			conversationTitle: x?.title || ""
		}),
		X && /* @__PURE__ */ _(p, {
			onConfirm: V,
			onCancel: () => Z(!1)
		})
	] }) : null;
}
//#endregion
export { y as ConversationName };

//# sourceMappingURL=conversation-name.js.map