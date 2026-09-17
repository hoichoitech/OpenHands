import React from "react";
import { LocalWorkspace } from "#/types/workspace";
interface WorkspaceSelectionFormProps {
    isLoadingSettings?: boolean;
    /**
     * When provided, the form skips its own conversation creation + navigation
     * and just calls back with the selected workspace. Callers (e.g. the home
     * launcher dialog) use this to capture the selection and create the
     * conversation themselves once the user submits a message. The button label
     * also flips from "Launch" to "Confirm" so the action matches the new flow.
     */
    onConfirm?: (workspace: LocalWorkspace) => void;
}
export declare const HOME_SELECTED_WORKSPACE_PATH_KEY = "oh:home-selected-workspace-path";
export declare function WorkspaceSelectionForm({ isLoadingSettings, onConfirm, }: WorkspaceSelectionFormProps): React.JSX.Element;
export {};
