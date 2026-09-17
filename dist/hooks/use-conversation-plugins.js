import { useOptionalConversationId as e } from "./use-conversation-id.js";
import { getStoredConversationMetadata as t } from "../api/conversation-metadata-store.js";
import { useMemo as n } from "react";
//#region src/hooks/use-conversation-plugins.ts
function r() {
	let { conversationId: r } = e();
	return n(() => r ? t(r)?.plugins ?? [] : [], [r]);
}
//#endregion
export { r as useConversationPlugins };

//# sourceMappingURL=use-conversation-plugins.js.map