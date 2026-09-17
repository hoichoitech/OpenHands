import { cn as e } from "../../../../utils/utils.js";
import { FaCodeBranch as t } from "../../../../node_modules/react-icons/fa/index.js";
import { FaBitbucket as n, FaGithub as r, FaGitlab as i } from "../../../../node_modules/react-icons/fa6/index.js";
import a from "../../../../assets/branding/azure-devops-logo.js";
import { CONVERSATION_CARD_META_CHIP_CLASSNAME as o, CONVERSATION_CARD_META_CHIP_ICON_CLASSNAME as s, CONVERSATION_CARD_META_CHIP_ICON_SLOT_CLASSNAME as c } from "./conversation-card-meta-chip.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-repo-link.tsx
var d = e(o, "shrink"), f = {
	bitbucket: n,
	bitbucket_data_center: n,
	github: r,
	gitlab: i
};
function p({ selectedRepository: e }) {
	let n = e.git_provider ? f[e.git_provider] : null, r = e.selected_repository, i = e.selected_branch;
	return /* @__PURE__ */ u("div", {
		className: "flex min-w-0 flex-1 items-center gap-1 overflow-hidden",
		children: [r ? /* @__PURE__ */ u("span", {
			"data-testid": "conversation-card-selected-repository",
			title: r,
			className: d,
			children: [(n || e.git_provider === "azure_devops") && /* @__PURE__ */ l("span", {
				className: "inline-flex h-4 w-3 shrink-0 items-center justify-center [&_svg]:block",
				"aria-hidden": !0,
				children: l(n || a, { className: "h-3 w-3" })
			}), /* @__PURE__ */ l("span", {
				className: "truncate leading-4",
				children: r
			})]
		}) : null, i ? /* @__PURE__ */ u("span", {
			"data-testid": "conversation-card-selected-branch",
			title: i,
			className: d,
			children: [/* @__PURE__ */ l("span", {
				className: c,
				"aria-hidden": !0,
				children: /* @__PURE__ */ l(t, { className: s })
			}), /* @__PURE__ */ l("span", {
				className: "truncate leading-4",
				children: i
			})]
		}) : null]
	});
}
//#endregion
export { p as ConversationRepoLink };

//# sourceMappingURL=conversation-repo-link.js.map