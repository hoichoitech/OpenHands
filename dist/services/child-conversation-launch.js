import { I18nKey as e } from "../i18n/declaration.js";
import { compareAgentServerVersions as t, getCachedAgentServerVersion as n } from "../api/agent-server-compatibility.js";
import { buildAgentCanvasPath as r } from "../utils/base-path.js";
import i from "../i18n/index.js";
import { displayErrorToast as a, displaySuccessToastWithLink as o } from "../utils/custom-toast-handlers.js";
import { CHILD_CONVERSATION_ISOLATIONS as s, CHILD_CONVERSATION_RESULT_PREFIX as c, CHILD_CONVERSATION_TARGETS as l, LAUNCH_CHILD_CONVERSATION_TOOL_NAME as u, MIN_AGENT_SERVER_VERSION_FOR_PARENT_LINK as d } from "../constants/child-conversation.js";
import { useGoalStore as f } from "../stores/goal-store.js";
import { getStoredConversationMetadata as p } from "../api/conversation-metadata-store.js";
import { createCloudAppConversation as m, getCloudAppConversationStartTask as h, pickCloudBackendForLaunch as g } from "../api/cloud/conversation-service.api.js";
import _ from "../api/conversation-service/agent-server-conversation-service.api.js";
//#region src/services/child-conversation-launch.ts
var v = 3e3, y = 18e4, b = "openhands-child-conversation-launches:", x = (e, t) => ({
	status: "error",
	error: e,
	guidance: t
}), S = (e) => e.map((e) => `"${e}"`).join(" or "), C = (e) => e?.trim() || null;
function w(e) {
	let t = e.target;
	if (!l.includes(t)) return {
		ok: !1,
		failure: x(`Unknown target ${JSON.stringify(e.target)}.`, `\`target\` must be exactly ${S(l)}. Nothing was launched — call ${u} again with a valid target.`)
	};
	let n = C(e.task);
	if (!n) return {
		ok: !1,
		failure: x("`task` is empty.", "`task` must be a self-contained brief: the child conversation cannot see this one, so state the goal, constraints and expected output.")
	};
	let r = C(e.repository), i = C(e.branch), a = C(e.isolation);
	return t === "local" && (r || i) ? {
		ok: !1,
		failure: x("`repository`/`branch` were passed with target=\"local\".", "A local child always runs in this conversation's workspace. Drop `repository` and `branch`, or use target=\"cloud\" to run against a repository in a Cloud sandbox.")
	} : t === "cloud" && a ? {
		ok: !1,
		failure: x("`isolation` was passed with target=\"cloud\".", "Cloud children always run in their own isolated sandbox. Drop `isolation`, or use target=\"local\" to choose between \"worktree\" and \"shared\".")
	} : i && !r ? {
		ok: !1,
		failure: x("`branch` was passed without `repository`.", "Pass `repository` as \"owner/repo\" alongside `branch`, or drop `branch` to use the repository's default branch.")
	} : a && !s.includes(a) ? {
		ok: !1,
		failure: x(`Unknown isolation ${JSON.stringify(e.isolation)}.`, `\`isolation\` must be exactly ${S(s)}. Nothing was launched — call ${u} again with a valid isolation.`)
	} : {
		ok: !0,
		params: {
			target: t,
			task: n,
			title: C(e.title),
			repository: r,
			branch: i,
			isolation: a ?? "worktree"
		}
	};
}
function T(e, t) {
	let n = `${b}${e}`, r = [];
	try {
		let e = window.localStorage.getItem(n), t = e ? JSON.parse(e) : null;
		Array.isArray(t) && (r = t.filter((e) => typeof e == "string"));
	} catch {}
	if (r.includes(t)) return !1;
	try {
		window.localStorage.setItem(n, JSON.stringify([...r, t]));
	} catch {}
	return !0;
}
function E(e) {
	let t = r(e);
	return typeof window > "u" ? t : new URL(t, window.location.origin).toString();
}
function D() {
	let e = n();
	if (!e) return null;
	let r = t(e, d);
	return r === null || r >= 0 ? null : `Agent server ${e} does not persist parent/child conversation links (needs ${d}); the child was created but is not linked to this conversation.`;
}
var O = (e) => !!(e?.selected_repository || e?.selected_workspace), k = "The child was launched in this conversation's directory instead, so it can see work in progress here and the two agents may conflict over the same files.";
async function A(e, t) {
	let n = await _.resolveConversationWorkingDir(t), r = p(t), i = (i) => _.createConversation({
		initialUserMsg: e.task,
		metadata: r ? {
			selected_repository: r.selected_repository,
			selected_branch: r.selected_branch,
			git_provider: r.git_provider
		} : null,
		workingDirOverride: n,
		workspaceMode: i === "shared" ? "local_repo" : "new_worktree",
		parentConversationId: t
	}), a = e.isolation, o = null;
	a === "worktree" && !O(r) && (a = "shared", o = `This conversation's workspace is a scratch directory with no commits, which git cannot cut a worktree from. ${k}`);
	let s;
	try {
		s = await i(a);
	} catch (e) {
		if (a !== "worktree") throw e;
		try {
			s = await i("shared");
		} catch {
			throw e;
		}
		a = "shared", o = `Creating a git worktree in this conversation's workspace failed (${e instanceof Error ? e.message : String(e)}). ${k}`;
	}
	let c = s.app_conversation_id ?? s.id;
	e.title && await _.updateConversationTitle(c, e.title).catch(() => void 0);
	let l = D();
	return {
		status: "launched",
		target: "local",
		conversation_id: c,
		url: E(`/conversations/${c}`),
		initial_status: s.status,
		title: e.title,
		workspace: n,
		isolation: a,
		...o ? { isolation_note: o } : {},
		parent_link: !l,
		...l ? { parent_link_note: l } : {}
	};
}
var j = (e) => new Promise((t) => {
	setTimeout(t, e);
});
async function M(e, t) {
	let n = Date.now() + y, r = e;
	for (; !r.app_conversation_id && r.status !== "ERROR" && !(Date.now() >= n);) {
		await j(v);
		let e = await h(r.id, t).catch(() => null);
		if (!e) break;
		r = e;
	}
	return r;
}
async function N(e, t) {
	let n = g();
	if (!n) return x("No OpenHands Cloud backend is connected in Agent Canvas.", "Ask the user to connect OpenHands Cloud from the backend picker, then call this tool again — or relaunch now with target=\"local\".");
	let r = p(t), i = await M(await m({
		initial_message: {
			role: "user",
			content: [{
				type: "text",
				text: e.task
			}]
		},
		title: e.title,
		selected_repository: e.repository ?? r?.selected_repository ?? null,
		selected_branch: e.branch ?? null,
		git_provider: e.repository ? null : r?.git_provider ?? null,
		parent_conversation_id: null
	}, n), n);
	if (i.status === "ERROR") return x(i.detail || "The Cloud conversation failed to start.", "The Cloud sandbox could not be provisioned. Report this to the user; you can retry, or fall back to target=\"local\".");
	let a = i.app_conversation_id;
	return {
		status: "launched",
		target: "cloud",
		conversation_id: a,
		url: a ? `${n.host.replace(/\/$/, "")}/conversations/${a}` : null,
		initial_status: i.status,
		title: e.title,
		start_task_id: i.id,
		backend: n.name,
		parent_link: !1,
		parent_link_note: "This conversation runs on the local agent server, so OpenHands Cloud has no parent to link the child to."
	};
}
async function P(t, n) {
	n.status === "error" ? a(i.t(e.CHILD_CONVERSATION$LAUNCH_FAILED, { error: n.error })) : n.url && o(i.t(n.target === "cloud" ? e.CHILD_CONVERSATION$LAUNCHED_CLOUD : e.CHILD_CONVERSATION$LAUNCHED_LOCAL), i.t(e.CHILD_CONVERSATION$OPEN), n.url), !f.getState().statusByConversation[t]?.active && await _.sendMessage(t, {
		role: "user",
		content: [{
			type: "text",
			text: `${c}${JSON.stringify(n)}`
		}]
	});
}
async function F(e, t, n) {
	if (!T(t, n)) return;
	let r = w(e), i;
	if (!r.ok) i = r.failure;
	else try {
		i = r.params.target === "cloud" ? await N(r.params, t) : await A(r.params, t);
	} catch (e) {
		i = x(e instanceof Error ? e.message : String(e), "The launch request failed. Report the error to the user; retry only if the cause looks transient.");
	}
	await P(t, i).catch((e) => {
		console.warn(`[${u}] Failed to report the launch result:`, e);
	});
}
//#endregion
export { F as handleLaunchChildConversationAction };

//# sourceMappingURL=child-conversation-launch.js.map