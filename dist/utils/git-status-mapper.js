//#region src/utils/git-status-mapper.ts
function e(e) {
	switch (e) {
		case "ADDED":
		case "added": return "A";
		case "DELETED":
		case "deleted": return "D";
		case "UPDATED":
		case "modified": return "M";
		case "MOVED":
		case "renamed": return "R";
		default: return "M";
	}
}
//#endregion
export { e as mapAnyGitStatusToClientStatus };

//# sourceMappingURL=git-status-mapper.js.map