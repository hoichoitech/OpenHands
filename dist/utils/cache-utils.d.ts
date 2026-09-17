import { QueryClient } from "@tanstack/react-query";
import type { ActionEvent } from "#/types/agent-server/core/events/action-event";
/**
 * Cache invalidation utilities for TanStack Query
 */
/**
 * Handle cache invalidation for ActionEvent
 * Invalidates relevant query caches based on the action type
 *
 * @param event - The ActionEvent to process
 * @param conversationId - The conversation ID for cache keys
 * @param queryClient - The TanStack Query client instance
 */
export declare const handleActionEventCacheInvalidation: (event: ActionEvent, conversationId: string, queryClient: QueryClient) => void;
