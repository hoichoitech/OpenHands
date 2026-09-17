import { MarkdownTableScroll as e } from "./markdown-table-scroll.js";
import "react";
import { jsx as t } from "react/jsx-runtime";
//#region src/components/features/markdown/table.tsx
function n({ children: n }) {
	return /* @__PURE__ */ t(e, { children: /* @__PURE__ */ t("table", {
		className: [
			"my-4 w-max min-w-full border-separate border-spacing-0 overflow-hidden rounded-xl border border-[var(--oh-border)] text-sm",
			"[&_td]:border-b [&_td]:border-r [&_th]:border-b [&_th]:border-r",
			"[&_td:last-child]:border-r-0 [&_th:last-child]:border-r-0",
			"[&_tbody_tr:last-child_td]:border-b-0"
		].join(" "),
		children: n
	}) });
}
function r({ children: e }) {
	return /* @__PURE__ */ t("th", {
		className: "whitespace-nowrap border-[var(--oh-border)] bg-[var(--oh-surface)] px-3 py-2 text-left font-semibold text-white",
		children: e
	});
}
function i({ children: e }) {
	return /* @__PURE__ */ t("td", {
		className: "whitespace-nowrap border-[var(--oh-border)] px-3 py-2 align-top",
		children: e
	});
}
//#endregion
export { n as table, i as td, r as th };

//# sourceMappingURL=table.js.map