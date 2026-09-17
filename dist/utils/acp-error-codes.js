import { I18nKey as e } from "../i18n/declaration.js";
//#region src/utils/acp-error-codes.ts
var t = "ACPAuthRequired", n = {
	ACPAuthRequired: e.ERROR$ACP_AUTH_REQUIRED_TITLE,
	ACPSpawnError: e.CHAT_INTERFACE$AGENT_ERROR_MESSAGE,
	ACPInitError: e.CHAT_INTERFACE$AGENT_ERROR_MESSAGE,
	ACPPromptError: e.CHAT_INTERFACE$AGENT_ERROR_MESSAGE,
	UsagePolicyRefusal: e.CHAT_INTERFACE$AGENT_ERROR_MESSAGE
};
function r(e) {
	return e ? n[e] ?? null : null;
}
function i(e) {
	return e === t;
}
//#endregion
export { r as getAcpErrorHeaderKey, i as isAcpAuthErrorCode };

//# sourceMappingURL=acp-error-codes.js.map