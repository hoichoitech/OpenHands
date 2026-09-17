//#region src/components/features/skills/is-copyable-skill-source.ts
function e(e) {
	let t = e?.trim();
	return t ? !!(/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("./") || t.startsWith("../") || t.startsWith("~") || /^[A-Za-z]:[\\/]/.test(t) || t.includes("/") || t.includes("\\")) : !1;
}
//#endregion
export { e as isCopyableSkillSource };

//# sourceMappingURL=is-copyable-skill-source.js.map