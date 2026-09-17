import { useNavigation as e } from "../context/navigation-context.js";
import { useIsMutating as t } from "../node_modules/@tanstack/react-query/build/modern/useMutationState.js";
import { getStoredConversationMetadata as n } from "../api/conversation-metadata-store.js";
import { useActiveConversation as r } from "./query/use-active-conversation.js";
import { useAgentProfiles as i } from "./query/use-agent-profiles.js";
import { CREATE_CONVERSATION_MUTATION_KEY as a, useCreateConversation as o } from "./mutation/use-create-conversation.js";
import { ACTIVATE_AGENT_PROFILE_MUTATION_KEY as s, useActivateAgentProfile as c } from "./mutation/use-activate-agent-profile.js";
import { useCallback as l } from "react";
//#region src/hooks/use-chat-input-profile-state.ts
function u() {
	let { conversationId: u, navigate: d } = e(), { data: f, isLoading: p } = r(), { data: m, isLoading: h } = i(), g = o(), _ = c(), v = t({ mutationKey: s }), y = t({ mutationKey: a }), b = u?.startsWith("task-") ?? !1, x = b || v > 0 || y > 0, S = m?.profiles ?? [], C = !!u, w = C ? f?.launched_agent_profile?.agent_profile_id ?? m?.active_agent_profile_id ?? null : m?.active_agent_profile_id ?? null, T = S.find((e) => e.id != null && e.id === w)?.name ?? null, E = l((e) => {
		if (b || !e.id || e.id === w) return;
		if (!C) {
			_.mutate(e.id);
			return;
		}
		let t = u ? n(u) : null, r = {
			agentProfileId: e.id,
			entryPoint: "blank_conversation_profile_picker"
		};
		f?.selected_repository && (r.repository = {
			name: f.selected_repository,
			gitProvider: f.git_provider ?? "github",
			branch: f.selected_branch ?? void 0
		}), f?.selected_workspace && (r.workingDir = f.selected_workspace, r.workspaceMode = t?.workspace_mode ?? "local_repo"), t?.plugins?.length && (r.plugins = t.plugins), g.mutateAsync(r).then((e) => d(`/conversations/${e.conversation_id}`)).catch(() => {});
	}, [
		_,
		f,
		u,
		g,
		w,
		C,
		b,
		d
	]);
	return {
		profiles: S,
		currentProfileId: w,
		currentProfileName: T,
		isInConversation: C,
		isLoading: h || b || C && p,
		isSwitching: x,
		selectProfile: E
	};
}
//#endregion
export { u as useChatInputProfileState };

//# sourceMappingURL=use-chat-input-profile-state.js.map