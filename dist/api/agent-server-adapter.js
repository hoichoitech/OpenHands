import { ExecutionStatus as e } from "../types/agent-server/core/base/common.js";
import { ServerClient as t } from "../node_modules/@openhands/typescript-client/dist/client/server-client.js";
import "../node_modules/@openhands/typescript-client/dist/clients.js";
import { getAgentServerWorkingDir as n } from "./agent-server-config.js";
import { getEffectiveLocalBackend as r } from "./backend-registry/active-store.js";
import { getAgentServerClientOptions as i } from "./agent-server-client-options.js";
import { getCachedAgentServerInfo as a, isAgentServerToolAvailable as o } from "./agent-server-compatibility.js";
import { CANVAS_UI_CLIENT_TOOL_NAME as s, LEGACY_CANVAS_UI_TOOL_NAME as c } from "../constants/canvas-ui.js";
import { LAUNCH_CHILD_CONVERSATION_TOOL_NAME as l } from "../constants/child-conversation.js";
import { getStoredConversationMetadata as u } from "./conversation-metadata-store.js";
import { ACP_SETTINGS_KEYS as d } from "../node_modules/@openhands/typescript-client/dist/models/acp.js";
import "../node_modules/@openhands/typescript-client/dist/index.js";
import f from "../node_modules/@openhands/extensions/skills/index.js";
import { DEFAULT_SETTINGS as p } from "../services/settings.js";
import { getAcpPreferredDefaultModel as m, getAcpProvider as ee, resolveEffectiveAcpModel as h } from "../constants/acp-providers.js";
import { buildAuthHeaders as te } from "./backend-registry/auth.js";
import { combineUsageMetrics as g } from "../utils/conversation-metrics.js";
import { buildSkillEnablementFilter as _, findInvokedCatalogSkill as v, toSkillEnablement as y } from "../utils/skill-enablement.js";
import b from "./settings-service/settings-service.api.js";
import { LLM_AUTH_TYPE_SUBSCRIPTION as ne, OPENAI_SUBSCRIPTION_VENDOR as re, isSubscriptionLlmConfig as x } from "../constants/llm-subscription.js";
import ie from "./llm-subscription-service.js";
import { CANVAS_UI_CLIENT_TOOL as S } from "./canvas-ui-client-tool.js";
import { LAUNCH_CHILD_CONVERSATION_CLIENT_TOOL as C } from "./launch-child-conversation-client-tool.js";
import { LOCAL_PLANNER_PARENT_TAG_KEY as w, PLANNING_AGENT_INSTRUCTION as T, PLANNING_FILE_EDITOR_TOOL_NAME as ae, PLANNING_SYSTEM_PROMPT_FILENAME as oe, PLAN_STRUCTURE_TEXT as se, buildPlanPath as ce } from "../utils/plan-file.js";
//#region src/api/agent-server-adapter.ts
var E = [
	"terminal",
	"file_editor",
	"task_tracker"
], D = "browser_tool_set", O = "task_tool_set", k = 500;
function A(e) {
	return typeof e == "number" ? e : k;
}
function le() {
	return !0;
}
function j(e) {
	if (typeof e == "string") {
		let t = e.trim();
		if (!t) return null;
		try {
			return j(JSON.parse(t));
		} catch {
			return null;
		}
	}
	if (!e || typeof e != "object" || Array.isArray(e)) return null;
	let t = e;
	return !t.services || typeof t.services != "object" ? null : t;
}
async function ue() {
	let e;
	try {
		e = i({ timeout: 3e3 });
	} catch {
		return null;
	}
	let n = j(a({ host: e.host })?.runtime_services);
	if (n) return n;
	try {
		return j((await new t(e).getServerInfo()).runtime_services);
	} catch {
		return null;
	}
}
function de(e) {
	let t = j(e);
	if (!t?.services) return;
	let n = [];
	n.push("<RUNTIME_SERVICES>"), t.mode ? n.push(`You are running inside an agent-canvas dev stack started in '${t.mode}' mode.`) : n.push("You are running inside an agent-canvas dev stack."), n.push("The following services are reachable from your sandbox. URLs are written", "from your point of view (i.e., as you should curl/fetch them).", "");
	let { agent_server: r, ingress: i, automation: a } = t.services, { frontend: o } = t.services;
	r?.url_from_agent && n.push(`* Agent Server (you): ${r.url_from_agent}`, `    ${r.description ?? "The agent-server hosting your tool calls."}`), i?.url_from_agent && n.push(`* Ingress: ${i.url_from_agent}`, `    ${i.description ?? "Unified entry point for browser-facing traffic."}`), o?.url_from_agent && n.push(`* Frontend: ${o.url_from_agent}`, `    ${o.description ?? "Frontend dev server."}`), a?.url_from_agent ? (n.push(`* Automation backend: ${a.url_from_agent}`, `    ${a.description ?? "OpenHands Automations service."}`), a.docs_url && n.push(`    Docs:    ${a.docs_url}`), a.openapi_url && n.push(`    OpenAPI: ${a.openapi_url}`), a.auth_env_var && n.push(`    Auth:    header 'X-Session-API-Key: $${a.auth_env_var}'`)) : n.push("* Automation backend: not running in this dev mode (skip /api/automation calls).");
	let s = r?.url_from_agent;
	return n.push("", "Trust this block over guessing: do not assume any other URLs are running."), s && n.push(`In particular, ${s} inside your sandbox is the Agent Server`, "you are running inside of — NOT the automation backend."), n.push("</RUNTIME_SERVICES>"), n.join("\n");
}
function fe(e) {
	let { host: t } = i();
	return `${t}/api/conversations/${e}`;
}
function M(e) {
	return `Conversation ${e.slice(0, 5)}`;
}
function N(t) {
	let r = u(t.id), a = t.agent?.kind === "ACPAgent", o = a ? t.tags?.acpserver ?? t.agent?.acp_server ?? null : null;
	return {
		id: t.id,
		created_by_user_id: null,
		selected_repository: r?.selected_repository ?? null,
		selected_branch: r?.selected_branch ?? null,
		git_provider: r?.git_provider ?? null,
		selected_workspace: r?.selected_workspace ?? null,
		active_profile: r?.active_profile ?? null,
		title: t.title?.trim() ? t.title : M(t.id),
		trigger: null,
		pr_number: [],
		agent_kind: a ? "acp" : "openhands",
		acp_server: o,
		tags: t.tags ?? null,
		launched_agent_profile: t.launched_agent_profile ?? null,
		llm_model: a ? h({
			runtimeName: t.current_model_name,
			runtimeId: t.current_model_id,
			configured: t.agent?.acp_model,
			sdkLlm: t.agent?.llm?.model
		}) : t.agent?.llm?.model ?? p.llm_model,
		metrics: t.metrics ? {
			accumulated_cost: t.metrics.accumulated_cost ?? null,
			max_budget_per_task: t.metrics.max_budget_per_task ?? null,
			accumulated_token_usage: t.metrics.accumulated_token_usage ? {
				prompt_tokens: t.metrics.accumulated_token_usage.prompt_tokens ?? 0,
				completion_tokens: t.metrics.accumulated_token_usage.completion_tokens ?? 0,
				cache_read_tokens: t.metrics.accumulated_token_usage.cache_read_tokens ?? 0,
				cache_write_tokens: t.metrics.accumulated_token_usage.cache_write_tokens ?? 0,
				context_window: t.metrics.accumulated_token_usage.context_window ?? 0,
				per_turn_token: t.metrics.accumulated_token_usage.per_turn_token ?? 0
			} : null
		} : g(t.stats),
		created_at: t.created_at,
		updated_at: t.updated_at,
		execution_status: t.execution_status ?? e.IDLE,
		sandbox_status: t.sandbox_status ?? null,
		conversation_url: fe(t.id),
		session_api_key: i().apiKey ?? null,
		sandbox_id: null,
		workspace: { working_dir: t.workspace?.working_dir ?? n() },
		public: !1,
		sub_conversation_ids: t.sub_conversation_ids ?? []
	};
}
function pe(e) {
	return {
		items: e.items.filter((e) => !e.tags?.[w]).map(N),
		next_page_id: e.next_page_id ?? null
	};
}
var P = "acpserver", F = "clientsource", I = "agentcanvas", L = "automationtrigger", R = "automationid", z = "automationname", B = "automationrunid", me = [
	L,
	R,
	z,
	B
], V = new Set([
	P,
	F,
	L,
	R,
	z,
	B,
	"title",
	"git_provider",
	"repo_name",
	"repo",
	"repository",
	"selected_branch",
	"branch",
	"archiveworkspacepath",
	"workspace",
	"working_dir",
	w
]), he = ["origin"];
function ge(e) {
	if (!e) return [];
	let t = (e) => {
		let t = he.indexOf(e.trim().toLowerCase());
		return t === -1 ? Infinity : t;
	};
	return Object.entries(e).filter(([e, t]) => !V.has(e.trim().toLowerCase()) && typeof t == "string" && (t === "" || t.trim().length > 0)).sort(([e], [n]) => {
		let r = t(e), i = t(n);
		return r === i ? e.localeCompare(n) : r - i;
	});
}
var _e = "gAAAAA", ve = new Set([
	"schema_version",
	"agent_settings",
	"workspace",
	"conversation_id",
	"initial_message",
	"plugins"
]);
function H(e) {
	return !e || typeof e != "object" || Array.isArray(e) ? {} : structuredClone(e);
}
function U(e) {
	if (typeof e != "string") return;
	let t = e.trim();
	return t.length > 0 ? t : void 0;
}
function W(e) {
	let t = H(e);
	t.model = typeof t.model == "string" && t.model.trim().length > 0 ? t.model : p.llm_model;
	let n = U(t.api_key);
	n ? t.api_key = n : delete t.api_key;
	let r = U(t.base_url);
	return r ? t.base_url = r : delete t.base_url, x(t) ? (t.auth_type = ne, t.subscription_vendor = re, delete t.api_key) : (delete t.auth_type, delete t.subscription_vendor), t;
}
function G(e) {
	return !!e && typeof e == "object" && !Array.isArray(e);
}
function K(e) {
	return typeof e == "string" ? e.startsWith(_e) : Array.isArray(e) ? e.some(K) : G(e) ? Object.values(e).some(K) : !1;
}
function ye(e) {
	return G(e) ? Object.values(e).some(K) : !1;
}
function be(e) {
	return e.confirmation_mode === !0 ? e.security_analyzer === "llm" ? {
		kind: "ConfirmRisky",
		threshold: "HIGH",
		confirm_unknown: !0
	} : { kind: "AlwaysConfirm" } : { kind: "NeverConfirm" };
}
function xe(e) {
	switch (e.security_analyzer) {
		case "llm": return { kind: "LLMSecurityAnalyzer" };
		case "pattern": return { kind: "PatternSecurityAnalyzer" };
		case "policy_rail": return { kind: "PolicyRailSecurityAnalyzer" };
		default: return;
	}
}
function Se(e) {
	return !!e && typeof e == "object" && !Array.isArray(e) && typeof e.name == "string";
}
function q(e, t) {
	return e === D ? le() && o(e) : e === O ? t.enable_sub_agents === !0 && o(e) : !0;
}
function Ce(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of E) q(n, e) && t.set(n, {
		name: n,
		params: {}
	});
	for (let n of [D, O]) q(n, e) && t.set(n, {
		name: n,
		params: {}
	});
	let n = e.tools;
	if (Array.isArray(n) && n.every((e) => Se(e))) for (let r of n) q(r.name, e) && t.set(r.name, {
		name: r.name,
		params: H(r.params)
	});
	return Array.from(t.values());
}
function J(e, t) {
	let n = [e?.trim(), t?.trim()].filter(Boolean);
	return n.length === 0 ? null : {
		role: "user",
		content: [{
			type: "text",
			text: n.join("\n\n")
		}],
		run: !0
	};
}
function we() {
	return f.map((e) => {
		let t = e.triggers?.length > 0 ? {
			type: "keyword",
			keywords: e.triggers
		} : null;
		return {
			name: e.name,
			content: e.content,
			trigger: t,
			source: "public",
			description: e.description ?? null,
			is_agentskills_format: !0,
			...e.license ? { license: e.license } : {},
			...e.compatibility ? { compatibility: e.compatibility } : {}
		};
	});
}
function Y(e, t, n = {}, r) {
	let i = de(t), a = H(e.agent_context), o = Array.isArray(a.skills) ? a.skills : [], s = n.disabledSkills ?? [], c = new Set(s), l = _(n), u = [...o.filter((e) => typeof e.name != "string" || !c.has(e.name)), ...we().filter((e) => e.name === r || l(e.name))];
	return {
		...a,
		skills: u,
		load_public_skills: !1,
		load_user_skills: !0,
		load_project_skills: !0,
		disabled_skills: s,
		...i ? { system_message_suffix: i } : {}
	};
}
function X(e) {
	return H(e.agent_settings).agent_kind === "acp";
}
function Te(e) {
	let t = H(e.agent_settings).acp_server;
	return typeof t == "string" && t.length > 0 ? t : void 0;
}
function Ee(e) {
	let t = e.acp_command;
	if (!(Array.isArray(t) && t.length === 0) && t !== void 0) return t;
	let n = ee(typeof e.acp_server == "string" ? e.acp_server : void 0);
	return n ? [...n.default_command] : t;
}
function De(e, t, n) {
	let r = H(e.agent_settings), i = {
		agent_kind: "acp",
		agent_context: Y(r, t, y(e), v(n))
	};
	for (let e of d) {
		if (e === "acp_model" || e === "acp_env") continue;
		let t = e === "acp_command" ? Ee(r) : r[e];
		t != null && (i[e] = t);
	}
	let a = H(r.mcp_config);
	Object.keys(a).length > 0 && (i.mcp_config = a);
	let o = typeof r.acp_server == "string" ? r.acp_server : void 0, s = h({
		configured: r.acp_model,
		providerDefault: m(o)
	});
	return s && (i.acp_model = s), i;
}
function Oe(e, t, n) {
	let r = H(e.agent_settings), i = W(r.llm);
	i.stream = !0;
	let a = H(r.mcp_config);
	Object.keys(a).length === 0 && delete r.mcp_config, delete r.acp_server;
	for (let e of d) delete r[e];
	return delete r.acp_env, {
		...r,
		llm: i,
		agent_context: Y(r, t, y(e), v(n)),
		tools: Ce(r)
	};
}
function ke(e, t, n) {
	return X(e) ? De(e, t, n) : Oe(e, t, n);
}
function Ae(e) {
	let { settings: t, query: r, conversationInstructions: i, plugins: a, workingDir: o } = e, s = H(t.conversation_settings), c = J(r, i);
	return ve.forEach((e) => delete s[e]), {
		...s,
		workspace: {
			kind: "LocalWorkspace",
			working_dir: o ?? n()
		},
		...c ? { initial_message: c } : {},
		...a?.length ? { plugins: a.map((e) => ({
			source: e.source,
			...e.ref ? { ref: e.ref } : {},
			...e.repo_path ? { repo_path: e.repo_path } : {}
		})) } : {}
	};
}
function Z(e) {
	if (!e?.length) return;
	let t = r(), n = t ? te(t) : {}, i = {};
	for (let t of e) {
		let e = {
			kind: "LookupSecret",
			url: `/api/settings/secrets/${encodeURIComponent(t.name)}`,
			description: t.description
		};
		Object.keys(n).length > 0 && (e.headers = n), i[t.name] = e;
	}
	return i;
}
function je(e) {
	let t = e.encryptedAgentSettings ? {
		...e.settings,
		agent_settings: e.encryptedAgentSettings
	} : e.settings, n = X(t), r = e.agentProfileId ? e.agentProfileKind : n ? "acp" : "openhands", i = ke(t, e.runtimeServicesInfo, e.query), a = n ? Te(t) : void 0, o = Ae(e.encryptedConversationSettings ? {
		...e,
		settings: {
			...e.settings,
			conversation_settings: e.encryptedConversationSettings
		}
	} : e), u = {
		...e.agentProfileId ? { agent_profile_id: e.agentProfileId } : { agent_settings: i },
		workspace: o.workspace,
		client_tools: r === "openhands" ? [S, C] : [],
		confirmation_policy: be(o),
		max_iterations: A(o.max_iterations),
		stuck_detection: !0,
		autotitle: !0,
		...e.titleLlmProfile ? { title_llm_profile: e.titleLlmProfile } : {},
		worktree: e.worktree ?? !0
	};
	!e.agentProfileId && a ? u.tags = {
		[P]: a,
		[F]: I
	} : u.tags = { [F]: I }, !e.agentProfileId && e.secretsEncrypted && (!n || ye(i.mcp_config)) && (u.secrets_encrypted = !0), e.conversationId && (u.conversation_id = e.conversationId), e.parentConversationId && (u.parent_conversation_id = e.parentConversationId);
	let d = xe(o);
	d && (u.security_analyzer = d), o.initial_message && (u.initial_message = o.initial_message), o.plugins && (u.plugins = o.plugins), o.hook_config ? u.hook_config = o.hook_config : e.workspaceHookConfig && (u.hook_config = e.workspaceHookConfig);
	let f = { ...o.tool_module_qualnames ?? {} };
	delete f[c], delete f[s], delete f[l], Object.keys(f).length > 0 && (u.tool_module_qualnames = f), o.agent_definitions && (u.agent_definitions = o.agent_definitions);
	let p = Z(e.customSecrets);
	return p && (u.secrets = p), u;
}
function Me(e) {
	let t = H(e.encryptedAgentSettings), n = W(t.llm);
	n.stream = !0;
	let r = ce(e.workingDir), i = Y(t, void 0, e.skillEnablement), a = i.system_message_suffix;
	i.system_message_suffix = typeof a == "string" ? `${T}\n\n${a}` : T;
	let o = J(e.initialMessage), s = {
		agent: {
			kind: "Agent",
			llm: n,
			tools: [
				{
					name: "glob",
					params: {}
				},
				{
					name: "grep",
					params: {}
				},
				{
					name: ae,
					params: { plan_path: r }
				}
			],
			system_prompt_filename: oe,
			system_prompt_kwargs: { plan_structure: se },
			agent_context: i,
			condenser: {
				kind: "LLMSummarizingCondenser",
				llm: {
					...n,
					usage_id: "planning_condenser"
				},
				max_size: 100,
				keep_first: 6
			}
		},
		workspace: {
			kind: "LocalWorkspace",
			working_dir: e.workingDir
		},
		client_tools: [],
		confirmation_policy: { kind: "NeverConfirm" },
		max_iterations: e.maxIterations ?? k,
		stuck_detection: !0,
		autotitle: !1,
		worktree: !1,
		parent_conversation_id: e.parentConversationId,
		tags: { [w]: e.parentConversationId },
		...o ? { initial_message: o } : {}
	};
	e.secretsEncrypted && (s.secrets_encrypted = !0);
	let c = Z(e.customSecrets);
	return c && (s.secrets = c), s;
}
async function Q(e) {
	try {
		let { default: t } = await import("./profiles-service/profiles-service.api.js"), n = await t.getProfile(e, "encrypted");
		return G(n.config) ? n.config : null;
	} catch (t) {
		return console.warn(`Falling back: could not resolve LLM profile ${e}`, t), null;
	}
}
async function Ne(e) {
	try {
		let { default: t } = await import("./agent-profiles-service/agent-profiles-service.api.js"), { profiles: n } = await t.listProfiles(), r = n.find((t) => t.id === e && t.llm_profile_ref);
		return r?.llm_profile_ref ? await Q(r.llm_profile_ref) : null;
	} catch (t) {
		return console.warn(`Falling back to global agent settings: could not resolve the LLM for agent profile ${e}`, t), null;
	}
}
async function Pe(e) {
	let { SecretsService: t } = await import("./secrets-service.js"), [n, r] = await Promise.all([b.getSettingsForConversation(), t.getSecrets()]), i = (e.parentActiveProfileName ? await Q(e.parentActiveProfileName) : null) ?? (e.parentAgentProfileId ? await Ne(e.parentAgentProfileId) : null), a = i ? {
		...n.agentSettings,
		llm: i
	} : n.agentSettings;
	await $(a);
	let o = A(n.conversationSettings.max_iterations);
	return Me({
		...e,
		encryptedAgentSettings: a,
		secretsEncrypted: n.secretsEncrypted,
		customSecrets: r,
		maxIterations: o,
		skillEnablement: n.skillEnablement
	});
}
var Fe = "Connect your ChatGPT subscription before starting a conversation with this LLM profile.";
async function $(e) {
	if (x(H(e.llm)) && !(await ie.getOpenAIStatus()).connected) throw Error(Fe);
}
async function Ie(e) {
	let [{ SecretsService: t }, { default: n }] = await Promise.all([import("./secrets-service.js"), import("./hooks-service.js")]), [r, i, a, o] = await Promise.all([
		b.getSettingsForConversation(),
		t.getSecrets(),
		ue(),
		n.loadWorkspaceHooks(e.hooksProjectDir)
	]), { agentSettings: s, conversationSettings: c, secretsEncrypted: l } = r;
	return e.agentProfileId || await $(s), je({
		...e,
		encryptedAgentSettings: s,
		encryptedConversationSettings: c,
		secretsEncrypted: l,
		customSecrets: i,
		runtimeServicesInfo: a,
		workspaceHookConfig: o
	});
}
function Le() {
	return { hooks: [] };
}
//#endregion
export { z as AUTOMATION_NAME_TAG_KEY, me as AUTOMATION_TAG_KEYS, V as RESERVED_CONVERSATION_TAG_KEYS, $ as assertSubscriptionAuthReady, Ie as buildStartConversationRequestWithEncryptedSettings, Pe as buildStartPlanningConversationRequestWithEncryptedSettings, Le as emptyHooksResponse, M as getDefaultConversationTitle, ge as getDisplayConversationTags, N as toAppConversation, pe as toConversationPage };

//# sourceMappingURL=agent-server-adapter.js.map