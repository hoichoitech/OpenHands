import React from "react";
interface EmptyStateProps {
    inputValue: string;
    searchMessage?: string;
    emptyMessage?: string;
    testId?: string;
}
export declare function EmptyState({ inputValue, searchMessage, emptyMessage, testId, }: EmptyStateProps): React.JSX.Element;
export {};
