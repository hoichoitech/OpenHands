import { Query } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
type RefetchInterval = (query: Query<AppConversation | null, AxiosError<unknown, any>, AppConversation | null, (string | null)[]>) => number;
export declare const useUserConversation: (cid: string | null, refetchInterval?: RefetchInterval) => import("@tanstack/react-query").UseQueryResult<NoInfer<AppConversation | null>, AxiosError<unknown, any>>;
export {};
