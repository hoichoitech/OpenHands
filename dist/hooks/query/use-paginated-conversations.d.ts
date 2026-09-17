import { AppConversationPage } from "#/api/conversation-service/agent-server-conversation-service.types";
export declare const usePaginatedConversations: (limit?: number) => import("@tanstack/react-query").UseInfiniteQueryResult<import("@tanstack/query-core").InfiniteData<AppConversationPage, unknown>, import("axios").AxiosError<unknown, any>>;
