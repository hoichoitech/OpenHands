import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { Gauge as n } from "../../../../node_modules/lucide-react/dist/esm/icons/gauge.js";
import { LoaderCircle as r } from "../../../../node_modules/lucide-react/dist/esm/icons/loader-circle.js";
import { Minimize as i } from "../../../../node_modules/lucide-react/dist/esm/icons/minimize.js";
import { cn as a } from "../../../../utils/utils.js";
import { StyledTooltip as o } from "../../../shared/buttons/styled-tooltip.js";
import { chatInputIconButtonClassName as s } from "../../../../utils/form-control-classes.js";
import { ContextMenuListItem as c } from "../../context-menu/context-menu-list-item.js";
import { useClickOutsideElement as l } from "../../../../hooks/use-click-outside-element.js";
import { Divider as u } from "../../../../ui/divider.js";
import { useSelectConversationTab as d } from "../../../../hooks/use-select-conversation-tab.js";
import { useContextWindowUsage as f } from "../../../../hooks/use-context-window-usage.js";
import { formatCompactTokenCount as p, getContextWindowUsagePercentage as m } from "../../../../utils/format-token-count.js";
import { useCompactContextAction as h } from "../../../../hooks/use-compact-context-action.js";
import { ConversationNameContextMenuIconText as g } from "../../conversation/conversation-name-context-menu-icon-text.js";
import { getContextFillTone as _ } from "../../conversation/usage-panel/context-meter.js";
import { CONTEXT_WINDOW_TRACK_COLOR as v, ContextWindowRing as y } from "./context-window-ring.js";
import b from "react";
import { jsx as x, jsxs as S } from "react/jsx-runtime";
//#region src/components/features/chat/components/context-window-meter.tsx
var C = {
	neutral: "bg-foreground",
	warning: "bg-amber-500",
	danger: "bg-red-500"
}, w = {
	neutral: "text-[var(--oh-muted)]",
	warning: "text-amber-500",
	danger: "text-red-500"
};
function T() {
	let { t: T } = e("openhands"), E = f(), { navigateToTab: D } = d(), [O, k] = b.useState(!1), A = b.useRef(null), j = l(() => k(!1), A), { handleCompact: M, isCompacting: N, isDisabled: P } = h(E?.perTurnToken ?? 0);
	if (!E) return null;
	let F = m(E.perTurnToken, E.contextWindow), I = Math.round(F), L = Math.max(0, 100 - I), R = `${I}% ${T(t.CONVERSATION$USED)} (${L}% ${T(t.CONVERSATION$LEFT)})`, z = `${p(E.perTurnToken)} / ${p(E.contextWindow)}`, B = _(F), V = () => {
		k(!1), D("usage");
	};
	return /* @__PURE__ */ S("div", {
		className: "relative shrink-0",
		children: [/* @__PURE__ */ x(o, {
			content: T(t.CHAT_INTERFACE$SHOW_CONTEXT),
			placement: "top",
			children: /* @__PURE__ */ x("button", {
				ref: A,
				type: "button",
				className: a(s, "size-8"),
				"aria-label": `${T(t.CHAT_INTERFACE$CONTEXT_WINDOW_METER_LABEL)}: ${R}`,
				"aria-expanded": O,
				"aria-haspopup": "dialog",
				"data-testid": "context-window-meter",
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation(), k((e) => !e);
				},
				children: /* @__PURE__ */ x(y, { percentage: F })
			})
		}), O && /* @__PURE__ */ S("div", {
			ref: j,
			"data-testid": "context-window-meter-popover",
			className: a("absolute bottom-full right-0 z-[60] mb-2 w-[280px]", "flex flex-col gap-0.5 rounded-md border border-[var(--oh-border-subtle)] bg-tertiary px-1 py-1 shadow-lg"),
			children: [
				/* @__PURE__ */ S("div", {
					className: "flex flex-col gap-2 px-2 py-1.5",
					children: [
						/* @__PURE__ */ S("div", {
							className: "flex items-center justify-between gap-2 text-sm",
							children: [/* @__PURE__ */ x("span", {
								className: "font-semibold text-[var(--oh-foreground)]",
								children: T(t.CONVERSATION$CONTEXT_WINDOW)
							}), /* @__PURE__ */ x("span", {
								className: a("shrink-0 text-xs", w[B]),
								children: R
							})]
						}),
						/* @__PURE__ */ x("button", {
							type: "button",
							"data-testid": "context-window-meter-bar-button",
							className: "relative h-1.5 w-full rounded-full cursor-pointer",
							style: { backgroundColor: v },
							"aria-label": T(t.COMMON$USAGE),
							onClick: (e) => {
								e.preventDefault(), e.stopPropagation(), V();
							},
							children: /* @__PURE__ */ x("span", {
								className: a("absolute inset-y-0 left-0 rounded-full transition-all duration-300", C[B]),
								style: { width: `${Math.min(100, F)}%` }
							})
						}),
						/* @__PURE__ */ S("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ S("button", {
								type: "button",
								"data-testid": "context-window-compact-button",
								disabled: P,
								"aria-busy": N,
								"aria-label": T(t.CONVERSATION$COMPACT_CONTEXT),
								className: a("inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs", "text-[var(--oh-muted)] hover:bg-[var(--oh-interactive-hover)] hover:text-[var(--oh-foreground)]", "transition-colors disabled:cursor-not-allowed disabled:opacity-50"),
								onClick: (e) => {
									e.preventDefault(), e.stopPropagation(), M();
								},
								children: [N ? /* @__PURE__ */ x(r, {
									className: "size-3 animate-spin",
									"aria-hidden": !0
								}) : /* @__PURE__ */ x(i, {
									className: "size-3",
									"aria-hidden": !0
								}), /* @__PURE__ */ x("span", { children: T(t.CONVERSATION$COMPACT_CONTEXT) })]
							}), /* @__PURE__ */ x("span", {
								className: "text-xs text-[var(--oh-muted)]",
								children: z
							})]
						})
					]
				}),
				/* @__PURE__ */ x(u, { inset: "menu" }),
				/* @__PURE__ */ x(c, {
					testId: "context-window-plan-usage",
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), V();
					},
					children: /* @__PURE__ */ x(g, {
						icon: /* @__PURE__ */ x(n, { size: 16 }),
						text: T(t.COMMON$USAGE)
					})
				})
			]
		})]
	});
}
//#endregion
export { T as ContextWindowMeter };

//# sourceMappingURL=context-window-meter.js.map