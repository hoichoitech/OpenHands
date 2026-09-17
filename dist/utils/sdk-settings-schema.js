import { LLM_AUTH_TYPE_KEY as e, LLM_SUBSCRIPTION_VENDOR_KEY as t } from "../constants/llm-subscription.js";
import { getSettingsFieldConstraints as n } from "./sdk-settings-field-metadata.js";
//#region src/utils/sdk-settings-schema.ts
var r = new Set([
	"llm.model",
	"llm.api_key",
	"llm.base_url",
	e,
	t
]), i = {
	basic: new Set(["critical"]),
	advanced: new Set(["critical", "major"]),
	all: new Set([
		"critical",
		"major",
		"minor"
	])
};
function a(e) {
	return !!e && Array.isArray(e.sections);
}
function o(e) {
	return a(e) ? e.sections.flatMap((e) => e.fields) : [];
}
function s(e, t) {
	if (!e) return;
	let n = t.split("."), r = e;
	for (let e of n) {
		if (typeof r != "object" || !r) return;
		r = r[e];
	}
	return r;
}
function c(e, t, n) {
	let r = t.split("."), i = e;
	for (let e = 0; e < r.length - 1; e += 1) {
		let t = r[e];
		(i[t] == null || typeof i[t] != "object" || Array.isArray(i[t])) && (i[t] = {}), i = i[t];
	}
	i[r[r.length - 1]] = n;
}
function l(e, t, n = "agent_settings") {
	return s(e[n], t) ?? null;
}
function u(e, t) {
	return l(e, t, "agent_settings");
}
function d(e) {
	return e.choices.length > 0;
}
function f(e) {
	return e.prominence === "critical";
}
function p(e) {
	return e.prominence === "minor";
}
function m(e, t) {
	let n = t ?? e.default;
	return d(e) ? n == null ? "" : String(n) : e.value_type === "boolean" ? !!(n ?? !1) : n == null ? "" : e.value_type === "array" || e.value_type === "object" ? JSON.stringify(n, null, 2) : String(n);
}
function h(e) {
	return typeof e != "object" || !e ? JSON.stringify(e) : Array.isArray(e) ? `[${e.map(h).join(",")}]` : `{${Object.entries(e).sort(([e], [t]) => e.localeCompare(t)).map(([e, t]) => `${JSON.stringify(e)}:${h(t)}`).join(",")}}`;
}
function g(e, t) {
	if (t === void 0) return null;
	if (e.value_type === "boolean") {
		if (typeof t == "string") {
			if (t === "true") return !0;
			if (t === "false") return !1;
		}
		return t === null ? null : !!t;
	}
	if (e.value_type === "integer" || e.value_type === "number") {
		if (t === "" || t === null) return null;
		let e = typeof t == "number" ? t : Number(String(t));
		return Number.isNaN(e) ? null : e;
	}
	if (e.value_type === "array" || e.value_type === "object") {
		if (t === null || e.value_type === "object" && typeof t == "object" && !Array.isArray(t) && Object.keys(t).length === 0) return null;
		if (typeof t == "string") {
			let n = t.trim();
			if (!n) return null;
			try {
				let t = JSON.parse(n);
				return e.value_type === "object" && typeof t == "object" && t && !Array.isArray(t) && Object.keys(t).length === 0 ? null : h(t);
			} catch {
				return n;
			}
		}
		return h(t);
	}
	return t === null ? null : String(t);
}
function _(e, t, n = "agent_settings") {
	let r = t ?? (n === "conversation_settings" ? e.conversation_settings_schema : e.agent_settings_schema);
	return r ? Object.fromEntries(o(r).map((t) => [t.key, m(t, l(e, t.key, n))])) : {};
}
function v(e, t, n = "agent_settings") {
	let r = t ?? (n === "conversation_settings" ? e.conversation_settings_schema : e.agent_settings_schema);
	if (!r) return "basic";
	let i = !1, a = !1;
	for (let t of o(r)) f(t) || g(t, l(e, t.key, n) ?? t.default ?? null) !== g(t, t.default ?? null) && (p(t) ? i = !0 : a = !0);
	return i ? "all" : a ? "advanced" : "basic";
}
function y(e, t) {
	return e.depends_on.every((e) => t[e] === !0);
}
function b(e) {
	if (typeof e == "boolean") return e;
	let t = e.trim().toLowerCase();
	if (!t) return null;
	if (t === "true") return !0;
	if (t === "false") return !1;
	throw Error(`Expected a boolean value, received: ${e}`);
}
function x(e, t) {
	if (e.value_type === "boolean") return b(t);
	if (e.value_type === "integer" || e.value_type === "number") {
		let r = String(t).trim();
		if (!r) return null;
		let i = Number(r);
		if (Number.isNaN(i)) throw Error(`Expected a numeric value, received: ${r}`);
		if (e.value_type === "integer" && !Number.isInteger(i)) throw Error(`Expected an integer value, received: ${r}`);
		let a = n(e.key);
		if (a?.min != null && i < a.min) throw Error(`${e.label} must be at least ${a.min}`);
		if (a?.max != null && i > a.max) throw Error(`${e.label} must be at most ${a.max}`);
		return i;
	}
	if (e.value_type === "array" || e.value_type === "object") {
		let n = String(t).trim();
		if (!n) return null;
		let r;
		try {
			r = JSON.parse(n);
		} catch {
			throw Error(`Invalid JSON for ${e.label}`);
		}
		if (e.value_type === "array") {
			if (!Array.isArray(r)) throw Error(`${e.label} must be a JSON array`);
			return r;
		}
		if (r === null || Array.isArray(r) || typeof r != "object") throw Error(`${e.label} must be a JSON object`);
		return r;
	}
	let r = String(t);
	return r === "" && !e.secret ? null : r;
}
function S(e, t, n) {
	let r = {};
	for (let i of o(e)) n[i.key] && c(r, i.key, x(i, t[i.key]));
	return r;
}
function C(e, t) {
	return i[t].has(e.prominence);
}
function w(e, t, n, r) {
	let i = S(e, t, n);
	for (let t of o(e)) C(t, r) || c(i, t.key, t.default ?? null);
	return i;
}
function T(e, t, n, i = r) {
	return a(e) ? e.sections.map((e) => ({
		...e,
		fields: e.fields.filter((e) => !i.has(e.key) && C(e, n) && y(e, t))
	})).filter((e) => e.fields.length > 0) : [];
}
function E(e) {
	return e ? o(e).some((e) => e.prominence === "critical") : !1;
}
function D(e) {
	return e ? o(e).some((e) => e.prominence === "major") : !1;
}
function O(e) {
	return e ? o(e).some((e) => e.prominence === "minor") : !1;
}
//#endregion
export { _ as buildInitialSettingsFormValues, S as buildSdkSettingsPayload, w as buildSdkSettingsPayloadForView, u as getAgentSettingValue, T as getVisibleSettingsSections, D as hasAdvancedSettings, E as hasCriticalSettings, O as hasMinorSettings, v as inferInitialView, a as isValidSettingsSchema, g as normalizeComparableValue };

//# sourceMappingURL=sdk-settings-schema.js.map