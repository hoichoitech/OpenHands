import type { AppConversation } from "#/api/conversation-service/agent-server-conversation-service.types";
export declare const PLAN_RELATIVE_PATH = ".agents_tmp/PLAN.md";
export declare const PLANNING_SYSTEM_PROMPT_FILENAME = "system_prompt_planning.j2";
export declare const PLANNING_FILE_EDITOR_TOOL_NAME = "planning_file_editor";
export declare const LOCAL_PLANNER_PARENT_TAG_KEY = "plannerparent";
export declare const PLAN_STRUCTURE_TEXT: string;
export declare const PLANNING_AGENT_INSTRUCTION: string;
export declare function buildPlanPath(workingDir: string): string;
export declare function isPlanFilePath(path: string | null | undefined): boolean;
/**
 * Whether `conversation` is the local planner helper for `parentConversationId`
 * — identity comes from the `plannerparent` tag `createLocalPlanningConversation`
 * stamps on creation, never from list position (`sub_conversation_ids` is the
 * generic, untyped child list).
 */
export declare function isPlannerConversationOf(conversation: Pick<AppConversation, "tags"> | null | undefined, parentConversationId: string): boolean;
/** Finds the planner helper among a conversation's fetched sub-conversations. */
export declare function findPlannerConversationId(subConversations: (AppConversation | null)[] | null | undefined, parentConversationId: string | null | undefined): string | null;
