import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useNavigation as n } from "../../../context/navigation-context.js";
import { FaTriangleExclamation as r } from "../../../node_modules/react-icons/fa6/index.js";
import { Typography as i } from "../../../ui/typography.js";
import { BrandButton as a } from "../settings/brand-button.js";
import { useLlmConfigured as o } from "../../../hooks/use-llm-configured.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/home/llm-not-configured-banner.tsx
function l() {
	let { t: l } = e("openhands"), { navigate: u } = n(), { isConfigured: d, isLoading: f } = o();
	return f || d ? null : /* @__PURE__ */ c("div", {
		"data-testid": "home-llm-not-configured-banner",
		role: "alert",
		className: "mt-3 flex w-full flex-col gap-3 rounded-xl border border-[var(--oh-border)] bg-[var(--oh-surface-raised)] px-4 py-3 text-[var(--oh-foreground)] sm:flex-row sm:items-center sm:justify-between sm:py-4",
		children: [/* @__PURE__ */ c("div", {
			className: "flex min-w-0 items-start sm:items-center",
			children: [/* @__PURE__ */ s("div", {
				className: "flex-shrink-0",
				children: /* @__PURE__ */ s(r, { className: "align-middle text-yellow-400" })
			}), /* @__PURE__ */ s(i.Text, {
				className: "ml-3 text-sm font-medium",
				children: l(t.HOME$LLM_NOT_CONFIGURED_MESSAGE)
			})]
		}), /* @__PURE__ */ s(a, {
			testId: "home-llm-not-configured-action",
			type: "button",
			variant: "primary",
			className: "w-fit shrink-0 self-start whitespace-nowrap sm:self-auto",
			onClick: () => u("/settings/llm"),
			children: l(t.HOME$LLM_NOT_CONFIGURED_ACTION)
		})]
	});
}
//#endregion
export { l as LlmNotConfiguredBanner };

//# sourceMappingURL=llm-not-configured-banner.js.map