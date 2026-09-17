import e from "../node_modules/@openhands/extensions/skills/index.js";
import t from "../node_modules/@openhands/extensions/automations/index.js";
import { MANIFEST_ICON_BY_SLUG as n } from "../components/features/manifest/manifest-icons.js";
import { interpolateValues as r } from "../manifests/manifest-template.js";
//#region src/utils/automation-catalog.ts
var i = new Map(e.map((e) => [e.name, e]));
function a(e) {
	let t = e.icon;
	return t ? n[t] ?? null : null;
}
function o(e) {
	return Object.keys(e.requires.integrations);
}
function s(e) {
	return Object.entries(e.requires.integrations).filter(([, e]) => e.required !== !1).map(([e]) => e);
}
function c(e) {
	return i.get(e.skill ?? e.id)?.triggers[0] ?? null;
}
function l(e) {
	return c(e) ?? `Set up the ${e.name} automation`;
}
var u = new Map(t.map((e) => [e.id, e])), d = /<[A-Za-z/!]/, f = /\{\{(?!count\}\})/, p = "{{count}}";
function m(e) {
	return typeof e == "string" && e.length > 0 && !d.test(e) && !f.test(e);
}
function h(e) {
	let { impact: t } = e;
	if (typeof t != "object" || !t) return null;
	let { basis: n, one: r, other: i } = t;
	return n !== "completed-runs" || !m(r) || !m(i) || !i.includes(p) ? null : {
		one: r,
		other: i
	};
}
function g(e) {
	let t = e.preset_metadata;
	if (typeof t != "object" || !t) return null;
	let { template: n } = t;
	if (typeof n != "object" || !n) return null;
	let { id: r } = n;
	return typeof r != "string" || r.length === 0 ? null : u.get(r) ?? null;
}
function _(e, t) {
	if (t === null || t < 1) return null;
	let n = g(e);
	if (!n) return null;
	let i = h(n);
	return i ? r(t === 1 ? i.one : i.other, { count: t.toLocaleString() }) : null;
}
//#endregion
export { a as getAutomationIcon, l as getAutomationLaunchPrompt, o as getIntegrationIds, s as getRequiredIntegrationIds, _ as resolveAutomationImpactStatement };

//# sourceMappingURL=automation-catalog.js.map