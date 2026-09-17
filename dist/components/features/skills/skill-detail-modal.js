import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import r from "../../../icons/checkmark.js";
import i from "../../../icons/copy.js";
import { ModalBackdrop as a } from "../../shared/modals/modal-backdrop.js";
import { modalTitleLgClassName as o } from "../../../utils/modal-classes.js";
import { ModalCloseButton as s } from "../../shared/modals/modal-close-button.js";
import { BrandButton as c } from "../settings/brand-button.js";
import { SkillCardPillRow as l } from "./skill-card-pill-row.js";
import u from "../../../icons/message-square-share.js";
import { useLaunchSkillInChat as d } from "../../../hooks/use-launch-skill-in-chat.js";
import { SkillIconBadge as f } from "./skill-icon-badge.js";
import { getSkillCardDescription as p } from "./get-skill-card-description.js";
import { buildSkillPills as m } from "./build-skill-pills.js";
import { isCopyableSkillSource as h } from "./is-copyable-skill-source.js";
import { SettingsSwitch as g } from "../settings/settings-switch.js";
import { getSkillChatLaunchMessage as _ } from "./get-skill-chat-launch-message.js";
import v from "react";
import { jsx as y, jsxs as b } from "react/jsx-runtime";
//#region src/components/features/skills/skill-detail-modal.tsx
function x({ testId: e, label: t, value: r }) {
	return /* @__PURE__ */ b("label", {
		className: "flex min-w-0 w-full flex-col gap-2.5",
		children: [/* @__PURE__ */ y("span", {
			className: "text-sm",
			children: t
		}), /* @__PURE__ */ y("textarea", {
			"data-testid": e,
			readOnly: !0,
			value: r,
			rows: Math.min(12, Math.max(4, r.split("\n").length)),
			className: n("bg-[var(--oh-surface-raised)] border border-[var(--oh-border-subtle)] w-full min-w-0 rounded-sm p-2 text-sm", "cursor-not-allowed resize-none custom-scrollbar")
		})]
	});
}
function S({ skill: n, enabled: S, onToggle: C, onClose: w }) {
	let { t: T } = e("openhands"), E = d(), [D, O] = v.useState(!1), k = v.useMemo(() => _(n), [n]), A = p(n), j = v.useMemo(() => m(n, T, {
		variant: "detail",
		testIdPrefix: "skill-modal-pill"
	}), [n, T]), M = h(n.source);
	return v.useEffect(() => {
		if (!D) return;
		let e = setTimeout(() => O(!1), 2e3);
		return () => clearTimeout(e);
	}, [D]), /* @__PURE__ */ y(a, {
		onClose: w,
		"aria-label": n.name,
		children: /* @__PURE__ */ b("div", {
			"data-testid": "skill-detail-modal",
			"data-skill-name": n.name,
			className: "relative flex w-[520px] max-w-[90vw] max-h-[85vh] flex-col overflow-hidden rounded-xl border border-[var(--oh-border)] bg-base-secondary",
			children: [
				/* @__PURE__ */ y(s, {
					onClose: w,
					testId: "skill-detail-modal-close"
				}),
				/* @__PURE__ */ b("header", {
					className: "flex flex-shrink-0 items-start gap-3 pb-4 pl-6 pr-12 pt-6",
					children: [/* @__PURE__ */ y(f, { skillName: n.name }), /* @__PURE__ */ b("div", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ y("h2", {
							"data-testid": `skill-modal-name-${n.name}`,
							className: o,
							children: n.name
						}), n.source ? /* @__PURE__ */ b("div", {
							className: "mt-0.5 flex min-w-0 items-center gap-1",
							children: [/* @__PURE__ */ y("p", {
								"data-testid": `skill-modal-source-${n.name}`,
								className: "min-w-0 flex-1 truncate text-xs text-tertiary-alt",
								title: n.source,
								children: n.source
							}), M ? /* @__PURE__ */ y("button", {
								type: "button",
								"data-testid": `skill-modal-copy-source-${n.name}`,
								"aria-label": T(D ? t.BUTTON$COPIED : t.SETTINGS$SKILLS_COPY_PATH),
								disabled: D,
								onClick: async () => {
									n.source && (await navigator.clipboard.writeText(n.source), O(!0));
								},
								className: "shrink-0 cursor-pointer border-0 bg-transparent p-0.5 text-tertiary-alt hover:text-white disabled:cursor-default [&_path]:fill-current",
								children: y(D ? r : i, {
									width: 12,
									height: 12
								})
							}) : null]
						}) : null]
					})]
				}),
				/* @__PURE__ */ b("div", {
					"data-testid": "skill-detail-modal-content",
					className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto overscroll-contain px-6 custom-scrollbar-always",
					children: [
						/* @__PURE__ */ y("div", {
							"data-testid": `skill-modal-enable-row-${n.name}`,
							className: "flex w-full items-center rounded-lg border border-[var(--oh-border)] bg-[rgba(255,255,255,0.04)] px-3 py-2.5",
							children: /* @__PURE__ */ y(g, {
								testId: `skill-modal-toggle-${n.name}`,
								isToggled: S,
								onToggle: C,
								togglePosition: "right",
								children: T(S ? t.SETTINGS$SKILLS_ENABLED : t.SETTINGS$SKILLS_DISABLED)
							})
						}),
						A ? /* @__PURE__ */ y("p", {
							"data-testid": `skill-modal-description-${n.name}`,
							className: "break-words whitespace-pre-line text-xs text-tertiary-light",
							children: A
						}) : null,
						j.length > 0 ? /* @__PURE__ */ y(l, {
							pills: j,
							testId: `skill-modal-pills-${n.name}`
						}) : null,
						n.content ? /* @__PURE__ */ y(x, {
							testId: `skill-modal-field-content-${n.name}`,
							label: T(t.SETTINGS$SKILLS_CONTENT),
							value: n.content
						}) : null
					]
				}),
				/* @__PURE__ */ b("footer", {
					"data-testid": "skill-detail-modal-actions",
					className: "flex flex-shrink-0 justify-end gap-2 px-6 pb-6 pt-4",
					children: [/* @__PURE__ */ y(c, {
						type: "button",
						variant: "secondary",
						onClick: w,
						testId: "skill-detail-close",
						children: T(t.BUTTON$CLOSE)
					}), /* @__PURE__ */ y(c, {
						type: "button",
						variant: "primary",
						isDisabled: !S,
						onClick: () => E(k, w),
						testId: `skill-detail-use-skill-${n.name}`,
						startContent: /* @__PURE__ */ y(u, {
							className: "size-4",
							"aria-hidden": !0
						}),
						children: T(t.SETTINGS$SKILLS_USE_SKILL_BUTTON)
					})]
				})
			]
		})
	});
}
//#endregion
export { S as SkillDetailModal };

//# sourceMappingURL=skill-detail-modal.js.map