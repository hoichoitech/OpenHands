import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { useBtwStore as n } from "../../../stores/btw-store.js";
import { GenericEventMessage as r } from "./generic-event-message.js";
import { GotItButton as i } from "./got-it-button.js";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/components/features/chat/btw-messages.tsx
function s({ conversationId: s }) {
	let { t: c } = e("openhands"), l = n((e) => e.entriesByConversation), u = n((e) => e.dismiss), d = s ? l[s] ?? [] : [];
	return !s || d.length === 0 ? null : /* @__PURE__ */ a("div", {
		"data-testid": "btw-messages",
		className: "flex flex-col w-full",
		children: d.map((e) => {
			let n = e.status === "pending";
			return /* @__PURE__ */ a(r, {
				title: /* @__PURE__ */ o("span", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ a("span", {
							className: "opacity-60",
							children: c(t.CHAT_INTERFACE$BTW_PREFIX)
						}),
						/* @__PURE__ */ a("span", { children: e.question }),
						n && /* @__PURE__ */ a("span", {
							"data-testid": "btw-spinner",
							className: "inline-block w-3.5 h-3.5 ml-2 rounded-full border-2 border-transparent border-t-[var(--oh-border-input)] animate-spin"
						})
					]
				}),
				details: n ? c(t.CHAT_INTERFACE$BTW_WAITING_FOR_ANSWER) : e.response ?? "",
				initiallyExpanded: !n,
				chevronPosition: "before",
				titleTrailing: !n && /* @__PURE__ */ a(i, { onClick: () => u(s, e.id) })
			}, e.id);
		})
	});
}
//#endregion
export { s as BtwMessages };

//# sourceMappingURL=btw-messages.js.map