import { useOptionalConversationId as e } from "../use-conversation-id.js";
import { useConversationStore as t } from "../../stores/conversation-store.js";
import { clearEmptyContent as n, getTextContent as r, isContentEmpty as i } from "../../components/features/chat/utils/chat-input.utils.js";
import { useDraftPersistence as a } from "./use-draft-persistence.js";
import { useCallback as o, useEffect as s, useRef as c } from "react";
//#region src/hooks/chat/use-chat-input-logic.ts
var l = () => {
	let l = c(null), { conversationId: u } = e(), { messageToSend: d, messageRestoreIfEmpty: f, hasRightPanelToggled: p, setMessageToSend: m, clearMessageRestoreIfEmpty: h, setIsRightPanelShown: g } = t(), { saveDraft: _, clearDraft: v } = a(u, l), y = u ? d : null;
	return s(() => {
		!u || !f || (r(l.current).trim().length === 0 && m(f.text), h());
	}, [
		u,
		f,
		m,
		h
	]), s(() => {
		u && l.current && (m(r(l.current)), g(p));
	}, [
		u,
		p,
		m,
		g
	]), {
		chatInputRef: l,
		messageToSend: y,
		checkIsContentEmpty: o(() => i(l.current), []),
		clearEmptyContentHandler: o(() => {
			n(l.current);
		}, []),
		getCurrentMessage: o(() => r(l.current), []),
		saveDraft: _,
		clearDraft: v
	};
};
//#endregion
export { l as useChatInputLogic };

//# sourceMappingURL=use-chat-input-logic.js.map