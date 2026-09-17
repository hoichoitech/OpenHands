import { DEFAULT_WORKING_DIR as e } from "../api/agent-server-config.js";
//#region src/utils/get-git-path.ts
function t(t, n) {
	let r = n?.trim();
	if (r) return r;
	if (!t) return e;
	let i = t.split("/");
	return `${e}/${i[i.length - 1]}`;
}
//#endregion
export { t as getGitPath };

//# sourceMappingURL=get-git-path.js.map