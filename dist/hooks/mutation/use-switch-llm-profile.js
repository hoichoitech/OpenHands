import { useTranslation as e } from "../../node_modules/react-i18next/dist/es/useTranslation.js";
import { I18nKey as t } from "../../i18n/declaration.js";
import { LLM_PROFILES_QUERY_KEYS as n, SETTINGS_QUERY_KEYS as r } from "../query/query-keys.js";
import { useQueryClient as i } from "../../node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js";
import { useMutation as a } from "../../node_modules/@tanstack/react-query/build/modern/useMutation.js";
import { retrieveAxiosErrorMessage as o } from "../../utils/retrieve-axios-error-message.js";
import { displayErrorToast as s } from "../../utils/custom-toast-handlers.js";
import c from "../../api/settings-service/settings-service.api.js";
import l from "../../api/conversation-service/agent-server-conversation-service.api.js";
import { getLastRenderableEventId as u } from "../chat/model-command-event-anchor.js";
import { recordModelSwitchMessage as d, stampActiveLlmProfile as f } from "../chat/record-model-switch-message.js";
import { invalidateConversationQueries as p } from "./conversation-mutation-utils.js";
//#region src/hooks/mutation/use-switch-llm-profile.ts
var m = ["switch-llm-profile"], h = () => {
	let h = i(), { t: g } = e();
	return a({
		mutationKey: m,
		mutationFn: ({ conversationId: e, profileName: t }) => l.switchProfile(e, t),
		meta: { disableToast: !0 },
		onMutate: ({ conversationId: e }) => ({ anchorEventId: e ? u() : null }),
		onError: (e, { profileName: n }) => {
			let r = g(t.MODEL$SWITCH_FAILED, { name: n });
			s(o(e) || r);
		},
		onSuccess: (e, { conversationId: t, profileName: i }, a) => {
			h.invalidateQueries({ queryKey: n.all }), t ? (p(h, t), d(t, i, a?.anchorEventId ?? null), f(t, i)) : (c.invalidateCache(), h.invalidateQueries({ queryKey: r.personal() }));
		}
	});
};
//#endregion
export { m as SWITCH_LLM_PROFILE_MUTATION_KEY, h as useSwitchLlmProfile };

//# sourceMappingURL=use-switch-llm-profile.js.map