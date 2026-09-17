import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { ChevronLeft as n } from "../../../../node_modules/lucide-react/dist/esm/icons/chevron-left.js";
import { useConversationStore as r } from "../../../../stores/conversation-store.js";
import { ConversationTabContent as i } from "../conversation-tabs/conversation-tab-content/conversation-tab-content.js";
import { mobileTopBarIconButtonClassName as a, mobileTopBarIconClassName as o } from "../../../../utils/mobile-top-bar-icon-button-classes.js";
import { ConversationTabs as s } from "../conversation-tabs/conversation-tabs.js";
import c from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-main/conversation-mobile-panel-page.tsx
function d({ onNavigateBack: d }) {
	let { t: f } = e("openhands"), { setIsRightPanelShown: p, setHasRightPanelToggled: m, setSelectedTab: h } = r();
	return c.useLayoutEffect(() => (p(!0), m(!0), r.getState().selectedTab || h("files"), () => {
		p(!1), m(!1);
	}), [
		p,
		m,
		h
	]), /* @__PURE__ */ u("div", {
		className: "flex h-full min-h-0 flex-col bg-[var(--oh-surface)]",
		children: [/* @__PURE__ */ u("div", {
			"data-testid": "conversation-mobile-panel-top",
			className: "flex h-10 min-h-10 shrink-0 items-center gap-1.5 border-b border-[var(--oh-border)] pl-2.5",
			children: [/* @__PURE__ */ l("button", {
				type: "button",
				"data-testid": "conversation-mobile-panel-back",
				onClick: () => {
					d();
				},
				"aria-label": f(t.COMMON$BACK),
				className: a,
				children: /* @__PURE__ */ l(n, {
					size: 20,
					className: o,
					"aria-hidden": !0,
					strokeWidth: 2
				})
			}), /* @__PURE__ */ l("div", {
				className: "flex min-h-0 min-w-0 flex-1 items-center self-stretch",
				children: /* @__PURE__ */ l("div", {
					"data-testid": "tabs-pane-header",
					className: "flex h-full min-h-0 w-full min-w-0 flex-col justify-center",
					children: /* @__PURE__ */ l(s, { variant: "compact" })
				})
			})]
		}), /* @__PURE__ */ l("div", {
			className: "flex min-h-0 flex-1 flex-col bg-[var(--oh-surface)]",
			children: /* @__PURE__ */ l(i, {})
		})]
	});
}
//#endregion
export { d as ConversationMobilePanelPage };

//# sourceMappingURL=conversation-mobile-panel-page.js.map