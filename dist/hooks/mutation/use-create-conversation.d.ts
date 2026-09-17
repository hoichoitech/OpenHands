import { PluginSpec } from "#/api/conversation-service/agent-server-conversation-service.types";
import { SuggestedTask } from "#/utils/types";
import { Provider } from "#/types/settings";
import { type WorkspaceMode } from "#/api/conversation-metadata-store";
export interface CreateConversationVariables {
    query?: string;
    repository?: {
        name: string;
        gitProvider: Provider;
        branch?: string;
    };
    suggestedTask?: SuggestedTask;
    conversationInstructions?: string;
    parentConversationId?: string;
    agentType?: "default" | "plan";
    plugins?: PluginSpec[];
    workingDir?: string;
    workspaceMode?: WorkspaceMode;
    agentProfileId?: string;
    entryPoint?: string;
}
export declare const CREATE_CONVERSATION_MUTATION_KEY: string[];
interface CreateConversationResponse {
    conversation_id: string;
    session_api_key: string | null;
    url: string | null;
    task_id?: string;
}
export declare const useCreateConversation: () => import("@tanstack/react-query").UseMutationResult<CreateConversationResponse, import("axios").AxiosError<unknown, any>, CreateConversationVariables, unknown>;
export {};
