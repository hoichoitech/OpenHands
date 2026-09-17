import { createCloudClient as e, createCloudClientForRuntime as t } from "./client.js";
//#region src/api/cloud/proxy.ts
async function n(n) {
	return (n.hostOverride ? t(n.backend) : e(n.backend)).request({
		method: n.method,
		path: n.path,
		body: n.body,
		headers: n.headers,
		timeoutSeconds: n.timeoutSeconds,
		hostOverride: n.hostOverride,
		authMode: n.authMode === void 0 || n.authMode === "bearer" ? "bearer" : n.authMode,
		sessionApiKey: n.sessionApiKey,
		responseType: n.responseType
	});
}
//#endregion
export { n as callCloudProxy };

//# sourceMappingURL=proxy.js.map