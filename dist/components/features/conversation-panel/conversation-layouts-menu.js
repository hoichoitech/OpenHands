import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Clock3 as n } from "../../../node_modules/lucide-react/dist/esm/icons/clock-3.js";
import { Folder as r } from "../../../node_modules/lucide-react/dist/esm/icons/folder.js";
import { ListFilter as i } from "../../../node_modules/lucide-react/dist/esm/icons/list-filter.js";
import { Shrink as a } from "../../../node_modules/lucide-react/dist/esm/icons/shrink.js";
import { SlidersHorizontal as o } from "../../../node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js";
import { Star as s } from "../../../node_modules/lucide-react/dist/esm/icons/star.js";
import { Tag as c } from "../../../node_modules/lucide-react/dist/esm/icons/tag.js";
import { Trash2 as l } from "../../../node_modules/lucide-react/dist/esm/icons/trash-2.js";
import { cn as u } from "../../../utils/utils.js";
import { dropdownInstantColorClassName as d, dropdownMenuListClassName as f, dropdownMenuViewportScrollClassName as p } from "../../../utils/dropdown-classes.js";
import { formatTagFacetLabel as m } from "./conversation-panel-list-helpers.js";
import { DEFAULT_LAYOUT_SETTINGS as h, useConversationPanelPreferencesStore as g } from "../../../stores/conversation-panel-preferences-store.js";
import { MenuHeading as _ } from "./menu-heading.js";
import { MenuSeparator as v } from "./menu-separator.js";
import { MenuRow as y } from "./menu-row.js";
import { AdvancedConversationOptionsModal as b } from "./advanced-conversation-options-modal.js";
import x from "react";
import { jsx as S, jsxs as C } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-layouts-menu.tsx
var w = [
	{
		id: "by-workspace",
		icon: r,
		settings: {
			...h,
			organizeMode: "grouped"
		}
	},
	{
		id: "recent-activity",
		icon: n,
		labelKey: t.CONVERSATION_PANEL$LAYOUT_RECENT_ACTIVITY,
		settings: {
			...h,
			showOlderConversations: !1
		}
	},
	{
		id: "focused",
		icon: s,
		labelKey: t.CONVERSATION_PANEL$LAYOUT_FOCUSED,
		settings: {
			...h,
			threadScope: "relevant",
			showOlderConversations: !1
		}
	},
	{
		id: "minimal",
		icon: a,
		labelKey: t.CONVERSATION_PANEL$LAYOUT_MINIMAL,
		settings: {
			...h,
			threadScope: "relevant",
			showOlderConversations: !1,
			showRepoBranchMetadata: !1,
			showLlmProfiles: !1,
			showTagsMetadata: !1,
			showHoverMetadata: !1
		}
	}
];
function T(e) {
	return w.find((t) => Object.entries(t.settings).every(([t, n]) => e[t] === n)) ?? null;
}
function E({ menuOpen: n, setMenuOpen: r, menuRef: a, backendKind: s, tagFacets: h, automationNameFacets: E, totalConversationsCount: O, onRequestDeleteAll: k }) {
	let { t: A } = e("openhands"), j = g(), [M, N] = x.useState(!1), [P, F] = x.useState(!1), I = A(s === "local" ? t.CONVERSATION_PANEL$BY_WORKSPACE : t.CONVERSATION_PANEL$BY_REPOSITORY), L = T(j), R = x.useRef(null), z = x.useRef(null), B = x.useRef(n);
	return x.useEffect(() => {
		n ? (z.current?.querySelector("[role=\"menuitem\"], [role=\"menuitemradio\"], [role=\"menuitemcheckbox\"]"))?.focus() : B.current && R.current?.focus(), B.current = n;
	}, [n]), /* @__PURE__ */ C("div", {
		ref: a,
		className: "relative shrink-0 pr-0.5",
		children: [
			/* @__PURE__ */ S("button", {
				ref: R,
				type: "button",
				"data-testid": "conversation-layouts-toggle",
				"aria-label": A(t.CONVERSATION_PANEL$LAYOUTS_HEADING),
				"aria-haspopup": "menu",
				"aria-expanded": n,
				onClick: () => r(!n),
				className: u("relative inline-flex h-7 w-7 items-center justify-center rounded-md text-[var(--oh-muted)] hover:text-white hover:bg-[var(--oh-surface-raised)]", d),
				children: /* @__PURE__ */ S(i, {
					className: "shrink-0",
					size: 14,
					strokeWidth: 2,
					"aria-hidden": !0
				})
			}),
			n ? /* @__PURE__ */ C("div", {
				ref: z,
				role: "menu",
				"aria-orientation": "vertical",
				"aria-label": A(t.CONVERSATION_PANEL$LAYOUTS_HEADING),
				tabIndex: -1,
				"data-testid": "conversation-layouts-menu",
				onKeyDown: (e) => {
					if (e.key === "Escape") {
						e.preventDefault(), r(!1);
						return;
					}
					if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
					let t = z.current;
					if (!t) return;
					let n = Array.from(t.querySelectorAll("[role=\"menuitem\"], [role=\"menuitemradio\"], [role=\"menuitemcheckbox\"]")).filter((e) => !e.disabled);
					if (n.length === 0) return;
					let i = n.indexOf(document.activeElement), a = e.key === "ArrowDown" ? 1 : -1, o = ((i === -1 ? 0 : i) + a + n.length) % n.length;
					e.preventDefault(), n[o]?.focus();
				},
				className: u("absolute right-0 top-full z-50 mt-0 w-64 rounded-md border border-[var(--oh-border-subtle)] bg-tertiary px-1 py-1 text-[var(--oh-foreground)] shadow-lg", f, p),
				children: [
					/* @__PURE__ */ S(_, { children: A(t.CONVERSATION_PANEL$LAYOUTS_HEADING) }),
					w.map((e) => /* @__PURE__ */ S(y, {
						icon: e.icon,
						label: e.labelKey ? A(e.labelKey) : I,
						selected: L?.id === e.id,
						testId: `layout-preset-${e.id}`,
						onClick: () => {
							j.applyLayoutSettings(e.settings), r(!1);
						}
					}, e.id)),
					/* @__PURE__ */ S(v, {}),
					/* @__PURE__ */ S(y, {
						icon: c,
						label: A(t.CONVERSATION_PANEL$TAG_FILTERS),
						testId: "tag-filters-section",
						onClick: () => N(!M)
					}),
					M ? h.length > 0 ? h.map((e) => /* @__PURE__ */ S(y, {
						icon: c,
						label: m(e),
						selected: j.selectedTagFacets.includes(e),
						testId: `tag-facet-row-${e}`,
						onClick: () => j.toggleTagFacet(e)
					}, e)) : /* @__PURE__ */ S("p", {
						"data-testid": "tag-filters-empty",
						className: "px-2 py-1 text-[11px] text-[var(--oh-muted)]/70",
						children: A(t.CONVERSATION_PANEL$NO_VISIBLE_TAGS)
					}) : null,
					/* @__PURE__ */ S(v, {}),
					/* @__PURE__ */ S(y, {
						icon: o,
						label: L ? A(t.CONVERSATION_PANEL$ADVANCED_OPTIONS) : `${A(t.CONVERSATION_PANEL$ADVANCED_OPTIONS)} · ${A(t.CONVERSATION_PANEL$ADVANCED_OPTIONS_CUSTOM)}`,
						testId: "advanced-options-row",
						onClick: () => {
							r(!1), F(!0);
						}
					}),
					/* @__PURE__ */ S(v, {}),
					/* @__PURE__ */ S(y, {
						testId: "delete-all-conversations",
						icon: l,
						label: D(A(t.CONVERSATION$DELETE_ALL)),
						disabled: O === 0,
						destructive: !0,
						onClick: () => {
							O !== 0 && (k(), r(!1));
						}
					})
				]
			}) : null,
			/* @__PURE__ */ S(b, {
				open: P,
				onClose: () => F(!1),
				backendKind: s,
				automationNameFacets: E
			})
		]
	});
}
var D = (e) => e.length > 0 ? e.charAt(0).toUpperCase() + e.slice(1) : e;
//#endregion
export { E as ConversationLayoutsMenu };

//# sourceMappingURL=conversation-layouts-menu.js.map