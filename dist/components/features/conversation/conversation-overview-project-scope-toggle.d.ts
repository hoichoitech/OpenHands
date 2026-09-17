import { type ConversationOverviewProjectScope } from "#/utils/conversation-overview-project-scope";
interface ConversationOverviewProjectScopeToggleProps {
    value: ConversationOverviewProjectScope;
    onChange: (value: ConversationOverviewProjectScope) => void;
    testId: string;
}
export declare function ConversationOverviewProjectScopeToggle({ value, onChange, testId, }: ConversationOverviewProjectScopeToggleProps): import("react").JSX.Element;
export {};
