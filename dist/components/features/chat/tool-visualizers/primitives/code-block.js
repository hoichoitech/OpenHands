import { useTranslation as e } from "../../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../../i18n/declaration.js";
import n from "../../../../../node_modules/react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js";
import { CopyableContentWrapper as r } from "../../../../shared/buttons/copyable-content-wrapper.js";
import i from "../../../../../node_modules/react-syntax-highlighter/dist/esm/prism-light.js";
import "../../../markdown/syntax-highlighter.js";
import { MAX_CONTENT_LENGTH as a } from "../../../../conversation-events/chat/event-content-helpers/shared.js";
import o from "react";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/primitives/code-block.tsx
function l({ code: l, language: u, copy: d = !0, placeholder: f, expandable: p = !1, wrapLongLines: m = !1 }) {
	let { t: h } = e("openhands"), [g, _] = o.useState(!1), v = l.length > a, y = (v && !(p && g) ? `${l.slice(0, 1e3)}…` : l).trim() || f || "", b = d && l.trim().length > 0, x = h(g ? t.BUTTON$COLLAPSE : t.BUTTON$EXPAND), S = /* @__PURE__ */ s(i, {
		className: "rounded-lg text-xs",
		style: n,
		language: u,
		PreTag: "div",
		wrapLongLines: m,
		customStyle: m ? { whiteSpace: "pre-wrap" } : void 0,
		codeTagProps: m ? { style: { whiteSpace: "pre-wrap" } } : void 0,
		children: y
	});
	return /* @__PURE__ */ c("div", {
		className: "flex flex-col gap-1",
		children: [b ? /* @__PURE__ */ s(r, {
			text: l,
			children: S
		}) : S, p && v && /* @__PURE__ */ s("button", {
			type: "button",
			onClick: () => _((e) => !e),
			className: "self-start text-xs text-muted transition-colors hover:text-white hover:underline",
			children: x
		})]
	});
}
//#endregion
export { l as CodeBlock };

//# sourceMappingURL=code-block.js.map