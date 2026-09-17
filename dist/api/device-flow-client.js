import { pollForToken as e, startDeviceFlow as t } from "../node_modules/@openhands/typescript-client/dist/client/device-flow-client.js";
import { AGENT_CANVAS_CLIENT_HEADERS as n } from "./client-source.js";
//#region src/api/device-flow-client.ts
function r(e) {
	return t(e, { headers: n });
}
function i(t, r, i) {
	return e(t, r, {
		...i,
		headers: n
	});
}
//#endregion
export { i as pollForToken, r as startDeviceFlow };

//# sourceMappingURL=device-flow-client.js.map