export type PickerKind = "model" | "llm-profile";
export interface ConversationStartState {
    isLoadingHistory: boolean;
    hasUserEvents: boolean;
    hasPendingUserMessages: boolean;
    hasSubstantiveAgentActions: boolean;
    hasModelEntries: boolean;
}
export declare function hasConversationStarted({ isLoadingHistory, hasUserEvents, hasPendingUserMessages, hasSubstantiveAgentActions, hasModelEntries, }: ConversationStartState): boolean;
export interface ResolvePickerKindInput {
    /** The current context runs an ACP agent (active conversation or active ACP profile). */
    isAcp: boolean;
}
export declare function resolvePickerKind({ isAcp, }: ResolvePickerKindInput): PickerKind;
