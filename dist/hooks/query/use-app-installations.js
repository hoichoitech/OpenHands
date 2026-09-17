import { shouldUseInstallationRepos as e } from "../../utils/utils.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as n } from "../../contexts/active-backend-context.js";
import { useIsAuthed as r } from "./use-is-authed.js";
import { useUserProviders as i } from "../use-user-providers.js";
import a from "../../api/git-service/git-service.api.js";
//#region src/hooks/query/use-app-installations.ts
var o = (o) => {
	let { data: s } = r(), { providers: c } = i(), l = n();
	return t({
		queryKey: [
			"installations",
			o,
			l.backend.id,
			l.orgId
		],
		queryFn: () => a.getUserInstallations(o),
		enabled: s && !!o && c.length > 0 && e(o, l.backend.kind),
		staleTime: 1e3 * 60 * 5,
		gcTime: 1e3 * 60 * 15
	});
};
//#endregion
export { o as useAppInstallations };

//# sourceMappingURL=use-app-installations.js.map