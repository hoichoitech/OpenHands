import { DeviceFlowError as e } from "../node_modules/@openhands/typescript-client/dist/client/device-flow-client.js";
import { trackCloudDeviceAuthorizationStarted as t, trackCloudDeviceAuthorizationSucceeded as n } from "../services/cloud-funnel-analytics.js";
import { pollForToken as r, startDeviceFlow as i } from "../api/device-flow-client.js";
import a from "react";
//#region src/hooks/use-device-flow.ts
var o = {
	status: "idle",
	verificationUrl: null,
	userCode: null,
	apiKey: null,
	error: null,
	errorCode: null
};
function s() {
	let [s, c] = a.useState(o), l = a.useRef(null), u = a.useCallback((a, s) => {
		l.current?.abort();
		let u = new AbortController();
		l.current = u, c({
			...o,
			status: "starting"
		}), (async () => {
			let l;
			try {
				l = await i(a);
			} catch (t) {
				if (u.signal.aborted) return;
				let n = t instanceof Error ? t.message : "Failed to start device flow", r = t instanceof e ? t.code : void 0;
				c({
					...o,
					status: "error",
					error: n,
					errorCode: r ?? null
				});
				return;
			}
			if (!u.signal.aborted) {
				t(a, s), c({
					...o,
					status: "awaiting_authorization",
					verificationUrl: l.verification_uri_complete,
					userCode: l.user_code
				});
				try {
					let e = await r(a, l.device_code, {
						interval: l.interval,
						signal: u.signal
					});
					if (u.signal.aborted) return;
					n(a, s), c({
						...o,
						status: "success",
						apiKey: e.access_token
					});
				} catch (t) {
					if (u.signal.aborted) return;
					if (t instanceof e && t.code === "cancelled") {
						c(o);
						return;
					}
					let n = t instanceof Error ? t.message : "Authorization failed", r = t instanceof e ? t.code : void 0;
					c({
						...o,
						status: "error",
						error: n,
						errorCode: r ?? null
					});
				}
			}
		})();
	}, []), d = a.useCallback(() => {
		l.current?.abort(), l.current = null, c(o);
	}, []), f = a.useCallback(() => {
		l.current?.abort(), l.current = null, c(o);
	}, []);
	return a.useEffect(() => () => {
		l.current?.abort();
	}, []), {
		...s,
		start: u,
		cancel: d,
		reset: f
	};
}
//#endregion
export { s as useDeviceFlow };

//# sourceMappingURL=use-device-flow.js.map