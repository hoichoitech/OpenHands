import { useOptionalConversationId as e } from "./use-conversation-id.js";
import { useIsMutating as t } from "../node_modules/@tanstack/react-query/build/modern/useMutationState.js";
import { useModelStore as n } from "../stores/model-store.js";
import { useActiveConversation as r } from "./query/use-active-conversation.js";
import { useLlmProfiles as i } from "./query/use-llm-profiles.js";
import { useCanManageOrgProfiles as a } from "./use-can-manage-org-profiles.js";
import { SWITCH_LLM_PROFILE_MUTATION_KEY as o } from "./mutation/use-switch-llm-profile.js";
import { useSwitchLlmProfileAndLog as s } from "./mutation/use-switch-llm-profile-and-log.js";
import { useCallback as c } from "react";
//#region src/hooks/use-chat-input-llm-profile-state.ts
function l() {
	let { conversationId: l } = e(), { data: u } = r(), { data: d, isLoading: f } = i(), p = a(), { switchAndLog: m } = s(), h = t({ mutationKey: o }) > 0, g = n((e) => l ? e.activeProfileByConversation[l] : void 0), _ = d?.profiles ?? [], v = u?.llm_model ?? null, y = u?.active_profile ?? null, b = y && _.some((e) => e.name === y) ? y : null, x = g ?? b ?? (v ? _.find((e) => e.model === v)?.name ?? null : d?.active_profile ?? null), S = _.find((e) => e.name === x)?.model ?? v ?? null, C = !(l?.startsWith("task-") ?? !1) && (!!l || p);
	return {
		profiles: _,
		currentProfileName: x,
		currentProfileModel: S,
		isLoading: f,
		isSwitching: h,
		canSwitchProfile: C,
		selectProfile: c((e) => {
			!C || e === x || m(l, e);
		}, [
			C,
			l,
			x,
			m
		])
	};
}
//#endregion
export { l as useChatInputLlmProfileState };

//# sourceMappingURL=use-chat-input-llm-profile-state.js.map