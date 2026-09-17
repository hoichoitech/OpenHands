import { Trans as e } from "../../../node_modules/react-i18next/dist/es/Trans.js";
import { useTranslation as t } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as n } from "../../../i18n/declaration.js";
import { cn as r } from "../../../utils/utils.js";
import { useActiveBackend as i } from "../../../contexts/active-backend-context.js";
import { getAutomationsDocsUrl as a } from "../../../manifests/automation-interface.js";
import { useTracking as o } from "../../../hooks/use-tracking.js";
import { BrandButton as s } from "../settings/brand-button.js";
import c from "../../../icons/chevron-down.js";
import l from "../../../icons/message-square-share.js";
import { useLaunchSkillInChat as u } from "../../../hooks/use-launch-skill-in-chat.js";
import { useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
//#region src/components/features/automations/create-instructions.tsx
function h({ children: e }) {
	return /* @__PURE__ */ p("span", {
		className: "whitespace-nowrap",
		children: e
	});
}
function g({ children: e }) {
	return /* @__PURE__ */ p("code", {
		"data-testid": "automations-create-instructions-example",
		className: r("mx-0.5 inline-block rounded-sm border border-[var(--oh-border-subtle)]", "bg-[var(--oh-surface-raised)] px-1.5 py-0.5 align-baseline font-mono text-[11px] text-white"),
		children: e
	});
}
function _({ children: e }) {
	return /* @__PURE__ */ p(f, { children: e });
}
var v = {
	example: /* @__PURE__ */ p(h, {}),
	cmd: /* @__PURE__ */ p(g, {}),
	punct: /* @__PURE__ */ p(_, {})
};
function y({ onLaunch: r } = {}) {
	let { t: c } = t("openhands"), d = u(), f = i(), { trackAutomationCreatedButton: h } = o();
	return /* @__PURE__ */ m("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ m("p", {
			className: "text-sm leading-relaxed text-tertiary-light",
			children: [
				/* @__PURE__ */ p(e, {
					ns: "openhands",
					i18nKey: n.AUTOMATIONS$EMPTY_OPTION_CONVERSATION_DESC,
					components: v
				}),
				" ",
				c(n.AUTOMATIONS$CREATE_INSTRUCTIONS_GUIDANCE),
				" ",
				/* @__PURE__ */ p("a", {
					href: a(),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "text-muted underline transition-colors hover:text-foreground",
					children: c(n.AUTOMATIONS$EMPTY_LEARN_MORE)
				})
			]
		}), /* @__PURE__ */ p("div", {
			className: "flex justify-center",
			children: /* @__PURE__ */ p(s, {
				type: "button",
				variant: "primary",
				testId: "automations-create-automation",
				onClick: () => {
					h({ backendKind: f.backend.kind }), d(c(n.AUTOMATIONS$CREATE_AUTOMATION_PROMPT), r);
				},
				startContent: /* @__PURE__ */ p(l, {
					className: "size-4",
					"aria-hidden": !0
				}),
				children: c(n.AUTOMATIONS$CREATE_AUTOMATION_BUTTON)
			})
		})]
	});
}
function b({ collapsible: e = !1 }) {
	let { t: i } = t("openhands"), [a, o] = d(!e);
	return e ? /* @__PURE__ */ m("div", {
		className: "w-full rounded-lg border border-[var(--oh-border)] bg-[var(--oh-surface)]",
		children: [/* @__PURE__ */ m("button", {
			type: "button",
			onClick: () => o(!a),
			"aria-expanded": a,
			className: "flex w-full items-center justify-between rounded-lg p-4 text-left transition-colors hover:bg-surface-raised",
			children: [/* @__PURE__ */ p("span", {
				className: "text-sm font-normal text-content",
				children: i(n.AUTOMATIONS$EMPTY_HOW_TO_CREATE_TITLE)
			}), /* @__PURE__ */ p(c, { className: r("size-5 text-muted transition-transform", a && "rotate-180") })]
		}), a ? /* @__PURE__ */ p("div", {
			className: "px-4 pb-4",
			children: /* @__PURE__ */ p(y, {})
		}) : null]
	}) : /* @__PURE__ */ p("div", {
		className: "w-full max-w-2xl",
		children: /* @__PURE__ */ p(y, {})
	});
}
//#endregion
export { b as CreateInstructions, y as CreateInstructionsContent };

//# sourceMappingURL=create-instructions.js.map