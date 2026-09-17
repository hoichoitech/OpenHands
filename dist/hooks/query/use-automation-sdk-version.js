import { isNoBackend as e } from "../../api/backend-registry/active-store.js";
import { QueryClientContext as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { getQueryClient as r } from "../../query-client-config.js";
import { useActiveBackend as i } from "../../contexts/active-backend-context.js";
import a from "../../api/automation-service/automation-service.api.js";
import o from "react";
//#region src/hooks/query/use-automation-sdk-version.ts
var s = "automation-sdk-version", c = 3600 * 1e3;
async function l() {
	if (typeof a.getSdkVersion != "function") return null;
	try {
		return await a.getSdkVersion();
	} catch {
		return null;
	}
}
function u() {
	let u = i(), { backend: d } = u, f = o.useContext(t), p = !e(d) && typeof a.getSdkVersion == "function", { data: m } = n({
		queryKey: [
			s,
			d.id,
			d.kind,
			d.host,
			u.orgId ?? ""
		],
		queryFn: l,
		enabled: p,
		initialData: p ? void 0 : null,
		staleTime: c,
		gcTime: c,
		refetchOnWindowFocus: !1,
		refetchOnReconnect: !1
	}, f ?? r());
	return m ?? null;
}
//#endregion
export { u as useAutomationSdkVersion };

//# sourceMappingURL=use-automation-sdk-version.js.map