import { Provider } from "#/types/settings";
interface GitControlBarBranchButtonProps {
    selectedBranch: string | null | undefined;
    selectedRepository: string | null | undefined;
    gitProvider: Provider | null | undefined;
}
export declare function GitControlBarBranchButton({ selectedBranch, selectedRepository, gitProvider, }: GitControlBarBranchButtonProps): import("react").JSX.Element;
export {};
