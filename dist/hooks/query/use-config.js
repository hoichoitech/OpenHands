import { isAgentServerAuthError as e, isAgentServerUnavailableError as t } from "../../api/agent-server-compatibility.js";
import { CONFIG_CACHE_OPTIONS as n, QUERY_KEYS as r } from "./query-keys.js";
import { useQuery as i } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import a from "../../api/option-service/option-service.api.js";
//#region src/hooks/query/use-config.ts
var o = (o) => i({
	queryKey: r.WEB_CLIENT_CONFIG,
	queryFn: a.getConfig,
	retry: (n, r) => !t(r) && !e(r) && n < 3,
	meta: { disableToast: !0 },
	...n,
	enabled: o?.enabled
});
//#endregion
export { o as useConfig };

//# sourceMappingURL=use-config.js.map