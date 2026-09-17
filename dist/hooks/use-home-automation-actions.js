import "../context/navigation-context.js";
import "../utils/custom-toast-handlers.js";
import { AutomationRunStatus as e } from "../types/automation.js";
import "./use-automation-permissions.js";
import "./query/use-automations.js";
import "../fixtures/home-automations-demo.js";
import "react";
//#region src/hooks/use-home-automation-actions.ts
function t(t) {
	return t?.status === e.PENDING || t?.status === e.RUNNING;
}
//#endregion
export { t as isInFlightAutomationRun };

//# sourceMappingURL=use-home-automation-actions.js.map