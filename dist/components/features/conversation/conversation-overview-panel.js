import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Laptop as n } from "../../../node_modules/lucide-react/dist/esm/icons/laptop.js";
import { cn as r } from "../../../utils/utils.js";
import { useConversationId as i } from "../../../hooks/use-conversation-id.js";
import { CONVERSATION_OVERVIEW_GIT_PART as a, CONVERSATION_OVERVIEW_SECTION as o, CONVERSATION_OVERVIEW_SECTION_GROUPS as s, isOverviewGitPartPinned as c, isOverviewSectionPinned as l } from "./conversation-overview-sections.js";
import { useConversationLocalStorageState as u } from "../../../utils/conversation-local-storage.js";
import { Divider as d } from "../../../ui/divider.js";
import { useConversationOverviewStats as f } from "../../../hooks/use-conversation-overview-stats.js";
import { useConversationPrimaryRepository as p } from "../../../hooks/use-conversation-primary-repository.js";
import { ConversationOverviewDiffsRow as m } from "./conversation-overview-diffs-row.js";
import { ConversationOverviewContextMenu as h } from "./conversation-overview-context-menu.js";
import { ConversationOverviewGitSection as g } from "./conversation-overview-git-section.js";
import { EllipsisButton as _ } from "../conversation-panel/ellipsis-button.js";
import v, { useRef as y, useState as b } from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-overview-panel.tsx
var C = r("w-full max-w-[240px] rounded-xl border border-[var(--oh-border)]", "bg-[var(--oh-surface)] pb-1"), w = r("flex items-center gap-2 rounded-md px-2 py-1.5", "transition-colors hover:bg-white/5"), T = "size-4 shrink-0 text-[var(--oh-muted)]";
function E({ icon: e, label: t, value: n, testId: r }) {
	return /* @__PURE__ */ S("li", {
		"data-testid": r,
		className: w,
		children: [
			e,
			/* @__PURE__ */ x("span", {
				className: "min-w-0 flex-1 truncate text-sm text-[var(--oh-foreground)]",
				children: t
			}),
			/* @__PURE__ */ x("span", {
				className: "max-w-[45%] shrink-0 truncate text-right text-sm text-[var(--oh-muted)]",
				children: n
			})
		]
	});
}
function D() {
	return /* @__PURE__ */ x("div", {
		className: "px-1",
		children: /* @__PURE__ */ x(d, { inset: "menu" })
	});
}
function O() {
	let { t: r } = e("openhands"), d = f(), { conversationId: w } = i(), { state: O } = u(w), { isConnected: k } = p(), [A, j] = b(!1), M = y(null), N = (e) => l(e, O.unpinnedOverviewSections ?? []), P = c(a.changes, O.unpinnedOverviewGitParts ?? []), F = N(o.git) && (P || k), I = s.flatMap((e) => e.sections.filter((e) => N(e))), L = [];
	F && L.push({
		kind: "git",
		key: "git"
	}), I.length > 0 && L.push({
		kind: "sections",
		key: I.join("-"),
		sections: I
	});
	let R = (e) => {
		switch (e) {
			case o.workspace: return /* @__PURE__ */ x(E, {
				testId: "conversation-overview-workspace",
				icon: /* @__PURE__ */ x(n, { className: T }),
				label: r(t.CONVERSATION$OVERVIEW_WORKSPACE),
				value: d.workspaceName ?? r(t.CONVERSATION$OVERVIEW_NONE)
			}, e);
			case o.git: return null;
			default: return e;
		}
	};
	return /* @__PURE__ */ S("aside", {
		"data-testid": "conversation-overview-panel",
		"aria-label": r(t.CONVERSATION$OVERVIEW),
		className: C,
		children: [/* @__PURE__ */ S("div", {
			className: "flex items-center justify-between px-4 pb-0.5 pt-2.5",
			children: [/* @__PURE__ */ x("span", {
				className: "text-xs font-medium text-[var(--oh-muted)]",
				children: r(t.CONVERSATION$OVERVIEW)
			}), /* @__PURE__ */ S("div", {
				className: "relative shrink-0",
				children: [/* @__PURE__ */ x(_, {
					ref: M,
					testId: "conversation-overview-ellipsis",
					onClick: () => j((e) => !e),
					ariaLabel: r(t.COMMON$MORE_OPTIONS)
				}), /* @__PURE__ */ x(h, {
					isOpen: A,
					onClose: () => j(!1),
					ignoreOutsideClickRef: M,
					anchorRef: M
				})]
			})]
		}), L.map((e, t) => /* @__PURE__ */ S(v.Fragment, { children: [t > 0 ? /* @__PURE__ */ x(D, {}) : null, e.kind === "git" ? /* @__PURE__ */ S("div", {
			"data-testid": "conversation-overview-git-block",
			children: [P ? /* @__PURE__ */ x("ul", {
				className: "px-2",
				children: /* @__PURE__ */ x(m, {})
			}) : null, k ? /* @__PURE__ */ x(g, {}) : null]
		}) : /* @__PURE__ */ x("ul", {
			className: "px-2",
			children: e.sections.map((e) => R(e))
		})] }, e.key))]
	});
}
//#endregion
export { O as ConversationOverviewPanel };

//# sourceMappingURL=conversation-overview-panel.js.map