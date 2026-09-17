import React from "react";
import { MCPServerConfig } from "#/types/mcp-server";
interface InstalledServerCardProps {
    server: MCPServerConfig;
    onEdit: () => void;
    onToggleEnabled: (enabled: boolean) => void;
}
export declare function InstalledServerCard({ server, onEdit, onToggleEnabled, }: InstalledServerCardProps): React.JSX.Element;
export {};
