import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import t from "../../../i18n/index.js";
import n from "../../../icons/angle-down-solid.js";
import r from "../../../icons/angle-up-solid.js";
import { MarkdownRenderer as i } from "../markdown/markdown-renderer.js";
import a from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/chat/error-message.tsx
function c({ errorId: c, defaultMessage: l }) {
	let { t: u } = e("openhands"), [d, f] = a.useState(!1);
	return /* @__PURE__ */ s("div", {
		className: "flex flex-col gap-2 my-2 py-2 text-sm w-full",
		children: [/* @__PURE__ */ s("div", {
			className: "font-bold text-danger",
			children: [u(c && t.exists(c) ? c : "CHAT_INTERFACE$AGENT_ERROR_MESSAGE"), /* @__PURE__ */ o("button", {
				type: "button",
				onClick: () => f((e) => !e),
				className: "cursor-pointer text-left",
				children: o(d ? r : n, { className: "h-4 w-4 ml-2 inline fill-danger" })
			})]
		}), d && /* @__PURE__ */ o(i, { children: l })]
	});
}
//#endregion
export { c as ErrorMessage };

//# sourceMappingURL=error-message.js.map