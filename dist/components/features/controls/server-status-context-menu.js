import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { isExecutionActive as n, isExecutionPaused as r } from "../../../utils/status.js";
import { cn as i } from "../../../utils/utils.js";
import { ContextMenu as a } from "../../../ui/context-menu.js";
import { useClickOutsideElement as o } from "../../../hooks/use-click-outside-element.js";
import { Divider as s } from "../../../ui/divider.js";
import c from "../../../icons/stop-circle.js";
import l from "../../../icons/play-circle.js";
import { ServerStatusContextMenuIconText as u } from "./server-status-context-menu-icon-text.js";
import d from "./server-status.js";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/controls/server-status-context-menu.tsx
function h({ onClose: h, onStopServer: g, onStartServer: _, executionStatus: v, position: y = "top", className: b = "", isPausing: x = !1, ignoreOutsideClickRef: S }) {
	let { t: C } = e("openhands"), w = o(h, S), T = n(v), E = r(v), D = T || E;
	return /* @__PURE__ */ m(a, {
		ref: w,
		testId: "server-status-context-menu",
		position: y,
		alignment: "left",
		size: "default",
		className: i("left-2 w-fit min-w-42", b),
		children: [/* @__PURE__ */ p(d, {
			executionStatus: v,
			isPausing: x,
			className: "pl-0 pr-2 py-1"
		}), D && /* @__PURE__ */ m(f, { children: [
			/* @__PURE__ */ p(s, { inset: "menu" }),
			T && g && /* @__PURE__ */ p(u, {
				icon: /* @__PURE__ */ p(c, {
					width: 18,
					height: 18
				}),
				text: C(t.COMMON$STOP_RUNTIME),
				onClick: g,
				testId: "stop-server-button"
			}),
			E && _ && /* @__PURE__ */ p(u, {
				icon: /* @__PURE__ */ p(l, {
					width: 18,
					height: 18
				}),
				text: C(t.COMMON$START_RUNTIME),
				onClick: _,
				testId: "start-server-button"
			})
		] })]
	});
}
//#endregion
export { h as ServerStatusContextMenu };

//# sourceMappingURL=server-status-context-menu.js.map