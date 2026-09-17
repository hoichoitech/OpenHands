import { AUTOMATION_TAG_KEYS as e, getDisplayConversationTags as t } from "../../../api/agent-server-adapter.js";
//#region src/components/features/conversation-panel/conversation-panel-list-helpers.ts
var n = [
	"1h",
	"1d",
	"7d",
	"30d"
], r = {
	"1h": 3600 * 1e3,
	"1d": 1440 * 60 * 1e3,
	"7d": 10080 * 60 * 1e3,
	"30d": 720 * 60 * 60 * 1e3
};
function i(e) {
	return typeof e == "string" && n.includes(e);
}
function a(e, t, n = Date.now()) {
	let r = n - t, i = [], a = [];
	for (let t of e) {
		let e = t.updated_at ? Date.parse(t.updated_at) : NaN;
		Number.isFinite(e) && e < r ? a.push(t) : i.push(t);
	}
	return {
		recent: i,
		older: a
	};
}
function o(e, t, n) {
	if (!t) return [...e];
	let r = e.filter((e) => t.has(e.id));
	if (n != null && !r.some((e) => e.id === n)) {
		let t = e.find((e) => e.id === n);
		t && r.push(t);
	}
	return r;
}
function s(e, t) {
	let n = t.limit ?? 5, r = o(e, t.discoveryConversationIds, t.activeConversationId), i;
	if (r.length <= n) i = r;
	else {
		let e = t.activeConversationId == null ? -1 : r.findIndex((e) => e.id === t.activeConversationId);
		i = e >= n ? [...r.slice(0, n - 1), r[e]] : r.slice(0, n);
	}
	let a = i.length < e.length;
	return t.expanded ? {
		visibleConversations: [...e],
		isPreviewTruncated: a,
		isShowingAll: !0
	} : {
		visibleConversations: i,
		isPreviewTruncated: a,
		isShowingAll: !a
	};
}
function c(e, t) {
	let n = new Map(t.map((e) => [e.id, e]));
	return e.map((e) => n.get(e)).filter((e) => e != null);
}
function l(e, t) {
	if (t.length === 0) return [...e];
	let n = new Set(t);
	return e.filter((e) => !n.has(e.id));
}
var u = "__unnamed__";
function d(t) {
	if (t.trigger === "automation") return !0;
	let n = t.tags;
	return n ? e.some((e) => !!n[e]) : !1;
}
function f(e) {
	return e.tags?.automationname?.trim() || "__unnamed__";
}
function p(e) {
	let t = /* @__PURE__ */ new Set(), n = !1;
	for (let r of e) {
		if (!d(r)) continue;
		let e = f(r);
		e === "__unnamed__" ? n = !0 : t.add(e);
	}
	let r = [...t].sort((e, t) => e.localeCompare(t));
	return n && r.push(u), r;
}
function m(e, t, n, r) {
	if (t === "all") return [...e];
	if (t === "hide-automations") return e.filter((e) => !d(e));
	let i = new Set(r), a = n.filter((e) => i.has(e)), o = a.length > 0 ? new Set(a) : null;
	return e.filter((e) => d(e) ? o === null || o.has(f(e)) : !1);
}
function h(e) {
	let n = /* @__PURE__ */ new Set();
	for (let r of e) for (let [e, i] of t(r.tags)) n.add(`${e}=${i}`);
	return [...n].sort((e, t) => e.localeCompare(t));
}
function g(e) {
	return e.endsWith("=") ? e.slice(0, -1) : e;
}
function _(e, n, r) {
	let i = new Set(r), a = n.filter((e) => i.has(e));
	if (a.length === 0) return [...e];
	let o = new Set(a);
	return e.filter((e) => t(e.tags).some(([e, t]) => o.has(`${e}=${t}`)));
}
function v(e, t, n) {
	if (t === "local") return e === "__none_workspace" ? {} : e.startsWith("ws:") ? { workingDir: e.slice(3) } : {};
	if (e === "__none_repo") return {};
	if (e.startsWith("repo:")) {
		let t = e.slice(5), r = n[0];
		return { repository: {
			name: t,
			gitProvider: r?.git_provider ?? "github",
			branch: r?.selected_branch ?? "main"
		} };
	}
	return {};
}
function y(e) {
	if (!e) return 0;
	let t = Date.parse(e);
	return Number.isFinite(t) ? t : 0;
}
function b(e, t) {
	let n = t === "created" ? "created_at" : "updated_at";
	return [...e].sort((e, t) => y(t[n]) - y(e[n]));
}
function x(e) {
	let t = e.selected_workspace?.trim().replace(/\/+$/, "");
	if (!t) return {
		id: "__none_workspace",
		label: ""
	};
	let n = t.split("/").filter(Boolean).pop() ?? t;
	return {
		id: `ws:${t}`,
		label: n
	};
}
function S(e) {
	let t = e.selected_repository?.trim().replace(/\/+$/, "");
	if (!t) return {
		id: "__none_repo",
		label: ""
	};
	let n = t.split("/").filter(Boolean), r = n.length ? (n[n.length - 1] ?? t).replace(/\.git$/, "") : t.replace(/\.git$/, "");
	return {
		id: `repo:${t}`,
		label: r
	};
}
function C(e, t) {
	return t === "local" ? x(e) : S(e);
}
function w(e, t, n, r) {
	let i = e.map((e) => ({
		conversationId: e.id,
		groupId: C(e, n).id,
		page: t.get(e.id) ?? 0
	})), a = /* @__PURE__ */ new Map();
	for (let { groupId: e, page: t } of i) {
		let n = a.get(e);
		(n === void 0 || t < n) && a.set(e, t);
	}
	let o = /* @__PURE__ */ new Set();
	for (let { conversationId: e, groupId: t, page: n } of i) n === a.get(t) && o.add(e);
	let s = r?.forceIncludeConversationId;
	return s != null && e.some((e) => e.id === s) && o.add(s), o;
}
function T(e, t, n, r, i) {
	let a = /* @__PURE__ */ new Map();
	if (t === "local" && i) for (let e of i) {
		let t = e.path.trim().replace(/\/+$/, "");
		t && a.set(`ws:${t}`, {
			label: e.name,
			conversations: []
		});
	}
	for (let n of e) {
		let { id: e, label: i } = C(n, t), o = e === "__none_workspace" ? r.emptyWorkspace : e === "__none_repo" ? r.emptyRepository : i, s = a.get(e);
		s ? s.conversations.push(n) : a.set(e, {
			label: o,
			conversations: [n]
		});
	}
	let o = [...a.entries()].map(([e, r]) => {
		let i = b(r.conversations, n);
		return {
			id: e,
			label: r.label,
			conversations: i,
			launch: v(e, t, i)
		};
	}), s = (e) => e.conversations.reduce((e, t) => Math.max(e, y(n === "created" ? t.created_at : t.updated_at)), 0);
	return o.sort((e, t) => s(t) - s(e)), o;
}
function E(e, t) {
	if (t.length === 0) return [...e];
	let n = new Map(e.map((e) => [e.id, e])), r = [], i = /* @__PURE__ */ new Set();
	for (let e of t) {
		let t = n.get(e);
		t && (r.push(t), i.add(e));
	}
	for (let t of e) i.has(t.id) || r.push(t);
	return r;
}
function D(e, t, n, r, i = "after") {
	if (n === r) return [...e];
	let a = E(t.map((e) => ({ id: e })), e).map((e) => e.id), o = a.indexOf(n), s = a.indexOf(r);
	if (o < 0 || s < 0) return [...e];
	let c = [...a];
	c.splice(o, 1);
	let l = c.indexOf(r), u = i === "before" ? l : l + 1;
	return c.splice(u, 0, n), c;
}
//#endregion
export { n as OLDER_CONVERSATION_CUTOFFS, r as OLDER_CONVERSATION_CUTOFF_MS, u as UNNAMED_AUTOMATION_FACET, m as applyAutomationConversationFilter, E as applyGroupFolderOrder, _ as applyTagConversationFilter, p as collectAutomationNameFacets, h as collectTagFacets, l as filterOutPinnedConversations, g as formatTagFacetLabel, s as getGroupConversationPreview, w as getGroupDiscoveryConversationIds, T as groupConversations, i as isOlderConversationCutoff, D as moveGroupFolderOrder, a as partitionByCutoff, c as resolvePinnedConversations, b as sortConversationsByField };

//# sourceMappingURL=conversation-panel-list-helpers.js.map