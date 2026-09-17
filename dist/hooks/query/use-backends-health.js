import { HttpError as e } from "../../node_modules/@openhands/typescript-client/dist/client/http-client.js";
import { isCorsOrNetworkError as t, isCorsOrNetworkErrorMessage as n } from "../../utils/user-facing-error.js";
import { getHealthSnapshot as r, recordBackendFailure as i, recordBackendSuccess as a, subscribeBackendHealth as o } from "../../api/backend-registry/health-store.js";
import { INVALID_BACKEND_API_KEY_ERROR as s, validateLocalBackend as c } from "../../api/agent-server-compatibility.js";
import { useQueries as l } from "../../node_modules/@tanstack/react-query/build/modern/useQueries.js";
import u from "../../node_modules/axios/lib/axios.js";
import "../../node_modules/@openhands/typescript-client/dist/index.js";
import { getCloudOrganizations as d, getCurrentCloudApiKey as f } from "../../api/cloud/organization-service.api.js";
import p from "react";
//#region src/hooks/query/use-backends-health.ts
var m = 3e4, h = 4e3, g = "API key required", _ = "Cloud API key or network issue", v = "Logged out";
function y(e) {
	return e === s;
}
function b(e) {
	return e === g;
}
function x(e) {
	return e === _;
}
function S(e) {
	return e.kind === "cloud" && e.authMode !== "cookie" && !e.apiKey.trim();
}
function C(e) {
	return e === v;
}
async function w(n) {
	if (n.kind === "cloud") {
		if (n.authMode !== "cookie" && !n.apiKey?.trim()) throw Error(g);
		try {
			n.authMode === "cookie" ? await d(n) : await f(n);
		} catch (n) {
			throw u.isAxiosError(n) && n.response?.status === 401 || n instanceof e && n.status === 401 ? Error(v) : t(n) ? Error(_) : n;
		}
		return !0;
	}
	return await c(n, h), !0;
}
var T = 2, E = 300;
function D(e) {
	return e instanceof Error ? e.message !== "Invalid API key" && e.message !== "API key required" && e.message !== "Logged out" : !0;
}
async function O(e) {
	for (let t = 0;; t += 1) try {
		return await w(e);
	} catch (e) {
		if (t >= T || !D(e)) throw e;
		await new Promise((e) => {
			setTimeout(e, E);
		});
	}
}
function k(e, t = {}) {
	let { probeDisabledOnce: s = !1 } = t, c = p.useSyncExternalStore(o, r, r), u = l({ queries: e.map((e) => {
		let t = c[e.id], r = S(e), o = t?.disabled === !0, l = o && e.kind === "cloud" && n(t?.lastError), u = !r && (!o || s || l);
		return {
			queryKey: [
				"backend-health",
				e.id,
				e.kind,
				e.host,
				e.apiKey ?? ""
			],
			queryFn: async () => {
				try {
					let t = await O(e);
					return a(e.id), t;
				} catch (t) {
					throw i(e.id, t), t;
				}
			},
			enabled: u,
			refetchInterval: o || r ? !1 : m,
			refetchIntervalInBackground: !1,
			refetchOnMount: o && s ? "always" : !0,
			refetchOnReconnect: !o && !r,
			refetchOnWindowFocus: !o && !r,
			retry: !1,
			staleTime: o ? 0 : m,
			meta: { disableToast: !0 }
		};
	}) }), d = {};
	return e.forEach((e, t) => {
		let n = u[t], r = c[e.id], i = S(e), a = i ? !1 : r?.disabled === !0, o = i ? 0 : r?.consecutiveFailures ?? 0, s = i ? g : r?.lastError ?? null, l;
		l = i || a ? !1 : n.isSuccess ? !0 : n.isError ? !1 : null, d[e.id] = {
			isConnected: l,
			consecutiveFailures: o,
			lastError: s,
			disabled: a
		};
	}), d;
}
//#endregion
export { x as isCloudBackendApiKeyOrNetworkHealthError, C as isCloudBackendLoggedOutHealthError, y as isInvalidBackendApiKeyHealthError, b as isMissingBackendApiKeyHealthError, k as useBackendsHealth };

//# sourceMappingURL=use-backends-health.js.map