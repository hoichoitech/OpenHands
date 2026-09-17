import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/features/chat/chat-messages-skeleton.tsx
var i = [
	{
		width: "w-[25%]",
		height: "h-4",
		align: "justify-end"
	},
	{
		width: "w-[60%]",
		height: "h-4",
		align: "justify-start"
	},
	{
		width: "w-[45%]",
		height: "h-4",
		align: "justify-start"
	},
	{
		width: "w-[65%]",
		height: "h-20",
		align: "justify-start"
	},
	{
		width: "w-[35%]",
		height: "h-4",
		align: "justify-end"
	},
	{
		width: "w-[50%]",
		height: "h-4",
		align: "justify-start"
	},
	{
		width: "w-[30%]",
		height: "h-4",
		align: "justify-end"
	},
	{
		width: "w-[75%]",
		height: "h-4",
		align: "justify-start"
	},
	{
		width: "w-[55%]",
		height: "h-4",
		align: "justify-start"
	}
];
function a({ width: e, height: t }) {
	return /* @__PURE__ */ r("div", { className: n("rounded-md bg-foreground/5 animate-pulse", e, t) });
}
function o() {
	let { t: o } = e("openhands");
	return /* @__PURE__ */ r("div", {
		className: "flex flex-col gap-6 p-4 w-full h-full overflow-hidden",
		"data-testid": "chat-messages-skeleton",
		"aria-label": o(t.CHAT_INTERFACE$LOADING_CONVERSATION),
		children: i.map((e, t) => /* @__PURE__ */ r("div", {
			className: n("flex w-full", e.align),
			children: /* @__PURE__ */ r(a, {
				width: e.width,
				height: e.height
			})
		}, t))
	});
}
//#endregion
export { o as ChatMessagesSkeleton };

//# sourceMappingURL=chat-messages-skeleton.js.map