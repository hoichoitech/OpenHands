import { useTranslation as e } from "../../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../../i18n/declaration.js";
import { CodeBlock as n } from "./code-block.js";
import "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/primitives/output-pane.tsx
function a({ output: a, exitCode: o, copy: s = !0 }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ i("div", {
		className: "flex flex-col gap-1",
		children: [o != null && o !== 0 && o !== -1 && /* @__PURE__ */ r("span", {
			className: "self-start rounded bg-status-fail-bg px-1.5 py-0.5 font-mono text-xs text-status-fail-text",
			children: c(t.OBSERVATION$EXIT_CODE, { code: o })
		}), /* @__PURE__ */ r(n, {
			code: a,
			language: "bash",
			copy: s,
			placeholder: c(t.OBSERVATION$COMMAND_NO_OUTPUT),
			expandable: !0,
			wrapLongLines: !0
		})]
	});
}
//#endregion
export { a as OutputPane };

//# sourceMappingURL=output-pane.js.map