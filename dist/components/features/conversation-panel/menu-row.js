import { Check as e } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { cn as t } from "../../../utils/utils.js";
import { dropdownMenuRowClassName as n, dropdownMenuRowIconClassName as r } from "../../../utils/dropdown-classes.js";
import { ToggleSwitchVisual as i } from "../../../ui/toggle-switch.js";
import "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/menu-row.tsx
function s({ icon: s, label: c, sublabel: l, selected: u, onClick: d, testId: f, disabled: p, destructive: m, variant: h = "radio" }) {
	return /* @__PURE__ */ o("button", {
		type: "button",
		role: u === void 0 ? "menuitem" : h === "toggle" ? "menuitemcheckbox" : "menuitemradio",
		"aria-checked": u === void 0 ? void 0 : !!u,
		"data-testid": f,
		disabled: p,
		onClick: d,
		className: t("group", n, "disabled:opacity-50", m ? "text-danger" : "text-[var(--oh-foreground)]"),
		children: [
			/* @__PURE__ */ a(s, {
				className: t("h-3.5 w-3.5", r, m && "text-danger group-hover:text-danger group-focus-visible:text-danger"),
				"aria-hidden": !0
			}),
			/* @__PURE__ */ o("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ a("span", {
					className: "block truncate",
					children: c
				}), l ? /* @__PURE__ */ a("span", {
					className: "block truncate text-[10px] text-[var(--oh-muted)]/70",
					children: l
				}) : null]
			}),
			u === void 0 ? null : h === "toggle" ? /* @__PURE__ */ a(i, {
				enabled: !!u,
				size: "sm",
				className: "ml-auto"
			}) : u ? /* @__PURE__ */ a(e, {
				className: "ml-auto h-3.5 w-3.5 shrink-0 text-white",
				"aria-hidden": !0
			}) : null
		]
	});
}
//#endregion
export { s as MenuRow };

//# sourceMappingURL=menu-row.js.map