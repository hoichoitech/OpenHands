import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Info as n } from "../../../node_modules/lucide-react/dist/esm/icons/info.js";
import { cn as r } from "../../../utils/utils.js";
import { useOptionalConversationId as i } from "../../../hooks/use-conversation-id.js";
import { setConversationState as a } from "../../../utils/conversation-local-storage.js";
import { useConversationStore as o } from "../../../stores/conversation-store.js";
import { useIsArchivedConversation as s } from "../../../hooks/use-is-archived-conversation.js";
import { ConversationOverviewPanel as c } from "./conversation-overview-panel.js";
import { ChatActionTooltip as l } from "../chat/chat-action-tooltip.js";
import { openConversationOverviewPanelPeek as u, scheduleCloseConversationOverviewPanelPeek as d, useSyncConversationOverviewPanelPeek as f } from "../../../hooks/use-conversation-overview-panel-peek.js";
import { mobileTopBarIconButtonClassName as p } from "../../../utils/mobile-top-bar-icon-button-classes.js";
import { useEffect as m, useLayoutEffect as h, useRef as g, useState as _ } from "react";
import { Fragment as v, jsx as y, jsxs as b } from "react/jsx-runtime";
import x from "react-dom";
//#region src/components/features/conversation/conversation-overview-toggle.tsx
function S({ className: S }) {
	let { t: C } = e("openhands"), w = s(), { conversationId: T } = i(), E = g(null), [D, O] = _(null), { isOverviewPanelShown: k, isOverviewPanelPeeked: A, isRightPanelShown: j, setIsOverviewPanelShown: M, setHasRightPanelToggled: N, setIsRightPanelShown: P } = o();
	f(), m(() => {
		j && k && M(!1);
	}, [
		k,
		j,
		M
	]);
	let F = !w && j && !k, I = F && A;
	h(() => {
		if (!I) {
			O(null);
			return;
		}
		let e = () => {
			let e = E.current?.getBoundingClientRect();
			e && O({
				top: e.bottom + 4,
				left: Math.max(8, e.right - 240)
			});
		};
		return e(), window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [I]);
	let L = () => {
		if (!w) {
			if (j) {
				N(!1), P(!1), T && a(T, { rightPanelShown: !1 }), M(!0);
				return;
			}
			M(!k);
		}
	}, R = k || I, z = C(w ? t.CONVERSATION$UNAVAILABLE_FOR_ARCHIVES : k ? t.CONVERSATION$HIDE_OVERVIEW : t.CONVERSATION$SHOW_OVERVIEW), B = I && D ? x.createPortal(/* @__PURE__ */ y("div", {
		"data-testid": "conversation-overview-peek",
		className: "fixed z-50",
		style: {
			top: D.top,
			left: D.left,
			width: 240
		},
		onMouseEnter: u,
		onMouseLeave: d,
		children: /* @__PURE__ */ y("div", {
			className: "shadow-lg",
			children: /* @__PURE__ */ y(c, {})
		})
	}), document.body) : null;
	return /* @__PURE__ */ b(v, { children: [/* @__PURE__ */ y("div", {
		ref: E,
		className: "relative inline-flex items-center self-center",
		onMouseEnter: () => {
			F && u();
		},
		onMouseLeave: () => {
			(F || A) && d();
		},
		children: /* @__PURE__ */ y(l, {
			tooltip: z,
			ariaLabel: z,
			children: /* @__PURE__ */ y("button", {
				type: "button",
				onClick: L,
				disabled: w,
				className: r(p, "size-7", R && "bg-white/10 text-[var(--oh-foreground)]", w && "cursor-not-allowed opacity-50 hover:bg-transparent hover:text-[var(--oh-muted)]", S),
				"aria-label": z,
				"aria-pressed": k,
				"aria-disabled": w,
				"data-testid": "conversation-overview-toggle",
				children: /* @__PURE__ */ y(n, {
					className: "h-4 w-4 shrink-0",
					size: 16,
					"aria-hidden": !0
				})
			})
		})
	}), B] });
}
//#endregion
export { S as ConversationOverviewToggle };

//# sourceMappingURL=conversation-overview-toggle.js.map