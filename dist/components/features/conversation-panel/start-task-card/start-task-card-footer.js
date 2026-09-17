import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { formatTimeDelta as r } from "../../../../utils/format-time-delta.js";
import { ConversationRepoLink as i } from "../conversation-card/conversation-repo-link.js";
import { NoRepository as a } from "../conversation-card/no-repository.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/start-task-card/start-task-card-footer.tsx
function c({ selectedRepository: c, createdAt: l, detail: u }) {
	let { t: d } = e("openhands");
	return /* @__PURE__ */ s("div", {
		className: n("flex flex-col gap-1 mt-1"),
		children: [/* @__PURE__ */ s("div", {
			className: "flex flex-row justify-between items-center",
			children: [c ? /* @__PURE__ */ o(i, { selectedRepository: c }) : /* @__PURE__ */ o(a, {}), l && /* @__PURE__ */ o("p", {
				className: "text-xs text-[var(--oh-muted)] flex-1 text-right",
				children: /* @__PURE__ */ o("time", { children: `${r(l)} ${d(t.CONVERSATION$AGO)}` })
			})]
		}), u && /* @__PURE__ */ o("div", {
			className: "text-xs text-[var(--oh-text-subtle)] truncate",
			children: u
		})]
	});
}
//#endregion
export { c as StartTaskCardFooter };

//# sourceMappingURL=start-task-card-footer.js.map