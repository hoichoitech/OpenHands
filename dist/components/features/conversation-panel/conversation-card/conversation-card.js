import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Pin as n } from "../../../../node_modules/lucide-react/dist/esm/icons/pin.js";
import { cn as r } from "../../../../utils/utils.js";
import { getDisplayConversationTags as i } from "../../../../api/agent-server-adapter.js";
import ee from "../../../../api/conversation-service/conversation-service.api.js";
import { useTracking as te } from "../../../../hooks/use-tracking.js";
import { useDownloadConversation as ne } from "../../../../hooks/use-download-conversation.js";
import { transformVSCodeUrl as a } from "../../../../utils/vscode-url-helper.js";
import { formatTimeDelta as o } from "../../../../utils/format-time-delta.js";
import { hoverRevealActionClassName as s, hoverRevealPinnedTimestampClassName as re, hoverRevealReserveClassName as ie, hoverRevealYieldClassName as ae } from "../../../../utils/hover-reveal-classes.js";
import { ConversationCardHeader as oe } from "./conversation-card-header.js";
import { ConversationCardActions as c } from "./conversation-card-actions.js";
import { ConversationCardFooter as se } from "./conversation-card-footer.js";
import { ConversationStatusBadges as ce } from "./conversation-status-badges.js";
import le from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-card/conversation-card.tsx
function d({ onClick: d, onDelete: f, onArchive: p, onUnarchive: m, onStop: h, onChangeTitle: g, onEditTags: _, showOptions: v, title: y, selectedRepository: ue, lastUpdatedAt: b, createdAt: x, conversationId: S, executionStatus: C, sandboxStatus: w, contextMenuOpen: T = !1, onContextMenuToggle: E, isActive: D = !1, workspaceWorkingDir: de, showRepositoryMetadata: O = !0, llmModel: k = null, showLlmProfiles: A = !1, agentKind: j = null, acpServer: fe = null, tags: M = null, showTags: pe = !1, isArchived: N = !1, isPinned: P = !1, onTogglePin: F, alwaysShowPinIcon: I = !1 }) {
	let { t: L } = e("openhands"), { trackDownloadVsCodeButtonClicked: R } = te(), [z, B] = le.useState("view"), { mutateAsync: me } = ne(), V = i(M), he = V.length > 0, H = pe && he, ge = (e) => {
		e !== "" && e !== y && g?.(e), B("view");
	}, U = (e) => {
		e.preventDefault(), e.stopPropagation(), f?.(), E?.(!1);
	}, W = (e) => {
		e.preventDefault(), e.stopPropagation(), p?.(), E?.(!1);
	}, G = (e) => {
		e.preventDefault(), e.stopPropagation(), m?.(), E?.(!1);
	}, K = (e) => {
		e.preventDefault(), e.stopPropagation(), h?.(), E?.(!1);
	}, q = (e) => {
		e.preventDefault(), e.stopPropagation(), B("edit"), E?.(!1);
	}, J = (e) => {
		e.preventDefault(), e.stopPropagation(), _?.(), E?.(!1);
	}, Y = async (e) => {
		if (e.preventDefault(), e.stopPropagation(), R(), S) try {
			let e = await ee.getVSCodeUrl(S);
			if (e.vscode_url) {
				let t = a(e.vscode_url);
				t && window.open(t, "_blank");
			}
		} catch {}
		E?.(!1);
	}, X = async (e) => {
		e.preventDefault(), e.stopPropagation(), S && await me(S), E?.(!1);
	}, _e = (e) => {
		e.preventDefault(), e.stopPropagation(), F?.();
	}, ve = () => /* @__PURE__ */ l("button", {
		type: "button",
		"data-testid": S ? `conversation-pin-toggle-${S}` : "conversation-pin-toggle",
		"aria-pressed": P,
		"aria-label": L(P ? t.CONVERSATION_PANEL$UNPIN_CONVERSATION : t.CONVERSATION_PANEL$PIN_CONVERSATION),
		onClick: _e,
		className: r("flex shrink-0 cursor-pointer items-center justify-center rounded-md p-1", "text-[var(--oh-muted)] hover:bg-white/10 hover:text-white"),
		children: /* @__PURE__ */ l(n, {
			className: r("h-3.5 w-3.5", P && "fill-current"),
			"aria-hidden": !0
		})
	}), Z = !!(f || p || m || g || _ || v), Q = Z || !!F, $ = I && P && !!F, ye = O || N || A && (j === "acp" || !!k) || H && V.length > 0;
	return /* @__PURE__ */ u("div", {
		"data-testid": "conversation-card",
		"data-context-menu-open": T.toString(),
		"data-active": D ? "true" : "false",
		onClick: d,
		className: r("group relative h-auto w-full cursor-pointer rounded-md py-1 pl-2 pr-1 transition-colors", !T && "hover:bg-[var(--oh-surface)]", (D || T) && "bg-[var(--oh-surface)]"),
		children: [/* @__PURE__ */ u("div", {
			className: "flex items-center w-full min-w-0",
			children: [/* @__PURE__ */ u("div", {
				className: "flex items-center gap-2 flex-1 min-w-0 overflow-hidden",
				children: [/* @__PURE__ */ l(oe, {
					title: y,
					titleMode: z,
					onTitleSave: ge,
					executionStatus: C,
					sandboxStatus: w
				}), w === "ERROR" && /* @__PURE__ */ l(ce, {})]
			}), /* @__PURE__ */ u("div", {
				"data-testid": "conversation-card-trailing-slot",
				className: r("relative ml-auto pl-2 flex items-center justify-end shrink-0", $ ? "min-w-[3.75rem]" : Q && ie(T)),
				children: [!$ && (x ?? b) && /* @__PURE__ */ l("p", {
					className: r("text-xs text-[var(--oh-muted)] text-right whitespace-nowrap transition-opacity -translate-x-1.5", Q && ae(T)),
					children: /* @__PURE__ */ l("time", { children: o(b ?? x) })
				}), Q ? /* @__PURE__ */ u("div", {
					"data-testid": "conversation-card-hover-actions",
					className: r("absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-0.5 transition-opacity", $ ? "pointer-events-auto visible opacity-100" : s(T)),
					children: [
						F ? ve() : null,
						$ && (x ?? b) && Z ? /* @__PURE__ */ u("div", {
							className: "relative shrink-0",
							children: [/* @__PURE__ */ l("div", {
								className: s(T),
								children: /* @__PURE__ */ l(c, {
									contextMenuOpen: T,
									onContextMenuToggle: E || (() => {}),
									onDelete: f && U,
									onArchive: p && W,
									onUnarchive: m && G,
									onStop: h && K,
									onEdit: g && q,
									onEditTags: _ && J,
									onDownloadViaVSCode: Y,
									onDownloadConversation: X,
									executionStatus: C,
									conversationId: S,
									showOptions: v
								})
							}), /* @__PURE__ */ l("p", {
								className: r("pointer-events-none absolute inset-0 items-center justify-end", "text-xs text-[var(--oh-muted)] whitespace-nowrap -translate-x-1.5", re(T)),
								children: /* @__PURE__ */ l("time", { children: o(b ?? x) })
							})]
						}) : null,
						!$ && Z ? /* @__PURE__ */ l(c, {
							contextMenuOpen: T,
							onContextMenuToggle: E || (() => {}),
							onDelete: f && U,
							onArchive: p && W,
							onUnarchive: m && G,
							onStop: h && K,
							onEdit: g && q,
							onEditTags: _ && J,
							onDownloadViaVSCode: Y,
							onDownloadConversation: X,
							executionStatus: C,
							conversationId: S,
							showOptions: v
						}) : null
					]
				}) : null]
			})]
		}), ye && /* @__PURE__ */ l(se, {
			selectedRepository: ue,
			lastUpdatedAt: b,
			createdAt: x,
			executionStatus: C,
			workspaceWorkingDir: de,
			showRepositoryMetadata: O,
			showTimestamp: !1,
			llmModel: k,
			showAgentChip: A,
			agentKind: j,
			acpServer: fe,
			tags: M,
			showTags: H,
			isArchived: N
		})]
	});
}
//#endregion
export { d as ConversationCard };

//# sourceMappingURL=conversation-card.js.map