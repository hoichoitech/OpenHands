import e, { DEFAULT_ENABLED_SKILL_NAMES as t } from "../node_modules/@openhands/extensions/skills/index.js";
//#region src/utils/skill-enablement.ts
var n = e.map((e) => e.name), r = new Set(n), i = new Set(t);
function a(e) {
	return r.has(e);
}
function o(e) {
	return i.has(e);
}
function s(e) {
	return e.enabledSkills ?? [...t];
}
function c(e) {
	let t = new Set(s(e)), n = new Set(e.disabledSkills ?? []);
	return (e) => n.has(e) ? !1 : !a(e) || t.has(e);
}
function l(e) {
	return {
		enabledSkills: e.enabled_skills,
		disabledSkills: e.disabled_skills
	};
}
var u = new Map(e.flatMap((e) => [`/${e.name}`, ...(e.triggers ?? []).filter((e) => e.startsWith("/"))].map((t) => [t.toLowerCase(), e.name])));
function d(e) {
	let t = e?.trim().split(/\s+/, 1)[0];
	if (t?.startsWith("/")) return u.get(t.toLowerCase());
}
//#endregion
export { n as CATALOG_SKILL_NAMES, c as buildSkillEnablementFilter, d as findInvokedCatalogSkill, a as isCatalogSkill, o as isRecommendedSkill, s as resolveEnabledCatalogSkills, l as toSkillEnablement };

//# sourceMappingURL=skill-enablement.js.map