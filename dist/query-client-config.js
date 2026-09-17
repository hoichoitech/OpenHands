import { I18nKey as e } from "./i18n/declaration.js";
import { recordBackendSuccess as t } from "./api/backend-registry/health-store.js";
import { getActiveBackend as n } from "./api/backend-registry/active-store.js";
import { MutationCache as r } from "./node_modules/@tanstack/query-core/build/modern/mutationCache.js";
import { QueryCache as i } from "./node_modules/@tanstack/query-core/build/modern/queryCache.js";
import { QueryClient as a } from "./node_modules/@tanstack/query-core/build/modern/queryClient.js";
import { AxiosError as o } from "./node_modules/axios/index.js";
import s from "./i18n/index.js";
import { retrieveAxiosErrorMessage as c } from "./utils/retrieve-axios-error-message.js";
import { displayErrorToast as l } from "./utils/custom-toast-handlers.js";
//#region src/query-client-config.ts
var u = (e, t) => {
	(e?.response?.status === 401 || e?.status === 401) && t.invalidateQueries({ queryKey: ["user", "authenticated"] });
}, d = (e) => {
	if (!(e instanceof o) || e.response?.status !== 401 && e.status !== 401) return !1;
	let t = n().backend;
	if (t.kind !== "cloud") return !1;
	let r = e.config?.url;
	return !r || r.startsWith(t.host.replace(/\/+$/, ""));
}, f = /* @__PURE__ */ new Set(), p = () => {
	let n = new a({
		queryCache: new i({
			onSuccess: (e, n) => {
				let r = n.meta?.backendId ?? n.options.meta?.backendId;
				typeof r == "string" && t(r);
			},
			onError: (t, r) => {
				if (r.queryKey[0] === "user" && r.queryKey[1] === "authenticated" || u(t, n), !(r.meta?.disableToast ?? r.options.meta?.disableToast) && !d(t)) {
					let n = c(t);
					f.has(n || "") || (l(n || s.t(e.ERROR$GENERIC)), f.add(n || ""), setTimeout(() => {
						f.delete(n || "");
					}, 3e3));
				}
			}
		}),
		mutationCache: new r({ onError: (t, r, i, a) => {
			u(t, n), !(a?.meta?.disableToast ?? a?.options.meta?.disableToast) && !d(t) && l(c(t) || s.t(e.ERROR$GENERIC));
		} })
	});
	return n;
}, m = null, h = null, g = () => (m ||= p(), m), _ = () => h ?? g(), v = (e) => (h = e ?? g(), h), y = new Proxy({}, {
	get: (e, t) => {
		let n = _(), r = Reflect.get(n, t, n);
		return typeof r == "function" ? r.bind(n) : r;
	},
	set: (e, t, n) => {
		let r = _();
		return Reflect.set(r, t, n, r);
	}
});
//#endregion
export { p as createAgentServerQueryClient, g as getDefaultQueryClient, _ as getQueryClient, y as queryClient, v as setQueryClient };

//# sourceMappingURL=query-client-config.js.map