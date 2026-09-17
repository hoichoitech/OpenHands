import { getMcpServerHealthKey as e } from "../utils/mcp-server-health-key.js";
import { getMcpHealthSnapshot as t, subscribeMcpHealth as n } from "../api/mcp-health/mcp-health-store.js";
import { probeMcpServerHealth as r, reauthorizeMcpServerHealth as i } from "../api/mcp-health/probe-mcp-server-health.js";
import { UNCHECKED_MCP_HEALTH as a } from "../types/mcp-health.js";
import o from "react";
//#region src/hooks/use-mcp-server-health.ts
function s(s) {
	let c = e(s), l = o.useSyncExternalStore(n, () => t()[c] ?? a), u = o.useRef(s);
	return u.current = s, {
		health: l,
		probe: o.useCallback(() => r(u.current), []),
		reauthorize: o.useCallback(() => i(u.current), [])
	};
}
//#endregion
export { s as useMcpServerHealth };

//# sourceMappingURL=use-mcp-server-health.js.map