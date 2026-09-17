import { useTranslation as e } from "../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../i18n/declaration.js";
import { cn as n } from "../../../utils/utils.js";
import { MarkdownRenderer as r } from "../markdown/markdown-renderer.js";
import { ChatAnchor as i, ChatCode as a, ChatStrong as o } from "./chat-markdown-path-code.js";
import s from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/chat/user-message-body.tsx
var d = 5, f = 360, p = {
	p: ({ children: e }) => /* @__PURE__ */ l("p", {
		className: "m-0 leading-6",
		children: e
	}),
	code: a,
	a: i,
	strong: o
};
function m({ message: i, isHovering: a, isExpanded: o, onTruncatableChange: m }) {
	let { t: h } = e("openhands"), g = s.useRef(null), [_, v] = s.useState(!1);
	s.useEffect(() => {
		m(_);
	}, [_, m]), s.useLayoutEffect(() => {
		let e = g.current;
		if (!e || o) {
			v(!1);
			return;
		}
		let t = () => {
			let t = Number.parseFloat(getComputedStyle(e).lineHeight), n = d * (Number.isFinite(t) && t > 0 ? t : 24), r = (i.match(/\n/g) ?? []).length;
			v(e.scrollHeight > n + 1 || r >= d || i.trim().length > f);
		};
		t();
		let n = new ResizeObserver(t);
		return n.observe(e), () => n.disconnect();
	}, [i, o]);
	let y = _ && !o;
	return /* @__PURE__ */ u("div", {
		className: "relative min-w-0",
		children: [/* @__PURE__ */ l("div", {
			ref: g,
			className: n("text-sm leading-6 whitespace-normal [word-break:break-word]", y && "line-clamp-5"),
			children: /* @__PURE__ */ l(r, {
				includeStandard: !0,
				includeHeadings: !0,
				allowHtml: !1,
				components: p,
				children: i
			})
		}), y ? /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ l("div", {
			"aria-hidden": !0,
			"data-testid": "chat-message-truncation-gradient",
			className: "pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-tertiary to-transparent"
		}), /* @__PURE__ */ l("span", {
			"data-testid": "chat-message-view-more",
			className: n("pointer-events-none absolute bottom-1 left-1/2 z-10 inline-flex -translate-x-1/2 items-center rounded-full border border-[var(--oh-border-subtle)] bg-[var(--oh-surface-raised)] px-2.5 py-0.5 text-xs font-normal text-[var(--oh-foreground)] transition-opacity duration-150", a ? "opacity-100" : "opacity-0"),
			children: h(t.COMMON$VIEW_MORE)
		})] }) : null]
	});
}
//#endregion
export { m as UserMessageBody, p as chatBubbleMarkdownComponents };

//# sourceMappingURL=user-message-body.js.map