import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { RefreshCw as n } from "../../../node_modules/lucide-react/dist/esm/icons/refresh-cw.js";
import { cn as r } from "../../../utils/utils.js";
import { StyledTooltip as i } from "../../shared/buttons/styled-tooltip.js";
import { Typography as a } from "../../../ui/typography.js";
import { BaseModalTitle as o } from "../../shared/modals/confirmation-modals/base-modal.js";
import { ModalCloseButton as s } from "../../shared/modals/modal-close-button.js";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/hooks-modal-header.tsx
var d = "rounded-md p-1 text-white hover:bg-tertiary cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed";
function f({ isLoading: f, isRefetching: p, onRefresh: m, onClose: h }) {
	let { t: g } = e("openhands"), _ = g(t.BUTTON$REFRESH);
	return /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l(s, {
		onClose: h,
		testId: "close-hooks-modal"
	}), /* @__PURE__ */ u("div", {
		className: "flex w-full items-start justify-between gap-4 pr-10",
		children: [/* @__PURE__ */ u("div", {
			className: "flex min-w-0 flex-1 flex-col gap-2",
			children: [/* @__PURE__ */ l(o, { title: g(t.HOOKS_MODAL$TITLE) }), /* @__PURE__ */ l(a.Text, {
				className: "text-sm text-[var(--oh-muted)]",
				children: g(t.HOOKS_MODAL$WARNING)
			})]
		}), /* @__PURE__ */ l(i, {
			content: _,
			placement: "bottom",
			children: /* @__PURE__ */ l("button", {
				type: "button",
				"data-testid": "refresh-hooks",
				onClick: m,
				disabled: f || p,
				"aria-label": _,
				className: d,
				children: /* @__PURE__ */ l(n, {
					size: 18,
					className: r(p && "animate-spin"),
					"aria-hidden": !0
				})
			})
		})]
	})] });
}
//#endregion
export { f as HooksModalHeader };

//# sourceMappingURL=hooks-modal-header.js.map