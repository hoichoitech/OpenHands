export declare const CONVERSATION_OVERVIEW_AUTOMATIONS_PATH = "/automations";
export declare const CONVERSATION_OVERVIEW_SKILLS_PATH = "/skills";
export declare const CONVERSATION_OVERVIEW_MCP_PATH = "/mcp";
export declare const CONVERSATION_OVERVIEW_PANEL_WIDTH_PX = 240;
export declare const CONVERSATION_OVERVIEW_COLUMN_MIN_GAP_PX = 8;
/** Horizontal padding on the overview column (`pl-3` + `pr-4`). */
export declare const CONVERSATION_OVERVIEW_COLUMN_LEFT_PADDING_PX = 12;
export declare const CONVERSATION_OVERVIEW_COLUMN_RIGHT_PADDING_PX = 16;
export declare const CONVERSATION_OVERVIEW_COLUMN_HORIZONTAL_PADDING_PX: number;
/** Minimum chat-thread width before the overview panel is hidden entirely. */
export declare const CONVERSATION_OVERVIEW_MIN_THREAD_WIDTH_PX = 320;
export declare const CONVERSATION_OVERVIEW_PANEL_TRANSITION: {
    duration: number;
    ease: "easeInOut";
};
export declare const CONVERSATION_OVERVIEW_COLUMN_WIDTH_PX: number;
export declare function hasEnoughOverviewLayoutSpace(containerWidth: number): boolean;
export declare const CONVERSATION_OVERVIEW_ADD_QUERY_PARAM = "add";
export declare const CONVERSATION_OVERVIEW_ADD_QUERY_VALUE = "1";
export declare const CONVERSATION_OVERVIEW_AUTOMATIONS_ADD_PATH = "/automations/dashboard?add=1";
export declare const CONVERSATION_OVERVIEW_SKILLS_ADD_PATH = "/skills?add=1";
export declare const CONVERSATION_OVERVIEW_MCP_ADD_PATH = "/mcp?add=1";
export declare function buildConversationOverviewAddPath(path: string): string;
export declare function hasConversationOverviewAddIntent(search: string): boolean;
