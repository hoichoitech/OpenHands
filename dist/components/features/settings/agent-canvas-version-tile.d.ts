import React from "react";
interface AgentCanvasVersionTileProps {
    className?: string;
    /** When true, the tile is omitted unless an update is available. */
    hideWhenUpToDate?: boolean;
}
/**
 * Main-sidebar tile that opens the update-specific version modal.
 * Hidden when the install is already up to date; settings uses
 * AgentCanvasUpdateCard instead.
 */
export declare function AgentCanvasVersionTile({ className, hideWhenUpToDate, }: AgentCanvasVersionTileProps): React.JSX.Element | null;
export {};
