import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { ListTodo as n } from "../node_modules/lucide-react/dist/esm/icons/list-todo.js";
import { ConversationTabEmptyState as r } from "../components/features/conversation/conversation-tab-empty-state.js";
import { useConversationStore as i } from "../stores/conversation-store.js";
import { useReadConversationFile as a } from "../hooks/mutation/use-read-conversation-file.js";
import { useActiveConversation as o } from "../hooks/query/use-active-conversation.js";
import { MarkdownRenderer as s } from "../components/features/markdown/markdown-renderer.js";
import { useHandlePlanClick as c } from "../hooks/use-handle-plan-click.js";
import { BrandButton as l } from "../components/features/settings/brand-button.js";
import { useScrollToBottom as u } from "../hooks/use-scroll-to-bottom.js";
import { planComponents as d } from "../components/features/markdown/plan-components.js";
import f from "react";
import { jsx as p } from "react/jsx-runtime";
//#region src/routes/planner-tab.tsx
function m() {
	let { t: m } = e("openhands"), { scrollRef: h, onChatBodyScroll: g, autoScroll: _, scrollDomToBottom: v } = u(f.useRef(null)), { planContent: y, conversationMode: b, localPlanningConversationId: x, setPlanContent: S } = i(), { data: C } = o(), { mutate: w } = a();
	f.useEffect(() => {
		let e = x ?? C?.id;
		!e || y !== null || w({ conversationId: e }, {
			onSuccess: (e) => {
				S(e);
			},
			onError: () => {}
		});
	}, [
		C?.id,
		x,
		y,
		w,
		S
	]), f.useEffect(() => {
		_ && v();
	}, [
		y,
		_,
		v
	]);
	let T = b === "plan", { handlePlanClick: E, hasPlanner: D, isCreatingConversation: O } = c();
	return y == null ? /* @__PURE__ */ p(r, {
		icon: /* @__PURE__ */ p(n, {
			"aria-hidden": !0,
			strokeWidth: 2,
			className: "size-full"
		}),
		action: /* @__PURE__ */ p(l, {
			type: "button",
			variant: "secondary",
			onClick: E,
			isDisabled: T || O || D,
			className: "min-w-40 justify-center px-6",
			children: m(t.COMMON$CREATE_A_PLAN)
		}),
		children: m(t.PLANNER$EMPTY_MESSAGE)
	}) : /* @__PURE__ */ p("div", {
		ref: h,
		onScroll: (e) => g(e.currentTarget),
		className: "flex flex-col w-full h-full p-4 overflow-auto",
		children: /* @__PURE__ */ p(s, {
			includeStandard: !0,
			components: d,
			children: y
		})
	});
}
//#endregion
export { m as default };

//# sourceMappingURL=planner-tab.js.map