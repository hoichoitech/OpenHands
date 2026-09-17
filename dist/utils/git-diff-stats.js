//#region src/utils/git-diff-stats.ts
function e(e) {
	let t = 0, n = 0, r = !1;
	for (let i of e.split("\n")) {
		if (i.startsWith("diff --git") || i.startsWith("index ")) {
			r = !1;
			continue;
		}
		if (i.startsWith("@@")) {
			r = !0;
			continue;
		}
		!r && (i.startsWith("---") || i.startsWith("+++")) || r && (i.startsWith("+") ? t += 1 : i.startsWith("-") && (n += 1));
	}
	return {
		additions: t,
		deletions: n
	};
}
function t(e, t) {
	let n = e.length === 0 ? [] : e.split("\n"), r = t.length === 0 ? [] : t.split("\n");
	if (n.length === 0) return {
		additions: r.length,
		deletions: 0
	};
	if (r.length === 0) return {
		additions: 0,
		deletions: n.length
	};
	let i = 0, a = 0, o = 0, s = 0;
	for (; o < n.length || s < r.length;) {
		let e = n[o], t = r[s];
		if (o < n.length && s < r.length && e === t) {
			o += 1, s += 1;
			continue;
		}
		if (s < r.length && (o >= n.length || !n.slice(o).includes(t))) {
			i += 1, s += 1;
			continue;
		}
		o < n.length && (a += 1, o += 1);
	}
	return {
		additions: i,
		deletions: a
	};
}
function n(n) {
	return typeof n.diff == "string" && n.diff.length > 0 ? e(n.diff) : t(n.original ?? "", n.modified ?? "");
}
function r(e) {
	return e.reduce((e, t) => ({
		additions: e.additions + t.additions,
		deletions: e.deletions + t.deletions
	}), {
		additions: 0,
		deletions: 0
	});
}
//#endregion
export { n as countGitChangeDiffStats, r as sumGitDiffLineStats };

//# sourceMappingURL=git-diff-stats.js.map