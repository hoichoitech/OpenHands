import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { extensionModuleCardPillClassName as r } from "../../../utils/extension-module-card-classes.js";
import i from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { createPortal as s } from "react-dom";
//#region src/components/features/skills/skill-card-pill-row.tsx
var c = r, l = 6, u = 8, d = 4;
function f(e, t) {
	let n = window.innerWidth - u - t, r = e.left;
	return r > n && (r = e.right - t), r = Math.min(Math.max(u, r), Math.max(u, n)), {
		top: e.bottom + d,
		left: r
	};
}
function p(e, t) {
	if (e.length === 0 || t <= 0) return 0;
	let n = 0;
	for (let r = 0; r < e.length; r += 1) {
		let i = e[r], a = r > 0 ? l : 0, o = e.length - r - 1 > 0 ? 46 : 0;
		if (n + a + i + o > t) return Math.max(1, r);
		n += a + i;
	}
	return e.length;
}
function m({ pills: c, testId: l }) {
	let { t: u } = e("openhands"), d = i.useRef(null), m = i.useRef(null), h = i.useRef(null), g = i.useRef(null), [_, v] = i.useState(c.length), [y, b] = i.useState(!1), [x, S] = i.useState(null), C = i.useCallback(() => {
		let e = d.current, t = m.current;
		!e || !t || v(p(Array.from(t.children).map((e) => e.offsetWidth), e.clientWidth));
	}, []), w = c.map((e) => e.id).join(""), T = i.useRef(null);
	i.useLayoutEffect(() => {
		T.current !== w && (T.current = w, b(!1), C());
	}, [w, C]), i.useEffect(() => {
		let e = d.current;
		if (!e || typeof ResizeObserver > "u") return;
		let t = new ResizeObserver(() => C());
		return t.observe(e), () => t.disconnect();
	}, [C]);
	let E = i.useCallback(() => {
		let e = h.current;
		if (!e) return;
		let t = f(e.getBoundingClientRect(), g.current?.offsetWidth ?? e.offsetWidth);
		S((e) => e?.top === t.top && e?.left === t.left ? e : t);
	}, []);
	if (i.useLayoutEffect(() => {
		if (!y) {
			S(null);
			return;
		}
		return E(), window.addEventListener("resize", E), window.addEventListener("scroll", E, !0), () => {
			window.removeEventListener("resize", E), window.removeEventListener("scroll", E, !0);
		};
	}, [y, E]), i.useLayoutEffect(() => {
		y && x && g.current && E();
	}, [
		y,
		E,
		x
	]), i.useEffect(() => {
		if (!y) return;
		let e = (e) => {
			let t = e.target;
			h.current?.contains(t) || g.current?.contains(t) || b(!1);
		}, t = (e) => {
			e.key === "Escape" && b(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [y]), c.length === 0) return null;
	let D = Math.max(0, c.length - _), O = c.slice(_), k = (e) => {
		e.stopPropagation();
	};
	return /* @__PURE__ */ o("div", {
		"data-testid": `${l}-wrap`,
		className: "min-w-0 overflow-hidden",
		children: [
			/* @__PURE__ */ a("div", {
				ref: m,
				"aria-hidden": !0,
				className: "pointer-events-none fixed top-0 -left-[10000px] z-[-1] flex flex-nowrap items-center gap-1.5 opacity-0",
				children: c.map((e) => /* @__PURE__ */ a("span", {
					className: "inline-flex shrink-0",
					children: e.node
				}, e.id))
			}),
			/* @__PURE__ */ o("div", {
				ref: d,
				"data-testid": l,
				className: "flex w-full min-w-0 max-w-full flex-nowrap items-center gap-1.5 overflow-hidden",
				children: [c.slice(0, _).map((e) => /* @__PURE__ */ a("span", {
					className: "inline-flex shrink-0",
					children: e.node
				}, e.id)), D > 0 ? /* @__PURE__ */ a("button", {
					ref: h,
					type: "button",
					"data-testid": `${l}-overflow`,
					"aria-expanded": y,
					"aria-haspopup": "dialog",
					"aria-label": u(t.SETTINGS$SKILLS_PILLS_OVERFLOW_ARIA, { count: D }),
					onMouseDown: k,
					onClick: (e) => {
						e.preventDefault(), e.stopPropagation(), b((e) => !e);
					},
					onKeyDown: k,
					className: n(r, "cursor-pointer font-medium text-tertiary-alt hover:text-white"),
					children: u(t.SETTINGS$SKILLS_PILLS_MORE, { count: D })
				}) : null]
			}),
			y && x && typeof document < "u" && s(/* @__PURE__ */ a("div", {
				ref: g,
				role: "dialog",
				"data-testid": `${l}-overflow-popover`,
				className: n("z-[9999] flex w-max max-w-[20rem] flex-col gap-1.5", "rounded-md border border-[var(--oh-border-subtle)]", "bg-[var(--oh-surface)] p-2 shadow-lg"),
				style: {
					position: "fixed",
					top: x.top,
					left: x.left
				},
				onMouseDown: k,
				onClick: (e) => {
					e.preventDefault(), e.stopPropagation();
				},
				children: O.map((e) => /* @__PURE__ */ a("div", {
					"data-testid": `${l}-overflow-item`,
					className: "min-w-0",
					children: e.node
				}, e.id))
			}), document.body)
		]
	});
}
//#endregion
export { c as SKILL_CARD_PILL_CLASS, m as SkillCardPillRow };

//# sourceMappingURL=skill-card-pill-row.js.map