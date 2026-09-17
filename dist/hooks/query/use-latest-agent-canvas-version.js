import { APP_UPDATE_QUERY_KEYS as e } from "./query-keys.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { fetchLatestAgentCanvasVersion as n } from "../../api/agent-canvas-updates.js";
//#region src/hooks/query/use-latest-agent-canvas-version.ts
function r({ enabled: r = !0 } = {}) {
	return t({
		queryKey: e.latestVersion,
		queryFn: ({ signal: e }) => n(e),
		enabled: r,
		retry: !1,
		refetchOnWindowFocus: !1,
		staleTime: 1e3 * 60 * 60,
		meta: { disableToast: !0 }
	});
}
//#endregion
export { r as useLatestAgentCanvasVersion };

//# sourceMappingURL=use-latest-agent-canvas-version.js.map