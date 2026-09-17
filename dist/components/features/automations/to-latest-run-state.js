import "../../../manifests/automation-insights.js";
//#region src/components/features/automations/to-latest-run-state.ts
var e = {
	latestRun: null,
	recentRuns: [],
	isLoading: !1,
	isError: !1
};
function t(t) {
	return t ? {
		latestRun: t.summary?.latestRun ?? null,
		recentRuns: t.summary?.recentRuns ?? [],
		total: t.summary?.total,
		isLoading: t.isLoading,
		isError: t.isError
	} : e;
}
//#endregion
export { t as toLatestRunState };

//# sourceMappingURL=to-latest-run-state.js.map