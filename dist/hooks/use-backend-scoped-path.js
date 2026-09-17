import { withBackendSelectionParams as e } from "../api/backend-registry/url-selection.js";
import { isNoBackend as t } from "../api/backend-registry/active-store.js";
import { useActiveBackend as n } from "../contexts/active-backend-context.js";
import r from "react";
//#region src/hooks/use-backend-scoped-path.ts
function i() {
	let i = n();
	return r.useCallback((n) => t(i.backend) ? n : e(n, i), [i]);
}
//#endregion
export { i as useBackendScopedPath };

//# sourceMappingURL=use-backend-scoped-path.js.map