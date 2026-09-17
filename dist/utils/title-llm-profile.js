//#region src/utils/title-llm-profile.ts
function e(e, t) {
	if (!t) return;
	let n = new Set(t.profiles.map((e) => e.name));
	if (e && n.has(e)) return e;
	if (t.active_profile && n.has(t.active_profile)) return t.active_profile;
}
//#endregion
export { e as resolveTitleLlmProfile };

//# sourceMappingURL=title-llm-profile.js.map