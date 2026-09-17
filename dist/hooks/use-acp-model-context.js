import { useTranslation as e } from "../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../i18n/declaration.js";
import { useActiveBackend as n } from "../contexts/active-backend-context.js";
import { useSettings as r } from "./query/use-settings.js";
import { useActiveConversation as i } from "./query/use-active-conversation.js";
import { useActiveAgentKind as a } from "./use-active-agent-profile.js";
//#region src/hooks/use-acp-model-context.ts
var o = "/settings/agents", s = "/settings/llm";
function c() {
	let { t: c } = e("openhands"), { backend: l } = n(), { data: u } = i(), { data: d } = r(), f = a(), p = u?.agent_kind === "acp", m = !u && (f ?? d?.agent_settings?.agent_kind) === "acp", h = p || m;
	return {
		isActiveAcpConversation: p,
		isHomeAcp: m,
		isAcpContext: h,
		destinationPath: h ? o : s,
		destinationLabel: c(h ? t.SETTINGS$NAV_AGENT : l.kind === "cloud" ? t.SETTINGS$LLM_SETTINGS : t.SETTINGS$LLM_PROFILES)
	};
}
//#endregion
export { c as useAcpModelContext };

//# sourceMappingURL=use-acp-model-context.js.map