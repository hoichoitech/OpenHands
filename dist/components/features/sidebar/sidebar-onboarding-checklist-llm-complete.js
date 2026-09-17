//#region src/components/features/sidebar/sidebar-onboarding-checklist-llm-complete.ts
function e(e) {
	return e?.profiles.some((e) => e.api_key_set === !0) ?? !1;
}
function t(e) {
	let t = e?.agent_settings?.llm, n = typeof t?.model == "string" && t.model.length > 0, r = e?.llm_api_key_set === !0 || e?.llm_api_key_is_set === !0 || t?.auth_type === "subscription";
	return n && r;
}
function n(n, r, i, a, o) {
	return !!(e(a) || r || t(n));
}
//#endregion
export { n as isConfigureLlmChecklistItemComplete };

//# sourceMappingURL=sidebar-onboarding-checklist-llm-complete.js.map