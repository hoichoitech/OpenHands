import { constructPullRequestUrl as e, getGitProviderBaseUrl as t } from "../utils/utils.js";
import { SettingsClient as n } from "../node_modules/@openhands/typescript-client/dist/client/settings-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as r } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as i } from "./agent-server-client-options.js";
import { SecretsService as a } from "./secrets-service.js";
//#region src/api/git-provider-items-service.ts
var o = {
	github: [
		"GITHUB_TOKEN",
		"GH_TOKEN",
		"github"
	],
	gitlab: [
		"GITLAB_TOKEN",
		"GL_TOKEN",
		"gitlab"
	],
	bitbucket: ["BITBUCKET_TOKEN", "bitbucket"],
	forgejo: ["FORGEJO_TOKEN", "forgejo"]
}, s = 30;
async function c(e) {
	if (r().backend.kind !== "local") return null;
	let t = o[e] ?? [];
	if (t.length === 0) return null;
	let s = await a.getSecrets(), c = new Set(s.map((e) => e.name)), l = t.find((e) => c.has(e));
	if (!l) return null;
	try {
		return await new n(i()).getSecret(l);
	} catch {
		return null;
	}
}
function l(e, n, r) {
	let i = t(n);
	switch (n) {
		case "gitlab": return `${i}/${r}/-/issues/${e}`;
		case "bitbucket": return `${i}/${r}/issues/${e}`;
		case "forgejo": return `${i}/${r}/issues/${e}`;
		default: return `${i}/${r}/issues/${e}`;
	}
}
function u(e, n) {
	let r = t(e);
	switch (e) {
		case "gitlab": return `${r}/${n}/-/issues`;
		case "bitbucket": return `${r}/${n}/issues`;
		case "forgejo": return `${r}/${n}/issues`;
		default: return `${r}/${n}/issues`;
	}
}
function d(e, n) {
	let r = t(e);
	switch (e) {
		case "gitlab": return `${r}/${n}/-/merge_requests`;
		case "bitbucket": return `${r}/${n}/pull-requests`;
		case "forgejo": return `${r}/${n}/pulls`;
		default: return `${r}/${n}/pulls`;
	}
}
async function f(e, t) {
	let n = {
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28"
	};
	t && (n.Authorization = `Bearer ${t}`);
	let r = await fetch(`https://api.github.com${e}`, { headers: n });
	if (!r.ok) throw Error(`GitHub API ${r.status}`);
	return r.json();
}
async function p(e, t) {
	let n = { Accept: "application/json" };
	t && (n["PRIVATE-TOKEN"] = t);
	let r = await fetch(`https://gitlab.com/api/v4${e}`, { headers: n });
	if (!r.ok) throw Error(`GitLab API ${r.status}`);
	return r.json();
}
var m = class {
	static constructIssuesListUrl = u;
	static constructPullRequestsListUrl = d;
	static async listPullRequests(t, n) {
		let r = await c(n);
		if (n === "gitlab") return (await p(`/projects/${encodeURIComponent(t)}/merge_requests?state=opened&per_page=${s}`, r)).map((e) => ({
			id: e.id,
			number: e.iid,
			title: e.title,
			url: e.web_url,
			authorLogin: e.author?.username ?? null,
			updatedAt: e.updated_at ?? null
		}));
		if (n !== "github" && n !== "forgejo") return [];
		let [i, a] = t.split("/");
		return !i || !a ? [] : (await f(`/repos/${i}/${a}/pulls?state=open&per_page=${s}`, r)).map((r) => ({
			id: r.id,
			number: r.number,
			title: r.title,
			url: r.html_url || e(r.number, n, t),
			authorLogin: r.user?.login ?? null,
			updatedAt: r.updated_at ?? null
		}));
	}
	static async listIssues(e, t) {
		let n = await c(t);
		if (t === "gitlab") return (await p(`/projects/${encodeURIComponent(e)}/issues?state=opened&per_page=${s}`, n)).map((e) => ({
			id: e.id,
			number: e.iid,
			title: e.title,
			url: e.web_url,
			authorLogin: e.author?.username ?? null,
			updatedAt: e.updated_at ?? null
		}));
		if (t !== "github" && t !== "forgejo") return [];
		let [r, i] = e.split("/");
		return !r || !i ? [] : (await f(`/repos/${r}/${i}/issues?state=open&per_page=${s}`, n)).filter((e) => !e.pull_request).map((n) => ({
			id: n.id,
			number: n.number,
			title: n.title,
			url: n.html_url || l(n.number, t, e),
			authorLogin: n.user?.login ?? null,
			updatedAt: n.updated_at ?? null
		}));
	}
};
//#endregion
export { m as GitProviderItemsService };

//# sourceMappingURL=git-provider-items-service.js.map