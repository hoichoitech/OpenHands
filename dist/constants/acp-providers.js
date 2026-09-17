import { I18nKey as e } from "../i18n/declaration.js";
import { getAcpProvider as t } from "../node_modules/@openhands/typescript-client/dist/models/acp.js";
import "../node_modules/@openhands/typescript-client/dist/index.js";
function n(e) {
	if (typeof e != "string") return null;
	let t = e.trim();
	return !t || t === "acp-managed" ? null : t;
}
function r(e) {
	for (let t of [
		e.runtimeName,
		e.runtimeId,
		e.configured,
		e.sdkLlm
	]) {
		let e = n(t);
		if (e) return e;
	}
	return e.providerDefault ?? null;
}
var i = {
	"claude-code": {
		icon: "claude-code",
		description_key: e.ONBOARDING$AGENT_CLAUDE_CODE_DESCRIPTION
	},
	codex: {
		icon: "codex",
		description_key: e.ONBOARDING$AGENT_CODEX_DESCRIPTION
	},
	"gemini-cli": {
		icon: "gemini",
		description_key: e.ONBOARDING$AGENT_GEMINI_CLI_DESCRIPTION
	}
};
function a(e) {
	return t(e)?.available_models?.map((e) => ({
		id: e.id,
		label: e.label
	}));
}
var o = Object.entries(i).map(([e, n]) => {
	let r = t(e);
	return {
		key: e,
		display_name: r?.display_name ?? e,
		default_command: r ? [...r.default_command] : [],
		available_models: a(e),
		default_model: r?.default_model ?? void 0,
		description_key: n.description_key,
		icon: n.icon
	};
});
e.ONBOARDING$ACP_SECRET_FILE_BLOB_HINT, e.ONBOARDING$ACP_SECRET_OAUTH_TOKEN_HINT, e.ONBOARDING$ACP_SECRET_FILE_BLOB_HINT, e.ONBOARDING$ACP_SECRET_GCP_PROJECT_HINT, e.ONBOARDING$ACP_SECRET_GCP_LOCATION_HINT, e.ONBOARDING$ACP_SECRET_VERTEXAI_FLAG_HINT;
var s = "gemini-2.5-pro";
function c(e) {
	return e === "gemini-cli" ? s : l(e)?.default_model ?? null;
}
function l(e) {
	if (e) return o.find((t) => t.key === e);
}
function u(e) {
	let t = l(e);
	return t ? t.display_name : null;
}
function d(e) {
	return l(e)?.icon ?? "cli-generic";
}
function f(e, t) {
	return t ? l(e)?.available_models?.find((e) => e.id === t)?.label ?? t : null;
}
//#endregion
export { c as getAcpPreferredDefaultModel, l as getAcpProvider, u as getAcpProviderDisplayName, f as labelForAcpModel, d as resolveAcpProviderIcon, r as resolveEffectiveAcpModel };

//# sourceMappingURL=acp-providers.js.map