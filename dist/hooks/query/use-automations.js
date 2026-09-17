import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import n from "../../api/automation-service/automation-service.api.js";
import "../use-tracking.js";
import "./use-automation-detail.js";
//#region src/hooks/query/use-automations.ts
var r = ["automations"];
function i(i = {}) {
	let { limit: a = 50, offset: o = 0, enabled: s = !0 } = i, c = t();
	return e({
		queryKey: [
			...r,
			{
				limit: a,
				offset: o
			},
			c.backend.id,
			c.orgId
		],
		queryFn: () => n.getAutomations(a, o),
		staleTime: 0,
		enabled: s
	});
}
//#endregion
export { i as useAutomations };

//# sourceMappingURL=use-automations.js.map