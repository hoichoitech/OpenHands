import { useTranslation as e } from "../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../i18n/declaration.js";
import { cn as n } from "../../../../utils/utils.js";
import { Text as r } from "../../../../ui/typography.js";
import { dropdownInstantColorClassName as i, dropdownMenuListClassName as a } from "../../../../utils/dropdown-classes.js";
import { useEffect as o, useMemo as s, useRef as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#region src/components/features/chat/components/slash-command-menu.tsx
function d(e) {
	return e.replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*{3}(.+?)\*{3}/g, "$1").replace(/\*{2}(.+?)\*{2}/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/_{3}(.+?)_{3}/g, "$1").replace(/_{2}(.+?)_{2}/g, "$1").replace(/_(.+?)_/g, "$1").replace(/`(.+?)`/g, "$1").replace(/~~(.+?)~~/g, "$1");
}
function f(e) {
	let t = e, n = e.match(/^---\s*\n([\s\S]*?)\n---/);
	if (n) {
		let r = n[1].match(/^description:\s*(.+)$/m);
		if (r) {
			let e = r[1].trim();
			return (e.startsWith("\"") && e.endsWith("\"") || e.startsWith("'") && e.endsWith("'")) && (e = e.slice(1, -1)), d(e);
		}
		t = e.slice(n[0].length);
	}
	let r = t.split("\n").map((e) => e.trim()).find((e) => e.length > 0 && !e.startsWith("#") && e !== "---");
	if (!r) return null;
	let i = d(r);
	return i.match(/^[^.!?\n]*[.!?]/)?.[0] || i;
}
function p({ item: e, isSelected: t, onSelect: a, ref: o }) {
	let c = s(() => "description" in e.skill && e.skill.description ? d(e.skill.description) : "content" in e.skill && e.skill.content ? f(e.skill.content) : null, [e.skill]);
	return /* @__PURE__ */ u("button", {
		role: "option",
		"aria-selected": t,
		ref: o,
		type: "button",
		className: n("w-full px-3 py-2.5 text-left", i, t ? "bg-tertiary" : "hover:bg-[var(--oh-surface-raised)]"),
		onMouseDown: (t) => {
			t.preventDefault(), a(e);
		},
		children: [/* @__PURE__ */ l(r, {
			className: "font-normal",
			children: e.command
		}), c && /* @__PURE__ */ l(r, {
			className: "text-xs text-[var(--oh-muted)] mt-0.5 truncate block",
			children: c
		})]
	});
}
function m({ items: n, selectedIndex: r, onSelect: i }) {
	let { t: s } = e("openhands"), d = c([]);
	return o(() => {
		d.current = d.current.slice(0, n.length);
	}, [n.length]), o(() => {
		let e = d.current[r];
		e && e.scrollIntoView({ block: "nearest" });
	}, [r]), n.length === 0 ? null : /* @__PURE__ */ u("div", {
		role: "listbox",
		"aria-label": s(t.CHAT_INTERFACE$COMMANDS),
		className: "absolute bottom-full left-0 w-full mb-1 bg-[var(--oh-surface)] border border-[var(--oh-border-subtle)] rounded-lg shadow-lg max-h-[300px] overflow-y-auto custom-scrollbar z-50",
		"data-testid": "slash-command-menu",
		children: [/* @__PURE__ */ l("div", {
			className: "px-3 py-2 text-xs text-[var(--oh-muted)] border-b border-[var(--oh-border-subtle)]",
			children: s(t.CHAT_INTERFACE$COMMANDS)
		}), /* @__PURE__ */ l("div", {
			className: a,
			children: n.map((e, t) => /* @__PURE__ */ l(p, {
				item: e,
				isSelected: t === r,
				onSelect: i,
				ref: (e) => {
					d.current[t] = e;
				}
			}, e.command))
		})]
	});
}
//#endregion
export { m as SlashCommandMenu };

//# sourceMappingURL=slash-command-menu.js.map