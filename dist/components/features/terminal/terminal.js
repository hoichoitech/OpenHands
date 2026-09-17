import { RUNTIME_INACTIVE_STATES as e } from "../../../types/agent-state.js";
import { cn as t } from "../../../utils/utils.js";
import { useCommandStore as n } from "../../../stores/command-store.js";
import { useAgentState as r } from "../../../hooks/use-agent-state.js";
import { useTerminal as i } from "../../../hooks/use-terminal.js";
/* empty css                                           */
import { WaitingForRuntimeMessage as a } from "../chat/waiting-for-runtime-message.js";
import { EmptyTerminalMessage as o } from "./empty-terminal-message.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/terminal/terminal.tsx
function l() {
	let { curAgentState: l } = r(), u = n((e) => e.commands), d = e.includes(l), f = u.length > 0, p = d || !f, m = i();
	return /* @__PURE__ */ c("div", {
		className: "relative flex h-full min-h-0 flex-col",
		children: [
			d && /* @__PURE__ */ s(a, { className: "pt-16" }),
			!d && !f && /* @__PURE__ */ s(o, {}),
			/* @__PURE__ */ s("div", {
				className: t("flex-1 min-h-0 p-4", p && "pointer-events-none absolute inset-0 h-0 w-0 overflow-hidden p-0 opacity-0"),
				children: /* @__PURE__ */ s("div", {
					ref: m,
					className: "h-full w-full"
				})
			})
		]
	});
}
//#endregion
export { l as default };

//# sourceMappingURL=terminal.js.map