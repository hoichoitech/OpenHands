import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useConversationStore as n } from "../../../stores/conversation-store.js";
import { AnimatePresence as r } from "../../../node_modules/framer-motion/dist/es/components/AnimatePresence/index.js";
import { motion as i } from "../../../node_modules/framer-motion/dist/es/render/components/motion/proxy.js";
import { Suggestions as a } from "../suggestions/suggestions.js";
import { SUGGESTIONS as o } from "../../../utils/suggestions/index.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/components/features/chat/chat-suggestions.tsx
function l({ onSuggestionsClick: l }) {
	let { t: u } = e("openhands"), { shouldHideSuggestions: d } = n();
	return /* @__PURE__ */ s(r, { children: !d && /* @__PURE__ */ c(i.div, {
		"data-testid": "chat-suggestions",
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: .3,
			ease: "easeInOut"
		},
		className: "pointer-events-auto absolute inset-x-4 bottom-[151px] top-0 flex flex-col items-center justify-center md:inset-x-8",
		children: [/* @__PURE__ */ s("div", {
			className: "flex flex-col items-center p-4 rounded-xl w-full",
			children: /* @__PURE__ */ s("span", {
				className: "pb-6 text-[32px] font-medium leading-5 text-white",
				children: u(t.LANDING$TITLE)
			})
		}), /* @__PURE__ */ s(a, {
			suggestions: Object.entries(o.repo).slice(0, 4).map(([e, t]) => ({
				label: e,
				value: t
			})),
			onSuggestionClick: l
		})]
	}) });
}
//#endregion
export { l as ChatSuggestions };

//# sourceMappingURL=chat-suggestions.js.map