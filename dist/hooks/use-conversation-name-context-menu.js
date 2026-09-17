import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { isExecutionActive as n } from "../utils/status.js";
import { useNavigation as ee } from "../context/navigation-context.js";
import { displaySuccessToast as r } from "../utils/custom-toast-handlers.js";
import { useActiveBackend as i } from "../contexts/active-backend-context.js";
import { useEventStore as a } from "../stores/use-event-store.js";
import { getStoredConversationMetadata as o } from "../api/conversation-metadata-store.js";
import { useActiveConversation as s } from "./query/use-active-conversation.js";
import { useDeleteConversation as c } from "./mutation/use-delete-conversation.js";
import { useUnifiedPauseConversation as te } from "./mutation/use-unified-stop-conversation.js";
import { useUpdateConversationPublicFlag as l } from "./mutation/use-update-conversation-public-flag.js";
import { useDownloadConversation as u } from "./use-download-conversation.js";
import { adaptSystemMessage as d } from "../utils/system-message-adapter.js";
import { useSelectConversationTab as f } from "./use-select-conversation-tab.js";
import p from "react";
//#region src/hooks/use-conversation-name-context-menu.ts
function m({ conversationId: m, executionStatus: h, showOptions: g = !1, onContextMenuToggle: _ }) {
	let { t: v } = e(), { conversationId: y, navigate: b } = ee(), { backend: x } = i(), S = a((e) => e.events), { mutate: C } = c(), { mutate: w } = te(), { mutate: T } = l(), { data: E } = s(), [D, O] = p.useState(!1), [k, A] = p.useState(!1), [j, M] = p.useState(!1), [N, P] = p.useState(!1), [F, I] = p.useState(!1), [L, R] = p.useState(!1), { mutateAsync: z } = u(), { navigateToTab: B } = f(), V = d(S), H = (e) => {
		e.preventDefault(), e.stopPropagation(), I(!0), _?.(!1);
	}, U = (e) => {
		e.preventDefault(), e.stopPropagation(), R(!0), _?.(!1);
	}, W = () => {
		m && C({ conversationId: m }, { onSuccess: () => {
			m === y && b("/conversations");
		} }), I(!1);
	}, G = () => {
		m && w({ conversationId: m }), R(!1);
	}, K = (e) => {
		e.preventDefault(), e.stopPropagation(), _?.(!1);
	}, q = async (e) => {
		e.preventDefault(), e.stopPropagation(), m && await z(m), _?.(!1);
	}, J = (e) => {
		e.stopPropagation(), B("usage"), _?.(!1);
	}, Y = (e) => {
		e.stopPropagation(), O(!0), _?.(!1);
	}, X = (e) => {
		e.stopPropagation(), A(!0), _?.(!1);
	}, Z = (e) => {
		e.stopPropagation(), M(!0), _?.(!1);
	}, Q = (e) => {
		e.stopPropagation(), P(!0), _?.(!1);
	}, ne = (e) => {
		m && E && T({
			conversationId: m,
			isPublic: e ?? !E.public
		});
	}, $ = p.useMemo(() => m ? `${x.kind === "cloud" ? x.host.replace(/\/+$/, "") : window.location.origin}/shared/conversations/${m}` : "", [
		m,
		x.kind,
		x.host
	]);
	return {
		handleDelete: H,
		handleStop: U,
		handleEdit: K,
		handleDownloadConversation: q,
		handleDisplayCost: J,
		handleShowAgentTools: Y,
		handleShowSkills: X,
		handleShowPlugins: Z,
		handleShowHooks: Q,
		handleTogglePublic: ne,
		handleCopyShareLink: (e) => {
			if (e.preventDefault(), e.stopPropagation(), !$) {
				_?.(!1);
				return;
			}
			navigator.clipboard.writeText($), r(v(t.CONVERSATION$LINK_COPIED));
		},
		shareUrl: $,
		handleConfirmDelete: W,
		handleConfirmStop: G,
		systemModalVisible: D,
		setSystemModalVisible: O,
		skillsModalVisible: k,
		setSkillsModalVisible: A,
		pluginsModalVisible: j,
		setPluginsModalVisible: M,
		hooksModalVisible: N,
		setHooksModalVisible: P,
		confirmDeleteModalVisible: F,
		setConfirmDeleteModalVisible: I,
		confirmStopModalVisible: L,
		setConfirmStopModalVisible: R,
		systemMessage: V,
		shouldShowStop: n(h),
		shouldShowDownloadConversation: !!(m && g),
		shouldShowDisplayCost: g,
		shouldShowAgentTools: !!(g && V),
		shouldShowSkills: !!(g && m),
		shouldShowPlugins: !!(g && m && (o(m)?.plugins?.length ?? 0) > 0),
		shouldShowHooks: !!(g && m && n(h))
	};
}
//#endregion
export { m as useConversationNameContextMenu };

//# sourceMappingURL=use-conversation-name-context-menu.js.map