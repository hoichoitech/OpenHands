import { Provider } from "#/types/settings";
interface GitControlBarPushButtonProps {
    onSuggestionsClick: (value: string) => void;
    hasRepository: boolean;
    providerTokensReady: boolean;
    currentGitProvider: Provider;
    isConversationReady?: boolean;
}
export declare function GitControlBarPushButton({ onSuggestionsClick, hasRepository, providerTokensReady, currentGitProvider, isConversationReady, }: GitControlBarPushButtonProps): import("react").JSX.Element;
export {};
