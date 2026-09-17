import "../api/backend-registry/active-store.js";
import { useActiveBackend as e } from "../contexts/active-backend-context.js";
import { automationListPath as t, hasAutomationInterface as n } from "../manifests/automation-interface.js";
import { useLocalStorage as r } from "../node_modules/@uidotdev/usehooks/index.js";
import { useCallback as i, useMemo as a } from "react";
//#region src/hooks/use-pinned-home-route.ts
var o = "oh:pinned-home-route", s = "/customize";
function c(e, t) {
	return `${o}:${e}:${t ?? "-"}`;
}
function l(e) {
	return e === "/customize" ? !0 : e === t() ? n() : !1;
}
function u(e) {
	return typeof e != "string" || !e ? null : l(e) ? e : null;
}
function d() {
	let t = e(), [n, o] = r(c(t.backend.id, t.orgId), null), s = a(() => u(n), [n]);
	return {
		pinnedRoute: s,
		isPinnedRoute: i((e) => s === e, [s]),
		togglePinnedRoute: i((e) => {
			if (s === e) {
				o(null);
				return;
			}
			l(e) && o(e);
		}, [s, o])
	};
}
//#endregion
export { s as CUSTOMIZE_PATH, d as usePinnedHomeRoute };

//# sourceMappingURL=use-pinned-home-route.js.map