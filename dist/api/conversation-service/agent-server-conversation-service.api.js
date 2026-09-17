import { ConversationClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/conversation-client.js";
import { FileClient as t } from "../../node_modules/@openhands/typescript-client/dist/client/file-client.js";
import { ProfilesClient as n } from "../../node_modules/@openhands/typescript-client/dist/client/profiles-client.js";
import { VSCodeClient as r } from "../../node_modules/@openhands/typescript-client/dist/client/vscode-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { buildHttpBaseUrl as i } from "../../utils/websocket-url.js";
import { buildConversationWorkingDirForBackend as a, getAgentServerWorkingDir as o, getWorkspaceRootForBackend as s } from "../agent-server-config.js";
import { getActiveBackend as c, getEffectiveLocalBackend as l } from "../backend-registry/active-store.js";
import { NoBackendAvailableError as ee, getAgentServerClientOptions as u } from "../agent-server-client-options.js";
import { getTelemetryDistinctId as te } from "../../services/telemetry.js";
import { getStoredConversationMetadata as d, mergeStoredConversationMetadata as f, removeStoredConversationMetadata as p, setStoredConversationMetadata as m } from "../conversation-metadata-store.js";
import { callCloudProxy as h } from "../cloud/proxy.js";
import { batchGetCloudConversations as g, createCloudAppConversation as ne, deleteCloudConversation as _, downloadCloudConversation as v, getCloudAppConversationStartTask as y, readCloudConversationFile as b, searchCloudConversations as x, updateCloudConversationPublicFlag as S, updateCloudConversationTitle as C } from "../cloud/conversation-service.api.js";
import { ConversationSortOrder as w } from "../../node_modules/@openhands/typescript-client/dist/models/conversation.js";
import "../../node_modules/@openhands/typescript-client/dist/index.js";
import T from "../../node_modules/uuid/dist/v4.js";
import { resolveAbsoluteAgentServerPath as E } from "../agent-server-home.js";
import D from "../profiles-service/profiles-service.api.js";
import re from "../settings-service/settings-service.api.js";
import { isPlannerConversationOf as O } from "../../utils/plan-file.js";
import { assertSubscriptionAuthReady as k, buildStartConversationRequestWithEncryptedSettings as A, buildStartPlanningConversationRequestWithEncryptedSettings as j, emptyHooksResponse as M, getDefaultConversationTitle as N, toAppConversation as P, toConversationPage as F } from "../agent-server-adapter.js";
import { resolveTitleLlmProfile as I } from "../../utils/title-llm-profile.js";
//#region src/api/conversation-service/agent-server-conversation-service.api.ts
var L = "1970-01-01T00:00:00.000Z", R = 300 * 1e3, ie = "Unable to load conversations because the selected agent server returned data this UI does not understand. Check the backend URL/session key and update the agent server if needed.";
function z() {
	return /* @__PURE__ */ Error(ie);
}
function B(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
function V(e) {
	return typeof e == "number" ? e : null;
}
function H(e) {
	return typeof e == "number" ? e : 0;
}
function U(e) {
	return typeof e == "string" ? e : null;
}
function W(e, t, n) {
	let r = e[t] ?? e[n];
	return typeof r == "string" && r.trim() ? r : L;
}
function G(e) {
	return B(e) ? {
		prompt_tokens: H(e.prompt_tokens),
		completion_tokens: H(e.completion_tokens),
		cache_read_tokens: H(e.cache_read_tokens),
		cache_write_tokens: H(e.cache_write_tokens),
		context_window: H(e.context_window),
		per_turn_token: H(e.per_turn_token)
	} : null;
}
function K(e) {
	return B(e) ? {
		accumulated_cost: V(e.accumulated_cost),
		max_budget_per_task: V(e.max_budget_per_task),
		accumulated_token_usage: G(e.accumulated_token_usage)
	} : null;
}
function q(e) {
	return B(e) ? e : null;
}
function J(e) {
	if (!B(e)) return null;
	let t = B(e.llm) ? { model: U(e.llm.model) } : null;
	return {
		kind: U(e.kind),
		acp_server: U(e.acp_server),
		acp_model: U(e.acp_model),
		llm: t
	};
}
function ae(e) {
	return B(e) ? { working_dir: U(e.working_dir) } : null;
}
function oe(e) {
	if (!B(e)) return null;
	let t = {};
	for (let [n, r] of Object.entries(e)) typeof r == "string" && (t[n] = r);
	return t;
}
function se(e) {
	return Array.isArray(e) ? e.filter((e) => typeof e == "string") : null;
}
function ce(e) {
	if (!B(e)) return null;
	let { agent_profile_id: t, revision: n } = e;
	return typeof t != "string" || typeof n != "number" ? null : {
		agent_profile_id: t,
		revision: n
	};
}
function Y(e) {
	if (!e.startsWith("/")) return null;
	let t = [];
	for (let n of e.split("/")) if (n && n !== ".") if (n === "..") {
		if (!t.length) return null;
		t.pop();
	} else t.push(n);
	return `/${t.join("/")}`;
}
function X(e, t) {
	let n = Y(e), r = Y(t);
	if (!n || !r || n !== r && !n.startsWith(`${r}/`)) throw Error("Conversation file path must stay inside the workspace");
	return n;
}
function Z(e) {
	if (!B(e) || typeof e.id != "string" || !e.id.trim()) throw z();
	return {
		id: e.id.trim(),
		title: U(e.title),
		created_at: W(e, "created_at", "createdAt"),
		updated_at: W(e, "updated_at", "updatedAt"),
		execution_status: U(e.execution_status),
		sandbox_status: U(e.sandbox_status),
		metrics: K(e.metrics),
		stats: q(e.stats),
		agent: J(e.agent),
		workspace: ae(e.workspace),
		tags: oe(e.tags),
		launched_agent_profile: ce(e.launched_agent_profile),
		sub_conversation_ids: se(e.sub_conversation_ids),
		current_model_id: U(e.current_model_id),
		current_model_name: U(e.current_model_name)
	};
}
function Q(e) {
	if (!Array.isArray(e)) throw z();
	return e.map(Z);
}
function le(e) {
	if (Array.isArray(e)) return {
		items: Q(e),
		next_page_id: null
	};
	if (!B(e)) throw z();
	return {
		items: Q(e.items),
		next_page_id: typeof e.next_page_id == "string" ? e.next_page_id : null
	};
}
var ue = new Set([
	"idle",
	"running",
	"paused",
	"waiting_for_confirmation",
	"finished",
	"error",
	"stuck"
]);
function de(e) {
	let t = e ?? "idle";
	return ue.has(t) ? t : "idle";
}
function $(e, t) {
	if (!e) throw Error(`Conversation ${t} was not found`);
	return e;
}
var fe = class {
	static async sendMessage(t, n, r) {
		let a = c().backend, o = r?.conversationUrl ?? null, s = r?.sessionApiKey ?? null;
		if (a.kind === "cloud") {
			if (!o || !s) {
				let [e] = await g([t]);
				o = e?.conversation_url?.trim() ?? null, s = e?.session_api_key?.trim() ?? null;
			}
			if (!o || !s) throw Error("Conversation sandbox is still starting. Wait for it to finish, then try again.");
			return await h({
				backend: a,
				method: "POST",
				hostOverride: i(o),
				path: `/api/conversations/${t}/events`,
				body: {
					...n,
					run: !0
				},
				authMode: "session-api-key",
				sessionApiKey: s
			}), n;
		}
		return await new e(u({
			conversationUrl: o,
			sessionApiKey: s
		})).sendEvent(t, n, { run: !0 }), n;
	}
	static async createConversation(t = {}) {
		let { initialUserMsg: n, conversationInstructions: r, plugins: i, metadata: o, workingDirOverride: d, workspaceMode: f, parentConversationId: p, agentType: h, sandboxId: g, agentProfileId: _, agentProfileKind: v } = t;
		if (c().backend.kind === "cloud") return ne({
			initial_message: n ? {
				role: "user",
				content: [{
					type: "text",
					text: n
				}]
			} : null,
			title: r ?? null,
			selected_repository: o?.selected_repository ?? null,
			selected_branch: o?.selected_branch ?? null,
			git_provider: o?.git_provider ?? null,
			plugins: i ?? null,
			parent_conversation_id: p ?? null,
			agent_type: h,
			sandbox_id: g ?? null,
			agent_profile_id: _ ?? null,
			trigger: "gui"
		});
		let [y, b] = await Promise.all([re.getSettings(), D.listProfiles().catch(() => void 0)]), x = I(y.title_llm_profile, b), S = T(), C = c().backend.host, w = await E(d ?? a(S, C)), O = d ? w : await E(s(C)), k = f ?? (d ? "local_repo" : "new_worktree"), j = await A({
			settings: y,
			query: n,
			conversationInstructions: r,
			plugins: i,
			conversationId: S,
			parentConversationId: p,
			workingDir: w,
			hooksProjectDir: O,
			worktree: k === "new_worktree",
			agentProfileId: _,
			agentProfileKind: v,
			titleLlmProfile: x
		}), M = await te(), N = await new e(u({ timeout: R })).createConversation({
			...j,
			...M ? { user_id: M } : {}
		}), P = l();
		if (!P) throw new ee();
		return (o?.selected_repository || d) && m(N.id, {
			selected_repository: o?.selected_repository ?? null,
			selected_branch: o?.selected_branch ?? null,
			git_provider: o?.git_provider ?? null,
			selected_workspace: d ?? null,
			workspace_mode: k
		}), {
			id: N.id,
			created_by_user_id: null,
			status: "READY",
			detail: null,
			app_conversation_id: N.id,
			agent_server_url: P.host,
			request: {
				initial_message: j.initial_message,
				plugins: i ?? null
			},
			created_at: N.created_at,
			updated_at: N.updated_at
		};
	}
	static async createLocalPlanningConversation(t, n) {
		if (c().backend.kind === "cloud") throw Error("Local planning conversations require a local backend.");
		let [r] = await this.batchGetAppConversations([t]), i = await j({
			workingDir: r?.workspace?.working_dir ?? o(),
			parentConversationId: t,
			parentActiveProfileName: r?.agent_kind === "openhands" ? r?.active_profile ?? null : null,
			parentAgentProfileId: r?.launched_agent_profile?.agent_profile_id ?? null,
			initialMessage: n
		}), a = await new e(u()).createConversation(i);
		return f(t, { local_planning_conversation_id: a.id }), P(a);
	}
	static async getLocalPlanningConversationIds(e) {
		if (c().backend.kind === "cloud") return [];
		let t = /* @__PURE__ */ new Set();
		try {
			let [n] = await this.batchGetAppConversations([e]), r = n?.sub_conversation_ids ?? [];
			if (r.length > 0) {
				let n = await this.batchGetAppConversations(r);
				for (let r of n) r && O(r, e) && t.add(r.id);
			}
		} catch (t) {
			console.warn(`Failed to read sub-conversations of ${e}`, t);
		}
		let n = d(e)?.local_planning_conversation_id;
		return n && t.add(n), [...t];
	}
	static async getStartTask(e) {
		return c().backend.kind === "cloud" ? y(e) : null;
	}
	static async getVSCodeUrl(e, t, n) {
		let i = await this.resolveConversationWorkingDir(e);
		return { vscode_url: await new r(u({
			conversationUrl: t,
			sessionApiKey: n
		})).getUrl({
			baseUrl: typeof window < "u" ? window.location.origin : void 0,
			workspaceDir: i
		}) };
	}
	static async getVSCodeStatus(e, t) {
		return new r(u({
			conversationUrl: e,
			sessionApiKey: t
		})).getStatus();
	}
	static async resolveConversationWorkingDir(e) {
		let [t] = await this.batchGetAppConversations([e]);
		return t?.workspace?.working_dir ?? o();
	}
	static async batchGetAppConversations(t) {
		return t.length === 0 ? [] : c().backend.kind === "cloud" ? g(t) : Q(await new e(u()).getConversations(t)).map((e) => P(e));
	}
	static async updateConversationPublicFlag(e, t) {
		if (c().backend.kind !== "cloud") throw Error("Public sharing requires a cloud backend.");
		return S(e, t);
	}
	static async updateConversationRepository(e, t, n, r) {
		t ? m(e, {
			...d(e) ?? {},
			selected_repository: t,
			selected_branch: n ?? null,
			git_provider: r ?? null
		}) : p(e);
		let [i] = await this.batchGetAppConversations([e]);
		return $(i, e);
	}
	static async readConversationFile(e, n) {
		if (c().backend.kind === "cloud") return b(e, X(n ?? "/workspace/project/.agents_tmp/PLAN.md", "/workspace/project"));
		let r = await this.resolveConversationWorkingDir(e), i = X(n ?? `${r}/.agents_tmp/PLAN.md`, r);
		return new t(u()).downloadTextFile(i);
	}
	static async downloadConversation(e) {
		return c().backend.kind === "cloud" ? v(e) : new t(u()).downloadTrajectory(e);
	}
	static async getHooks(e) {
		return M();
	}
	static async getRuntimeConversation(t, n, r) {
		let i = Z(await new e(u({
			conversationUrl: n,
			sessionApiKey: r
		})).getConversation(t));
		return {
			id: i.id,
			title: i.title?.trim() ? i.title : N(i.id),
			metrics: K(i.metrics),
			created_at: i.created_at,
			updated_at: i.updated_at,
			status: de(i.execution_status),
			stats: i.stats ?? { usage_to_metrics: {} }
		};
	}
	static async condenseConversation(t, n, r) {
		let a = c().backend;
		if (a.kind === "cloud" && n) {
			await h({
				backend: a,
				method: "POST",
				hostOverride: i(n),
				path: `/api/conversations/${t}/condense`,
				authMode: "session-api-key",
				sessionApiKey: r
			});
			return;
		}
		await new e(u({
			conversationUrl: n,
			sessionApiKey: r
		})).condenseConversation(t);
	}
	static async searchConversations(t = 20, n) {
		return c().backend.kind === "cloud" ? x(t, n) : F(le(await new e(u()).searchConversations({
			limit: t,
			page_id: n,
			sort_order: w.UPDATED_AT_DESC
		})));
	}
	static async deleteConversation(t) {
		if (c().backend.kind === "cloud") {
			await _(t), p(t);
			return;
		}
		let n = await this.getLocalPlanningConversationIds(t), r = new e(u());
		await Promise.all(n.map(async (e) => {
			try {
				await r.deleteConversation(e);
			} catch (t) {
				console.warn(`Failed to delete planning conversation ${e}`, t);
			}
			p(e);
		})), await r.deleteConversation(t), p(t);
	}
	static async updateConversationTitle(t, n) {
		if (c().backend.kind === "cloud") return C(t, n);
		await new e(u()).updateConversation(t, { title: n });
		let [r] = await this.batchGetAppConversations([t]);
		return $(r, t);
	}
	static async updateConversationTags(t, n) {
		await new e(u()).updateConversation(t, { tags: n });
		let [r] = await this.batchGetAppConversations([t]);
		return $(r, t);
	}
	static async forkConversation(t, n, r) {
		if (c().backend.kind === "cloud") throw Error("Branching a conversation isn't supported on the cloud backend yet.");
		let i = await new e(u()).forkConversation(t, {
			from_event_id: n,
			...r ? { title: r } : {}
		}), a = d(t);
		return a && m(i.id, a), i;
	}
	static async getEventParentId(t, n) {
		return (await new e(u()).getEvent(t, n)).parent_id ?? void 0;
	}
	static async switchProfile(t, r) {
		let { backend: i } = c();
		if (i.kind === "cloud") {
			if (!t) {
				await D.activateProfile(r);
				return;
			}
			await h({
				backend: i,
				method: "POST",
				path: `/api/v1/app-conversations/${t}/switch_profile`,
				body: { profile_name: r }
			});
			return;
		}
		if (!t) {
			await new n(u()).activateProfile(r);
			return;
		}
		let a = u(), o = new e(a), s = await new n(a).getProfile(r, { exposeSecrets: "encrypted" }), l = typeof s.config.model == "string" ? s.config.model : "";
		if (!l) throw Error(`Profile '${r}' has no model.`);
		await k({ llm: s.config }), await o.switchLLM(t, {
			...s.config,
			model: l,
			stream: !0,
			usage_id: `profile:${r}:${T()}`
		});
	}
	static async switchAcpModel(t, n) {
		let { backend: r } = c();
		if (r.kind === "cloud") {
			await h({
				backend: r,
				method: "POST",
				path: `/api/v1/app-conversations/${t}/switch_acp_model`,
				body: { model: n }
			});
			return;
		}
		await new e(u()).switchAcpModel(t, n);
	}
};
//#endregion
export { fe as default };

//# sourceMappingURL=agent-server-conversation-service.api.js.map