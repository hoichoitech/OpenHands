import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { StyledTooltip as r } from "../../shared/buttons/styled-tooltip.js";
import { jsx as i, jsxs as a } from "react/jsx-runtime";
//#region src/components/features/mcp-page/save-as-secret-toggle.tsx
function o({ fieldKey: o, checked: s, onToggle: c }) {
	let { t: l } = e("openhands");
	return /* @__PURE__ */ a("label", {
		"data-testid": `mcp-install-save-secret-${o}`,
		className: n("flex items-center gap-2 px-3 py-2 mt-0.5 rounded-lg border cursor-pointer transition-colors", s ? "border-green-500/35 bg-green-500/10" : "border-[var(--oh-border)] bg-transparent hover:bg-white/[0.03]"),
		children: [
			/* @__PURE__ */ i("input", {
				className: "sr-only",
				id: `mcp-save-secret-checkbox-${o}`,
				type: "checkbox",
				checked: s,
				onChange: (e) => c(e.target.checked)
			}),
			/* @__PURE__ */ i("span", {
				"aria-hidden": "true",
				className: n("relative inline-flex h-[22px] w-[40px] shrink-0 items-center rounded-full border transition-colors duration-200", s ? "border-green-500 bg-green-500" : "border-[var(--oh-border)] bg-surface-raised"),
				children: /* @__PURE__ */ i("span", { className: n("inline-block size-4 rounded-full transition-transform duration-200", s ? "translate-x-[21px] bg-white" : "translate-x-[2px] bg-[var(--oh-muted)]") })
			}),
			/* @__PURE__ */ i("span", {
				className: "text-sm",
				children: l(t.MCP$ALSO_SAVE_AS_SECRET)
			}),
			/* @__PURE__ */ i("code", {
				className: n("ml-auto text-[11px] font-mono tracking-tight border rounded px-1.5 py-0.5", s ? "text-green-500 border-green-500/35 bg-white/[0.04]" : "text-tertiary-alt border-[var(--oh-border)]"),
				children: o
			}),
			/* @__PURE__ */ i(r, {
				content: l(t.MCP$SAVE_AS_SECRET_TOOLTIP),
				placement: "top",
				children: /* @__PURE__ */ i("button", {
					type: "button",
					"aria-label": l(t.MCP$SAVE_AS_SECRET_TOOLTIP),
					className: "flex items-center justify-center size-[15px] shrink-0 rounded-full border border-[var(--oh-muted)] text-tertiary-alt text-[9px] font-bold cursor-help",
					onClick: (e) => e.preventDefault(),
					children: "?"
				})
			})
		]
	});
}
//#endregion
export { o as SaveAsSecretToggle };

//# sourceMappingURL=save-as-secret-toggle.js.map