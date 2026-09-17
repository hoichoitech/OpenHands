//#region src/utils/skill-scope.ts
var e = [
	"project",
	"personal",
	"public"
], t = [
	"/.agents/skills/",
	"/.openhands/skills/",
	"/.openhands/microagents/"
];
function n(e) {
	return e.replace(/\\/g, "/");
}
function r(e) {
	let t = n(e).toLowerCase();
	return t === "public" ? !0 : t.includes("public-skills") || t.includes("/.openhands/cache/skills/");
}
function i(e) {
	let r = n(e);
	return /^\/Users\/[^/]+\/\.(agents|openhands)\//.test(r) || /^\/home\/[^/]+\/\.(agents|openhands)\//.test(r) ? !0 : t.some((e) => {
		let t = r.indexOf(e);
		if (t === -1) return !1;
		let n = r.slice(0, t);
		return /^\/Users\/[^/]+$/.test(n) || /^\/home\/[^/]+$/.test(n);
	});
}
function a(e, r) {
	let a = n(e);
	if (!t.some((e) => a.includes(e)) || i(e)) return !1;
	if (r) {
		let e = n(r).replace(/\/$/, "");
		if (a.startsWith(e)) return !0;
	}
	return !0;
}
function o(e, t) {
	let n = e.source?.trim();
	if (!n) return e.type === "repo" ? "project" : "public";
	let o = n.toLowerCase();
	return r(n) ? "public" : o === "user" || o === "global" ? "personal" : o === "project" || o === "repo" || o === "sandbox" ? "project" : i(n) ? "personal" : a(n, t) ? "project" : "public";
}
function s(t, n) {
	let r = {
		project: [],
		personal: [],
		public: []
	};
	for (let e of t) r[o(e, n)].push(e);
	for (let t of e) r[t].sort((e, t) => e.name.localeCompare(t.name));
	return r;
}
//#endregion
export { e as SKILL_SCOPE_ORDER, o as getSkillScope, s as groupSkillsByScope };

//# sourceMappingURL=skill-scope.js.map