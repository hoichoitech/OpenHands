import { Trans as e } from "../../../node_modules/react-i18next/dist/es/Trans.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { ChevronDown as n } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-down.js";
import { ChevronRight as r } from "../../../node_modules/lucide-react/dist/esm/icons/chevron-right.js";
import { useModelStore as i } from "../../../stores/model-store.js";
import { GenericEventMessage as a } from "./generic-event-message.js";
import o from "../../../icons/info-circle.js";
import { useFreeModels as s } from "../../../hooks/query/use-free-models.js";
import { formatModelNameForDisplay as c } from "../../../utils/format-model-name.js";
import l from "react";
import { Fragment as u, jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/components/features/chat/model-messages.tsx
function p({ profile: e }) {
	let [t, i] = l.useState(!1), a = s(), o = c(e.model, a);
	return /* @__PURE__ */ f("div", {
		className: "border border-neutral-700 rounded-md overflow-hidden",
		children: [/* @__PURE__ */ f("button", {
			type: "button",
			onClick: () => i((e) => !e),
			"aria-expanded": t,
			"aria-label": `Toggle details for ${e.name}`,
			className: "w-full py-1.5 px-2 text-left flex items-center gap-2 hover:bg-neutral-700 transition-colors cursor-pointer",
			children: [/* @__PURE__ */ d("span", {
				className: "text-neutral-300",
				children: d(t ? n : r, { size: 14 })
			}), /* @__PURE__ */ d("span", {
				className: "font-normal text-neutral-200 text-sm",
				children: e.name
			})]
		}), t && /* @__PURE__ */ f(u, { children: [/* @__PURE__ */ d("hr", { className: "border-neutral-700" }), /* @__PURE__ */ d("div", {
			className: "px-3 py-2 text-xs text-neutral-300 font-mono whitespace-pre-wrap",
			children: `model:    ${o ?? "—"}\nbase_url: ${e.base_url ?? "—"}\napi_key:  ${e.api_key_set ? "set" : "not set"}`
		})] })]
	});
}
function m({ conversationId: n, anchorEventId: r }) {
	let s = i((e) => e.entriesByConversation), c = (n ? s[n] ?? [] : []).filter((e) => e.anchorEventId === r);
	return !n || c.length === 0 ? null : /* @__PURE__ */ d("div", {
		"data-testid": "model-messages",
		className: "flex flex-col w-full",
		children: c.map((n) => {
			if (n.switchedTo) return /* @__PURE__ */ d(a, {
				title: /* @__PURE__ */ f("span", {
					className: "inline-flex items-center gap-1.5",
					children: [/* @__PURE__ */ d(o, {
						width: 14,
						height: 14,
						className: "shrink-0 text-neutral-400",
						"aria-hidden": !0
					}), /* @__PURE__ */ d(e, {
						i18nKey: t.MODEL$SWITCHED_TO_PROFILE,
						values: { name: n.switchedTo },
						components: { cmd: /* @__PURE__ */ d("span", { className: "font-mono text-neutral-200 bg-neutral-800 px-1 rounded" }) }
					})]
				}),
				details: ""
			}, n.id);
			let r = n.profiles.length === 0;
			return /* @__PURE__ */ d(a, {
				title: /* @__PURE__ */ d("span", { children: r ? /* @__PURE__ */ d(e, { i18nKey: t.MODEL$NO_SAVED_PROFILES }) : /* @__PURE__ */ d(e, {
					i18nKey: t.MODEL$AVAILABLE_PROFILES,
					values: { count: n.profiles.length }
				}) }),
				details: r ? /* @__PURE__ */ d("span", {
					className: "text-neutral-300 text-sm px-2 py-1 block",
					children: /* @__PURE__ */ d(e, { i18nKey: t.MODEL$NO_PROFILES_HINT })
				}) : /* @__PURE__ */ d("div", {
					className: "flex flex-col gap-1 mt-1",
					children: n.profiles.map((e) => /* @__PURE__ */ d(p, { profile: e }, e.name))
				}),
				initiallyExpanded: r
			}, n.id);
		})
	});
}
//#endregion
export { m as ModelMessages };

//# sourceMappingURL=model-messages.js.map