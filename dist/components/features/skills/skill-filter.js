import { I18nKey as e } from "../../../i18n/declaration.js";
import { isRecommendedSkill as t } from "../../../utils/skill-enablement.js";
import { SKILL_SCOPE_ORDER as n, getSkillScope as r } from "../../../utils/skill-scope.js";
import { getSkillCardDescription as i } from "./get-skill-card-description.js";
import { SKILL_CATEGORY_LABEL_KEYS as a, SKILL_CATEGORY_ORDER as o, getSkillCategory as s } from "../../../utils/skill-category.js";
//#region src/components/features/skills/skill-filter.ts
var c = "source", l = "category", u = "type", d = "state", f = "recommendation", p = ["enabled", "disabled"], m = ["recommended", "other"], h = [
	"agentskills",
	"knowledge",
	"repo"
], g = {
	query: "",
	sources: /* @__PURE__ */ new Set(),
	categories: /* @__PURE__ */ new Set(),
	types: /* @__PURE__ */ new Set(),
	states: /* @__PURE__ */ new Set(),
	recommendations: /* @__PURE__ */ new Set()
};
function _(e, t) {
	return e.map((e) => ({
		value: e,
		labelKey: t[e]
	}));
}
function v(e, t) {
	return new Set(e.filter((e) => t.has(e)));
}
var y = {
	project: e.SETTINGS$SKILLS_SOURCE_PROJECT,
	personal: e.SETTINGS$SKILLS_SOURCE_PERSONAL,
	public: e.SETTINGS$SKILLS_SOURCE_PUBLIC
}, b = {
	agentskills: e.SETTINGS$SKILLS_TYPE_AGENTSKILLS,
	knowledge: e.SETTINGS$SKILLS_TYPE_KNOWLEDGE,
	repo: e.SETTINGS$SKILLS_TYPE_REPO
}, x = {
	enabled: e.SETTINGS$SKILLS_ENABLED,
	disabled: e.SETTINGS$SKILLS_DISABLED
}, S = {
	recommended: e.SETTINGS$SKILLS_RECOMMENDED,
	other: e.SETTINGS$SKILLS_RECOMMENDATION_OTHER
}, C = [
	{
		id: "state",
		labelKey: e.SETTINGS$SKILLS_FACET_STATE,
		param: d,
		values: _(p, x),
		valueOf: (e, t) => t(e) ? "enabled" : "disabled",
		selected: (e) => e.states,
		withSelected: (e, t) => ({
			...e,
			states: v(p, t)
		})
	},
	{
		id: "recommendation",
		labelKey: e.SETTINGS$SKILLS_FACET_RECOMMENDATION,
		param: f,
		values: _(m, S),
		valueOf: (e) => t(e.name) ? "recommended" : "other",
		selected: (e) => e.recommendations,
		withSelected: (e, t) => ({
			...e,
			recommendations: v(m, t)
		})
	},
	{
		id: "source",
		labelKey: e.SETTINGS$SKILLS_FACET_SOURCE,
		param: c,
		values: _(n, y),
		valueOf: (e) => r(e),
		selected: (e) => e.sources,
		withSelected: (e, t) => ({
			...e,
			sources: v(n, t)
		})
	},
	{
		id: "category",
		labelKey: e.SETTINGS$SKILLS_FACET_CATEGORY,
		param: l,
		values: _(o, a),
		valueOf: (e) => s(e),
		selected: (e) => e.categories,
		withSelected: (e, t) => ({
			...e,
			categories: v(o, t)
		})
	},
	{
		id: "type",
		labelKey: e.SETTINGS$SKILLS_FACET_TYPE,
		param: u,
		values: _(h, b),
		valueOf: (e) => e.type,
		selected: (e) => e.types,
		withSelected: (e, t) => ({
			...e,
			types: v(h, t)
		})
	}
];
function w(e) {
	let t = C.find((t) => t.id === e);
	if (!t) throw Error(`Unknown skill facet group: ${e}`);
	return t;
}
function T(e, t) {
	let n = t.trim();
	if (!n) return !0;
	let r = [
		e.name,
		i(e),
		e.description ?? "",
		e.content ?? "",
		e.license ?? "",
		e.compatibility ?? "",
		...e.triggers ?? [],
		...e.allowed_tools ?? []
	], a = n.toLowerCase();
	return r.some((e) => e.toLowerCase().includes(a));
}
function E(e, t, n, r) {
	return C.every((i) => {
		if (i.id === r) return !0;
		let a = i.selected(n);
		return a.size === 0 ? !0 : a.has(i.valueOf(e, t));
	});
}
function D(e, t, n) {
	return e.filter((e) => T(e, n.query) && E(e, t, n));
}
function O(e, t, n) {
	let r = {};
	for (let i of e) {
		let e = t.valueOf(i, n);
		r[e] = (r[e] ?? 0) + 1;
	}
	return r;
}
function k(e, t, n, r, i) {
	let a = O(t, e, r), o = e.values.filter(({ value: e }) => (a[e] ?? 0) > 0), s = e.selected(i);
	if (o.length < 2 && s.size === 0) return null;
	let c = e.values.filter(({ value: e }) => (a[e] ?? 0) > 0 || s.has(e)), l = O(n.filter((t) => E(t, r, i, e.id)), e, r);
	return {
		id: e.id,
		labelKey: e.labelKey,
		rows: c.map(({ value: e, labelKey: t }) => {
			let n = l[e] ?? 0, r = s.has(e);
			return {
				value: e,
				labelKey: t,
				count: n,
				checked: r,
				disabled: n === 0 && !r
			};
		})
	};
}
function A(e, t, n) {
	let r = e.filter((e) => T(e, n.query));
	return C.map((i) => k(i, e, r, t, n)).filter((e) => e !== null);
}
function j(e, t, n) {
	let r = w(t);
	if (!r.values.some((e) => e.value === n)) return e;
	let i = new Set(r.selected(e));
	return i.has(n) ? i.delete(n) : i.add(n), r.withSelected(e, i);
}
function M(e) {
	return {
		...g,
		query: e.query
	};
}
function N(e) {
	return C.reduce((t, n) => t + n.selected(e).size, 0);
}
//#endregion
export { g as EMPTY_SKILL_FILTER_STATE, D as applySkillFilters, A as buildSkillFacetGroups, M as clearSkillFilterFacets, N as countActiveFilters, j as toggleSkillFilterValue };

//# sourceMappingURL=skill-filter.js.map