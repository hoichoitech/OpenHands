import { useTranslation as e } from "../../../../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../../../../i18n/declaration.js";
import { cn as n } from "../../../../../utils/utils.js";
import "react";
import { jsx as r, jsxs as i } from "react/jsx-runtime";
//#region src/components/features/chat/tool-visualizers/primitives/diff-view.tsx
var a = 3, o = 300, s = 25e4, c = (e, t) => {
	if (e.length * t.length > s) return [...e.map((e) => ({
		type: "del",
		text: e
	})), ...t.map((e) => ({
		type: "add",
		text: e
	}))];
	let n = e.length, r = t.length, i = Array.from({ length: n + 1 }, () => Array(r + 1).fill(0));
	for (let a = n - 1; a >= 0; --a) for (let n = r - 1; n >= 0; --n) i[a][n] = e[a] === t[n] ? i[a + 1][n + 1] + 1 : Math.max(i[a + 1][n], i[a][n + 1]);
	let a = [], o = 0, c = 0;
	for (; o < n && c < r;) e[o] === t[c] ? (a.push({
		type: "ctx",
		text: e[o]
	}), o += 1, c += 1) : i[o + 1][c] >= i[o][c + 1] ? (a.push({
		type: "del",
		text: e[o]
	}), o += 1) : (a.push({
		type: "add",
		text: t[c]
	}), c += 1);
	for (; o < n;) a.push({
		type: "del",
		text: e[o]
	}), o += 1;
	for (; c < r;) a.push({
		type: "add",
		text: t[c]
	}), c += 1;
	return a;
}, l = (e, t) => {
	let n = e.split("\n"), r = t.split("\n"), i = 0;
	for (; i < n.length && i < r.length && n[i] === r[i];) i += 1;
	let o = n.length, s = r.length;
	for (; o > i && s > i && n[o - 1] === r[s - 1];) --o, --s;
	let l = n.slice(Math.max(0, i - a), i), u = n.slice(o, Math.min(n.length, o + a));
	return [
		...l.map((e) => ({
			type: "ctx",
			text: e
		})),
		...c(n.slice(i, o), r.slice(i, s)),
		...u.map((e) => ({
			type: "ctx",
			text: e
		}))
	];
}, u = {
	add: "bg-status-success-bg text-status-success-text",
	del: "bg-status-fail-bg text-status-fail-text",
	ctx: "text-muted"
}, d = {
	add: "+ ",
	del: "- ",
	ctx: "  "
};
function f({ oldText: a, newText: s }) {
	let { t: c } = e("openhands"), f = l(a, s), p = f.length > o;
	return /* @__PURE__ */ i("div", {
		className: "flex flex-col gap-1",
		children: [/* @__PURE__ */ r("div", {
			className: "overflow-auto rounded-lg border border-surface-raised font-mono text-xs",
			children: (p ? f.slice(0, o) : f).map((e, t) => /* @__PURE__ */ r("div", {
				className: n("whitespace-pre-wrap px-2", u[e.type]),
				children: `${d[e.type]}${e.text}`
			}, `${t}-${e.type}`))
		}), p && /* @__PURE__ */ r("span", {
			className: "text-xs text-muted",
			children: c(t.COMMON$TRUNCATED)
		})]
	});
}
//#endregion
export { f as DiffView };

//# sourceMappingURL=diff-view.js.map