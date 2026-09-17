import { type ChildConversationIsolation, type ChildConversationTarget } from "#/constants/child-conversation";
import type { LaunchChildConversationAction } from "#/types/agent-server/core";
interface LaunchSuccess {
    status: "launched";
    target: ChildConversationTarget;
    conversation_id: string | null;
    url: string | null;
    initial_status: string;
    title: string | null;
    /** Local only: the directory the child inherited from this conversation. */
    workspace?: string;
    /** Local only: which isolation mode was actually applied. */
    isolation?: ChildConversationIsolation;
    /**
     * Present when the applied isolation is not the one that was asked for,
     * explaining why and what it means for the child.
     */
    isolation_note?: string;
    /** Cloud only: poll this if `conversation_id` is still null. */
    start_task_id?: string;
    /** Cloud only: which connected Cloud backend the child was launched on. */
    backend?: string;
    /** Whether the parent/child link was persisted server-side. */
    parent_link: boolean;
    /** Present when `parent_link` is false, explaining why. */
    parent_link_note?: string;
}
interface LaunchFailure {
    status: "error";
    error: string;
    guidance: string;
}
export type LaunchChildConversationResult = LaunchSuccess | LaunchFailure;
/**
 * Execute a `launch_child_conversation` tool call.
 *
 * Never rejects: every failure is turned into corrective guidance for the
 * agent, because the agent-server has already told it the call succeeded.
 */
export declare function handleLaunchChildConversationAction(action: LaunchChildConversationAction, parentConversationId: string, toolCallId: string): Promise<void>;
export {};
