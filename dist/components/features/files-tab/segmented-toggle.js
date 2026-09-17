import { cn as e } from "../../../utils/utils.js";
import { jsx as t, jsxs as n } from "react/jsx-runtime";
//#region src/components/features/files-tab/segmented-toggle.tsx
function r({ value: r, options: i, onChange: a, ariaLabel: o, testId: s, className: c, equalWidth: l = !1 }) {
	return /* @__PURE__ */ t("div", {
		role: "radiogroup",
		"aria-label": o,
		"data-testid": s,
		className: e(l ? "flex w-full" : "inline-flex", "items-center rounded-md bg-[var(--oh-surface-raised)] p-0.5 text-xs", c),
		children: i.map((t) => {
			let i = t.value === r;
			return /* @__PURE__ */ n("button", {
				type: "button",
				role: "radio",
				"aria-checked": i,
				"data-testid": s ? `${s}-option-${t.value}` : void 0,
				onClick: () => a(t.value),
				className: e("inline-flex items-center gap-1.5 px-2 py-0.5 rounded cursor-pointer transition-colors", l && "flex-1 justify-center text-center", i ? "bg-[var(--oh-interactive-hover)] text-white" : "text-[var(--oh-muted)] hover:text-white"),
				children: [t.icon, t.label]
			}, t.value);
		})
	});
}
//#endregion
export { r as SegmentedToggle };

//# sourceMappingURL=segmented-toggle.js.map