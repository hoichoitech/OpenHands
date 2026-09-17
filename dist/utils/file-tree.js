//#region src/utils/file-tree.ts
function e(t) {
	t.children.sort((e, t) => e.isDirectory === t.isDirectory ? e.name.localeCompare(t.name) : e.isDirectory ? -1 : 1);
	for (let n of t.children) n.isDirectory && e(n);
}
function t(e, t, n, r, i) {
	let a = t.get(e);
	a || (a = /* @__PURE__ */ new Map(), t.set(e, a));
	let o = a.get(n);
	if (o) return !i && !o.isDirectory && (o.isDirectory = !0), o;
	let s = {
		name: n,
		path: r,
		isDirectory: !i,
		children: []
	};
	return e.children.push(s), a.set(n, s), s;
}
function n(n) {
	let r = {
		name: "",
		path: "",
		isDirectory: !0,
		children: []
	}, i = /* @__PURE__ */ new Map();
	for (let e of n) {
		let n = e.split("/").filter(Boolean);
		if (n.length > 0) {
			let e = r, a = "";
			for (let r = 0; r < n.length; r += 1) {
				let o = n[r];
				a = a ? `${a}/${o}` : o;
				let s = r === n.length - 1;
				e = t(e, i, o, a, s);
			}
		}
	}
	return e(r), r;
}
//#endregion
export { n as buildFileTree };

//# sourceMappingURL=file-tree.js.map