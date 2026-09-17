import { CONFIG_CACHE_OPTIONS as e, PROVIDER_CONNECTIONS_QUERY_KEYS as t } from "./query-keys.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as r } from "../../contexts/active-backend-context.js";
import i from "../../api/provider-connections-service/provider-connections-service.api.js";
//#region src/hooks/query/use-provider-connections.ts
function a() {
	let { backend: a, orgId: o } = r(), s = a.kind === "local", c = a.kind === "cloud" && !!o, l = s || c;
	return n({
		queryKey: [
			...t.all,
			a.id,
			o
		],
		queryFn: i.list,
		...e,
		enabled: l,
		meta: { disableToast: !0 }
	});
}
//#endregion
export { a as useProviderConnections };

//# sourceMappingURL=use-provider-connections.js.map