import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Info as n } from "../../../../node_modules/lucide-react/dist/esm/icons/info.js";
import { LoaderCircle as r } from "../../../../node_modules/lucide-react/dist/esm/icons/loader-circle.js";
import { Minimize as i } from "../../../../node_modules/lucide-react/dist/esm/icons/minimize.js";
import { StyledTooltip as a } from "../../../shared/buttons/styled-tooltip.js";
import { useCompactContextAction as o } from "../../../../hooks/use-compact-context-action.js";
import "./context-meter.js";
import { BrandButton as s } from "../../settings/brand-button.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/features/conversation/usage-panel/compact-context-button.tsx
function u({ fillPercent: u, perTurnToken: d = 0 }) {
	let { t: f } = e("openhands"), { handleCompact: p, isCompacting: m, isDisabled: h, description: g } = o(d), _ = u > 70;
	return /* @__PURE__ */ l("div", {
		"data-testid": "compact-context-section",
		className: "flex flex-col gap-2 border-t border-[var(--oh-border-subtle)] pt-3",
		children: [_ && /* @__PURE__ */ c("span", {
			className: "text-xs text-amber-500",
			children: f(t.CONVERSATION$CONTEXT_FILLING_UP)
		}), /* @__PURE__ */ l("div", {
			className: "flex items-center gap-2",
			children: [/* @__PURE__ */ c(s, {
				testId: "compact-context-button",
				type: "button",
				variant: _ ? "primary" : "secondary",
				isDisabled: h,
				"aria-busy": m,
				onClick: p,
				startContent: m ? /* @__PURE__ */ c(r, {
					className: "h-4 w-4 animate-spin",
					"aria-hidden": !0
				}) : /* @__PURE__ */ c(i, {
					className: "h-4 w-4",
					"aria-hidden": !0
				}),
				className: "w-fit",
				children: f(t.CONVERSATION$COMPACT_CONTEXT)
			}), /* @__PURE__ */ c(a, {
				content: g,
				placement: "top",
				tooltipClassName: "max-w-[220px] text-xs font-normal leading-relaxed whitespace-normal",
				children: /* @__PURE__ */ c("button", {
					type: "button",
					"data-testid": "compact-context-info",
					"aria-label": g,
					className: "flex size-5 shrink-0 items-center justify-center rounded-full text-[var(--oh-muted)] hover:text-[var(--oh-foreground)] transition-colors cursor-help",
					children: /* @__PURE__ */ c(n, {
						className: "size-3.5",
						"aria-hidden": !0
					})
				})
			})]
		})]
	});
}
//#endregion
export { u as CompactContextButton };

//# sourceMappingURL=compact-context-button.js.map