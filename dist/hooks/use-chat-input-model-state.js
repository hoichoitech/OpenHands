import { useOptionalConversationId as e } from "./use-conversation-id.js";
import { useActiveBackend as t } from "../contexts/active-backend-context.js";
import { getAcpPreferredDefaultModel as n, getAcpProvider as r, labelForAcpModel as i, resolveEffectiveAcpModel as a } from "../constants/acp-providers.js";
import { useSettings as o } from "./query/use-settings.js";
import { useActiveConversation as s } from "./query/use-active-conversation.js";
import { useAcpModelContext as c } from "./use-acp-model-context.js";
import { useCanManageOrgProfiles as l } from "./use-can-manage-org-profiles.js";
import { useActiveAcpProfileDetail as u } from "./query/use-active-acp-profile-detail.js";
//#region src/hooks/use-chat-input-model-state.ts
function d() {
	let { data: d } = s(), { data: f } = o(), { conversationId: p } = e(), { backend: m } = t(), h = l(), g = u(), { isActiveAcpConversation: _, isHomeAcp: v, isAcpContext: y, destinationPath: b, destinationLabel: x } = c(), S = typeof f?.agent_settings?.acp_server == "string" ? f.agent_settings.acp_server : null, C = _ ? d?.acp_server : v ? g?.acp_server ?? S : null, w = y ? r(C) : void 0, T = typeof f?.agent_settings?.acp_model == "string" ? f.agent_settings.acp_model : null, E = v && g ? g.acp_model : T, D = null;
	D = _ ? d?.llm_model ?? a({
		configured: E,
		providerDefault: n(C)
	}) : v ? a({
		configured: E,
		providerDefault: n(C)
	}) : d?.llm_model ?? f?.llm_model ?? null;
	let O = D && y ? i(C, D) ?? D : D, k = w?.available_models ?? [], A = !v || m.kind !== "cloud" || h, j = y && k.length > 0 && A;
	return {
		isAcpContext: y,
		displayModel: O,
		currentModelId: D,
		availableAcpModels: k,
		showAcpPicker: j,
		switchConversationId: _ ? p ?? null : null,
		destinationPath: b,
		destinationLabel: x
	};
}
//#endregion
export { d as useChatInputModelState };

//# sourceMappingURL=use-chat-input-model-state.js.map