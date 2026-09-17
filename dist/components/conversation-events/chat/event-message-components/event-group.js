import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { LoaderCircle as n } from "../../../../node_modules/lucide-react/dist/esm/icons/loader-circle.js";
import { isActionEvent as r, isObservationEvent as i } from "../../../../types/agent-server/type-guards.js";
import a from "../../../../icons/angle-down-solid.js";
import o from "../../../../icons/angle-up-solid.js";
import { PathInteractiveContext as s } from "../../../features/chat/path-component.js";
import { getEventContent as c } from "../event-content-helpers/get-event-content.js";
import { IsInEventGroupContext as l } from "../../../features/chat/is-in-event-group-context.js";
import u from "react";
import { Fragment as d, jsx as f, jsxs as p } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/event-group.tsx
function m({ events: m, allEvents: h, isFinalized: g = !1, children: _ }) {
	let { t: v } = e("openhands"), [y, b] = u.useState(!1), x = u.useId(), S = `${x}-toggle`;
	if (m.length === 0) return null;
	let C = m.find((e) => r(e)), w = m.filter(i).length, T = m.length, E = !!C, D = m[m.length - 1], O = null;
	D && (r(D) ? O = c(D).title : i(D) && (O = c(D, (h ?? m).find((e) => r(e) && e.id === D.action_id)).title));
	let k = E ? v(t.EVENT_GROUP$ACTIONS_PROGRESS, {
		completed: w,
		total: T
	}) : v(t.EVENT_GROUP$ACTIONS_COMPLETED, { count: T }), A = y ? o : a;
	return /* @__PURE__ */ p("div", {
		className: "my-1 w-full py-1 text-sm",
		"data-testid": "event-group",
		children: [/* @__PURE__ */ f("button", {
			id: S,
			type: "button",
			onClick: () => b((e) => !e),
			"aria-controls": x,
			"aria-expanded": y,
			"aria-label": v(y ? t.EVENT_GROUP$COLLAPSE : t.EVENT_GROUP$EXPAND),
			"data-testid": "event-group-toggle",
			className: "w-full flex items-center justify-between gap-2 text-left cursor-pointer",
			children: g ? /* @__PURE__ */ p("span", {
				className: "flex items-center gap-2 min-w-0 font-normal text-[var(--oh-muted)]",
				children: [/* @__PURE__ */ f(A, { className: "h-4 w-4 fill-[var(--oh-muted)] flex-shrink-0" }), /* @__PURE__ */ f("span", {
					className: "truncate",
					children: k
				})]
			}) : /* @__PURE__ */ p(d, { children: [/* @__PURE__ */ p("span", {
				className: "flex items-center gap-2 min-w-0 font-normal text-[var(--oh-muted)]",
				children: [/* @__PURE__ */ f(A, { className: "h-4 w-4 fill-[var(--oh-muted)] flex-shrink-0" }), /* @__PURE__ */ f("span", {
					className: "truncate",
					children: /* @__PURE__ */ f(s.Provider, {
						value: !1,
						children: O ?? k
					})
				})]
			}), /* @__PURE__ */ p("span", {
				className: "flex items-center flex-shrink-0 font-normal text-[var(--oh-muted)]",
				children: [/* @__PURE__ */ f("span", {
					className: "truncate",
					children: k
				}), E ? /* @__PURE__ */ f(n, {
					"data-testid": "spinner-icon",
					className: "h-4 w-4 ml-2 inline animate-spin text-[var(--oh-muted)]"
				}) : null]
			})] })
		}), y && /* @__PURE__ */ f("div", {
			id: x,
			role: "region",
			"aria-labelledby": S,
			className: "mt-1.5 flex flex-col",
			"data-testid": "event-group-content",
			children: /* @__PURE__ */ f(l.Provider, {
				value: !0,
				children: _
			})
		})]
	});
}
//#endregion
export { m as EventGroup };

//# sourceMappingURL=event-group.js.map