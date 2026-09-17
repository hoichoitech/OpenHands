import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Pin as n } from "../../../node_modules/lucide-react/dist/esm/icons/pin.js";
import { cn as r } from "../../../utils/utils.js";
import { getGroupConversationPreview as i } from "./conversation-panel-list-helpers.js";
import "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-panel-pinned-section.tsx
function s({ pinnedConversations: s, isPreviewExpanded: c, onTogglePreviewExpanded: l, activeConversationId: u, showDivider: d = !1, renderConversationCard: f }) {
	let { t: p } = e("openhands"), { visibleConversations: m, isPreviewTruncated: h, isShowingAll: g } = i(s, {
		limit: 5,
		expanded: c,
		activeConversationId: u
	});
	return /* @__PURE__ */ o("section", {
		"data-testid": "conversation-panel-pinned-section",
		className: r("pt-1", d ? "mb-2 border-b border-[var(--oh-border-subtle)] pb-2" : "pb-2"),
		children: [
			/* @__PURE__ */ o("h3", {
				className: "flex items-center gap-1.5 py-1.5 pl-2 text-sm font-normal text-[var(--oh-muted)]",
				children: [/* @__PURE__ */ a(n, {
					className: "h-3.5 w-3.5 shrink-0",
					"aria-hidden": !0
				}), p(t.CONVERSATION_PANEL$PINNED)]
			}),
			/* @__PURE__ */ a("div", {
				className: "space-y-0.5",
				children: m.map(f)
			}),
			h ? /* @__PURE__ */ a("div", {
				className: "pl-2 pt-0.5",
				children: /* @__PURE__ */ a("button", {
					type: "button",
					"data-testid": "conversation-panel-pinned-view-more",
					onClick: l,
					className: "cursor-pointer text-xs text-[var(--oh-text-dim)] hover:text-white",
					children: p(g ? t.CONVERSATION_PANEL$LESS : t.CONVERSATION_PANEL$MORE)
				})
			}) : null
		]
	});
}
//#endregion
export { s as ConversationPanelPinnedSection };

//# sourceMappingURL=conversation-panel-pinned-section.js.map