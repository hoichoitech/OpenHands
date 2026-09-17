import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { LoaderCircle as n } from "../../../node_modules/lucide-react/dist/esm/icons/loader-circle.js";
import { cn as r } from "../../../utils/utils.js";
import { TextShimmer as i } from "../../shared/text-shimmer.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/conversation/conversation-loading.tsx
function s({ className: s }) {
	let { t: c } = e("openhands");
	return /* @__PURE__ */ o("div", {
		className: r("bg-[var(--oh-surface)] flex h-full w-full flex-col items-center justify-center gap-3", s),
		children: [/* @__PURE__ */ a(n, {
			className: "h-8 w-8 shrink-0 animate-spin text-tertiary-light",
			"aria-hidden": !0
		}), /* @__PURE__ */ a(i, {
			as: "p",
			role: "status",
			"aria-live": "polite",
			className: "block w-full text-center text-base font-normal leading-5",
			duration: 1,
			spread: 2,
			children: c(t.HOME$LOADING)
		})]
	});
}
//#endregion
export { s as ConversationLoading };

//# sourceMappingURL=conversation-loading.js.map