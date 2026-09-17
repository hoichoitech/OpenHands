//#region src/components/features/conversation/conversation-overview-sections.ts
var e = {
	workspace: "workspace",
	git: "git"
}, t = [e.workspace, e.git], n = new Set(t), r = {
	changes: "changes",
	repository: "repository",
	branch: "branch",
	commits: "commits",
	pull_requests: "pull_requests"
}, i = [
	r.changes,
	r.repository,
	r.branch,
	r.commits,
	r.pull_requests
], a = new Set(i), o = [], s = [], c = [{ sections: [e.workspace] }];
function l(e, t) {
	return !t.includes(e);
}
function u(e, t) {
	return !t.includes(e);
}
//#endregion
export { r as CONVERSATION_OVERVIEW_GIT_PART, e as CONVERSATION_OVERVIEW_SECTION, c as CONVERSATION_OVERVIEW_SECTION_GROUPS, s as DEFAULT_UNPINNED_OVERVIEW_GIT_PARTS, o as DEFAULT_UNPINNED_OVERVIEW_SECTIONS, a as VALID_CONVERSATION_OVERVIEW_GIT_PARTS, n as VALID_CONVERSATION_OVERVIEW_SECTIONS, u as isOverviewGitPartPinned, l as isOverviewSectionPinned };

//# sourceMappingURL=conversation-overview-sections.js.map