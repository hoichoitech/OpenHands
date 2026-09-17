import { I18nKey as e } from "../../../i18n/declaration.js";
import { isBackendRequestTimeoutMessage as t, isCorsOrNetworkErrorMessage as n } from "../../../utils/user-facing-error.js";
import { isCloudBackendApiKeyOrNetworkHealthError as r, isCloudBackendLoggedOutHealthError as i, isInvalidBackendApiKeyHealthError as a, isMissingBackendApiKeyHealthError as o } from "../../../hooks/query/use-backends-health.js";
//#region src/components/features/backends/backend-status-label.ts
function s(s, c, l) {
	let u = l?.lastError ?? null, d = c?.kind === "cloud";
	return d && !c?.apiKey?.trim() || o(u) ? s(e.BACKEND$STATUS_DISCONNECTED_ADD_API_KEY) : a(u) ? s(e.BACKEND$STATUS_DISCONNECTED_CHECK_API_KEY) : i(u) ? s(e.BACKEND$LOGGED_OUT) : l?.isConnected === !0 ? s(e.ONBOARDING$BACKEND_STATUS_CONNECTED) : d && l?.isConnected === !1 && (r(u) || n(u)) ? s(e.BACKEND$STATUS_DISCONNECTED_CHECK_CLOUD_ACCESS) : l?.isConnected === !1 && t(u) ? s(e.BACKEND$STATUS_DISCONNECTED_CHECK_TUNNEL) : l?.isConnected === !1 && n(u) ? s(e.BACKEND$STATUS_DISCONNECTED_CHECK_URL_OR_NETWORK) : l?.isConnected === !1 ? s(e.ONBOARDING$BACKEND_STATUS_DISCONNECTED) : s(e.ONBOARDING$BACKEND_STATUS_CHECKING);
}
//#endregion
export { s as getBackendStatusLabel };

//# sourceMappingURL=backend-status-label.js.map