import { useQuery as e } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as t } from "../../contexts/active-backend-context.js";
import { batchGetCloudSandboxes as n } from "../../api/cloud/sandbox-service.api.js";
//#region src/hooks/query/use-cloud-sandbox.ts
var r = (r) => {
	let i = t(), a = i.backend.kind === "cloud";
	return e({
		queryKey: [
			"cloud",
			"sandbox",
			i.backend.id,
			i.orgId,
			r
		],
		queryFn: async () => {
			if (!r) return null;
			let [e] = await n([r]);
			return e ?? null;
		},
		enabled: a && !!r,
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15
	});
};
//#endregion
export { r as useCloudSandbox };

//# sourceMappingURL=use-cloud-sandbox.js.map