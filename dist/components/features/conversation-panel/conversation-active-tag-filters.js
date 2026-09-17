import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { Tag as n } from "../../../node_modules/lucide-react/dist/esm/icons/tag.js";
import { Workflow as r } from "../../../node_modules/lucide-react/dist/esm/icons/workflow.js";
import { X as i } from "../../../node_modules/lucide-react/dist/esm/icons/x.js";
import { formatTagFacetLabel as a } from "./conversation-panel-list-helpers.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/conversation-active-tag-filters.tsx
function c({ selectedFacets: c, onToggleFacet: l, selectedAutomationNames: u, onToggleAutomationName: d, onClearAll: f }) {
	let { t: p } = e("openhands");
	if (c.length === 0 && u.length === 0) return null;
	let m = "flex min-w-0 max-w-full cursor-pointer items-center gap-1 rounded-full bg-[var(--oh-surface)] px-2 py-0.5 text-[10px] leading-4 text-white hover:bg-white/10";
	return /* @__PURE__ */ s("div", {
		"data-testid": "conversation-active-tag-filters",
		className: "flex min-w-0 items-start gap-1.5 border-b border-[var(--oh-border)] px-4 py-1.5",
		children: [
			/* @__PURE__ */ o(n, {
				className: "mt-1 h-3 w-3 shrink-0 text-[var(--oh-muted)]",
				"aria-hidden": !0
			}),
			/* @__PURE__ */ s("div", {
				className: "flex min-w-0 flex-1 flex-wrap items-center gap-1",
				children: [c.map((e) => /* @__PURE__ */ s("button", {
					type: "button",
					"data-testid": `active-tag-filter-${e}`,
					onClick: () => l(e),
					className: m,
					children: [/* @__PURE__ */ o("span", {
						className: "truncate",
						children: a(e)
					}), /* @__PURE__ */ o(i, {
						className: "h-3 w-3 shrink-0",
						"aria-hidden": !0
					})]
				}, e)), u.map((e) => /* @__PURE__ */ s("button", {
					type: "button",
					"data-testid": `active-automation-filter-${e}`,
					onClick: () => d(e),
					className: m,
					children: [
						/* @__PURE__ */ o(r, {
							className: "h-3 w-3 shrink-0",
							"aria-hidden": !0
						}),
						/* @__PURE__ */ o("span", {
							className: "truncate",
							children: e === "__unnamed__" ? p(t.CONVERSATION_PANEL$AUTOMATION_UNNAMED) : e
						}),
						/* @__PURE__ */ o(i, {
							className: "h-3 w-3 shrink-0",
							"aria-hidden": !0
						})
					]
				}, e))]
			}),
			/* @__PURE__ */ o("button", {
				type: "button",
				"data-testid": "clear-tag-filters",
				onClick: f,
				className: "shrink-0 cursor-pointer text-[10px] leading-5 text-[var(--oh-muted)] hover:text-white",
				children: p(t.CONVERSATION_PANEL$CLEAR_FILTERS)
			})
		]
	});
}
//#endregion
export { c as ConversationActiveTagFilters };

//# sourceMappingURL=conversation-active-tag-filters.js.map