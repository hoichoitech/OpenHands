import { useOptionalConversationId as e } from "../use-conversation-id.js";
import { useQuery as t } from "../../node_modules/@tanstack/react-query/build/modern/useQuery.js";
import { useActiveBackend as n } from "../../contexts/active-backend-context.js";
import { useActiveConversation as r } from "./use-active-conversation.js";
import i from "../../api/skills-service.js";
//#region src/hooks/query/use-conversation-skills.ts
var a = () => {
	let a = n().backend.kind === "cloud", { conversationId: o } = e(), { data: s } = r(), c = s?.selected_workspace ?? void 0, l = a ? o : null;
	return t({
		queryKey: l ? [
			"conversation",
			l,
			"skills"
		] : ["skills", c ?? null],
		queryFn: () => l ? i.getConversationSkills(l) : i.getSkills(c),
		enabled: !l || s?.sandbox_status === "RUNNING",
		staleTime: 1e3 * 60 * 10,
		refetchOnWindowFocus: !1
	});
};
//#endregion
export { a as useConversationSkills };

//# sourceMappingURL=use-conversation-skills.js.map