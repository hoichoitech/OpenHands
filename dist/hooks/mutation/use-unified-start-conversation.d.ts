import { Provider } from "#/types/settings";
export declare const useUnifiedResumeConversation: () => import("@tanstack/react-query").UseMutationResult<import("@openhands/typescript-client").Success, import("axios").AxiosError<unknown, any>, {
    conversationId: string;
    providers?: Provider[];
}, {
    previousConversations: unknown;
}>;
