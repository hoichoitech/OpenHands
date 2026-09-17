import { useActiveConversation as e } from "./query/use-active-conversation.js";
import { isArchivedSandboxStatus as t } from "../utils/conversation-archive-status.js";
//#region src/hooks/use-is-archived-conversation.ts
function n() {
	let { data: n } = e();
	return t(n?.sandbox_status);
}
//#endregion
export { n as useIsArchivedConversation };

//# sourceMappingURL=use-is-archived-conversation.js.map