import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../icons/checkmark.js";
import i from "../../../icons/copy.js";
import { extensionModuleCardInteractiveClassName as a, extensionModuleCardSurfaceClassName as o } from "../../../utils/extension-module-card-classes.js";
import { SkillCardPillRow as s } from "./skill-card-pill-row.js";
import { CirclePlusCheckToggle as c } from "../../shared/buttons/circle-plus-check-toggle.js";
import { SkillIconBadge as l } from "./skill-icon-badge.js";
import { getSkillCardDescription as u } from "./get-skill-card-description.js";
import { buildSkillPills as d } from "./build-skill-pills.js";
import { isCopyableSkillSource as f } from "./is-copyable-skill-source.js";
import p from "react";
import { jsx as m, jsxs as h } from "react/jsx-runtime";
//#region src/components/features/skills/skill-card.tsx
function g({ skill: g, enabled: _, onOpen: v, onToggle: y }) {
	let { t: b } = e("openhands"), [x, S] = p.useState(!1), C = u(g), w = p.useMemo(() => d(g, b), [g, b]), T = f(g.source);
	return p.useEffect(() => {
		if (!x) return;
		let e = setTimeout(() => S(!1), 2e3);
		return () => clearTimeout(e);
	}, [x]), /* @__PURE__ */ m("div", {
		"data-testid": `skill-card-${g.name}`,
		role: "button",
		tabIndex: 0,
		onClick: v,
		onKeyDown: (e) => {
			(e.key === "Enter" || e.key === " ") && (e.preventDefault(), v());
		},
		className: n("flex min-w-0 flex-col gap-3 overflow-hidden p-4", o, a),
		children: /* @__PURE__ */ h("div", {
			className: "flex items-start gap-3",
			children: [/* @__PURE__ */ m(l, { skillName: g.name }), /* @__PURE__ */ h("div", {
				className: "flex min-w-0 flex-1 flex-col gap-3",
				children: [
					/* @__PURE__ */ h("header", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ h("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ m("h3", {
								"data-testid": `skill-name-${g.name}`,
								className: "truncate text-sm font-semibold text-white",
								children: g.name
							}), g.source ? /* @__PURE__ */ h("div", {
								className: "mt-0.5 flex min-w-0 items-center gap-1",
								children: [/* @__PURE__ */ m("p", {
									"data-testid": `skill-source-${g.name}`,
									className: "min-w-0 flex-1 truncate text-xs text-tertiary-alt",
									title: g.source,
									children: g.source
								}), T ? /* @__PURE__ */ m("button", {
									type: "button",
									"data-testid": `skill-copy-source-${g.name}`,
									"aria-label": b(x ? t.BUTTON$COPIED : t.SETTINGS$SKILLS_COPY_PATH),
									disabled: x,
									onClick: async (e) => {
										e.stopPropagation(), g.source && (await navigator.clipboard.writeText(g.source), S(!0));
									},
									className: "shrink-0 cursor-pointer border-0 bg-transparent p-0.5 text-tertiary-alt hover:text-white disabled:cursor-default [&_path]:fill-current",
									children: m(x ? r : i, {
										width: 12,
										height: 12
									})
								}) : null]
							}) : null]
						}), /* @__PURE__ */ m(c, {
							testId: `skill-toggle-${g.name}`,
							isSelected: _,
							onToggle: y,
							disableTooltipKey: t.COMMON$DISABLE
						})]
					}),
					C ? /* @__PURE__ */ m("div", {
						"data-testid": `skill-description-${g.name}`,
						className: "min-w-0",
						children: /* @__PURE__ */ m("p", {
							className: "line-clamp-2 break-words text-xs leading-relaxed text-tertiary-light",
							children: C
						})
					}) : null,
					w.length > 0 ? /* @__PURE__ */ m(s, {
						pills: w,
						testId: `skill-triggers-${g.name}`
					}) : null
				]
			})]
		})
	});
}
//#endregion
export { g as SkillCard };

//# sourceMappingURL=skill-card.js.map