import { I18nextProvider as e } from "../../node_modules/react-i18next/dist/es/I18nextProvider.js";
import { QueryClientProvider as t } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { OPENHANDS_I18N_NAMESPACE as n, getDefaultI18n as r, getI18n as i, setI18n as a } from "../../i18n/index.js";
import { getDefaultQueryClient as o, getQueryClient as s, setQueryClient as c } from "../../query-client-config.js";
import { ActiveBackendProvider as l } from "../../contexts/active-backend-context.js";
import { useHydrateFreeModels as u } from "../../hooks/query/use-free-models.js";
import { TelemetryProvider as d } from "./telemetry-provider.js";
import { AgentServerUIRoot as f } from "./agent-server-ui-root.js";
import p from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/providers/agent-server-ui-providers.tsx
var g = { provider: "posthog" };
function _() {
	return u(), null;
}
function v({ children: u, queryClient: g, analytics: v, i18n: y, className: b, contentClassName: x, style: S, styleOverrides: C, theme: w, withStyleRoot: T = !0 }) {
	let E = p.useMemo(() => g ?? o(), [g]), D = p.useMemo(() => y ?? r(), [y]), O = p.useRef(null);
	O.current ||= {
		queryClient: s(),
		i18n: i()
	}, c(E), a(D), p.useEffect(() => () => {
		O.current && (c(O.current.queryClient), a(O.current.i18n));
	}, []);
	let k = /* @__PURE__ */ h(d, {
		config: v && v.provider === "posthog" ? {
			apiKey: v.apiKey,
			apiHost: v.apiHost,
			uiHost: v.uiHost
		} : !1,
		children: [/* @__PURE__ */ m(_, {}), u]
	});
	return /* @__PURE__ */ m(e, {
		i18n: D,
		defaultNS: n,
		children: /* @__PURE__ */ m(t, {
			client: E,
			children: /* @__PURE__ */ m(l, { children: T ? /* @__PURE__ */ m(f, {
				className: b,
				contentClassName: x,
				style: S,
				styleOverrides: C,
				theme: w,
				children: k
			}) : k })
		})
	});
}
//#endregion
export { v as AgentServerUIProviders, g as DEFAULT_AGENT_SERVER_ANALYTICS };

//# sourceMappingURL=agent-server-ui-providers.js.map