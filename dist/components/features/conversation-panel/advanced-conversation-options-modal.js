import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Archive as n } from "../../../node_modules/lucide-react/dist/esm/icons/archive.js";
import { Bot as r } from "../../../node_modules/lucide-react/dist/esm/icons/bot.js";
import { CalendarArrowDown as i } from "../../../node_modules/lucide-react/dist/esm/icons/calendar-arrow-down.js";
import { Clock3 as a } from "../../../node_modules/lucide-react/dist/esm/icons/clock-3.js";
import { ClockArrowDown as o } from "../../../node_modules/lucide-react/dist/esm/icons/clock-arrow-down.js";
import { EyeOff as s } from "../../../node_modules/lucide-react/dist/esm/icons/eye-off.js";
import { Folder as c } from "../../../node_modules/lucide-react/dist/esm/icons/folder.js";
import { GitBranch as l } from "../../../node_modules/lucide-react/dist/esm/icons/git-branch.js";
import { MessageCircle as u } from "../../../node_modules/lucide-react/dist/esm/icons/message-circle.js";
import { MousePointerClick as d } from "../../../node_modules/lucide-react/dist/esm/icons/mouse-pointer-click.js";
import { Star as f } from "../../../node_modules/lucide-react/dist/esm/icons/star.js";
import { Tag as p } from "../../../node_modules/lucide-react/dist/esm/icons/tag.js";
import { cn as m } from "../../../utils/utils.js";
import { readVerticalScrollEdgeState as h } from "../../../utils/scroll-fade-state.js";
import { ModalBackdrop as g } from "../../shared/modals/modal-backdrop.js";
import { MODAL_MAX_WIDTH_VIEWPORT as _, ModalBody as v } from "../../shared/modals/modal-body.js";
import { BaseModalDescription as y, BaseModalTitle as b } from "../../shared/modals/confirmation-modals/base-modal.js";
import { ModalCloseButton as x } from "../../shared/modals/modal-close-button.js";
import { BrandButton as S } from "../settings/brand-button.js";
import "./conversation-panel-list-helpers.js";
import { useConversationPanelPreferencesStore as C } from "../../../stores/conversation-panel-preferences-store.js";
import { MenuHeading as w } from "./menu-heading.js";
import { MenuSeparator as T } from "./menu-separator.js";
import { MenuRow as E } from "./menu-row.js";
import D from "../../../icons/automations.js";
import { HideOlderConversationsRow as O } from "./hide-older-conversations-row.js";
import k from "react";
import { jsx as A, jsxs as j } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/advanced-conversation-options-modal.tsx
function M({ open: M, onClose: N, backendKind: P, automationNameFacets: F }) {
	let { t: I } = e("openhands"), L = C(), R = k.useRef(null), [z, B] = k.useState({
		top: !1,
		bottom: !1
	}), V = k.useCallback(() => {
		let e = R.current;
		e && B(h(e));
	}, []);
	if (k.useLayoutEffect(() => {
		if (!M) return;
		V();
		let e = R.current;
		if (!e) return;
		let t = new ResizeObserver(V);
		return t.observe(e), e.firstElementChild && t.observe(e.firstElementChild), () => t.disconnect();
	}, [
		M,
		V,
		L.automationFilterMode
	]), !M) return null;
	let H = I(P === "local" ? t.CONVERSATION_PANEL$BY_WORKSPACE : t.CONVERSATION_PANEL$BY_REPOSITORY);
	return /* @__PURE__ */ A(g, {
		onClose: N,
		children: /* @__PURE__ */ j(v, {
			width: "md",
			className: m("relative items-start overflow-hidden border border-[var(--oh-border)]", _),
			testID: "advanced-conversation-options-modal",
			children: [
				/* @__PURE__ */ A(x, {
					onClose: N,
					testId: "advanced-options-modal-close"
				}),
				/* @__PURE__ */ j("div", {
					className: "flex w-full flex-col gap-2 pr-8",
					children: [/* @__PURE__ */ A(b, { title: I(t.CONVERSATION_PANEL$ADVANCED_OPTIONS) }), /* @__PURE__ */ A(y, { children: I(t.CONVERSATION_PANEL$ADVANCED_OPTIONS_DESCRIPTION) })]
				}),
				/* @__PURE__ */ j("div", {
					className: "relative -mx-6 w-[calc(100%+3rem)] min-h-0",
					children: [
						/* @__PURE__ */ A("div", {
							"aria-hidden": !0,
							"data-testid": "advanced-options-scroll-edge-top",
							"data-visible": z.top ? "true" : "false",
							className: m("pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-[var(--oh-border)]", z.top ? "opacity-100" : "opacity-0")
						}),
						/* @__PURE__ */ j("div", {
							ref: R,
							role: "menu",
							"aria-orientation": "vertical",
							"aria-label": I(t.CONVERSATION_PANEL$ADVANCED_OPTIONS),
							tabIndex: -1,
							"data-testid": "advanced-options-scroll",
							className: "custom-scrollbar-always flex max-h-[60vh] w-full flex-col overflow-y-auto px-6",
							onClick: (e) => e.stopPropagation(),
							onScroll: V,
							children: [
								/* @__PURE__ */ A(w, { children: I(t.CONVERSATION_PANEL$ORGANIZE) }),
								/* @__PURE__ */ A(E, {
									icon: c,
									label: H,
									selected: L.organizeMode === "grouped",
									testId: "organize-grouped",
									onClick: () => L.setOrganizeMode("grouped")
								}),
								/* @__PURE__ */ A(E, {
									icon: a,
									label: I(t.CONVERSATION_PANEL$CHRONOLOGICAL),
									selected: L.organizeMode === "chronological",
									testId: "organize-chronological",
									onClick: () => L.setOrganizeMode("chronological")
								}),
								/* @__PURE__ */ A(T, {}),
								/* @__PURE__ */ A(w, { children: I(t.CONVERSATION_PANEL$SORT_BY) }),
								/* @__PURE__ */ A(E, {
									icon: i,
									label: I(t.CONVERSATION_PANEL$SORT_CREATED),
									selected: L.conversationSort === "created",
									testId: "sort-created",
									onClick: () => L.setConversationSort("created")
								}),
								/* @__PURE__ */ A(E, {
									icon: o,
									label: I(t.CONVERSATION_PANEL$SORT_UPDATED),
									selected: L.conversationSort === "updated",
									testId: "sort-updated",
									onClick: () => L.setConversationSort("updated")
								}),
								/* @__PURE__ */ A(T, {}),
								/* @__PURE__ */ A(w, { children: I(t.CONVERSATION_PANEL$THREADS) }),
								/* @__PURE__ */ A(E, {
									icon: u,
									label: I(t.CONVERSATION_PANEL$ALL_THREADS),
									selected: L.threadScope === "all",
									testId: "scope-all",
									onClick: () => L.setThreadScope("all")
								}),
								/* @__PURE__ */ A(E, {
									icon: f,
									label: I(t.CONVERSATION_PANEL$RELEVANT_THREADS),
									selected: L.threadScope === "relevant",
									testId: "scope-relevant",
									onClick: () => L.setThreadScope("relevant")
								}),
								/* @__PURE__ */ A(T, {}),
								/* @__PURE__ */ A(w, { children: I(t.CONVERSATION_PANEL$SHOW) }),
								/* @__PURE__ */ A(E, {
									icon: n,
									label: I(t.CONVERSATION_PANEL$SHOW_ARCHIVED),
									selected: L.showArchivedConversations,
									variant: "toggle",
									testId: "toggle-show-archived",
									onClick: L.toggleShowArchivedConversations
								}),
								/* @__PURE__ */ A(O, {}),
								/* @__PURE__ */ A(T, {}),
								/* @__PURE__ */ A(w, { children: I(t.CONVERSATION_PANEL$AUTOMATIONS) }),
								/* @__PURE__ */ A(E, {
									icon: u,
									label: I(t.CONVERSATION_PANEL$AUTOMATIONS_ALL),
									selected: L.automationFilterMode === "all",
									testId: "automation-filter-all",
									onClick: () => L.setAutomationFilterMode("all")
								}),
								/* @__PURE__ */ A(E, {
									icon: s,
									label: I(t.CONVERSATION_PANEL$AUTOMATIONS_HIDE),
									selected: L.automationFilterMode === "hide-automations",
									testId: "automation-filter-hide",
									onClick: () => L.setAutomationFilterMode("hide-automations")
								}),
								/* @__PURE__ */ A(E, {
									icon: D,
									label: I(t.CONVERSATION_PANEL$AUTOMATIONS_ONLY),
									selected: L.automationFilterMode === "only-automations",
									testId: "automation-filter-only",
									onClick: () => L.setAutomationFilterMode("only-automations")
								}),
								L.automationFilterMode === "only-automations" ? F.map((e) => /* @__PURE__ */ A(E, {
									icon: p,
									label: e === "__unnamed__" ? I(t.CONVERSATION_PANEL$AUTOMATION_UNNAMED) : e,
									selected: L.selectedAutomationNames.includes(e),
									variant: "toggle",
									testId: `automation-name-row-${e}`,
									onClick: () => L.toggleAutomationName(e)
								}, e)) : null,
								/* @__PURE__ */ A(T, {}),
								/* @__PURE__ */ A(w, { children: I(t.CONVERSATION_PANEL$METADATA) }),
								/* @__PURE__ */ A(E, {
									icon: l,
									label: I(t.CONVERSATION_PANEL$REPO_BRANCH),
									selected: L.showRepoBranchMetadata,
									variant: "toggle",
									testId: "toggle-repo-branch-metadata",
									onClick: L.toggleShowRepoBranchMetadata
								}),
								/* @__PURE__ */ A(E, {
									icon: r,
									label: I(t.CONVERSATION_PANEL$LLM_MODEL),
									selected: L.showLlmProfiles,
									variant: "toggle",
									testId: "toggle-llm-profiles",
									onClick: L.toggleShowLlmProfiles
								}),
								/* @__PURE__ */ A(E, {
									icon: p,
									label: I(t.CONVERSATION_PANEL$TAG_CHIPS),
									selected: L.showTagsMetadata,
									variant: "toggle",
									testId: "toggle-tags-metadata",
									onClick: L.toggleShowTagsMetadata
								}),
								/* @__PURE__ */ A(E, {
									icon: d,
									label: I(t.CONVERSATION_PANEL$HOVER_METADATA),
									selected: L.showHoverMetadata,
									variant: "toggle",
									testId: "toggle-hover-metadata",
									onClick: L.toggleShowHoverMetadata
								})
							]
						}),
						/* @__PURE__ */ A("div", {
							"aria-hidden": !0,
							"data-testid": "advanced-options-scroll-edge-bottom",
							"data-visible": z.bottom ? "true" : "false",
							className: m("pointer-events-none absolute inset-x-0 bottom-0 z-10 h-px bg-[var(--oh-border)]", z.bottom ? "opacity-100" : "opacity-0")
						})
					]
				}),
				/* @__PURE__ */ A("div", {
					className: "flex w-full justify-end",
					onClick: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ A(S, {
						type: "button",
						variant: "primary",
						onClick: N,
						testId: "advanced-options-close",
						children: I(t.BUTTON$CLOSE)
					})
				})
			]
		})
	});
}
//#endregion
export { M as AdvancedConversationOptionsModal };

//# sourceMappingURL=advanced-conversation-options-modal.js.map