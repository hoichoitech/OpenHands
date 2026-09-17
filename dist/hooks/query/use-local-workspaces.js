import { isAgentServerVersionError as e } from "../../node_modules/@openhands/typescript-client/dist/client/agent-server-compatibility.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { LOCAL_WORKSPACES_QUERY_KEYS as t } from "./query-keys.js";
import { useQuery as n } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import r from "../../api/workspaces-service/workspaces-service.api.js";
//#region src/hooks/query/use-local-workspaces.ts
function i({ enabled: i = !0 } = {}) {
	return n({
		queryKey: t.all,
		queryFn: () => r.listWorkspaces(),
		enabled: i,
		retry: (t, n) => !e(n) && t < 3,
		meta: { disableToast: !0 },
		staleTime: 6e4
	});
}
//#endregion
export { i as useLocalWorkspaces };

//# sourceMappingURL=use-local-workspaces.js.map