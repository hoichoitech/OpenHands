import { isActionEvent as e, isObservationEvent as t } from "../../../../types/agent-server/type-guards.js";
import { actionVisualizers as n, observationVisualizers as r } from "./index.js";
import "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/dispatcher.tsx
function a(a, o) {
	if (e(a)) {
		let e = n.get(a.action.kind);
		if (e) return /* @__PURE__ */ i(e.Body, { action: a });
	} else if (t(a)) {
		let e = r.get(a.observation.kind);
		if (e) return /* @__PURE__ */ i(e.Body, {
			action: o,
			observation: a
		});
	}
	return null;
}
//#endregion
export { a as resolveVisualizerBody };

//# sourceMappingURL=dispatcher.js.map