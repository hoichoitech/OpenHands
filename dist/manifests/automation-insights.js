import { AutomationRunStatus as e } from "../types/automation.js";
new Set([e.COMPLETED, e.FAILED]);
function t(e) {
	return e === null || !Number.isFinite(e) ? "—" : e < 6e4 ? `${Math.max(1, Math.round(e / 1e3))}s` : e < 36e5 ? `${Math.max(1, Math.round(e / 6e4))}m` : `${(e / 36e5).toFixed(1)}h`;
}
//#endregion
export { t as formatCompactDuration };

//# sourceMappingURL=automation-insights.js.map