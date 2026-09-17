import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { ModalBackdrop as r } from "../../shared/modals/modal-backdrop.js";
import { modalTitleLgClassName as i } from "../../../utils/modal-classes.js";
import { ModalCloseButton as a } from "../../shared/modals/modal-close-button.js";
import { BrandButton as o } from "../settings/brand-button.js";
import { VISIBLE_RESPONDER_DEPLOYMENT_TARGETS as s, resolveResponderDeploymentOption as c } from "../../../utils/responder-deployment.js";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/automations/responder-deployment-modal.tsx
function d({ isOpen: d, isPending: f, onClose: p, onContinueLocal: m, onOpenUrl: h }) {
	let { t: g } = e("openhands");
	return d ? /* @__PURE__ */ l(r, {
		onClose: p,
		closeOnEscape: !f,
		closeOnBackdropClick: !f,
		"aria-label": g(t.RESPONDER_DEPLOYMENT$TITLE),
		children: /* @__PURE__ */ u("div", {
			"data-testid": "responder-deployment-modal",
			className: "relative flex w-full max-w-3xl flex-col rounded-xl border border-[var(--oh-border)] bg-base-secondary",
			children: [
				/* @__PURE__ */ l(a, {
					onClose: p,
					testId: "responder-deployment-modal-close",
					disabled: f
				}),
				/* @__PURE__ */ u("header", {
					className: "flex-shrink-0 px-6 pb-4 pt-6",
					children: [/* @__PURE__ */ l("h2", {
						className: n("pr-6", i),
						children: g(t.RESPONDER_DEPLOYMENT$TITLE)
					}), /* @__PURE__ */ l("p", {
						className: "mt-2 text-sm text-muted",
						children: g(t.RESPONDER_DEPLOYMENT$DESCRIPTION)
					})]
				}),
				/* @__PURE__ */ l("div", {
					className: "flex flex-col gap-3 px-6 pb-6 sm:flex-row",
					children: s.map((e) => {
						let t = c(e), { action: n } = t;
						return /* @__PURE__ */ u("div", {
							"data-testid": t.testId,
							className: "flex flex-1 flex-col gap-3 rounded-xl border border-[var(--oh-border)] bg-surface-raised p-4",
							children: [/* @__PURE__ */ u("div", {
								className: "flex flex-col gap-1",
								children: [/* @__PURE__ */ l("h3", {
									className: "text-sm font-semibold text-white",
									children: g(t.titleKey)
								}), /* @__PURE__ */ l("p", {
									className: "text-xs leading-relaxed text-tertiary-light",
									children: g(t.descriptionKey)
								})]
							}), /* @__PURE__ */ l(o, {
								type: "button",
								variant: "primary",
								className: "mt-auto",
								testId: t.primaryActionTestId,
								isDisabled: f,
								"aria-busy": f && n.kind === "launch-local" ? !0 : void 0,
								onClick: () => {
									n.kind === "launch-local" ? m() : h(n.url);
								},
								children: g(t.primaryActionKey)
							})]
						}, t.target);
					})
				})
			]
		})
	}) : null;
}
//#endregion
export { d as ResponderDeploymentModal };

//# sourceMappingURL=responder-deployment-modal.js.map