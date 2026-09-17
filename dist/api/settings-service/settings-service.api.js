import { SettingsClient as e } from "../../node_modules/@openhands/typescript-client/dist/client/settings-client.js";
import "../../node_modules/@openhands/typescript-client/dist/clients.js";
import { getActiveBackend as t } from "../backend-registry/active-store.js";
import { getAgentServerClientOptions as n } from "../agent-server-client-options.js";
import { DEFAULT_SETTINGS as r } from "../../services/settings.js";
import { stringRecord as i } from "../../utils/mcp-config.js";
import { fetchCloudConversationSettingsSchema as a, fetchCloudSettings as o, fetchCloudSettingsSchema as s, saveCloudSettings as c } from "../cloud/settings-service.api.js";
//#region src/api/settings-service/settings-service.api.ts
var l = [
	"language",
	"user_consents_to_analytics",
	"enable_sound_notifications",
	"git_user_name",
	"git_user_email",
	"title_llm_profile",
	"disabled_skills",
	"enabled_skills"
], u = new Set(l), d = (e) => u.has(e), f = (e) => {
	let t = {}, n = {};
	for (let [r, i] of Object.entries(e)) d(r) ? t[r] = i : n[r] = i;
	return {
		extracted: t,
		rest: n
	};
}, p = (e) => JSON.parse(JSON.stringify(e)), m = (e, t) => ({
	...e ?? {},
	...t ?? {}
});
async function h(e, t = 3, n = 500) {
	for (let r = 0; r < t; r += 1) try {
		return await e();
	} catch (e) {
		if (r >= t - 1) throw e;
		let i = n * 2 ** r;
		await new Promise((e) => {
			setTimeout(e, i);
		});
	}
	throw Error("Retry attempts exhausted");
}
var g = {
	redacted: null,
	encrypted: null,
	timestamp: 0
}, _ = 300 * 1e3, v = () => Date.now() - g.timestamp < _, y = () => {
	g = {
		redacted: null,
		encrypted: null,
		timestamp: 0
	};
}, b = (e) => !!e && typeof e == "object" && !Array.isArray(e), x = (e, t) => `Basic ${btoa(`${e}:${t}`)}`, S = (e) => {
	switch (e.strategy) {
		case "none": return {};
		case "api_key": {
			if (typeof e.value != "string" || !e.value) return null;
			let t = typeof e.header_name == "string" && e.header_name ? e.header_name : "Authorization", n = t === "Authorization" ? `Bearer ${e.value}` : e.value;
			return { [t]: n };
		}
		case "bearer": return typeof e.value != "string" || !e.value ? null : { Authorization: `Bearer ${e.value}` };
		case "basic": return typeof e.username != "string" || typeof e.password != "string" ? null : { Authorization: x(e.username, e.password) };
		case "header": return i(e.headers) ?? {};
		case "oauth2": {
			let t = b(e.state) ? e.state.tokens : void 0;
			return !b(t) || typeof t.access_token != "string" ? null : { Authorization: `Bearer ${t.access_token}` };
		}
		default: return null;
	}
}, C = async (e) => {
	if (!b(e)) return e;
	let n = b(e.mcpServers), r = n ? e.mcpServers : e, a = Object.values(r).some((e) => b(e) && b(e.auth) && e.auth !== null) && t().backend.kind === "cloud", s = /* @__PURE__ */ new Map();
	if (a) try {
		let e = await o(), t = b(e.mcp_config) ? e.mcp_config : {};
		for (let [e, n] of Object.entries(t)) if (b(n)) {
			let t = i(n.headers);
			t && s.set(e, t);
		}
	} catch {}
	let c = Object.fromEntries(Object.entries(r).map(([e, t]) => {
		if (!b(t)) return [e, t];
		if (t.auth === null) {
			let n = {
				...t,
				headers: null
			};
			return delete n.auth, [e, n];
		}
		if (!b(t.auth)) return [e, t];
		let n = S(t.auth);
		if (n === null) return [e, t];
		let r = { ...t }, a = {
			...i(t.headers) ?? {},
			...n
		}, o = s.get(e);
		if (o) for (let e of Object.keys(o)) e in a || (a[e] = null);
		return delete r.auth, Object.keys(a).length > 0 ? r.headers = a : delete r.headers, [e, r];
	}));
	return n ? {
		...e,
		mcpServers: c
	} : c;
}, w = (e) => {
	let t = e.misc_settings?.app_preferences, n = t?.disabled_skills, r = t?.enabled_skills;
	return {
		disabledSkills: Array.isArray(n) ? n : [],
		enabledSkills: Array.isArray(r) ? r : void 0
	};
}, T = (e) => {
	let t = {
		agent_settings: e.agent_settings ?? {},
		conversation_settings: e.conversation_settings ?? {},
		llm_api_key_set: e.llm_api_key_is_set
	}, n = e.misc_settings?.app_preferences;
	if (n) for (let e of l) {
		let r = n[e];
		r !== void 0 && (t[e] = r);
	}
	return t;
}, E = (e) => {
	let t = m(r.agent_settings ?? {}, e.agent_settings ?? {}), n = m(r.conversation_settings ?? {}, e.conversation_settings ?? {}), i = {
		...p(r),
		...e,
		provider_tokens_set: {
			...r.provider_tokens_set ?? {},
			...e.provider_tokens_set ?? {}
		},
		agent_settings: t,
		conversation_settings: n
	}, a = t.llm, o = t.condenser;
	return typeof t.agent == "string" && (i.agent = t.agent), typeof a?.model == "string" && a.model.length > 0 && (i.llm_model = a.model), typeof a?.base_url == "string" && (i.llm_base_url = a.base_url), typeof o?.enabled == "boolean" && (i.enable_default_condenser = o.enabled), typeof o?.max_size == "number" && (i.condenser_max_size = o.max_size), typeof n.confirmation_mode == "boolean" && (i.confirmation_mode = n.confirmation_mode), (typeof n.security_analyzer == "string" || n.security_analyzer === null) && (i.security_analyzer = n.security_analyzer), typeof n.max_iterations == "number" && (i.max_iterations = n.max_iterations), i.search_api_key_set = !!i.search_api_key, i;
}, D = class r {
	static async fetchSettingsFromApi(t) {
		return h(() => new e(n()).getSettings({ exposeSecrets: t }));
	}
	static async getSettings() {
		if (t().backend.kind === "cloud") try {
			return E(await h(() => o()));
		} catch (e) {
			return console.warn("Failed to fetch cloud settings, using defaults:", e), E({});
		}
		if (v() && g.redacted) return E(T(g.redacted));
		try {
			let e = await this.fetchSettingsFromApi();
			return g.redacted = e, g.timestamp = Date.now(), E(T(e));
		} catch (e) {
			return console.warn("Failed to fetch settings from API, using defaults:", e), E({});
		}
	}
	static async getSettingsForConversation() {
		if (v() && g.encrypted) return {
			agentSettings: g.encrypted.agent_settings,
			conversationSettings: g.encrypted.conversation_settings,
			secretsEncrypted: !0,
			skillEnablement: w(g.encrypted)
		};
		let e = await this.fetchSettingsFromApi("encrypted");
		return g.encrypted = e, g.timestamp ||= Date.now(), {
			agentSettings: e.agent_settings,
			conversationSettings: e.conversation_settings,
			secretsEncrypted: !0,
			skillEnablement: w(e)
		};
	}
	static async getSettingsSchema() {
		return t().backend.kind === "cloud" ? await s() : await new e(n()).getAgentSchema();
	}
	static async getConversationSettingsSchema() {
		return t().backend.kind === "cloud" ? await a() : await new e(n()).getConversationSchema();
	}
	static async patchMcpConfig(r) {
		if (t().backend.kind === "cloud") {
			let e = await C(r);
			await h(() => c({ agent_settings_diff: { mcp_config: e } }));
		} else await h(() => new e(n()).updateSettings({ agent_settings_diff: { mcp_config: r } }));
		return y(), !0;
	}
	static async patchMcpServer(i, a) {
		return t().backend.kind === "cloud" ? r.patchMcpConfig({ [i]: a }) : (await h(() => new e(n()).patchMcpServer(i, a)), y(), !0);
	}
	static async createMcpServer(i, a) {
		return t().backend.kind === "cloud" ? r.patchMcpConfig({ [i]: a }) : (await h(() => new e(n()).createMcpServer(i, a)), y(), !0);
	}
	static async deleteMcpServer(i) {
		return t().backend.kind === "cloud" ? r.patchMcpConfig({ [i]: null }) : (await h(() => new e(n()).deleteMcpServer(i)), y(), !0);
	}
	static async saveSettings(r) {
		let { extracted: i, rest: a } = f(r), o = Object.keys(i).length > 0, s = {}, l = a.agent_settings_diff;
		l && Object.keys(l).length > 0 && (s.agent_settings_diff = l);
		let u = a.conversation_settings_diff;
		if (u && Object.keys(u).length > 0 && (s.conversation_settings_diff = u), o && (s.misc_settings_diff = { app_preferences: i }), t().backend.kind === "cloud") {
			if (!(s.agent_settings_diff || s.conversation_settings_diff || o)) return !0;
			let e = {};
			s.agent_settings_diff && (e.agent_settings_diff = { ...s.agent_settings_diff }, "mcp_config" in e.agent_settings_diff && (e.agent_settings_diff.mcp_config = await C(e.agent_settings_diff.mcp_config))), s.conversation_settings_diff && (e.conversation_settings_diff = s.conversation_settings_diff), o && (e.app_preferences = i), await h(() => c(e));
		} else {
			if (!(s.agent_settings_diff || s.conversation_settings_diff || s.misc_settings_diff)) return !0;
			await h(() => new e(n()).updateSettings(s));
		}
		return y(), !0;
	}
	static invalidateCache() {
		y();
	}
};
//#endregion
export { D as default };

//# sourceMappingURL=settings-service.api.js.map