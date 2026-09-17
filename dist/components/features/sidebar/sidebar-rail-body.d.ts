import React from "react";
import type { Backend } from "#/api/backend-registry/types";
export interface SidebarRailBodyProps {
    collapsed: boolean;
    showCollapseToggle: boolean;
    showMobileCloseButton?: boolean;
    onCloseMobile?: () => void;
    collapseToggleLabel: string;
    onCollapse: () => void;
    onExpand: () => void;
    showCollapsedExpandButton: boolean;
    isExtensionsActive: boolean;
    currentPath: string;
    activeBackend: Backend;
    activeOrgId: string | null;
    activeBackendHealth: {
        isConnected: boolean | null;
    } | undefined;
    collapsedBackendPopoverOpen: boolean;
    setCollapsedBackendPopoverOpen: (open: boolean) => void;
    collapsedBackendPopoverRef: React.RefObject<HTMLDivElement | null>;
    collapsedBackendCloseTimer: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
    onOpenAddBackend: () => void;
    onOpenManageBackends: () => void;
}
export declare function SidebarRailBody({ collapsed, showCollapseToggle, showMobileCloseButton, onCloseMobile, collapseToggleLabel, onCollapse, onExpand, showCollapsedExpandButton, isExtensionsActive, currentPath, activeBackend, activeOrgId, activeBackendHealth, collapsedBackendPopoverOpen, setCollapsedBackendPopoverOpen, collapsedBackendPopoverRef, collapsedBackendCloseTimer, onOpenAddBackend, onOpenManageBackends, }: SidebarRailBodyProps): React.JSX.Element;
