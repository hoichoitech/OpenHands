import { cn as e } from "../../utils/utils.js";
import { AGENT_SERVER_UI_DEFAULT_CSS_VARIABLES as t, AGENT_SERVER_UI_DEFAULT_THEME as n } from "../../styles/agent-server-ui-style-scope.js";
import r from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/providers/agent-server-ui-root.tsx
function a({ children: a, theme: o = n, className: s, style: c, styleOverrides: l, contentClassName: u, ...d }) {
	let f = r.useMemo(() => ({
		...t,
		...l,
		...c
	}), [c, l]);
	return /* @__PURE__ */ i("div", {
		"data-agent-server-ui": "",
		...d,
		className: s,
		style: f,
		children: /* @__PURE__ */ i("div", {
			className: e(o, u, "text-foreground"),
			"data-theme": o,
			children: a
		})
	});
}
//#endregion
export { a as AgentServerUIRoot };

//# sourceMappingURL=agent-server-ui-root.js.map