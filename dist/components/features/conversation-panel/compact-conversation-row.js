import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { useBackendScopedPath as r } from "../../../hooks/use-backend-scoped-path.js";
import { tooltip_default as i } from "../../../node_modules/@heroui/tooltip/dist/chunk-AUA5GDXN.js";
import { NavigationLink as a } from "../../shared/navigation-link.js";
import { ConversationStatusDot as o } from "./conversation-status-dot.js";
import { ConversationCardFooter as s } from "./conversation-card/conversation-card-footer.js";
import "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/compact-conversation-row.tsx
function u({ conversationId: u, title: d, selectedRepository: f, executionStatus: p, sandboxStatus: m, lastUpdatedAt: h, createdAt: g, workspaceWorkingDir: _, isActive: v = !1, onClose: y, showRepositoryMetadata: b = !0, llmModel: x = null, showLlmProfiles: S = !1, agentKind: C = null, acpServer: w = null, tags: T = null, showTags: E = !1 }) {
	let { t: D } = e("openhands"), O = r();
	return /* @__PURE__ */ c(i, {
		content: /* @__PURE__ */ l("div", {
			className: "w-[260px] p-3",
			children: [/* @__PURE__ */ l("div", {
				className: "flex items-center gap-2 mb-1",
				children: [/* @__PURE__ */ c(o, {
					executionStatus: p,
					sandboxStatus: m,
					showTooltip: !1
				}), /* @__PURE__ */ c("span", {
					className: "text-sm font-medium text-white truncate",
					title: d,
					children: d || D(t.CONVERSATION$UNTITLED)
				})]
			}), /* @__PURE__ */ c(s, {
				selectedRepository: f,
				lastUpdatedAt: h,
				createdAt: g,
				executionStatus: p,
				workspaceWorkingDir: _,
				showRepositoryMetadata: b,
				llmModel: x,
				showAgentChip: S,
				agentKind: C,
				acpServer: w,
				tags: T,
				showTags: E
			})]
		}),
		placement: "right",
		closeDelay: 100,
		className: "bg-[var(--oh-surface)] text-white border border-[var(--oh-border-subtle)] shadow-xl p-0",
		disableAnimation: !1,
		children: /* @__PURE__ */ c(a, {
			to: O(`/conversations/${u}`),
			onClick: y,
			"data-testid": "compact-conversation-row",
			"data-conversation-id": u,
			"aria-label": d || u,
			className: ({ isActive: e }) => n("flex items-center justify-center w-10 h-9 mx-auto rounded-md", "transition-colors cursor-pointer", e || v ? "bg-tertiary" : "hover:bg-[var(--oh-surface-raised)]"),
			children: /* @__PURE__ */ c(o, {
				executionStatus: p,
				sandboxStatus: m,
				showTooltip: !1
			})
		})
	});
}
//#endregion
export { u as CompactConversationRow };

//# sourceMappingURL=compact-conversation-row.js.map