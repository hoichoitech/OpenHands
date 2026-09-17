export declare const CONVERSATION_OVERVIEW_DRAWER_SECTION: {
    readonly automations: "automations";
    readonly skills: "skills";
    readonly mcp: "mcp";
    readonly secrets: "secrets";
    readonly pull_requests: "pull_requests";
    readonly issues: "issues";
};
export type ConversationOverviewDrawerSection = (typeof CONVERSATION_OVERVIEW_DRAWER_SECTION)[keyof typeof CONVERSATION_OVERVIEW_DRAWER_SECTION];
export interface ConversationOverviewDrawerOpenOptions {
    openAdd?: boolean;
}
