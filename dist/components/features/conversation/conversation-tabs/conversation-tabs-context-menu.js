import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Gauge as n } from "../../../../node_modules/lucide-react/dist/esm/icons/gauge.js";
import { Globe as r } from "../../../../node_modules/lucide-react/dist/esm/icons/globe.js";
import { ListTodo as i } from "../../../../node_modules/lucide-react/dist/esm/icons/list-todo.js";
import { SquareChevronRight as a } from "../../../../node_modules/lucide-react/dist/esm/icons/square-chevron-right.js";
import { cn as o } from "../../../../utils/utils.js";
import { useConversationId as s } from "../../../../hooks/use-conversation-id.js";
import { useConversationLocalStorageState as c } from "../../../../utils/conversation-local-storage.js";
import { useConversationStore as l } from "../../../../stores/conversation-store.js";
import { dropdownInstantColorClassName as u, dropdownMenuRowIconWrapperClassName as d } from "../../../../utils/dropdown-classes.js";
import { ContextMenu as f } from "../../../../ui/context-menu.js";
import { useClickOutsideElement as p } from "../../../../hooks/use-click-outside-element.js";
import { useSelectConversationTab as m } from "../../../../hooks/use-select-conversation-tab.js";
import h from "../../../../icons/document.js";
import { ArchivedDisabledTooltip as g } from "../../context-menu/archived-disabled-tooltip.js";
import { useIsArchivedConversation as _ } from "../../../../hooks/use-is-archived-conversation.js";
import { LuFileDiff as v } from "../../../../node_modules/react-icons/lu/index.js";
import y from "../../../../icons/pill.js";
import b from "../../../../icons/pill-fill.js";
import x from "../../../../icons/double-check.js";
import { useTaskList as S } from "../../../../hooks/use-task-list.js";
import { useLayoutEffect as C, useState as w } from "react";
import { jsx as T, jsxs as E } from "react/jsx-runtime";
import D from "react-dom";
//#region src/components/features/conversation/conversation-tabs/conversation-tabs-context-menu.tsx
function O({ isOpen: O, onClose: k, ignoreOutsideClickRef: A, anchorRef: j }) {
	let M = p(k, A), [N, P] = w();
	C(() => {
		if (!O || !j?.current) {
			P(void 0);
			return;
		}
		let e = () => {
			let e = j.current?.getBoundingClientRect();
			e && P({
				position: "fixed",
				zIndex: 9999,
				top: e.bottom + 8,
				left: e.left
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [O, j]);
	let { t: F } = e("openhands"), { conversationId: I } = s(), { state: L, setUnpinnedTabs: R, setSelectedTab: z } = c(I), { selectedTab: B, isRightPanelShown: V, setSelectedTab: H } = l(), { navigateToTab: U } = m(), { hasTaskList: W } = S(), G = _(), K = [
		{
			tab: "planner",
			icon: i,
			i18nKey: t.COMMON$PLANNER
		},
		{
			tab: "files",
			icon: h,
			i18nKey: t.COMMON$FILES
		},
		{
			tab: "commits",
			icon: v,
			i18nKey: t.DIFF_VIEWER$COMMITS
		},
		{
			tab: "terminal",
			icon: a,
			i18nKey: t.COMMON$TERMINAL
		},
		{
			tab: "browser",
			icon: r,
			i18nKey: t.COMMON$BROWSER
		},
		{
			tab: "usage",
			icon: n,
			i18nKey: t.COMMON$USAGE
		}
	];
	W && K.unshift({
		tab: "tasklist",
		icon: x,
		i18nKey: t.COMMON$TASK_LIST
	});
	let q = (e) => {
		G || (U(e), k());
	}, J = (e, t) => {
		if (G) {
			t.preventDefault(), t.stopPropagation();
			return;
		}
		if (t.preventDefault(), t.stopPropagation(), L.unpinnedTabs.includes(e)) R(L.unpinnedTabs.filter((t) => t !== e));
		else {
			let t = [...L.unpinnedTabs, e];
			if (R(t), B === e && V) {
				let n = K.find(({ tab: n }) => n !== e && !t.includes(n));
				n && (H(n.tab), z(n.tab));
			}
		}
	};
	if (!O) return null;
	let Y = !!(j?.current && N), X = /* @__PURE__ */ T(f, {
		ref: M,
		theme: Y ? "popover" : "default",
		position: Y ? "none" : "bottom",
		alignment: Y ? "none" : "left",
		spacing: Y ? "none" : "default",
		className: o("z-[9999] w-fit", Y ? "mt-0" : "mt-2"),
		children: K.map(({ tab: e, icon: n, i18nKey: r }) => {
			let i = !L.unpinnedTabs.includes(e);
			return /* @__PURE__ */ T("li", {
				className: "list-none",
				children: /* @__PURE__ */ T(g, {
					isDisabled: G,
					children: /* @__PURE__ */ E("div", {
						className: o("group flex h-[30px] w-full min-w-0 items-stretch rounded", !G && "hover:bg-[var(--oh-interactive-hover)]", G && "opacity-50"),
						children: [/* @__PURE__ */ E("button", {
							type: "button",
							"data-testid": `conversation-tabs-menu-open-${e}`,
							disabled: G,
							className: o("flex min-w-0 flex-1 items-center gap-2 rounded-l p-2 text-start text-white", u, G ? "cursor-not-allowed" : "cursor-pointer"),
							onClick: () => q(e),
							children: [/* @__PURE__ */ T("span", {
								className: d,
								"aria-hidden": !0,
								children: /* @__PURE__ */ T(n, { className: "h-4 w-4" })
							}), /* @__PURE__ */ T("span", {
								className: "text-sm",
								children: F(r)
							})]
						}), /* @__PURE__ */ T("button", {
							type: "button",
							"data-testid": `conversation-tabs-menu-pin-${e}`,
							disabled: G,
							className: o("flex shrink-0 items-center justify-center rounded-r px-2 text-white", u, G ? "cursor-not-allowed" : "cursor-pointer hover:bg-white/10"),
							"aria-pressed": i,
							"aria-label": F(i ? t.CONVERSATION$UNPIN_TAB : t.CONVERSATION$PIN_TAB),
							onClick: (t) => J(e, t),
							children: i ? /* @__PURE__ */ T("span", {
								className: o("-mr-[5px] ml-auto", d),
								"aria-hidden": !0,
								children: /* @__PURE__ */ T(b, { className: "h-7 w-7" })
							}) : /* @__PURE__ */ T("span", {
								className: o("ml-auto", d),
								"aria-hidden": !0,
								children: /* @__PURE__ */ T(y, { className: "h-4.5 w-4.5" })
							})
						})]
					})
				})
			}, e);
		})
	});
	return Y && N && typeof document < "u" ? D.createPortal(/* @__PURE__ */ T("div", {
		style: N,
		children: X
	}), document.body) : X;
}
//#endregion
export { O as ConversationTabsContextMenu };

//# sourceMappingURL=conversation-tabs-context-menu.js.map