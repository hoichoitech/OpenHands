import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ChevronDown as n } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as r } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { AccordionPanel as i } from "./accordion-panel.js";
import { DiffChangeList as a } from "./diff-change-list.js";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/features/diff-viewer/uncommitted-changes-row.tsx
var c = "-", l = "DIFF_VIEWER$UNCOMMITTED_FILE_COUNT";
function u({ changes: u, isExpanded: d, onToggle: f }) {
	let { t: p } = e("openhands");
	return /* @__PURE__ */ s("div", {
		"data-testid": "uncommitted-changes-row",
		className: "w-full flex flex-col",
		children: [/* @__PURE__ */ s("button", {
			type: "button",
			onClick: f,
			"aria-expanded": d,
			"data-testid": "uncommitted-changes-row-toggle",
			className: "w-full flex h-10 items-center gap-2 px-3 border-b border-[var(--oh-border)] text-sm text-content text-left hover:cursor-pointer",
			children: [
				/* @__PURE__ */ o("code", {
					className: "w-[7ch] flex-shrink-0 text-center font-mono text-xs text-[var(--oh-muted)]",
					children: c
				}),
				/* @__PURE__ */ o("strong", {
					className: "flex-1 truncate font-medium",
					children: p(t.DIFF_VIEWER$UNCOMMITTED)
				}),
				u.length > 0 ? /* @__PURE__ */ o("span", {
					"data-testid": "uncommitted-changes-count",
					className: "text-xs text-[var(--oh-muted)] tabular-nums flex-shrink-0",
					children: p(l, { count: u.length })
				}) : null,
				o(d ? n : r, {
					className: "w-4 h-4 shrink-0 text-[var(--oh-muted)]",
					"aria-hidden": !0
				})
			]
		}), /* @__PURE__ */ o(i, {
			open: d,
			testId: "uncommitted-changes-row-content",
			className: "w-full flex flex-col pl-6",
			children: u.length > 0 ? /* @__PURE__ */ o(a, { changes: u }) : null
		})]
	});
}
//#endregion
export { u as UncommittedChangesRow };

//# sourceMappingURL=uncommitted-changes-row.js.map