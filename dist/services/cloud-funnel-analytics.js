import { AGENT_CANVAS_CLIENT_SOURCE as e } from "../api/client-source.js";
import { getBackendTelemetryProperties as t } from "./telemetry-context.js";
import { trackEvent as n } from "./telemetry.js";
//#region src/services/cloud-funnel-analytics.ts
var r = `${e}:cloud_conversation_ready`;
function i(e, t) {
	n(e, t);
}
function a() {
	return t({
		backendKind: "cloud",
		connectionMethod: "cloud_login"
	});
}
function o() {
	return t({ backendKind: "cloud" });
}
function s(e, t) {
	i("cloud_device_authorization_started", {
		...a(),
		source: t
	});
}
function c(e, t) {
	i("cloud_device_authorization_succeeded", {
		...a(),
		source: t
	});
}
function l(e, t) {
	i("cloud_conversation_ready", {
		...o(),
		$insert_id: `${r}:${e}`,
		task_id: e,
		conversation_id: t
	});
}
//#endregion
export { l as trackCloudConversationReady, s as trackCloudDeviceAuthorizationStarted, c as trackCloudDeviceAuthorizationSucceeded };

//# sourceMappingURL=cloud-funnel-analytics.js.map