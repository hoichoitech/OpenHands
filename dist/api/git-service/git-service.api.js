import { getActiveBackend as e } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as t } from "../agent-server-client-options.js";
import { RemoteWorkspace as n } from "../../node_modules/@openhands/typescript-client/dist/workspace/remote-workspace.js";
import r from "../conversation-service/agent-server-conversation-service.api.js";
import { mapAnyGitStatusToClientStatus as i } from "../../utils/git-status-mapper.js";
import { getCloudInstallations as a, getCloudRepositoryBranches as o, searchCloudRepositories as s } from "../cloud/git-service.api.js";
//#region src/api/git-service/git-service.api.ts
var c = (e) => e, l = () => e().backend.kind === "cloud", u = (e) => !e || e === "undefined" || e === "null", d = {
	items: [],
	next_page_id: null
}, f = {
	items: [],
	next_page_id: null
}, p = {
	items: [],
	next_page_id: null
}, m = class {
	static async searchGitRepositories(e, t, n = 100, r, i) {
		return u(t) || !l() ? d : s({
			provider: c(t),
			query: e || void 0,
			limit: n,
			pageId: r,
			installationId: i
		});
	}
	static async retrieveUserGitRepositories(e, t, n = 30, r) {
		return u(e) || !l() ? d : s({
			provider: c(e),
			limit: n,
			pageId: t,
			installationId: r
		});
	}
	static async retrieveInstallationRepositories(e, t, n, r, i = 30) {
		if (u(e) || !l()) return d;
		let a = n[t];
		return a ? s({
			provider: c(e),
			installationId: a,
			limit: i,
			pageId: r
		}) : d;
	}
	static async getRepositoryBranches(e, t, n = "", r, i = 30) {
		return u(t) || !l() ? f : o({
			provider: c(t),
			repository: e,
			query: n || void 0,
			pageId: r,
			limit: i
		});
	}
	static async searchRepositoryBranches(e, t, n, r, i = 30) {
		return u(t) || !l() ? f : o({
			provider: c(t),
			repository: e,
			query: n,
			pageId: r,
			limit: i
		});
	}
	static async getUserInstallations(e, t, n = 100) {
		return u(e) || !l() ? p : a({
			provider: c(e),
			pageId: t,
			limit: n
		});
	}
	static async getGitChanges(e) {
		let a = await r.resolveConversationWorkingDir(e);
		return (await new n(t({ workingDir: a })).gitChanges(a)).map((e) => ({
			path: e.path,
			status: i(String(e.status))
		}));
	}
	static async getGitChangeDiff(e, r) {
		let i = await new n(t()).gitDiff(r);
		return {
			modified: i.modified ?? "",
			original: i.original ?? ""
		};
	}
};
//#endregion
export { m as default };

//# sourceMappingURL=git-service.api.js.map