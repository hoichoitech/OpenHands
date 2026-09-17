import { I18nKey as e } from "../i18n/declaration.js";
import { isAgentServerVersionError as t } from "../node_modules/@openhands/typescript-client/dist/client/agent-server-compatibility.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
//#region src/utils/workspaces-compatibility.ts
function n(n, r) {
	return t(n) ? r(e.HOME$WORKSPACES_UNSUPPORTED_AGENT_SERVER, {
		actualVersion: n.actualVersion,
		requiredVersion: n.requiredVersion
	}) : null;
}
//#endregion
export { n as getWorkspacesUnsupportedMessage };

//# sourceMappingURL=workspaces-compatibility.js.map