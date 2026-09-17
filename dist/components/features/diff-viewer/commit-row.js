import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ChevronDown as n } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as r } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { formatTimeDelta as i } from "../../../utils/format-time-delta.js";
import { useCommitChanges as a } from "../../../hooks/query/use-commit-changes.js";
import { AccordionPanel as o } from "./accordion-panel.js";
import { LoadingSpinner as s } from "./loading-spinner.js";
import { DiffChangeList as c } from "./diff-change-list.js";
import "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/commit-row.tsx
function d({ commit: d, showAuthor: f, isExpanded: p, onToggle: m }) {
	let { t: h } = e("openhands"), { data: g, isLoading: _, isSuccess: v } = a(d.sha, { enabled: p });
	return /* @__PURE__ */ u("div", {
		"data-testid": "commit-row",
		className: "w-full flex flex-col",
		children: [/* @__PURE__ */ u("button", {
			type: "button",
			onClick: m,
			"aria-expanded": p,
			"data-testid": "commit-row-toggle",
			className: "w-full flex h-10 items-center gap-2 px-3 border-b border-[var(--oh-border)] text-sm text-content text-left hover:cursor-pointer",
			children: [
				/* @__PURE__ */ l("code", {
					className: "w-[7ch] flex-shrink-0 text-center font-mono text-xs text-[var(--oh-muted)]",
					children: d.shortSha
				}),
				/* @__PURE__ */ l("strong", {
					className: "flex-1 truncate font-medium",
					children: d.subject
				}),
				f && /* @__PURE__ */ l("span", {
					className: "text-xs text-[var(--oh-muted)] truncate max-w-32 flex-shrink-0",
					children: d.author
				}),
				/* @__PURE__ */ l("span", {
					className: "text-xs text-[var(--oh-muted)] flex-shrink-0",
					children: `${i(d.timestamp)} ${h(t.CONVERSATION$AGO)}`
				}),
				l(p ? n : r, {
					className: "w-4 h-4 shrink-0 text-[var(--oh-muted)]",
					"aria-hidden": !0
				})
			]
		}), /* @__PURE__ */ u(o, {
			open: p,
			testId: "commit-row-content",
			className: "w-full flex flex-col pl-6",
			children: [_ && /* @__PURE__ */ l("div", {
				className: "p-3",
				children: /* @__PURE__ */ l(s, { className: "w-4 h-4" })
			}), v && g && g.length > 0 && /* @__PURE__ */ l(c, {
				changes: g,
				commit: d.sha
			})]
		})]
	});
}
//#endregion
export { d as CommitRow };

//# sourceMappingURL=commit-row.js.map