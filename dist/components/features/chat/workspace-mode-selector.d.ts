import type { BackendKind } from "#/api/backend-registry/types";
import type { WorkspaceMode } from "#/api/conversation-metadata-store";
interface WorkspaceModeSelectorProps {
    value: WorkspaceMode;
    backendKind: BackendKind;
    onChange: (value: WorkspaceMode) => void;
    disabled?: boolean;
    testId?: string;
}
export declare function WorkspaceModeSelector({ value, backendKind, onChange, disabled, testId, }: WorkspaceModeSelectorProps): import("react").JSX.Element;
export {};
