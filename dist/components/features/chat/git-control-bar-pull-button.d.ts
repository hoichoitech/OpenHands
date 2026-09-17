interface GitControlBarPullButtonProps {
    onSuggestionsClick: (value: string) => void;
    hasRepository: boolean;
    providerTokensReady: boolean;
    isConversationReady?: boolean;
}
export declare function GitControlBarPullButton({ onSuggestionsClick, hasRepository, providerTokensReady, isConversationReady, }: GitControlBarPullButtonProps): import("react").JSX.Element;
export {};
