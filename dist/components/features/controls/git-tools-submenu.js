import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { getCreateNewBranchPrompt as n, getCreatePRPrompt as r, getGitPullPrompt as i, getGitPushPrompt as a } from "../../../utils/utils.js";
import { useConversationStore as o } from "../../../stores/conversation-store.js";
import { useActiveConversation as s } from "../../../hooks/query/use-active-conversation.js";
import { ContextMenu as c } from "../../../ui/context-menu.js";
import { ContextMenuListItem as l } from "../context-menu/context-menu-list-item.js";
import u from "../../../icons/u-code-branch.js";
import { ToolsContextMenuIconText as d } from "./tools-context-menu-icon-text.js";
import f from "../../../icons/u-arrow-up.js";
import p from "../../../icons/u-arrow-down.js";
import m from "../../../icons/u-pr.js";
import { jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/controls/git-tools-submenu.tsx
var _ = "!w-auto whitespace-nowrap";
function v({ onClose: v }) {
	let { t: y } = e("openhands"), { setMessageToSend: b } = o(), { data: x } = s(), S = x?.git_provider;
	return /* @__PURE__ */ g(c, {
		testId: "git-tools-submenu",
		className: "w-max",
		children: [
			/* @__PURE__ */ h(l, {
				testId: "git-pull-button",
				onClick: () => {
					b(i()), v();
				},
				className: _,
				children: /* @__PURE__ */ h(d, {
					icon: /* @__PURE__ */ h(p, {
						width: 16,
						height: 16
					}),
					text: y(t.COMMON$GIT_PULL)
				})
			}),
			/* @__PURE__ */ h(l, {
				testId: "git-push-button",
				onClick: () => {
					b(a(S)), v();
				},
				className: _,
				children: /* @__PURE__ */ h(d, {
					icon: /* @__PURE__ */ h(f, {
						width: 16,
						height: 16
					}),
					text: y(t.COMMON$GIT_PUSH)
				})
			}),
			/* @__PURE__ */ h(l, {
				testId: "create-pr-button",
				onClick: () => {
					b(r(S)), v();
				},
				className: _,
				children: /* @__PURE__ */ h(d, {
					icon: /* @__PURE__ */ h(m, {
						width: 16,
						height: 16
					}),
					text: y(t.COMMON$CREATE_PR)
				})
			}),
			/* @__PURE__ */ h(l, {
				testId: "create-new-branch-button",
				onClick: () => {
					b(n()), v();
				},
				className: _,
				children: /* @__PURE__ */ h(d, {
					icon: /* @__PURE__ */ h(u, {
						width: 16,
						height: 16
					}),
					text: y(t.COMMON$CREATE_NEW_BRANCH)
				})
			})
		]
	});
}
//#endregion
export { v as GitToolsSubmenu };

//# sourceMappingURL=git-tools-submenu.js.map