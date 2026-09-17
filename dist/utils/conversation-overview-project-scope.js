import { SKILL_SCOPE_ORDER as e, getSkillScope as t } from "./skill-scope.js";
//#region src/utils/conversation-overview-project-scope.ts
var n = {
	project: "project",
	all: "all"
};
function r(e, n) {
	return t(e, n) === "project";
}
function i(e, t, i) {
	return t === n.all ? e : e.filter((e) => r(e, i));
}
function a(n, r) {
	return [...n].sort((n, i) => {
		let a = t(n, r), o = t(i, r), s = e.indexOf(a), c = e.indexOf(o);
		return s === c ? n.name.localeCompare(i.name) : s - c;
	});
}
//#endregion
export { n as CONVERSATION_OVERVIEW_PROJECT_SCOPE, i as filterSkillsByProjectScope, a as sortSkillsByProjectRelevance };

//# sourceMappingURL=conversation-overview-project-scope.js.map