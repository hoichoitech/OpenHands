import React from "react";
interface BackendSelectorProps {
    /** Render the menu above the trigger (e.g. when pinned to bottom of sidebar). */
    openUpward?: boolean;
    /** Hide the selector input trigger and only render the dropdown menu. */
    hideTrigger?: boolean;
    /** Whether the dropdown menu should start open on mount. */
    defaultOpen?: boolean;
    /** Callback fired after selecting a backend/org option. */
    onSelectOption?: () => void;
    /**
     * Override the internal Add Backend modal handling. When provided,
     * clicking "Add Backend" calls this instead of opening BackendSelector's
     * own modal. Useful when the selector is mounted inside an ephemeral
     * container (e.g. the collapsed-sidebar popover) and the modal must
     * survive the parent unmounting.
     */
    onOpenAddBackend?: () => void;
    /** Same as onOpenAddBackend but for the Manage Backends modal. */
    onOpenManageBackends?: () => void;
    /**
     * Whether the surrounding sidebar rail is in its collapsed variant. Passed
     * down from `SidebarRailBody` so the mobile drawer (which always renders
     * the expanded rail) can override the persisted desktop value.
     */
    sidebarCollapsed?: boolean;
}
export declare function BackendSelector({ openUpward, hideTrigger, defaultOpen, onSelectOption, onOpenAddBackend, onOpenManageBackends, sidebarCollapsed, }?: BackendSelectorProps): React.JSX.Element;
export {};
