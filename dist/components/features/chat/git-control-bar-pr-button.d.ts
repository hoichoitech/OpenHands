import { Provider } from "#/types/settings";
interface GitControlBarPrButtonProps {
    onSuggestionsClick: (value: string) => void;
    hasRepository: boolean;
    providerTokensReady: boolean;
    currentGitProvider: Provider;
    isConversationReady?: boolean;
}
export declare function GitControlBarPrButton({ onSuggestionsClick, hasRepository, providerTokensReady, currentGitProvider, isConversationReady, }: GitControlBarPrButtonProps): import("react").JSX.Element;
export {};
