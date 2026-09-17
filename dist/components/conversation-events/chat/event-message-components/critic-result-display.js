import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { useSettings as n } from "../../../../hooks/query/use-settings.js";
import r from "../../../../icons/angle-down-solid.js";
import i from "../../../../icons/angle-up-solid.js";
import a from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
//#region src/components/conversation-events/chat/event-message-components/critic-result-display.tsx
function c(e) {
	return Number.isFinite(e) ? Math.min(1, Math.max(0, e)) : 0;
}
function l(e) {
	let t = Math.round(e * 5);
	return {
		filled: t,
		empty: 5 - t
	};
}
function u(e) {
	return e >= .6 ? "text-green-400" : e >= .4 ? "text-yellow-400" : "text-red-400";
}
function d(e) {
	return e >= .7 ? "text-red-400 font-semibold" : e >= .5 ? "text-yellow-400" : "text-neutral-400";
}
function f(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function p(e) {
	let t = e?.verification;
	if (!f(t)) return null;
	let n = t.enable_iterative_refinement;
	return typeof n == "boolean" ? n : null;
}
function m({ feature: e }) {
	let t = Math.round(e.probability * 100), n = d(e.probability);
	return /* @__PURE__ */ s("span", {
		className: "inline-flex items-center gap-1",
		children: [/* @__PURE__ */ o("span", {
			className: "text-neutral-200",
			children: e.display_name
		}), /* @__PURE__ */ s("span", {
			className: n,
			children: [
				"(",
				t,
				"%)"
			]
		})]
	});
}
function h({ label: e, features: t }) {
	return !t || t.length === 0 ? null : /* @__PURE__ */ s("div", {
		className: "flex flex-wrap items-center gap-x-1 text-xs",
		children: [/* @__PURE__ */ o("span", {
			className: "font-semibold text-neutral-300",
			children: e
		}), t.map((e, t) => /* @__PURE__ */ s(a.Fragment, { children: [t > 0 && /* @__PURE__ */ o("span", {
			className: "text-neutral-500",
			children: "·"
		}), /* @__PURE__ */ o(m, { feature: e })] }, e.name))]
	});
}
function g({ categorized: n }) {
	let { t: r } = e(), i = n.agent_behavioral_issues && n.agent_behavioral_issues.length > 0, a = n.user_followup_patterns && n.user_followup_patterns.length > 0, c = n.infrastructure_issues && n.infrastructure_issues.length > 0, l = n.other && n.other.length > 0;
	return !i && !a && !c && !l ? null : /* @__PURE__ */ s("div", {
		className: "flex flex-col gap-1 mt-1.5",
		children: [
			i && /* @__PURE__ */ o(h, {
				label: r(t.CRITIC$POTENTIAL_ISSUES),
				features: n.agent_behavioral_issues
			}),
			c && /* @__PURE__ */ o(h, {
				label: r(t.CRITIC$INFRASTRUCTURE),
				features: n.infrastructure_issues
			}),
			a && /* @__PURE__ */ o(h, {
				label: r(t.CRITIC$LIKELY_FOLLOWUP),
				features: n.user_followup_patterns
			}),
			l && /* @__PURE__ */ o(h, {
				label: r(t.CRITIC$OTHER),
				features: n.other
			})
		]
	});
}
function _({ criticResult: d }) {
	let { t: f } = e(), { data: m } = n(), [h, _] = a.useState(!1), v = c(d.score), { filled: y, empty: b } = l(v), x = u(v), S = (v * 100).toFixed(1), C = p(m?.agent_settings) === !1, w = d.metadata?.categorized_features, T = w != null && ((w.agent_behavioral_issues ?? []).length > 0 || (w.user_followup_patterns ?? []).length > 0 || (w.infrastructure_issues ?? []).length > 0 || (w.other ?? []).length > 0);
	return /* @__PURE__ */ s("div", {
		className: "border-l-2 border-neutral-600 pl-2 my-2 py-1.5 text-sm",
		children: [
			/* @__PURE__ */ s("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ o("span", {
						className: "font-semibold text-neutral-300 text-xs",
						children: f(t.CRITIC$SUCCESS_LIKELIHOOD_LABEL)
					}),
					/* @__PURE__ */ s("span", {
						className: `${x} text-xs tracking-wide`,
						"aria-label": `Score: ${S}%`,
						children: ["★".repeat(y), "☆".repeat(b)]
					}),
					/* @__PURE__ */ s("span", {
						className: "text-neutral-500 text-xs",
						children: [
							"(",
							S,
							"%)"
						]
					}),
					T && /* @__PURE__ */ o("button", {
						type: "button",
						onClick: () => _((e) => !e),
						className: "cursor-pointer ml-1",
						"aria-label": f(h ? t.BUTTON$COLLAPSE_DETAILS : t.BUTTON$EXPAND_DETAILS),
						children: o(h ? i : r, { className: "h-3 w-3 inline fill-neutral-400" })
					})
				]
			}),
			h && T && /* @__PURE__ */ o(g, { categorized: w }),
			C && /* @__PURE__ */ o("p", {
				className: "mt-1.5 text-xs leading-5 text-neutral-500",
				"data-testid": "critic-iterative-refinement-hint",
				children: f(t.CRITIC$ITERATIVE_REFINEMENT_HINT)
			})
		]
	});
}
//#endregion
export { _ as CriticResultDisplay };

//# sourceMappingURL=critic-result-display.js.map