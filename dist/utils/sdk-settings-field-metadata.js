//#region src/utils/sdk-settings-field-metadata.ts
function e(e, t) {
	return `SCHEMA$${e.replace(/\./g, "$").toUpperCase()}$${t}`;
}
var t = (e) => !!e?.includes("$"), n = {
	tool_concurrency_limit: { constraints: {
		min: 1,
		step: 1
	} },
	"llm.top_p": { constraints: {
		min: 0,
		max: 1,
		step: .01
	} },
	"llm.temperature": { constraints: {
		min: 0,
		max: 2,
		step: .1
	} }
};
function r(e) {
	return n[e]?.constraints;
}
function i(n, r, i, a) {
	if (t(a)) return n(a);
	let o = e(r, i);
	return n(o, { defaultValue: "" }) || (a && console.warn(`[i18n] Missing translation for key "${o}", falling back to: "${a}"`), a ?? null);
}
function a(e, t, n) {
	return i(e, t, "LABEL", n) ?? "";
}
function o(e, t, n) {
	return i(e, t, "DESCRIPTION", n);
}
function s(e, n, r, i) {
	if (t(i)) return e(i);
	let a = `SCHEMA$${n.replace(/\./g, "$").toUpperCase()}$CHOICE$${String(r).toUpperCase()}`;
	return e(a, { defaultValue: "" }) || (console.warn(`[i18n] Missing translation for key "${a}", falling back to: "${i}"`), i);
}
//#endregion
export { r as getSettingsFieldConstraints, s as resolveSchemaChoiceLabel, o as resolveSchemaFieldDescription, a as resolveSchemaFieldLabel };

//# sourceMappingURL=sdk-settings-field-metadata.js.map