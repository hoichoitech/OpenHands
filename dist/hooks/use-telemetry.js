import { clearTelemetryData as e, getTelemetryConsent as t, setTelemetryConsent as n, subscribeTelemetryConsent as r, trackEvent as i, trackInstall as a, trackSessionStart as o } from "../services/telemetry.js";
import { useCallback as s, useEffect as c, useRef as l, useSyncExternalStore as u } from "react";
//#region src/hooks/use-telemetry.ts
function d() {
	let d = u(r, t, () => "pending"), f = l(!1);
	c(() => {
		f.current || (f.current = !0, a());
	}, []), c(() => {
		d === "granted" && o();
	}, [d]);
	let p = s(() => n("granted"), []), m = s(() => n("denied"), []), h = s((e, t) => {
		i(e, t);
	}, []), g = s(() => e(), []);
	return {
		consent: d,
		isEnabled: d === "granted",
		showConsentPrompt: d === "pending",
		grantConsent: p,
		denyConsent: m,
		track: h,
		clearData: g
	};
}
//#endregion
export { d as useTelemetry };

//# sourceMappingURL=use-telemetry.js.map