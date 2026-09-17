import React from "react";
interface ConversationOverviewGitItemsPanelProps {
    kind: "pull_requests" | "issues";
}
export declare function ConversationOverviewGitItemsHeaderLink({ kind, }: ConversationOverviewGitItemsPanelProps): React.JSX.Element | null;
export declare function ConversationOverviewGitItemsPanel({ kind, }: ConversationOverviewGitItemsPanelProps): React.JSX.Element;
export {};
