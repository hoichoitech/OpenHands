import { isSystemPromptEvent as e } from "../types/agent-server/type-guards.js";
import { redactCustomSecrets as t } from "./redact-custom-secrets.js";
//#region src/utils/system-message-adapter.ts
function n(n) {
	let r = n.find(e);
	if (!r) return null;
	let i = r.dynamic_context?.text;
	return {
		content: i ? `${r.system_prompt.text.trimEnd()}\n\n${t(i)}` : r.system_prompt.text,
		tools: r.tools ?? null,
		openhands_version: null,
		agent_class: null
	};
}
//#endregion
export { n as adaptSystemMessage };

//# sourceMappingURL=system-message-adapter.js.map