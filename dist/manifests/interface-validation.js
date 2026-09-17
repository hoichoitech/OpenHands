import { DASHBOARD_FILTER_IDS as e, DASHBOARD_FILTER_VALUES as t, DASHBOARD_SORT_VALUES as n, INTERFACE_ICON_SLUGS as r, INTERFACE_SUB_PAGE_IDS as i, OVERVIEW_METRICS as a, OVERVIEW_TILE_PLACEHOLDERS as o } from "./types.js";
//#region src/manifests/interface-validation.ts
var s = /<[A-Za-z/!]/, c = /^[a-z0-9]+(-[a-z0-9]+)*$/, l = "https://docs.openhands.dev/", u = /^[a-z][a-z-]*$/, d = /^\.[a-z][a-z.]*json$/, f = /^[a-z0-9][a-z0-9.-]*$/, p = /^\/[A-Za-z0-9/{}_-]*$/, m = /^[^{}]*\{id\}[^{}]*$/, h = [
	"github",
	"gitlab",
	"bitbucket"
], g = {
	name: {
		type: "text",
		required: !0
	},
	prompt: {
		type: "textarea",
		required: !1
	},
	model: {
		type: "llm-profile",
		required: !1
	},
	timeout: {
		type: "number",
		required: !1
	},
	schedule: {
		type: "schedule",
		required: !1
	}
}, _ = Object.keys(g), v = [
	"list",
	"health",
	"capabilities",
	"validate",
	"createPrompt",
	"createPlugin"
], y = ["createBundle", "uploads"], b = [
	"detail",
	"dispatch",
	"runs",
	"tarball"
];
function x(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function S(e, t) {
	return typeof e == "string" && t.includes(e);
}
var C = class {
	errors = [];
	fail(e, t) {
		return this.errors.push(`${e}: ${t}`), !1;
	}
	copy(e, t) {
		return typeof e != "string" || e.length === 0 ? this.fail(t, "must be a non-empty string") : s.test(e) ? this.fail(t, "must not contain markup") : !0;
	}
	closed(e, t, n) {
		Object.keys(e).filter((e) => !t.includes(e)).forEach((e) => this.fail(`${n}.${e}`, "is not allowed"));
	}
	record(e, t) {
		return x(e) ? !0 : (this.fail(t, "must be an object"), !1);
	}
};
function w(e, t, n) {
	e.record(t, "routes") && (e.closed(t, [
		"list",
		"setup",
		"detail",
		"templates"
	], "routes"), [
		"list",
		"setup",
		"detail"
	].forEach((r) => {
		t[r] !== n[r] && e.fail(`routes.${r}`, `must be "${n[r]}"`);
	}), t.templates !== void 0 && t.templates !== n.templates && e.fail("routes.templates", n.templates === void 0 ? "is not a route this host mounts" : `must be "${n.templates}"`));
}
function T(e, t) {
	if (!Array.isArray(t) || t.length === 0) {
		e.fail("navigation.subPages", "must be a non-empty array");
		return;
	}
	let n = /* @__PURE__ */ new Set();
	t.forEach((t, r) => {
		let a = `navigation.subPages[${r}]`;
		if (!e.record(t, a)) return;
		e.closed(t, [
			"page",
			"label",
			"icon"
		], a);
		let { page: o, label: s, icon: c } = t;
		S(o, i) ? n.has(o) ? e.fail(`${a}.page`, "repeats a page") : n.add(o) : e.fail(`${a}.page`, "is not a sub-page this host serves"), e.copy(s, `${a}.label`), E(e, c, `${a}.icon`);
	});
}
function E(e, t, n) {
	S(t, r) || e.fail(n, "is not an icon this host ships");
}
function D(e, t) {
	if (e.record(t, "navigation")) {
		if (e.closed(t, [
			"sidebar",
			"commandMenu",
			"subPages"
		], "navigation"), e.record(t.sidebar, "navigation.sidebar") && (e.closed(t.sidebar, ["label"], "navigation.sidebar"), e.copy(t.sidebar.label, "navigation.sidebar.label")), e.record(t.commandMenu, "navigation.commandMenu")) {
			let n = t.commandMenu;
			e.closed(n, [
				"title",
				"description",
				"keywords"
			], "navigation.commandMenu"), e.copy(n.title, "navigation.commandMenu.title"), e.copy(n.description, "navigation.commandMenu.description"), e.copy(n.keywords, "navigation.commandMenu.keywords");
		}
		t.subPages !== void 0 && T(e, t.subPages);
	}
}
function O(e, t) {
	e.record(t, "pages") && (e.closed(t, [
		"list",
		"detail",
		"edit",
		"templates"
	], "pages"), e.record(t.list, "pages.list") && (e.closed(t.list, [
		"title",
		"subtitle",
		"overview",
		"filters",
		"sort",
		"insights"
	], "pages.list"), e.copy(t.list.title, "pages.list.title"), e.copy(t.list.subtitle, "pages.list.subtitle"), t.list.overview !== void 0 && k(e, t.list.overview), t.list.filters !== void 0 && M(e, t.list.filters), t.list.sort !== void 0 && F(e, t.list.sort), t.list.insights !== void 0 && L(e, t.list.insights)), e.record(t.detail, "pages.detail") && (e.closed(t.detail, ["backLabel"], "pages.detail"), e.copy(t.detail.backLabel, "pages.detail.backLabel")), e.record(t.edit, "pages.edit") && (e.closed(t.edit, ["title"], "pages.edit"), e.copy(t.edit.title, "pages.edit.title")), t.templates !== void 0 && R(e, t.templates));
}
function k(e, t) {
	let n = "pages.list.overview";
	if (!e.record(t, n)) return;
	e.closed(t, ["label", "tiles"], n), e.copy(t.label, `${n}.label`);
	let { tiles: r } = t;
	if (!Array.isArray(r) || r.length === 0) {
		e.fail(`${n}.tiles`, "must be a non-empty array");
		return;
	}
	let i = /* @__PURE__ */ new Set();
	r.forEach((t, r) => {
		A(e, t, i, `${n}.tiles[${r}]`);
	});
}
function A(e, t, n, r) {
	if (!e.record(t, r)) return;
	e.closed(t, [
		"metric",
		"label",
		"detail",
		"zeroDetail",
		"icon"
	], r);
	let { metric: i, label: o, detail: s, zeroDetail: c, icon: l } = t;
	if (e.copy(o, `${r}.label`), E(e, l, `${r}.icon`), !S(i, a)) {
		e.fail(`${r}.metric`, "is not a metric this host computes"), e.copy(s, `${r}.detail`), c !== void 0 && e.copy(c, `${r}.zeroDetail`);
		return;
	}
	n.has(i) ? e.fail(`${r}.metric`, "repeats a metric") : n.add(i), j(e, s, i, `${r}.detail`), c !== void 0 && j(e, c, i, `${r}.zeroDetail`);
}
function j(e, t, n, r) {
	if (!e.copy(t, r)) return;
	let i = o[n];
	(i.length === 0 ? /\{\{/ : RegExp(`\\{\\{(?!(?:${i.join("|")})\\}\\})`)).test(t) && e.fail(r, "uses a placeholder this metric does not expose");
}
function M(e, t) {
	let n = "pages.list.filters";
	if (!Array.isArray(t) || t.length === 0) {
		e.fail(n, "must be a non-empty array");
		return;
	}
	let r = /* @__PURE__ */ new Set();
	t.forEach((t, i) => {
		N(e, t, r, `${n}[${i}]`);
	});
}
function N(n, r, i, a) {
	if (!n.record(r, a)) return;
	n.closed(r, [
		"id",
		"label",
		"options"
	], a);
	let { id: o, label: s, options: c } = r;
	if (n.copy(s, `${a}.label`), !S(o, e)) {
		n.fail(`${a}.id`, "is not a filter this host implements");
		return;
	}
	i.has(o) ? n.fail(`${a}.id`, "repeats a filter") : i.add(o), P(n, c, t[o], `${a}.options`);
}
function P(e, t, n, r) {
	if (!Array.isArray(t) || t.length < 2) {
		e.fail(r, "must offer at least two options");
		return;
	}
	let i = /* @__PURE__ */ new Set();
	t.forEach((t, a) => {
		let o = `${r}[${a}]`;
		if (!e.record(t, o)) return;
		e.closed(t, ["value", "label"], o);
		let { value: s, label: c } = t;
		S(s, n) ? i.has(s) ? e.fail(`${o}.value`, "repeats a value") : i.add(s) : e.fail(`${o}.value`, "is not a value this host implements"), e.copy(c, `${o}.label`);
	}), i.has("all") || e.fail(r, "must offer the \"all\" option");
}
function F(e, t) {
	let r = "pages.list.sort";
	if (!e.record(t, r)) return;
	e.closed(t, [
		"label",
		"options",
		"default"
	], r);
	let { label: i, options: a, default: o } = t;
	e.copy(i, `${r}.label`);
	let s = /* @__PURE__ */ new Set();
	!Array.isArray(a) || a.length === 0 ? e.fail(`${r}.options`, "must be a non-empty array") : a.forEach((t, i) => {
		let a = `${r}.options[${i}]`;
		e.record(t, a) && (e.closed(t, ["value", "label"], a), S(t.value, n) ? s.has(t.value) ? e.fail(`${a}.value`, "repeats a value") : s.add(t.value) : e.fail(`${a}.value`, "is not a sort this host implements"), e.copy(t.label, `${a}.label`));
	}), (typeof o != "string" || !s.has(o)) && e.fail(`${r}.default`, "must be one of the declared option values");
}
var I = {
	health: [
		"healthy",
		"failing",
		"running",
		"disabled",
		"neverRun",
		"checking"
	],
	lastRun: [
		"label",
		"never",
		"justNow"
	],
	stats: [
		"runs",
		"recentSuccess",
		"averageDuration"
	]
};
function L(e, t) {
	let n = "pages.list.insights";
	e.record(t, n) && (e.closed(t, Object.keys(I), n), Object.keys(I).forEach((r) => {
		let i = `${n}.${r}`, a = t[r];
		if (!e.record(a, i)) return;
		let o = I[r];
		e.closed(a, o, i), o.forEach((t) => {
			e.copy(a[t], `${i}.${t}`);
		});
	}));
}
function R(e, t) {
	let n = "pages.templates";
	e.record(t, n) && (e.closed(t, ["title", "description"], n), e.copy(t.title, `${n}.title`), e.copy(t.description, `${n}.description`));
}
function z(e, t) {
	let n = x(t.routes) ? t.routes : {}, r = x(t.navigation) ? t.navigation : {}, i = x(t.pages) ? t.pages : {}, a = x(i.list) ? i.list : {}, o = [
		["routes.templates", n.templates],
		["navigation.subPages", r.subPages],
		["pages.templates", i.templates],
		["pages.list.overview", a.overview],
		["pages.list.filters", a.filters],
		["pages.list.sort", a.sort],
		["pages.list.insights", a.insights]
	], s = o.filter(([, e]) => e === void 0).map(([e]) => e);
	s.length === 0 || s.length === o.length || e.fail("interface", `the sub-page surface must be declared whole; missing ${s.join(", ")}`);
}
function B(e, t, n, r) {
	if (!e.record(n, r)) return;
	e.closed(n, [
		"type",
		"label",
		"help",
		"required",
		"constraints"
	], r);
	let { type: i, label: a, help: o, required: s, constraints: c } = n;
	if (i !== t.type && e.fail(`${r}.type`, `must be "${t.type}", the control this host renders`), e.copy(a, `${r}.label`), o !== void 0 && e.copy(o, `${r}.help`), s !== t.required && e.fail(`${r}.required`, `must be ${t.required}, what this host enforces`), c !== void 0) {
		if (t.type !== "number") e.fail(`${r}.constraints`, "is only allowed on a number attribute");
		else if (e.record(c, `${r}.constraints`)) {
			e.closed(c, ["min", "max"], `${r}.constraints`);
			let { min: t, max: n } = c;
			t !== void 0 && t !== 1 && e.fail(`${r}.constraints.min`, "must be the 1 this host enforces"), n !== void 0 && (!Number.isInteger(n) || n < 1) && e.fail(`${r}.constraints.max`, "must be a positive integer");
		}
	}
}
function V(e, t) {
	if (!e.record(t, "attributes")) return;
	let n = Object.keys(t);
	n.length === 0 && e.fail("attributes", "must declare at least one attribute"), n.forEach((n) => {
		if (!_.includes(n)) {
			e.fail(`attributes.${n}`, "is not a settable attribute");
			return;
		}
		B(e, g[n], t[n], `attributes.${n}`);
	});
}
function H(e, t) {
	if (!e.record(t, "importExport")) return;
	e.closed(t, [
		"fileKind",
		"fileVersion",
		"filenameSuffix",
		"importDefaults"
	], "importExport");
	let { fileKind: n, fileVersion: r, filenameSuffix: i, importDefaults: a } = t;
	(typeof n != "string" || !u.test(n)) && e.fail("importExport.fileKind", "must be a lowercase slug"), r !== 1 && e.fail("importExport.fileVersion", "must be 1"), (typeof i != "string" || !d.test(i)) && e.fail("importExport.filenameSuffix", "must be a .json suffix"), e.record(a, "importExport.importDefaults") && (e.closed(a, ["repoProvider", "placeholderEventSource"], "importExport.importDefaults"), (typeof a.repoProvider != "string" || !h.includes(a.repoProvider)) && e.fail("importExport.importDefaults.repoProvider", "is not a supported provider"), (typeof a.placeholderEventSource != "string" || !f.test(a.placeholderEventSource)) && e.fail("importExport.importDefaults.placeholderEventSource", "must be a lowercase event source"));
}
function U(e, t) {
	if (!e.record(t, "endpoints")) return;
	let n = [
		...v,
		...y,
		...b
	];
	e.closed(t, n, "endpoints");
	let r = (n) => {
		let r = t[n];
		return typeof r != "string" || !p.test(r) || r.includes("//") ? (e.fail(`endpoints.${n}`, "must be a rooted service-relative path"), null) : r;
	};
	[...v, ...y.filter((e) => e in t)].forEach((t) => {
		let n = r(t);
		n !== null && /[{}]/.test(n) && e.fail(`endpoints.${t}`, "must not carry a substitution");
	}), b.forEach((t) => {
		let n = r(t);
		n !== null && !m.test(n) && e.fail(`endpoints.${t}`, "must carry exactly one {id}");
	});
}
function W(e, t, n) {
	if (!Array.isArray(t) || t.length === 0) return e.fail(n, "must be a non-empty array"), [];
	let r = t.filter((t) => typeof t == "string" && c.test(t) ? !0 : (e.fail(n, "must contain only lowercase slugs"), !1));
	return new Set(r).size !== r.length && e.fail(n, "must not repeat an id"), r;
}
var G = [
	"version",
	"routes",
	"navigation",
	"pages",
	"docsUrl",
	"attributes",
	"importExport",
	"endpoints",
	"featuredAutomationIds",
	"responderIntegrationIds"
];
function K(e, t) {
	if (!x(e)) return {
		valid: !1,
		errors: ["interface: must be an object"]
	};
	if (e.version !== "1.0") return {
		valid: !1,
		errors: ["interface.version: must be \"1.0\""]
	};
	let n = new C();
	return n.closed(e, G, "interface"), w(n, e.routes, t.mountedRoutes), D(n, e.navigation), O(n, e.pages), (typeof e.docsUrl != "string" || !e.docsUrl.startsWith(l)) && n.fail("docsUrl", `must start with ${l}`), V(n, e.attributes), H(n, e.importExport), U(n, e.endpoints), W(n, e.featuredAutomationIds, "featuredAutomationIds").forEach((e) => {
		t.catalogIds.has(e) || n.fail("featuredAutomationIds", `${e} is not a catalog entry`);
	}), W(n, e.responderIntegrationIds, "responderIntegrationIds"), z(n, e), {
		valid: n.errors.length === 0,
		errors: n.errors
	};
}
//#endregion
export { K as validateInterfaceManifest };

//# sourceMappingURL=interface-validation.js.map