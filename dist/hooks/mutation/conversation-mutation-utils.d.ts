import { QueryClient } from "@tanstack/react-query";
import type { StartGoalRequest } from "@openhands/typescript-client";
import { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
type ExecutionStatusValue = AppConversation["execution_status"];
/**
 * Stop a running conversation.
 * - Cloud mode: Pauses the sandbox (waits for current LLM call to finish).
 * - Local mode: Interrupts immediately (cancels in-flight requests).
 */
export declare const pauseConversation: (conversationId: string) => Promise<import("@openhands/typescript-client").Success>;
/**
 * Ask the agent a side question on a V1 conversation
 */
export declare const askAgent: (conversationId: string, question: string) => Promise<{
    response: string;
}>;
/**
 * Start a `/goal` loop on a V1 conversation. The agent server drives the agent
 * toward the objective, judging completion after each run until it is done or
 * `max_iterations` is reached, streaming progress as goal
 * ConversationStateUpdateEvents over the conversation's event stream.
 */
export declare const startGoal: (conversationId: string, request: StartGoalRequest) => Promise<void>;
/**
 * Stop the active `/goal` loop. The backend only cancels the background loop
 * (recording an `interrupted` status so {@link resumeGoal} can continue it) and
 * deliberately leaves the in-flight agent turn running, so callers should also
 * interrupt the conversation (e.g. `pauseConversation`) to actually halt it.
 */
export declare const stopGoal: (conversationId: string) => Promise<void>;
/** Resume the last interrupted `/goal` loop in this conversation. */
export declare const resumeGoal: (conversationId: string) => Promise<void>;
export declare const resumeConversation: (conversationId: string) => Promise<import("@openhands/typescript-client").Success>;
/**
 * Patch arbitrary fields on a cached AppConversation in both the single-item
 * and paginated list query caches.  Prefer this over the narrower
 * `updateConversationExecutionStatusInCache` when you need to update more than
 * one field atomically (e.g. `execution_status` + `sandbox_status` together).
 */
export declare const patchConversationInCache: (queryClient: QueryClient, conversationId: string, patch: Partial<AppConversation>) => void;
export declare const updateConversationExecutionStatusInCache: (queryClient: QueryClient, conversationId: string, execution_status: ExecutionStatusValue) => void;
export declare const updateConversationLlmModelInCache: (queryClient: QueryClient, conversationId: string, llm_model: string) => void;
export declare const invalidateConversationQueries: (queryClient: QueryClient, conversationId: string) => void;
export {};
