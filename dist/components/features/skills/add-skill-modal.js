import { Trans as e } from "../../../node_modules/react-i18next/dist/es/Trans.js";
import { useTranslation as t } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as n } from "../../../i18n/declaration.js";
import { cn as r } from "../../../utils/utils.js";
import i from "../../../icons/checkmark.js";
import a from "../../../icons/copy.js";
import { ModalBackdrop as o } from "../../shared/modals/modal-backdrop.js";
import { modalTitleLgClassName as s } from "../../../utils/modal-classes.js";
import { ModalCloseButton as c } from "../../shared/modals/modal-close-button.js";
import { BrandButton as l } from "../settings/brand-button.js";
import { ADD_SKILL_DOCS_URL as u, ADD_SKILL_EXAMPLE_COMMAND as d } from "../../../constants/skills-docs.js";
import f from "react";
import { jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/skills/add-skill-modal.tsx
var h = [
	n.SETTINGS$SKILLS_ADD_MODAL_STEP_1,
	n.SETTINGS$SKILLS_ADD_MODAL_STEP_2,
	n.SETTINGS$SKILLS_ADD_MODAL_STEP_3,
	n.SETTINGS$SKILLS_ADD_MODAL_STEP_4,
	n.SETTINGS$SKILLS_ADD_MODAL_STEP_5
], g = {
	cmd: /* @__PURE__ */ p(_, {}),
	path: /* @__PURE__ */ p(_, {}),
	env: /* @__PURE__ */ p(_, {})
};
function _({ children: e }) {
	return /* @__PURE__ */ p("code", {
		className: r("mx-0.5 inline-block rounded-sm border border-[var(--oh-border-subtle)]", "bg-[var(--oh-surface-raised)] px-1.5 py-0.5 align-baseline font-mono text-[11px] text-white"),
		children: e
	});
}
function v() {
	let { t: e } = t("openhands"), [o, s] = f.useState(!1);
	return f.useEffect(() => {
		if (!o) return;
		let e = setTimeout(() => s(!1), 2e3);
		return () => clearTimeout(e);
	}, [o]), /* @__PURE__ */ m("div", {
		className: "relative",
		children: [/* @__PURE__ */ p("pre", {
			"data-testid": "add-skill-modal-example",
			className: r("overflow-x-auto rounded-sm border border-[var(--oh-border-subtle)]", "bg-[var(--oh-surface-raised)] p-2 pr-10 text-xs text-white"),
			children: d
		}), /* @__PURE__ */ p("button", {
			type: "button",
			"data-testid": "add-skill-modal-example-copy",
			"aria-label": e(o ? n.BUTTON$COPIED : n.BUTTON$COPY),
			disabled: o,
			onClick: async () => {
				await navigator.clipboard.writeText(d), s(!0);
			},
			className: r("absolute right-2 top-2 cursor-pointer rounded-sm border border-[var(--oh-border-subtle)]", "bg-base-secondary p-1 text-tertiary-alt transition-colors", "hover:bg-[var(--oh-surface)] hover:text-white disabled:cursor-default [&_path]:fill-current"),
			children: p(o ? i : a, {
				width: 14,
				height: 14
			})
		})]
	});
}
function y({ i18nKey: t }) {
	return /* @__PURE__ */ p("p", {
		className: "text-xs leading-relaxed text-tertiary-light",
		children: /* @__PURE__ */ p(e, {
			ns: "openhands",
			i18nKey: t,
			components: g
		})
	});
}
function b({ onClose: i }) {
	let { t: a } = t("openhands");
	return /* @__PURE__ */ p(o, {
		onClose: i,
		"aria-label": a(n.SETTINGS$SKILLS_ADD_MODAL_TITLE),
		children: /* @__PURE__ */ m("div", {
			"data-testid": "add-skill-modal",
			className: "relative flex w-[520px] max-w-[90vw] max-h-[85vh] flex-col rounded-xl border border-[var(--oh-border)] bg-base-secondary",
			children: [
				/* @__PURE__ */ p(c, {
					onClose: i,
					testId: "add-skill-modal-close"
				}),
				/* @__PURE__ */ m("header", {
					className: "flex-shrink-0 px-6 pb-4 pt-6",
					children: [/* @__PURE__ */ p("h2", {
						className: r("pr-6", s),
						children: a(n.SETTINGS$SKILLS_ADD_MODAL_TITLE)
					}), /* @__PURE__ */ p("p", {
						className: "mt-4 text-sm text-tertiary-light",
						children: a(n.SETTINGS$SKILLS_ADD_MODAL_INTRO)
					})]
				}),
				/* @__PURE__ */ m("div", {
					className: "flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-6 custom-scrollbar",
					children: [
						/* @__PURE__ */ m("section", {
							className: "flex flex-col gap-2",
							children: [
								/* @__PURE__ */ p("h3", {
									className: "text-sm font-semibold text-foreground",
									children: a(n.SETTINGS$SKILLS_ADD_MODAL_CHAT_TITLE)
								}),
								/* @__PURE__ */ p(y, { i18nKey: n.SETTINGS$SKILLS_ADD_MODAL_CHAT_BODY }),
								/* @__PURE__ */ p("p", {
									className: "text-xs text-tertiary-light",
									children: a(n.SETTINGS$SKILLS_ADD_MODAL_EXAMPLE_LABEL)
								}),
								/* @__PURE__ */ p(v, {}),
								/* @__PURE__ */ p("ol", {
									className: "list-decimal space-y-1 pl-4 text-xs leading-relaxed text-tertiary-light",
									children: h.map((t) => /* @__PURE__ */ p("li", { children: t === n.SETTINGS$SKILLS_ADD_MODAL_STEP_3 ? /* @__PURE__ */ p(e, {
										ns: "openhands",
										i18nKey: t,
										components: g
									}) : a(t) }, t))
								})
							]
						}),
						/* @__PURE__ */ m("section", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ p("h3", {
								className: "text-sm font-semibold text-foreground",
								children: a(n.SETTINGS$SKILLS_ADD_MODAL_URL_FORMATS_TITLE)
							}), /* @__PURE__ */ p("p", {
								className: "text-xs leading-relaxed text-tertiary-light",
								children: a(n.SETTINGS$SKILLS_ADD_MODAL_URL_FORMATS)
							})]
						}),
						/* @__PURE__ */ m("section", {
							className: "flex flex-col gap-1",
							children: [/* @__PURE__ */ p("h3", {
								className: "text-sm font-semibold text-foreground",
								children: a(n.SETTINGS$SKILLS_ADD_MODAL_STORAGE_TITLE)
							}), /* @__PURE__ */ p(y, { i18nKey: n.SETTINGS$SKILLS_ADD_MODAL_STORAGE_BODY })]
						}),
						/* @__PURE__ */ p(y, { i18nKey: n.SETTINGS$SKILLS_ADD_MODAL_PRIVATE_REPOS }),
						/* @__PURE__ */ p("a", {
							href: u,
							target: "_blank",
							rel: "noreferrer",
							"data-testid": "add-skill-modal-docs-link",
							className: "self-start text-xs text-[var(--oh-muted)] transition-colors hover:text-white hover:underline",
							children: a(n.SETTINGS$SKILLS_ADD_MODAL_VIEW_DOCS)
						})
					]
				}),
				/* @__PURE__ */ p("footer", {
					className: "flex flex-shrink-0 justify-end gap-2 px-6 pb-6 pt-4",
					children: /* @__PURE__ */ p(l, {
						type: "button",
						variant: "secondary",
						onClick: i,
						testId: "add-skill-modal-dismiss",
						children: a(n.BUTTON$CLOSE)
					})
				})
			]
		})
	});
}
//#endregion
export { b as AddSkillModal };

//# sourceMappingURL=add-skill-modal.js.map