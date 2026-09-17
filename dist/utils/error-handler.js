import { trackEvent as e } from "../services/telemetry.js";
//#region src/utils/error-handler.ts
var t = new Set([
	"error_source",
	"error_kind",
	"error_id",
	"error_telemetry"
]);
function n({ source: n, metadata: r = {}, classification: i }) {
	let a = Object.fromEntries(Object.entries(r).filter(([e]) => !t.has(e))), o = i?.kind || "unknown", s = typeof r.eventId == "string" ? r.eventId : void 0;
	s != null && delete a.eventId;
	let c = i?.error_id ?? s;
	e("error_outcome", {
		...a,
		current_url: window.location.href,
		error_source: n || "unknown",
		error_kind: o,
		...c == null ? {} : { error_id: c },
		error_telemetry: o === "internal" || o === "unknown" ? "diagnostic" : "outcome"
	});
}
//#endregion
export { n as trackError };

//# sourceMappingURL=error-handler.js.map