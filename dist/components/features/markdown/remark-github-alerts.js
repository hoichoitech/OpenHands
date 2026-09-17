import { visit as e } from "../../../node_modules/unist-util-visit/lib/index.js";
//#region src/components/features/markdown/remark-github-alerts.ts
var t = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*\r?\n?/i;
function n(e) {
	return Array.isArray(e) ? e : typeof e == "string" ? e.split(/\s+/).filter(Boolean) : [];
}
var r = () => (r) => {
	e(r, "blockquote", (e) => {
		let r = e, i = r.children[0];
		if (i?.type !== "paragraph") return;
		let a = i, o = a.children[0];
		if (o?.type !== "text") return;
		let s = o.value.match(t);
		if (!s) return;
		let c = s[1].toLowerCase(), l = o;
		l.value = l.value.replace(t, ""), l.value === "" && (a.children.shift(), a.children[0]?.type === "break" && a.children.shift(), a.children.length === 0 && r.children.shift()), r.data = r.data ?? {};
		let u = r.data.hProperties ?? {}, d = n(u.className);
		r.data.hProperties = {
			...u,
			className: [
				...d,
				"markdown-alert",
				`markdown-alert-${c}`
			]
		};
	});
};
//#endregion
export { r as remarkGithubAlerts };

//# sourceMappingURL=remark-github-alerts.js.map