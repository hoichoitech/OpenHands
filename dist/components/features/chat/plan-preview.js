import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ArrowUpRight as n } from "../../../node_modules/lucide-react/dist/esm/icons/arrow-up-right.js";
import { cn as r } from "../../../utils/utils.js";
import { MarkdownRenderer as i } from "../markdown/markdown-renderer.js";
import { Typography as a } from "../../../ui/typography.js";
import o from "../../../icons/lesson-plan.js";
import { useSelectConversationTab as s } from "../../../hooks/use-select-conversation-tab.js";
import { useScrollContext as c } from "../../../context/scroll-context.js";
import { useHandleBuildPlanClick as l } from "../../../hooks/use-handle-build-plan-click.js";
import { createPlanComponents as u, planComponents as d } from "../markdown/plan-components.js";
import { useCallback as f, useMemo as p } from "react";
import { Fragment as m, jsx as h, jsxs as g } from "react/jsx-runtime";
//#region src/components/features/chat/plan-preview.tsx
var _ = 300, v = u("shine-text");
function y({ planContent: u, isStreaming: y, isBuildDisabled: b }) {
	let { t: x } = e("openhands"), { navigateToTab: S } = s(), { handleBuildPlanClick: C } = l(), { scrollDomToBottom: w } = c(), T = () => {
		S("planner");
	}, E = f((e) => {
		C(e), w();
	}, [C, w]), D = p(() => u ? u.length <= _ ? u : `${u.slice(0, _)}...` : "", [u]);
	return u ? /* @__PURE__ */ g("div", {
		className: "bg-[var(--oh-surface)] border border-[#597FF4] rounded-[12px] w-full mt-2",
		children: [
			/* @__PURE__ */ g("div", {
				className: "border-b border-[var(--oh-border)] flex h-[41px] items-center px-2 gap-1",
				children: [
					/* @__PURE__ */ h(o, {
						width: 18,
						height: 18,
						color: "var(--oh-muted)"
					}),
					/* @__PURE__ */ h(a.Text, {
						className: "font-normal text-[11px] text-white tracking-[0.11px] leading-4",
						children: x(t.COMMON$PLAN_MD)
					}),
					/* @__PURE__ */ h("div", { className: "flex-1" }),
					/* @__PURE__ */ g("button", {
						type: "button",
						onClick: T,
						className: "flex items-center gap-1 hover:opacity-80 transition-opacity cursor-pointer",
						"data-testid": "plan-preview-view-button",
						children: [/* @__PURE__ */ h(a.Text, {
							className: "font-normal text-[11px] text-white tracking-[0.11px] leading-4",
							children: x(t.COMMON$VIEW)
						}), /* @__PURE__ */ h(n, {
							className: "text-white",
							size: 18
						})]
					})
				]
			}),
			/* @__PURE__ */ h("div", {
				"data-testid": "plan-preview-content",
				className: "flex flex-col gap-[10px] p-4 text-[15px] text-white leading-[29px]",
				children: D && /* @__PURE__ */ g(m, { children: [/* @__PURE__ */ h(i, {
					includeStandard: !0,
					components: y ? v : d,
					children: D
				}), u && u.length > _ && /* @__PURE__ */ h("button", {
					type: "button",
					onClick: T,
					className: "text-[#4a67bd] cursor-pointer hover:underline text-left",
					"data-testid": "plan-preview-read-more-button",
					children: x(t.COMMON$READ_MORE)
				})] })
			}),
			/* @__PURE__ */ h("div", {
				className: "border-t border-[var(--oh-border)] flex h-[54px] items-center justify-start px-4",
				children: /* @__PURE__ */ h("button", {
					type: "button",
					onClick: E,
					disabled: b,
					className: r("bg-white flex items-center justify-center h-[26px] px-2 rounded-[4px] w-[93px] transition-opacity", b ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 cursor-pointer"),
					"data-testid": "plan-preview-build-button",
					children: /* @__PURE__ */ g(a.Text, {
						className: "font-normal text-[14px] text-black leading-5",
						children: [
							x(t.COMMON$BUILD),
							" ",
							/* @__PURE__ */ h(a.Text, {
								className: "font-normal text-black",
								children: "⌘↩"
							})
						]
					})
				})
			})
		]
	}) : null;
}
//#endregion
export { y as PlanPreview };

//# sourceMappingURL=plan-preview.js.map