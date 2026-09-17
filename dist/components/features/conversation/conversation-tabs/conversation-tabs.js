import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Gauge as n } from "../../../../node_modules/lucide-react/dist/esm/icons/gauge.js";
import { Globe as r } from "../../../../node_modules/lucide-react/dist/esm/icons/globe.js";
import { ListTodo as i } from "../../../../node_modules/lucide-react/dist/esm/icons/list-todo.js";
import { SquareChevronRight as a } from "../../../../node_modules/lucide-react/dist/esm/icons/square-chevron-right.js";
import { AgentState as o } from "../../../../types/agent-state.js";
import { cn as s } from "../../../../utils/utils.js";
import { useConversationId as c } from "../../../../hooks/use-conversation-id.js";
import { useConversationLocalStorageState as l } from "../../../../utils/conversation-local-storage.js";
import { useConversationStore as u } from "../../../../stores/conversation-store.js";
import { useActiveBackend as d } from "../../../../contexts/active-backend-context.js";
import { useAgentState as f, usePlanningAgentState as ee } from "../../../../hooks/use-agent-state.js";
import { LayoutGroup as p } from "../../../../node_modules/framer-motion/dist/es/components/LayoutGroup/index.js";
import { Typography as m } from "../../../../ui/typography.js";
import { useSelectConversationTab as h } from "../../../../hooks/use-select-conversation-tab.js";
import g from "../../../../icons/document.js";
import { useHandleBuildPlanClick as te } from "../../../../hooks/use-handle-build-plan-click.js";
import { LuFileDiff as ne } from "../../../../node_modules/react-icons/lu/index.js";
import { EllipsisButton as re } from "../../conversation-panel/ellipsis-button.js";
import { ChatActionTooltip as _ } from "../../chat/chat-action-tooltip.js";
import { mobileTopBarIconClassName as v } from "../../../../utils/mobile-top-bar-icon-button-classes.js";
import y from "../../../../icons/double-check.js";
import { ConversationTabNav as b } from "./conversation-tab-nav.js";
import { DrawerVSCodeLink as ie } from "./drawer-vscode-link.js";
import { useTaskList as x } from "../../../../hooks/use-task-list.js";
import { ConversationTabsContextMenu as S } from "./conversation-tabs-context-menu.js";
import { useEffect as C, useLayoutEffect as ae, useRef as w, useState as T } from "react";
import { Fragment as oe, jsx as E, jsxs as D } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-tabs/conversation-tabs.tsx
function O({ variant: O = "default", isPanelResizing: k = !1 }) {
	let { conversationId: se } = c(), { setSelectedTab: A, planContent: ce } = u(), [j, M] = T(!1), { state: N } = l(se), { hasTaskList: P } = x(), { backend: F } = d(), { handleBuildPlanClick: I } = te(), { curAgentState: L } = f(), { isPlanningAgentRunning: R } = ee(), { selectTab: z, isTabActive: B, onTabChange: V, selectedTab: H, isRightPanelShown: U } = h();
	C(() => {
		A(N.selectedTab);
	}, [A, N.selectedTab]), C(() => {
		U && (H || V("files"));
	}, [
		U,
		H,
		V
	]);
	let { t: W, i18n: le } = e("openhands"), G = [
		{
			tabValue: "files",
			isActive: B("files"),
			icon: g,
			onClick: () => z("files"),
			tooltipContent: W(t.COMMON$FILES),
			tooltipAriaLabel: W(t.COMMON$FILES),
			label: W(t.COMMON$FILES)
		},
		{
			tabValue: "commits",
			isActive: B("commits"),
			icon: ne,
			onClick: () => z("commits"),
			tooltipContent: W(t.DIFF_VIEWER$COMMITS),
			tooltipAriaLabel: W(t.DIFF_VIEWER$COMMITS),
			label: W(t.DIFF_VIEWER$COMMITS)
		},
		{
			tabValue: "planner",
			isActive: B("planner"),
			icon: i,
			onClick: () => z("planner"),
			tooltipContent: W(t.COMMON$PLANNER),
			tooltipAriaLabel: W(t.COMMON$PLANNER),
			label: W(t.COMMON$PLANNER)
		},
		{
			tabValue: "terminal",
			isActive: B("terminal"),
			icon: a,
			onClick: () => z("terminal"),
			tooltipContent: W(t.COMMON$TERMINAL),
			tooltipAriaLabel: W(t.COMMON$TERMINAL),
			label: W(t.COMMON$TERMINAL),
			className: "pl-2"
		},
		{
			tabValue: "browser",
			isActive: B("browser"),
			icon: r,
			onClick: () => z("browser"),
			tooltipContent: W(t.COMMON$BROWSER),
			tooltipAriaLabel: W(t.COMMON$BROWSER),
			label: W(t.COMMON$BROWSER)
		},
		{
			tabValue: "usage",
			isActive: B("usage"),
			icon: n,
			onClick: () => z("usage"),
			tooltipContent: W(t.COMMON$USAGE),
			tooltipAriaLabel: W(t.COMMON$USAGE),
			label: W(t.COMMON$USAGE)
		}
	];
	P && G.splice(2, 0, {
		tabValue: "tasklist",
		isActive: B("tasklist"),
		icon: y,
		onClick: () => z("tasklist"),
		tooltipContent: W(t.COMMON$TASK_LIST),
		tooltipAriaLabel: W(t.COMMON$TASK_LIST),
		label: W(t.COMMON$TASK_LIST)
	});
	let K = G.filter((e) => N.unpinnedTabs.includes(e.tabValue) ? H === e.tabValue : !0), ue = N.unpinnedTabs.join(","), q = L === o.RUNNING || L === o.LOADING || R || !ce, J = w(null), Y = w(null), X = w(null), Z = w(null), Q = w(null), [de, $] = T(K.length);
	ae(() => {
		let e = J.current, t = Y.current, n = X.current, r = Z.current;
		if (!e || !t || !n || !r) return;
		let i = () => {
			let i = t.querySelectorAll("[data-tab-measure=\"true\"]"), a = i.length, o = e.getBoundingClientRect().width;
			if (o === 0) {
				$(a);
				return;
			}
			let s = Array.from(i).map((e) => e.getBoundingClientRect().width);
			if (s.length !== a || a === 0) {
				$(Math.max(0, a));
				return;
			}
			let c = n.getBoundingClientRect().width, l = r.getBoundingClientRect().width, u = getComputedStyle(e).columnGap || getComputedStyle(e).gap, d = parseFloat(u) || 6, f = 0;
			for (let e = a; e >= 0; --e) {
				let t = c + l;
				for (let n = 0; n < e; n += 1) t += s[n] ?? 0;
				if (e > 0 && (t += e * d), t <= o + .5) {
					f = e;
					break;
				}
			}
			$((e) => e === f ? e : f);
		};
		if (i(), typeof ResizeObserver > "u") return;
		let a = new ResizeObserver(i);
		return a.observe(e), a.observe(r), () => a.disconnect();
	}, [
		ue,
		K.length,
		P,
		F.kind,
		H,
		U,
		le.language
	]);
	let fe = Math.min(de, K.length);
	return /* @__PURE__ */ D(oe, { children: [/* @__PURE__ */ D("div", {
		className: s("relative w-full min-w-0", O === "compact" ? "flex h-full min-h-0 items-center py-0 pl-0 pr-1" : "min-h-10 p-1"),
		children: [/* @__PURE__ */ E("div", {
			ref: Y,
			"aria-hidden": !0,
			className: "pointer-events-none absolute top-0 left-[-10000px] flex flex-nowrap items-center gap-1.5",
			children: K.map(({ tabValue: e, icon: t, isActive: n, tooltipContent: r, tooltipAriaLabel: i, label: a, className: o }, c) => /* @__PURE__ */ E(_, {
				tooltip: r,
				ariaLabel: i,
				children: /* @__PURE__ */ E(b, {
					tabValue: e,
					icon: t,
					onClick: () => {},
					isActive: n,
					label: a,
					className: s(o, "shrink-0"),
					measureOnly: !0
				})
			}, `measure-${e}-${c}`))
		}), /* @__PURE__ */ D("div", {
			ref: J,
			className: "flex w-full min-w-0 flex-nowrap items-center justify-start",
			children: [/* @__PURE__ */ E("div", {
				className: "flex min-w-0 flex-1 items-center justify-start overflow-hidden",
				children: /* @__PURE__ */ D("div", {
					className: "flex w-fit max-w-full min-w-0 items-center gap-1.5",
					children: [/* @__PURE__ */ E(p, {
						id: "conversation-drawer-tabs",
						children: /* @__PURE__ */ E("div", {
							className: "flex w-fit max-w-full min-w-0 flex-nowrap items-center gap-1.5 overflow-x-hidden",
							children: K.slice(0, fe).map(({ tabValue: e, icon: t, onClick: n, isActive: r, tooltipContent: i, tooltipAriaLabel: a, label: o, className: c }, l) => /* @__PURE__ */ E(_, {
								tooltip: i,
								ariaLabel: a,
								children: /* @__PURE__ */ E(b, {
									tabValue: e,
									icon: t,
									onClick: n,
									isActive: r,
									label: o,
									className: s(c, "shrink-0"),
									suppressLayoutAnimation: k
								})
							}, `${e}-${l}`))
						})
					}), /* @__PURE__ */ D("div", {
						ref: X,
						className: "relative shrink-0",
						children: [/* @__PURE__ */ E(re, {
							ref: Q,
							onClick: () => M(!j),
							ariaLabel: W(t.COMMON$MORE_OPTIONS),
							iconClassName: O === "compact" ? v : void 0
						}), /* @__PURE__ */ E(S, {
							isOpen: j,
							onClose: () => M(!1),
							ignoreOutsideClickRef: Q,
							anchorRef: Q
						})]
					})]
				})
			}), /* @__PURE__ */ E("div", {
				ref: Z,
				className: "ml-auto shrink-0 pr-1",
				children: /* @__PURE__ */ E(ie, {})
			})]
		})]
	}), B("planner") && /* @__PURE__ */ E("div", {
		className: s("flex h-10 min-h-10 shrink-0 items-center border-t border-[var(--oh-border)] pl-[10px] pr-1"),
		children: /* @__PURE__ */ E("button", {
			type: "button",
			onClick: I,
			disabled: q,
			className: s("flex h-5 min-w-17 items-center justify-center rounded bg-white px-2 transition-opacity", q ? "cursor-not-allowed opacity-50" : "cursor-pointer hover:opacity-90"),
			"data-testid": "planner-tab-build-button",
			children: /* @__PURE__ */ D(m.Text, {
				className: "text-[11px] font-normal leading-5 text-black",
				children: [W(t.COMMON$BUILD), " ⌘↩"]
			})
		})
	})] });
}
//#endregion
export { O as ConversationTabs };

//# sourceMappingURL=conversation-tabs.js.map