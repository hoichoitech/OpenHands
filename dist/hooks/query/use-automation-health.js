import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import n from "../../api/automation-service/automation-service.api.js";
//#region src/hooks/query/use-automation-health.ts
var r = ["automation-health"];
function i() {
	let i = t();
	return e({
		queryKey: [
			...r,
			i.backend.id,
			i.orgId
		],
		queryFn: () => n.checkHealth(),
		staleTime: 30 * 1e3,
		retry: !1
	});
}
//#endregion
export { i as useAutomationHealth };

//# sourceMappingURL=use-automation-health.js.map