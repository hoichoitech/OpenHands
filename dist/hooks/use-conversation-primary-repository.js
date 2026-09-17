import { useActiveConversation as e } from "./query/use-active-conversation.js";
import { useTaskPolling as t } from "./query/use-task-polling.js";
import { useLocalGitInfo as n } from "./query/use-local-git-info.js";
//#region src/hooks/use-conversation-primary-repository.ts
function r() {
	let { data: r } = e(), { repositoryInfo: i } = t(), { data: a } = n(), o = r?.selected_repository || i?.selectedRepository, s = r?.git_provider || i?.gitProvider, c = r?.selected_branch || i?.selectedBranch, l = o || a?.repository || null, u = s || a?.provider || null;
	return {
		repository: l,
		provider: u,
		branch: c || a?.branch || null,
		isConnected: !!(l && u)
	};
}
//#endregion
export { r as useConversationPrimaryRepository };

//# sourceMappingURL=use-conversation-primary-repository.js.map