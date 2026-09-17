import { dropBackendHealth as e, resetBackendHealth as t } from "../api/backend-registry/health-store.js";
import { makeDefaultLocalBackend as n } from "../api/backend-registry/default-backend.js";
import { NO_BACKEND as r, getActiveSelection as i, getRegisteredBackends as a, getSnapshot as o, setActiveSelection as s, setRegisteredBackends as c, subscribeActiveBackend as l } from "../api/backend-registry/active-store.js";
import { clearCachedAgentServerInfo as u } from "../api/agent-server-compatibility.js";
import { QUERY_KEYS as d } from "../hooks/query/query-keys.js";
import { queryClient as f } from "../query-client-config.js";
import { setTelemetryCloudContext as p, setTelemetryIdentity as m } from "../services/telemetry.js";
import h from "react";
import { jsx as g } from "react/jsx-runtime";
//#region src/contexts/active-backend-context.tsx
var _ = h.createContext(null);
function v() {
	return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `backend-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
function y(e, t) {
	let n = e.backend.kind === "cloud", r = t.backend.kind === "cloud";
	!n && !r || (p(null), r && (!n || e.backend.id !== t.backend.id) && m(null));
}
function b({ children: n }) {
	let b = h.useSyncExternalStore(l, o, o), x = h.useCallback(() => {
		u(), f.invalidateQueries({ queryKey: d.WEB_CLIENT_CONFIG });
	}, []), S = h.useCallback((e, t) => {
		let n = o(), c = i()?.backendId ?? null, l = i()?.orgId ?? null, u = t ?? null;
		if (e === c && u === l) return;
		let d = a(), f = d.find((t) => t.id === e), p = {
			backend: f ?? d[0] ?? r,
			orgId: f ? u : null
		};
		y(n.active, p), s({
			backendId: e,
			orgId: u
		}), x();
	}, [x]), C = h.useCallback((e) => {
		let t = o().active, n = {
			...e,
			id: v()
		}, r = [...a(), n];
		return y(t, {
			backend: n,
			orgId: null
		}), c(r), s({ backendId: n.id }), x(), n;
	}, [x]), w = h.useCallback((e, n) => {
		let r = a().find((t) => t.id === e), i = o().active.backend.id, s = n.host !== void 0 && r !== void 0 && n.host !== r.host, l = n.apiKey !== void 0 && r !== void 0 && n.apiKey !== r.apiKey;
		c(a().map((t) => t.id === e ? {
			...t,
			...n,
			connectionRevision: s || l ? (t.connectionRevision ?? 0) + 1 : t.connectionRevision
		} : t)), (s || l) && (t(e), i === e && (r?.kind === "cloud" && (p(null), m(null)), x()));
	}, [x]), T = h.useCallback((t) => {
		let n = a().find((e) => e.id === t), r = n?.kind === "cloud" && o().active.backend.id === n.id;
		c(a().filter((e) => e.id !== t)), r && (p(null), m(null)), e(t), x();
	}, [x]), E = h.useMemo(() => ({
		backends: b.backends,
		active: b.active,
		setActive: S,
		addBackend: C,
		updateBackend: w,
		removeBackend: T
	}), [
		b,
		S,
		C,
		w,
		T
	]);
	return /* @__PURE__ */ g(_.Provider, {
		value: E,
		children: n
	});
}
function x() {
	let e = h.useContext(_);
	if (!e) throw Error("useActiveBackendContext must be used inside <ActiveBackendProvider>");
	return e;
}
function S() {
	let e = h.useContext(_);
	return e ? e.active : {
		backend: n() ?? r,
		orgId: null
	};
}
//#endregion
export { b as ActiveBackendProvider, S as useActiveBackend, x as useActiveBackendContext };

//# sourceMappingURL=active-backend-context.js.map