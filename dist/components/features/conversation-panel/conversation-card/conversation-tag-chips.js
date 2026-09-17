import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { CONVERSATION_CARD_META_CHIP_CLASSNAME as r, CONVERSATION_CARD_META_CHIP_ICON_CLASSNAME as i, CONVERSATION_CARD_META_CHIP_ICON_SLOT_CLASSNAME as a } from "./conversation-card-meta-chip.js";
import { computeVisibleTagChipCount as o, formatConversationTagTooltip as s, getConversationTagLabel as c, truncateTagChipValue as l } from "./conversation-tag-display.js";
import { getConversationTagIcon as u } from "./conversation-tag-icons.js";
import d from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { createPortal as h } from "react-dom";
//#region src/components/features/conversation-panel/conversation-card/conversation-tag-chips.tsx
function g({ icon: e, keyName: t, testId: n }) {
	return /* @__PURE__ */ p("span", {
		className: a,
		"aria-hidden": !0,
		children: /* @__PURE__ */ p(e, {
			"data-testid": n,
			"data-tag-key": t,
			"aria-hidden": !0,
			className: i
		})
	});
}
function _({ icon: e, keyName: t, value: n, iconTestId: r }) {
	return /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p(g, {
		icon: e,
		keyName: t,
		testId: r
	}), /* @__PURE__ */ p("span", {
		className: "truncate leading-4",
		children: l(n || t)
	})] });
}
function v({ tags: i }) {
	let { t: a } = e("openhands"), l = d.useRef(null), f = d.useRef(null), v = d.useRef(null), y = d.useRef(null), [b, x] = d.useState(i.length), [S, C] = d.useState(!1), [w, T] = d.useState(null), E = d.useCallback(() => {
		let e = l.current, t = f.current;
		!e || !t || x(o(Array.from(t.children).map((e) => e.offsetWidth), e.clientWidth));
	}, []), D = d.useCallback(() => {
		let e = v.current;
		if (!e) return;
		let t = e.getBoundingClientRect(), n = t.left;
		n + 256 > window.innerWidth - 8 && (n = Math.max(8, window.innerWidth - 8 - 256)), T({
			top: t.bottom + 4,
			left: n
		});
	}, []), O = i.map(([e, t]) => `${e}=${t}`).join(""), k = d.useRef(null);
	if (d.useLayoutEffect(() => {
		k.current !== O && (k.current = O, C(!1), E());
	}, [O, E]), d.useEffect(() => {
		let e = l.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(() => E());
		return t.observe(e), () => t.disconnect();
	}, [E]), d.useLayoutEffect(() => {
		if (!S) {
			T(null);
			return;
		}
		return D(), window.addEventListener("resize", D), window.addEventListener("scroll", D, !0), () => {
			window.removeEventListener("resize", D), window.removeEventListener("scroll", D, !0);
		};
	}, [S, D]), d.useEffect(() => {
		if (!S) return;
		let e = (e) => {
			let t = e.target;
			v.current?.contains(t) || y.current?.contains(t) || C(!1);
		}, t = (e) => {
			e.key === "Escape" && C(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [S]), i.length === 0) return null;
	let A = Math.max(0, i.length - b), j = i.slice(0, b), M = i.slice(b), N = (e) => {
		e.stopPropagation();
	};
	return /* @__PURE__ */ m("div", {
		"data-testid": "conversation-card-tag-chips",
		className: "relative min-w-0 w-full",
		children: [
			/* @__PURE__ */ p("div", {
				ref: f,
				"aria-hidden": !0,
				className: "pointer-events-none fixed top-0 -left-[10000px] z-[-1] flex flex-nowrap items-center gap-1 opacity-0",
				children: i.map(([e, t]) => /* @__PURE__ */ p("span", {
					className: r,
					children: /* @__PURE__ */ p(_, {
						icon: u(e, t),
						keyName: e,
						value: t
					})
				}, e))
			}),
			/* @__PURE__ */ m("div", {
				ref: l,
				"data-testid": "conversation-card-tag-row",
				className: "flex w-full min-w-0 max-w-full flex-nowrap items-center gap-1 overflow-hidden",
				children: [j.map(([e, t]) => /* @__PURE__ */ p("span", {
					"data-testid": "conversation-card-tag-chip",
					title: s(e, t, a),
					className: r,
					children: /* @__PURE__ */ p(_, {
						icon: u(e, t),
						keyName: e,
						value: t,
						iconTestId: "conversation-card-tag-chip-icon"
					})
				}, e)), A > 0 ? /* @__PURE__ */ m("button", {
					ref: v,
					type: "button",
					"data-testid": "conversation-card-tag-overflow",
					"aria-expanded": S,
					"aria-haspopup": "dialog",
					"aria-label": a(t.CONVERSATION$TAGS_OVERFLOW_ARIA, { count: A }),
					onMouseDown: N,
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), C((e) => !e);
					},
					className: n(r, "shrink-0 self-center hover:bg-[var(--oh-interactive-hover)] hover:text-[var(--foreground)]"),
					children: [/* @__PURE__ */ p("span", {
						className: "inline-flex h-4 w-0 shrink-0",
						"aria-hidden": !0
					}), /* @__PURE__ */ p("span", {
						className: "leading-4",
						children: `+${A}`
					})]
				}) : null]
			}),
			S && w && typeof document < "u" && h(/* @__PURE__ */ p("div", {
				ref: y,
				role: "dialog",
				"data-testid": "conversation-card-tag-overflow-popover",
				className: n("z-[9999] min-w-[10rem] max-w-[16rem]", "rounded-md border border-[var(--oh-border-subtle)]", "bg-[var(--oh-surface)] p-2 shadow-lg"),
				style: {
					position: "fixed",
					top: w.top,
					left: w.left
				},
				onMouseDown: N,
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation();
				},
				children: /* @__PURE__ */ p("dl", {
					className: "m-0 flex flex-col gap-1",
					children: M.map(([e, t]) => /* @__PURE__ */ m("div", {
						"data-testid": "conversation-card-tag-overflow-row",
						className: "grid grid-cols-[minmax(0,auto)_minmax(0,1fr)] gap-x-2 text-[10px] leading-4",
						children: [/* @__PURE__ */ m("dt", {
							className: "m-0 inline-flex min-w-0 items-center gap-1 whitespace-normal break-words text-[var(--oh-muted)]",
							children: [/* @__PURE__ */ p(g, { icon: u(e, t) }), /* @__PURE__ */ p("span", {
								className: "min-w-0 whitespace-normal break-words leading-4",
								children: c(e, a)
							})]
						}), /* @__PURE__ */ p("dd", {
							className: "m-0 whitespace-normal break-words text-left leading-4 text-[var(--foreground)]",
							title: t,
							children: t
						})]
					}, e))
				})
			}), document.body)
		]
	});
}
//#endregion
export { v as ConversationTagChips };

//# sourceMappingURL=conversation-tag-chips.js.map