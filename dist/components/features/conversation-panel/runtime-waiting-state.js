import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { Typography as r } from "../../../ui/typography.js";
import { LoadingSpinner as i } from "../../shared/loading-spinner.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/conversation-panel/runtime-waiting-state.tsx
function s({ testId: s = "runtime-waiting", messageKey: c = t.DIFF_VIEWER$WAITING_FOR_RUNTIME, className: l }) {
	let { t: u } = e("openhands");
	return /* @__PURE__ */ o("div", {
		"data-testid": s,
		className: n("flex h-full w-full flex-col items-center justify-center gap-3 py-8 text-center", l),
		children: [/* @__PURE__ */ a(i, { size: "small" }), /* @__PURE__ */ a(r.Text, {
			className: "text-sm text-[var(--oh-muted)]",
			children: u(c)
		})]
	});
}
//#endregion
export { s as RuntimeWaitingState };

//# sourceMappingURL=runtime-waiting-state.js.map