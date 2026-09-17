import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { ContextMenu as r } from "../../../ui/context-menu.js";
import { ContextMenuListItem as i } from "../context-menu/context-menu-list-item.js";
import a from "../../../icons/kebab-vertical.js";
import { automationIconActionButtonClassName as o } from "./automation-action-button-classes.js";
import { KebabMenuItemContent as s } from "./kebab-menu-item-content.js";
import { useEffect as c, useLayoutEffect as l, useRef as u, useState as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import h from "react-dom";
//#region src/components/features/automations/kebab-menu.tsx
function g({ items: g, triggerClassName: _ }) {
	let { t: v } = e("openhands"), [y, b] = d(!1), [x, S] = d(), C = u(null), w = u(null);
	l(() => {
		if (!y || !C.current) return;
		let e = () => {
			let e = C.current?.getBoundingClientRect();
			if (!e) return;
			let t = (w.current?.getBoundingClientRect().height ?? 0) || g.length * 36;
			S({
				position: "fixed",
				zIndex: 9999,
				...e.bottom + 4 + t > window.innerHeight ? { bottom: window.innerHeight - e.top + 4 } : { top: e.bottom + 4 },
				right: window.innerWidth - e.right
			});
		};
		e();
		let t = window.requestAnimationFrame(e);
		return window.addEventListener("resize", e), window.addEventListener("scroll", e, !0), () => {
			window.cancelAnimationFrame(t), window.removeEventListener("resize", e), window.removeEventListener("scroll", e, !0);
		};
	}, [y, g.length]), c(() => {
		if (!y) return;
		let e = (e) => {
			let t = e.target;
			C.current?.contains(t) || w.current?.contains(t) || b(!1);
		}, t = (e) => {
			e.key === "Escape" && b(!1);
		};
		return document.addEventListener("mousedown", e), document.addEventListener("keydown", t), () => {
			document.removeEventListener("mousedown", e), document.removeEventListener("keydown", t);
		};
	}, [y]);
	let T = y && x ? /* @__PURE__ */ p(r, {
		ref: w,
		theme: "popover",
		className: "min-w-[10rem]",
		children: g.map((e) => /* @__PURE__ */ p("li", { children: /* @__PURE__ */ p(i, {
			onClick: (t) => {
				t.stopPropagation(), e.onClick(), b(!1);
			},
			isDisabled: e.disabled,
			className: "group",
			children: /* @__PURE__ */ p(s, {
				icon: e.icon,
				label: e.label
			})
		}) }, e.label))
	}) : null;
	return /* @__PURE__ */ m(f, { children: [/* @__PURE__ */ p("button", {
		ref: C,
		type: "button",
		onClick: (e) => {
			e.stopPropagation(), b((e) => !e);
		},
		className: n(o, _),
		"aria-label": v(t.AUTOMATIONS$ACTIONS_MENU),
		"aria-expanded": y,
		"aria-haspopup": "menu",
		children: /* @__PURE__ */ p(a, { className: "size-4" })
	}), y && x && typeof document < "u" ? h.createPortal(/* @__PURE__ */ p("div", {
		style: x,
		children: T
	}), document.body) : null] });
}
//#endregion
export { g as KebabMenu };

//# sourceMappingURL=kebab-menu.js.map