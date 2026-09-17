//#region src/components/features/settings/agent-profiles/merge-agent-profile-save-input.ts
function e(e, t) {
	if (!e || e.agent_kind !== t.agent_kind) return t;
	let { id: n, name: r, revision: i, ...a } = e;
	return {
		...a,
		...t
	};
}
//#endregion
export { e as mergeAgentProfileSaveInput };

//# sourceMappingURL=merge-agent-profile-save-input.js.map