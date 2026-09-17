import React from "react";
import type { LocalWorkspace, LocalWorkspaceParent } from "#/types/workspace";
export interface WorkspaceDropdownProps {
    workspaces: LocalWorkspace[];
    /**
     * The workspace parents that produced the dynamic children in `workspaces`
     * (from `useResolvedWorkspaces`, including the implicit `/projects`). Used to
     * label each folder's group by its parent's `name`. When two or more distinct
     * groups are present the list renders grouped under headers; with one group
     * (or omitted) it stays flat. A child whose `parentPath` has no matching
     * parent here falls back to the path basename.
     */
    parents?: LocalWorkspaceParent[];
    value: LocalWorkspace | null;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    disabledTooltip?: string | null;
    /**
     * Whether to surface the "Manage Workspaces" entry in the sticky footer.
     * Defaults to `workspaces.length > 0` when omitted; pass an explicit value
     * if there are workspace parents (whose children may not have loaded yet)
     * that should also count as "manageable".
     */
    showManage?: boolean;
    onChange: (workspace: LocalWorkspace | null) => void;
    onAddClick: () => void;
    onManageClick: () => void;
}
export declare function WorkspaceDropdown({ workspaces, parents, value, placeholder, className, disabled, disabledTooltip, showManage, onChange, onAddClick, onManageClick, }: WorkspaceDropdownProps): React.JSX.Element;
