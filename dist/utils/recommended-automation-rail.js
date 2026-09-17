import e from "../node_modules/@openhands/extensions/automations/index.js";
import { SETUP_REGISTRY as t } from "../manifests/manifest-sources.js";
import { getFeaturedAutomationIds as n } from "../manifests/automation-interface.js";
//#region src/utils/recommended-automation-rail.ts
function r(e) {
	return e.map((e, t) => ({
		automation: e,
		index: t
	})).sort((e, t) => (t.automation.popularityRank ?? 0) - (e.automation.popularityRank ?? 0) || e.index - t.index).map(({ automation: e }) => e);
}
function i(e) {
	return e.trim().toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function a(e) {
	return [
		e.id,
		e.name,
		e.name ? `${e.name} Agent` : void 0,
		e.skill
	].filter((e) => !!e).map(i);
}
function o(e, t) {
	let n = new Set(t.map((e) => i(e.name)));
	return a(e).some((e) => n.has(e));
}
function s(e) {
	return n().includes(e.id);
}
function c(e) {
	return t.findById(e.id) == null;
}
function l(t) {
	let n = r(e).filter((e) => !o(e, t));
	return {
		proven: n.filter(s),
		conversation: n.filter((e) => !s(e) && c(e))
	};
}
function u(e) {
	return [...e.proven, ...e.conversation];
}
//#endregion
export { u as flattenRecommendedRailGroups, r as getAutomationsByPopularity, l as getRecommendedRailGroups };

//# sourceMappingURL=recommended-automation-rail.js.map