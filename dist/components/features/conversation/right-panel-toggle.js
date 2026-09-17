import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useConversationId as r } from "../../../hooks/use-conversation-id.js";
import { setConversationState as i } from "../../../utils/conversation-local-storage.js";
import { useConversationStore as a } from "../../../stores/conversation-store.js";
import { useIsArchivedConversation as o } from "../../../hooks/use-is-archived-conversation.js";
import { useBreakpoint as s } from "../../../hooks/use-breakpoint.js";
import { ChatActionTooltip as c } from "../chat/chat-action-tooltip.js";
import { mobileTopBarIconButtonClassName as l } from "../../../utils/mobile-top-bar-icon-button-classes.js";
import u from "../../../icons/block-drawer-left.js";
import { jsx as d } from "react/jsx-runtime";
import { useNavigate as f } from "react-router";
//#region src/components/features/conversation/right-panel-toggle.tsx
function p({ className: p }) {
	let { t: m } = e("openhands"), h = s(), g = o(), _ = f(), { conversationId: v } = r(), { isRightPanelShown: y, setHasRightPanelToggled: b, setIsRightPanelShown: x, setSelectedTab: S } = a(), C = () => {
		if (g) return;
		if (h) {
			if (!v) return;
			b(!0), x(!0), i(v, { rightPanelShown: !0 });
			let { selectedTab: e } = a.getState();
			e || S("files"), _(`/conversations/${v}/panel`);
			return;
		}
		let e = !y;
		if (b(e), x(e), v && i(v, { rightPanelShown: e }), e) {
			let { selectedTab: e } = a.getState();
			e || S("files");
		}
	}, w = m(g ? t.CONVERSATION$UNAVAILABLE_FOR_ARCHIVES : h ? t.COMMON$SHOW_PANEL : y ? t.COMMON$HIDE_PANEL : t.COMMON$SHOW_PANEL), T = h ? !1 : y;
	return /* @__PURE__ */ d(c, {
		tooltip: w,
		ariaLabel: w,
		children: /* @__PURE__ */ d("button", {
			type: "button",
			onClick: C,
			disabled: g,
			className: n(l, "size-7 self-center", g && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-[var(--oh-muted)]", p),
			"aria-label": w,
			"aria-pressed": T,
			"aria-disabled": g,
			"data-testid": "right-panel-toggle",
			children: /* @__PURE__ */ d(u, { className: "size-5 -scale-x-100" })
		})
	});
}
//#endregion
export { p as RightPanelToggle };

//# sourceMappingURL=right-panel-toggle.js.map