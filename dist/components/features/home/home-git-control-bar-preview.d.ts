import type { BackendKind } from "#/api/backend-registry/types";
import type { WorkspaceMode } from "#/api/conversation-metadata-store";
import { Branch, GitRepository } from "#/types/git";
import { Provider } from "#/types/settings";
import { LocalWorkspace } from "#/types/workspace";
interface HomeGitControlBarPreviewProps {
    workspace?: LocalWorkspace | null;
    repository?: GitRepository | null;
    branch?: Branch | null;
    provider?: Provider | null;
    workspaceMode: WorkspaceMode;
    backendKind: BackendKind;
    onRepoClick: () => void;
    onWorkspaceModeChange: (mode: WorkspaceMode) => void;
}
export declare function HomeGitControlBarPreview({ workspace, repository, branch, provider, workspaceMode, backendKind, onRepoClick, onWorkspaceModeChange, }: HomeGitControlBarPreviewProps): import("react").JSX.Element;
export {};
