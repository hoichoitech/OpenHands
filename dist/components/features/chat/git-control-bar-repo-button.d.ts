import { Provider } from "#/types/settings";
interface GitControlBarRepoButtonProps {
    selectedRepository: string | null | undefined;
    gitProvider: Provider | null | undefined;
    workspaceName?: string | null;
    emptyStateLabel?: string;
    onClick?: () => void;
    disabled?: boolean;
}
export declare function GitControlBarRepoButton({ selectedRepository, gitProvider, workspaceName, emptyStateLabel: _emptyStateLabel, onClick, disabled, }: GitControlBarRepoButtonProps): import("react").JSX.Element;
export {};
