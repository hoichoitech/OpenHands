import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useConversationStore as n } from "../../../stores/conversation-store.js";
import { ContextMenu as r } from "../../../ui/context-menu.js";
import { ContextMenuListItem as i } from "../context-menu/context-menu-list-item.js";
import { ToolsContextMenuIconText as a } from "./tools-context-menu-icon-text.js";
import o from "../../../icons/tachometer-fast.js";
import s from "../../../icons/pr-status.js";
import c from "../../../icons/document.js";
import l from "../../../icons/u-water.js";
import { REPO_SUGGESTIONS as u } from "../../../utils/suggestions/repo-suggestions.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/controls/macros-submenu.tsx
var p = "!w-auto whitespace-nowrap";
function m({ onClose: m }) {
	let { t: h } = e("openhands"), { setMessageToSend: g } = n();
	return /* @__PURE__ */ f(r, {
		testId: "macros-submenu",
		className: "overflow-visible",
		children: [
			/* @__PURE__ */ d(i, {
				testId: "increase-test-coverage-button",
				onClick: () => {
					g(u.INCREASE_TEST_COVERAGE), m();
				},
				className: p,
				children: /* @__PURE__ */ d(a, {
					icon: /* @__PURE__ */ d(o, {
						width: 16,
						height: 16
					}),
					text: h(t.INCREASE_TEST_COVERAGE)
				})
			}),
			/* @__PURE__ */ d(i, {
				testId: "fix-readme-button",
				onClick: () => {
					g(u.FIX_README), m();
				},
				className: p,
				children: /* @__PURE__ */ d(a, {
					icon: /* @__PURE__ */ d(c, {
						width: 16,
						height: 16
					}),
					text: h(t.FIX_README)
				})
			}),
			/* @__PURE__ */ d(i, {
				testId: "auto-merge-prs-button",
				onClick: () => {
					g(u.AUTO_MERGE_PRS), m();
				},
				className: p,
				children: /* @__PURE__ */ d(a, {
					icon: /* @__PURE__ */ d(s, {
						width: 16,
						height: 16
					}),
					text: h(t.AUTO_MERGE_PRS)
				})
			}),
			/* @__PURE__ */ d(i, {
				testId: "clean-dependencies-button",
				onClick: () => {
					g(u.CLEAN_DEPENDENCIES), m();
				},
				className: p,
				children: /* @__PURE__ */ d(a, {
					icon: /* @__PURE__ */ d(l, {
						width: 16,
						height: 16
					}),
					text: h(t.CLEAN_DEPENDENCIES)
				})
			})
		]
	});
}
//#endregion
export { m as MacrosSubmenu };

//# sourceMappingURL=macros-submenu.js.map