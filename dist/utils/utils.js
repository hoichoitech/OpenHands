import { I18nKey as e } from "../i18n/declaration.js";
import t from "../node_modules/clsx/dist/clsx.js";
import { twMerge as n } from "../node_modules/tailwind-merge/dist/bundle-mjs.js";
import { AgentState as r } from "../types/agent-state.js";
import { getTaskStatusI18nKey as i } from "./status.js";
import { OH_STATUS_ERROR_COLOR as a, OH_STATUS_SUCCESS_COLOR as o } from "../constants/status-colors.js";
//#region src/utils/utils.ts
function s(...e) {
	return n(t(e));
}
var c = (e, t) => {
	let n = window.URL.createObjectURL(e), r = document.createElement("a");
	r.href = n, r.download = t, document.body.appendChild(r), r.click(), document.body.removeChild(r), window.URL.revokeObjectURL(n);
}, l = (e, t) => {
	let n = parseFloat(e.style.height || "");
	return Number.isFinite(n) ? n : t;
}, u = (e, t) => {
	e.style.setProperty("height", `${t}px`);
}, d = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), f = () => d() ? !0 : "ontouchstart" in window || navigator.maxTouchPoints > 0 ? typeof window.matchMedia == "function" ? !window.matchMedia("(pointer: fine)").matches : !0 : !1, p = (e) => e.split(".").pop()?.toUpperCase() || "FILE", m = (e, t) => {
	if (!e) return !1;
	switch (e) {
		case "bitbucket":
		case "bitbucket_data_center": return !0;
		case "github": return t === "cloud";
		default: return !1;
	}
}, h = (e, t) => {
	if (t && t.trim() !== "") return t.startsWith("http") ? t : `https://${t}`;
	switch (e) {
		case "github": return "https://github.com";
		case "gitlab": return "https://gitlab.com";
		case "bitbucket": return "https://bitbucket.org";
		case "azure_devops": return "https://dev.azure.com";
		case "forgejo": return "https://codeberg.org";
		default: return "";
	}
}, g = (e) => e === "gitlab" ? "GitLab" : e === "bitbucket" ? "Bitbucket" : e === "bitbucket_data_center" ? "Bitbucket Data Center" : e === "azure_devops" ? "Azure DevOps" : e === "forgejo" ? "Forgejo" : "GitHub", _ = (e) => e ? "merge request" : "pull request", v = (e) => e ? "MR" : "PR", y = (e, t, n, r) => {
	let i = h(t, r);
	switch (t) {
		case "github": return `${i}/${n}/pull/${e}`;
		case "forgejo": return `${i}/${n}/pull/${e}`;
		case "gitlab": return `${i}/${n}/-/merge_requests/${e}`;
		case "bitbucket": return `${i}/${n}/pull-requests/${e}`;
		case "bitbucket_data_center": {
			let [t, r] = n.split("/");
			return `${i}/projects/${t}/repos/${r}/pull-requests/${e}`;
		}
		case "azure_devops": {
			let t = n.split("/");
			if (t.length === 3) {
				let [n, r, a] = t;
				return `${i}/${n}/${r}/_git/${a}/pullrequest/${e}`;
			}
			return "";
		}
		default: return "";
	}
}, b = (e, t, n) => {
	let r = h(e, n);
	if (e === "bitbucket_data_center") {
		let [e, n] = t.split("/");
		return `${r}/projects/${e}/repos/${n}`;
	}
	return `${r}/${t}`;
}, x = (e) => e.split("/").map(encodeURIComponent).join("/"), S = (e, t, n, r) => {
	let i = h(e, r);
	switch (e) {
		case "github": return `${i}/${t}/tree/${x(n)}`;
		case "forgejo": return `${i}/${t}/src/branch/${x(n)}`;
		case "gitlab": return `${i}/${t}/-/tree/${x(n)}`;
		case "bitbucket": return `${i}/${t}/src/${x(n)}`;
		case "bitbucket_data_center": {
			let e = t.split("/");
			if (e.length >= 2) {
				let [t, r] = e;
				return `${i}/projects/${t}/repos/${r}/browse?at=refs/heads/${encodeURIComponent(n)}`;
			}
			return "";
		}
		case "azure_devops": {
			let e = t.split("/");
			if (e.length === 3) {
				let [t, r, a] = e;
				return `${i}/${t}/${r}/_git/${a}?version=GB${encodeURIComponent(n)}`;
			}
			return "";
		}
		default: return "";
	}
}, C = "Please review the current changes and create a git commit with a concise, descriptive message.", w = () => C, T = () => "Please pull the latest code from the repository.", E = (e) => `Please push the changes to a remote branch on ${g(e)}, but do NOT create a ${_(e === "gitlab")}. Check your current branch name first - if it's main, master, deploy, or another common default branch name, create a new branch with a descriptive name related to your changes. Otherwise, use the exact SAME branch name as the one you are currently on.`, D = (e) => {
	let t = g(e), n = _(e === "gitlab");
	return `Please push the changes to ${t} and open a ${n}. If you're on a default branch (e.g., main, master, deploy), create a new branch with a descriptive name otherwise use the current branch. If a ${n} template exists in the repository, please follow it when creating the ${v(e === "gitlab")} description.`;
}, O = () => "Please create a new branch with a descriptive name related to the work you plan to do.", k = (e) => !!e && e !== "ERROR" && e !== "READY", A = (e) => {
	let { isPausing: t, isTask: n, taskStatus: i, isStartingStatus: s, isStopStatus: c, curAgentState: l } = e;
	return t ? "#FFD600" : n && i ? i === "ERROR" ? a : "#FFD600" : s ? "#FFD600" : c ? "#ffffff" : l === r.ERROR ? a : o;
};
function j({ isPausing: t = !1, isTask: n, taskStatus: a, taskDetail: o, isStartingStatus: s, isStopStatus: c, curAgentState: l, errorMessage: u, t: d }) {
	return t ? d(e.COMMON$STOPPING) : n && a ? a === "ERROR" ? o || d(e.CONVERSATION$ERROR_STARTING_CONVERSATION) : a === "READY" ? d(e.CONVERSATION$READY) : o || d(i(a)) : s ? d(e.COMMON$STARTING) : c ? d(e.COMMON$SERVER_STOPPED) : l === r.ERROR ? u || d(e.COMMON$ERROR) : d(e.COMMON$RUNNING);
}
//#endregion
export { s as cn, S as constructBranchUrl, y as constructPullRequestUrl, b as constructRepositoryUrl, c as downloadBlob, O as getCreateNewBranchPrompt, D as getCreatePRPrompt, p as getFileExtension, w as getGitCommitPrompt, h as getGitProviderBaseUrl, T as getGitPullPrompt, E as getGitPushPrompt, g as getProviderName, A as getStatusColor, j as getStatusText, l as getStyleHeightPx, f as isMobileDevice, d as isMobileUserAgent, k as isTaskPolling, u as setStyleHeightPx, m as shouldUseInstallationRepos };

//# sourceMappingURL=utils.js.map