import { getProviderId as e } from "./map-provider.js";
//#region src/utils/settings-utils.ts
var t = (t) => {
	let n = t.get("llm-provider-input")?.toString(), r = n ? e(n) : void 0, i = t.get("llm-model-input")?.toString();
	return {
		llmModel: r && i ? `${r}/${i}` : void 0,
		llmApiKey: t.get("llm-api-key-input")?.toString(),
		agent: t.get("agent")?.toString(),
		language: t.get("language")?.toString()
	};
}, n = (e) => {
	let { llmModel: n, llmApiKey: r, agent: i, language: a } = t(e), o = {};
	n && (o.model = n), r !== void 0 && (o.api_key = r);
	let s = {};
	return Object.keys(o).length > 0 && (s.llm = o), i && (s.agent = i), {
		...Object.keys(s).length > 0 ? { agent_settings_diff: s } : {},
		...a ? { language: a } : {}
	};
};
function r(e, t) {
	return !!(t?.hide_llm_settings && e === "/settings/llm");
}
//#endregion
export { n as extractSettings, r as isSettingsPageHidden };

//# sourceMappingURL=settings-utils.js.map