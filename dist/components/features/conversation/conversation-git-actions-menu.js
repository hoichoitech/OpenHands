import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { GitCommitHorizontal as n } from "../../../node_modules/lucide-react/dist/esm/icons/git-commit-horizontal.js";
import { getCreateNewBranchPrompt as r, getCreatePRPrompt as i, getGitCommitPrompt as a, getGitPullPrompt as o, getGitPushPrompt as s } from "../../../utils/utils.js";
import { useConversationStore as c } from "../../../stores/conversation-store.js";
import { ContextMenu as l } from "../../../ui/context-menu.js";
import { ContextMenuListItem as u } from "../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as d } from "../../../hooks/use-click-outside-element.js";
import f from "../../../icons/u-code-branch.js";
import { ToolsContextMenuIconText as p } from "../controls/tools-context-menu-icon-text.js";
import m from "../../../icons/u-arrow-up.js";
import h from "../../../icons/u-arrow-down.js";
import g from "../../../icons/u-pr.js";
import { useLayoutEffect as _, useState as v } from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
import x from "react-dom";
//#region src/components/features/conversation/conversation-git-actions-menu.tsx
var S = "!w-auto whitespace-nowrap";
function C({ anchorRef: C, onClose: w, gitProvider: T, testIdPrefix: E = "conversation-git-actions" }) {
	let { t: D } = e("openhands"), O = d(w), k = c((e) => e.setMessageToSend), [A, j] = v();
	return _(() => {
		let e = C.current;
		if (!e) return;
		let t = () => {
			let t = e.getBoundingClientRect();
			j({
				position: "fixed",
				top: t.bottom + 4,
				right: window.innerWidth - t.right,
				zIndex: 50
			});
		};
		return t(), window.addEventListener("resize", t), window.addEventListener("scroll", t, !0), () => {
			window.removeEventListener("resize", t), window.removeEventListener("scroll", t, !0);
		};
	}, [C]), A ? x.createPortal(/* @__PURE__ */ b(l, {
		ref: O,
		testId: `${E}-menu`,
		theme: "popover",
		style: A,
		className: "w-max min-w-[8rem]",
		children: [
			/* @__PURE__ */ y(u, {
				testId: `${E}-commit`,
				onClick: () => {
					k(a()), w();
				},
				className: S,
				children: /* @__PURE__ */ y(p, {
					icon: /* @__PURE__ */ y(n, {
						className: "size-4",
						"aria-hidden": !0
					}),
					text: D(t.DIFF_VIEWER$COMMITS)
				})
			}),
			/* @__PURE__ */ y(u, {
				testId: `${E}-pull`,
				onClick: () => {
					k(o()), w();
				},
				className: S,
				children: /* @__PURE__ */ y(p, {
					icon: /* @__PURE__ */ y(h, {
						width: 16,
						height: 16,
						"aria-hidden": !0
					}),
					text: D(t.COMMON$PULL)
				})
			}),
			/* @__PURE__ */ y(u, {
				testId: `${E}-push`,
				onClick: () => {
					k(s(T)), w();
				},
				className: S,
				children: /* @__PURE__ */ y(p, {
					icon: /* @__PURE__ */ y(m, {
						width: 16,
						height: 16,
						"aria-hidden": !0
					}),
					text: D(t.COMMON$PUSH)
				})
			}),
			/* @__PURE__ */ y(u, {
				testId: `${E}-create-pr`,
				onClick: () => {
					k(i(T)), w();
				},
				className: S,
				children: /* @__PURE__ */ y(p, {
					icon: /* @__PURE__ */ y(g, {
						width: 16,
						height: 16,
						"aria-hidden": !0
					}),
					text: D(t.COMMON$CREATE_PR)
				})
			}),
			/* @__PURE__ */ y(u, {
				testId: `${E}-create-new-branch`,
				onClick: () => {
					k(r()), w();
				},
				className: S,
				children: /* @__PURE__ */ y(p, {
					icon: /* @__PURE__ */ y(f, {
						width: 16,
						height: 16,
						"aria-hidden": !0
					}),
					text: D(t.COMMON$CREATE_NEW_BRANCH)
				})
			})
		]
	}), document.body) : null;
}
//#endregion
export { C as ConversationGitActionsMenu };

//# sourceMappingURL=conversation-git-actions-menu.js.map