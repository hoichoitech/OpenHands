import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { Check as t } from "../../../node_modules/lucide-react/dist/esm/icons/check.js";
import { cn as n } from "../../../utils/utils.js";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/skills/skill-facet-row.tsx
function a({ labelKey: a, count: o, checked: s, disabled: c, icon: l, testId: u, onToggle: d }) {
	let { t: f } = e("openhands"), p = f(a);
	return /* @__PURE__ */ i("button", {
		type: "button",
		role: "checkbox",
		"aria-checked": s,
		"data-testid": u,
		disabled: c,
		onClick: d,
		className: n("flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-left text-sm", c ? "cursor-default text-tertiary-alt/40" : "cursor-pointer hover:bg-[var(--oh-surface-raised)] hover:text-white", s ? "text-white" : "text-tertiary-light"),
		children: [
			/* @__PURE__ */ r("span", {
				"aria-hidden": !0,
				className: n("flex size-3.5 shrink-0 items-center justify-center rounded-[3px] border", s ? "border-white bg-white text-black" : "border-[var(--oh-border)]"),
				children: s ? /* @__PURE__ */ r(t, {
					className: "size-2.5",
					strokeWidth: 3
				}) : null
			}),
			l ? /* @__PURE__ */ r(l, {
				className: "size-3.5 shrink-0",
				"aria-hidden": !0
			}) : null,
			/* @__PURE__ */ r("span", {
				title: p,
				className: "min-w-0 flex-1 truncate",
				children: p
			}),
			/* @__PURE__ */ r("span", {
				className: "shrink-0 text-xs text-tertiary-alt",
				children: o
			})
		]
	});
}
//#endregion
export { a as SkillFacetRow };

//# sourceMappingURL=skill-facet-row.js.map