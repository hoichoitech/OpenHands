import { Provider } from "#/types/settings";
import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
interface UpdateRepositoryVariables {
    conversationId: string;
    repository: string | null;
    branch?: string | null;
    gitProvider?: Provider | null;
}
export declare const useUpdateConversationRepository: () => import("@tanstack/react-query").UseMutationResult<AppConversation, import("axios").AxiosError<unknown, any>, UpdateRepositoryVariables, {
    previousEntries: [readonly unknown[], AppConversation | null | undefined][];
}>;
export {};
