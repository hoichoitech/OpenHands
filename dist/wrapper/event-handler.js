import { useHandleWSEvents as e } from "../hooks/use-handle-ws-events.js";
import { useHandleRuntimeActive as t } from "../hooks/use-handle-runtime-active.js";
//#region src/wrapper/event-handler.tsx
function n({ children: n }) {
	return e(), t(), n;
}
//#endregion
export { n as EventHandler };

//# sourceMappingURL=event-handler.js.map