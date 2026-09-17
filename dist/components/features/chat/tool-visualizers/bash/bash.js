import { useTranslation as e } from "../../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../../i18n/declaration.js";
import { SecurityRisk as n } from "../../../../../types/agent-server/core/base/common.js";
import { defineVisualizer as r } from "../define.js";
import { textFromContent as i } from "../text-content.js";
import { CodeBlock as a } from "../primitives/code-block.js";
import { OutputPane as o } from "../primitives/output-pane.js";
import "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/bash/bash.tsx
var l = r({
	actionKinds: ["ExecuteBashAction", "TerminalAction"],
	observationKinds: ["ExecuteBashObservation", "TerminalObservation"],
	Body: function({ action: r, observation: l }) {
		let { t: u } = e("openhands"), d = l?.observation.command ?? r?.action.command ?? "", f = r?.security_risk;
		return /* @__PURE__ */ c("div", {
			className: "flex flex-col gap-2",
			children: [
				d && /* @__PURE__ */ s(a, {
					code: d,
					language: "bash"
				}),
				(f === n.HIGH || f === n.MEDIUM) && /* @__PURE__ */ s("span", {
					className: "text-xs text-status-fail-text",
					children: u(f === n.HIGH ? t.SECURITY$HIGH_RISK : t.SECURITY$MEDIUM_RISK)
				}),
				l && /* @__PURE__ */ s(o, {
					output: i(l.observation.content),
					exitCode: l.observation.exit_code
				})
			]
		});
	}
});
//#endregion
export { l as bashVisualizer };

//# sourceMappingURL=bash.js.map